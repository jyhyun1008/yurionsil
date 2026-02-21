import { visit } from 'unist-util-visit'

export default function remarkCustomEmoji() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      // :emoji_code: 패턴 찾기
      const regex = /:([a-zA-Z0-9_-]+):/g
      
      // 매칭되는 게 없으면 빠르게 패스
      if (!node.value.match(regex)) return

      const children = []
      let lastIndex = 0
      let match

      while ((match = regex.exec(node.value)) !== null) {
        // 1. 이모지 앞의 일반 텍스트 추가
        if (match.index > lastIndex) {
          children.push({
            type: 'text',
            value: node.value.slice(lastIndex, match.index)
          })
        }

        // 2. 이모지 컴포넌트 노드 생성 (핵심 수정 부분)
        // 'textComponent' 대신 일반 노드에 'hName' 데이터를 심어서 보냅니다.
        children.push({
          type: 'text', // 임의의 타입 (보통 text나 paragraph 사용)
          value: '',    // 내용은 비워둠 (컴포넌트로 대체될 거니까)
          data: {
            hName: 'E',           // "이 노드를 <E> 컴포넌트로 렌더링해라"
            hProperties: {        // "props는 이렇게 넣어라"
              code: match[1]
            }
          }
        })

        lastIndex = regex.lastIndex
      }

      // 3. 남은 뒷부분 텍스트 추가
      if (lastIndex < node.value.length) {
        children.push({
          type: 'text',
          value: node.value.slice(lastIndex)
        })
      }

      // 기존 노드를 우리가 만든 노드들로 교체
      parent.children.splice(index, 1, ...children)
    })
  }
}
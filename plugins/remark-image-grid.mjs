export default function remarkImageGrid() {
  return function (tree) {
    walk(tree)
  }
}

function walk(node) {
  if (!node.children) return
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i]
    if (child.type === 'paragraph') {
      const text = child.children.map(c => c.value ?? '').join('').trim()
      const match = text.match(/^!grid\[(.+)\]$/)
      if (match) {
        const urls = match[1].split(',').map(u => u.trim()).filter(Boolean)
        const imgs = urls.map(url => `<img src="${url}" alt="" loading="lazy" />`).join('\n  ')
        node.children[i] = {
          type: 'html',
          value: `<div class="image-grid">\n  ${imgs}\n</div>`
        }
        continue
      }
    }
    walk(child)
  }
}

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<style>

@import url("https://fonts.googleapis.com/css2?family=Hina+Mincho&family=La+Belle+Aurore&display=swap");

@font-face {
    font-family: 'MapoGeumbitnaru';
    src: url('https://gcore.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoGoldenPierA.woff') format('woff');
    font-weight: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Tangba';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-display: swap;
}

@font-face {
    font-family: 'DosStory';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSIyagiMedium.woff2') format('woff2');
    font-weight: normal;
    font-display: swap;
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

全ページ共通

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

*:not(.globalnav__item a) {
    font-family: 'Tangba';
}

body {
  font-size: 20px;
  color: #333;
  line-height: 1.8;
  overflow-x: hidden;
}

/* 枠線設定 */
body::after {
  position: fixed;
  top: 0;
  left: 0;
  content: "";
  display: block;
  width: calc(100% - 40px);
  height: calc(100dvh - 40px);
  margin: 20px;
  border: 1px solid #fff;
  z-index: -1;
  /* スマホ */
}
@media screen and (max-width: 520px) {
  body::after {
    width: calc(100% - 20px);
    height: calc(100dvh - 20px);
    margin: 10px;
  }
}

*:hover,
*::before,
*::after {
  transition: 0.2s;
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

文字

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
p {
  margin: 20px 0;
  text-align: justify;
}

a {
  color: inherit;
  text-decoration-color: #657764;
  -moz-text-decoration-color: #657764;
}

/*－－－－－－－－－－ リンクホバー時の設定 －－－－－－－－－－*/
a {
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
}
@media (hover: hover) {
  a:hover {
    background-color: rgba(244, 211, 149, 0.4);
  }
}

/* ホバー装飾の無効化 */
/*fuwaimgでの無効化 */
/*－－－－－－－－－－ 見出し －－－－－－－－－－*/
h1,
h2,
h3,
h4,
h5 {
  font-weight: normal;
  line-height: 1.8;
  overflow-wrap: break-word;
}
h1 .ja,
h2 .ja,
h3 .ja,
h4 .ja,
h5 .ja {
  font-size: 0.8em;
}

h1 { 
    font-family: 'MapoGeumbitnaru' !important;
}

/*－－－－－－－－－－ 大見出し －－－－－－－－－－*/
.headingL {
  font-size: clamp(3rem, 2rem + 5vw, 8rem);
  margin: 1em 10px;
  color: #fff;
  letter-spacing: 8px;
  text-shadow: 0px 0px 6px #f4d395;
  max-width: calc(100% - 40px);
}

/*－－－－－－－－－－ 中見出し －－－－－－－－－－*/
.headingM {
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(10%, 1fr);
  align-items: center;
  gap: 10px;
  color: #657764;
  font-size: clamp(3rem, 2.8rem + 1vw, 4rem);
  margin: clamp(2.4rem, 2.28rem + 0.6vw, 3rem) 0;
}
.headingM::after {
  content: "";
  display: block;
  height: 1px;
  background-color: #f4d395;
  width: 100%;
}

/*－－－－－－－－－－ 小見出し －－－－－－－－－－*/
.headingS {
  position: relative;
  font-size: clamp(2.4rem, 2.28rem + 0.6vw, 3rem);
  margin: 20px 0;
  color: #657764;
  padding-left: 10px;
}
.headingS::before {
  position: absolute;
  top: 0px;
  left: 0px;
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  border-top: 1px solid #d02e3e;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform-origin: left top;
}

/*－－－－－－－－－－ 最小見出し －－－－－－－－－－*/
.headingSS {
  font-size: clamp(1.8rem, 1.76rem + 0.2vw, 2rem);
  margin: 20px 0;
}

/*－－－－－－－－－－ 文字装飾 －－－－－－－－－－*/
.right {
  text-align: right;
}

.center {
  text-align: center;
}

.marker {
  background: linear-gradient(transparent 60%, rgba(244, 211, 149, 0.4) 60%);
}

.label {
  display: block;
  margin: 20px 0;
  padding: 2px 10px;
  background-color: rgba(244, 211, 149, 0.4);
  width: -moz-fit-content;
  width: fit-content;
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

アイコン等

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.la,
.las {
  font-size: 1.2em;
  color: #657764;
  position: relative;
  top: 2px;
}

/* 矢印 */
.arrow {
  width: 20px;
  height: 20px;
  border: 2px solid #657764;
  border-bottom: 0;
  border-left: 0;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

入力フォーム、ボタン

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
/* 入力フォーム */
input,
textarea {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 10px 20px 8px 20px;
  border: 1px solid #657764;
  margin: 10px 0;
}

/* ボタン */
.btn {
  display: block;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #f4d395;
  text-align: center;
  color: #333;
  text-decoration: none;
  padding: 3px 10px;
  border: 1px solid #f4d395;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
}
.btn:hover {
  cursor: pointer;
  color: #fff;
  background-color: #657764;
  border: 1px solid #657764;
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

リスト

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.list,
.list-number {
  margin: 20px 0;
}

.list li {
  position: relative;
  margin-left: 16px;
}
.list li::before {
  position: absolute;
  top: calc(50% - 4px);
  left: -16px;
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: #d02e3e;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}

/*－－－－－－－－－－ 数字付きリスト －－－－－－－－－－*/
.list-number {
  list-style-type: decimal-leading-zero;
  list-style-position: inside;
}
.list-number li {
  text-indent: -3.4rem;
  padding-left: 3.6rem;
}
.list-number li > :not(:first-child) {
  text-indent: 0;
}

/*－－－－－－－－－－ 表リスト －－－－－－－－－－*/
.gridlist {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1px 0px;
}
.gridlist .gridlist__label,
.gridlist .gridlist__text {
  padding: 6px 20px;
  background-color: rgba(244, 211, 149, 0.4);
}
.gridlist .gridlist__label {
  display: flex;
  align-items: center;
}

/* スマホ */
@media screen and (max-width: 520px) {
  .gridlist {
    grid-template-columns: 1fr;
  }
  .gridlist .gridlist__text {
    margin-bottom: 10px;
  }
}
/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

枠組み

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.box {
  padding: 40px;
  background-color: rgba(244, 211, 149, 0.4);
}
.box > :first-child {
  margin-top: 0;
}
.box > :last-child {
  margin-bottom: 0;
}

.box__title {
  border-bottom: 1px solid #fff;
  padding-left: 0;
}
.box__title::before {
  display: none;
}

/* スマホ */
@media screen and (max-width: 520px) {
  .box {
    padding: 30px;
  }
}
/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

SNSアイコンリスト

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.snslist .snslist__item a {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: #657764;
  color: #fff;
  border-radius: 50%;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
}
.snslist .snslist__item a:hover {
  color: #fff;
  transition: none;
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
}
.snslist .snslist__item.twitter:hover a {
  background-color: #1DA1F2;
}
.snslist .snslist__item.instagram:hover a {
  background-color: #CF2E92;
}
.snslist .snslist__item.facebook:hover a {
  background-color: #4267b2;
}
.snslist .snslist__item.youtube:hover a {
  background-color: #DA1725;
}
.snslist .snslist__item .lab {
  margin: 6px 1px 3px 3px;
  font-size: 2rem;
}
@media screen and (max-width: 520px) {
  .snslist {
    justify-content: center;
  }
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

レイアウト

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
/*－－－－－－－－－－ 横並び －－－－－－－－－－*/
.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* 表示サイズを変えたい場合は200pxの部分を変更 */
  gap: 20px;
  justify-content: center;
  align-items: center;
}

/*－－－－－－－－－－ 2カラム表示 －－－－－－－－－－*/
.--2column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 60px;
}

/* タブレット、スマホでは１カラム */
@media screen and (max-width: 768px) {
  .--2column {
    grid-template-columns: 1fr;
  }
}
/*－－－－－－－－－－ 左右反対 －－－－－－－－－－*/
.reverse {
  flex-direction: row-reverse;
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

全体のレイアウト

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
/*－－－－－－－－－－ ヘッダー －－－－－－－－－－*/
/*－－－－－－－－－－ コンテンツ全体の横幅、余白 －－－－－－－－－－*/
.mainwrapper {
  overflow-x: hidden;
}

/* タブレット */
@media screen and (min-width: 521px) and (max-width: 1180px) {
  .mainwrapper {
    padding: 20px;
  }
}
/* PC */
@media screen and (min-width: 1181px), print {
  .mainwrapper {
    max-width: 1160px;
    margin-left: auto;
    padding: 20px;
  }
}
/*－－－－－－－－－－ セクション －－－－－－－－－－*/
section {
  padding: 30px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  backdrop-filter: blur(5px);
}
section > :first-child {
  margin-top: 0;
}
section > :last-child {
  margin-bottom: 0;
}
section section {
  background: none;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;
}
section section:first-of-type {
  padding-top: 0;
}
section section:last-of-type {
  padding-bottom: 0;
}

/* sectionの飾り */
section {
  position: relative;
}
section::before, section::after {
  position: absolute;
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  border-top: 1px solid #4f8d63;
}
section::before {
  top: 0px;
  left: 0px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
}
section::after {
  bottom: 0px;
  right: 0;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  -o-transform: rotate(135deg);
}
section section::before, section section::after {
  display: none;
}

/* PC */
@media screen and (min-width: 1181px), print {
  section {
    padding: 60px;
    margin-bottom: 60px;
  }
}
/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

メニューボタン

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.hamburger {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  z-index: 999;
}
.hamburger .hamburger__line {
  position: absolute;
  width: 25px;
  height: 2px;
  background-color: #d02e3e;
}
.hamburger .hamburger__line::before, .hamburger .hamburger__line::after {
  position: absolute;
  content: "";
  display: block;
  width: 25px;
  height: 2px;
  background-color: #d02e3e;
}
.hamburger .hamburger__line::before {
  top: -8px;
}
.hamburger .hamburger__line::after {
  bottom: -8px;
}

/*閉じる*/
.hamburger._active .hamburger__line {
  background: transparent;
}
.hamburger._active .hamburger__line::before {
  top: 0;
  transform: rotate(45deg);
}
.hamburger._active .hamburger__line::after {
  bottom: 0;
  transform: rotate(-45deg);
}

/* PCで非表示 */
@media screen and (min-width: 1181px), print {
  .hamburger {
    display: none;
  }
}
/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

メニュー

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.globalnav {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: rgba(101, 119, 100, 0.4);
  box-shadow: 0px 0px 20px 16px rgba(101, 119, 100, 0.4);
  z-index: 998;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
}

/* PC */
@media screen and (min-width: 1181px), print {
  /* .globalnav {
    opacity: 0;
    visibility: hidden;
  } */
  .globalnav.scroll-on {
    opacity: 1;
    visibility: visible;
    transition: 0.4s;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -ms-transition: 0.4s;
  }
}
.globalnav__main .globalnav__item {
  position: relative;
    font-family: 'MapoGeumbitnaru' !important;
}
.globalnav__main .globalnav__item a {
  display: block;
  color: #fff;
  font-size: 2rem;
  letter-spacing: 4px;
  text-decoration: none;
  padding: 10px 20px 4px;
  overflow-wrap: break-word;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
}
.globalnav__main .globalnav__item a:hover, .globalnav__main .globalnav__item a:has(+ .globalnav__child:hover) {
  color: #fff;
  background-color: rgba(101, 119, 100, 0.8);
}
.globalnav__main .globalnav__item._has-child:hover .globalnav__child {
  visibility: visible;
  opacity: 1;
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
  -moz-transition: 0.2s;
  -o-transition: 0.4s;
}
.globalnav__main .globalnav__child {
  position: absolute;
  top: 0;
  left: 100%;
  background-color: rgba(101, 119, 100, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
}

/*  タブレット、スマホでの表示 */
@media screen and (max-width: 1180px) {
  .globalnav {
    position: fixed;
    top: 0;
    right: 0;
    left: auto;
    bottom: auto;
    width: min(100vw, 520px);
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(208, 46, 62, 0.8);
    opacity: 0;
    visibility: hidden;
    box-shadow: none;
  }
  .globalnav._active {
    opacity: 1;
    visibility: visible;
  }
  .globalnav__main {
    flex-direction: column;
    gap: 20px;
    margin: 0;
  }
  .globalnav__main .globalnav__item a {
    display: block;
    background: none;
    color: #fff;
  }
  .globalnav__main .globalnav__child {
    position: fixed;
    top: auto;
    left: auto;
    right: 0px;
    width: min(100vw - 40px, 480px);
    margin: 10px 20px;
    background-color: #d02e3e;
    z-index: 99;
    visibility: visible; /*JSで制御するため一旦表示*/
    opacity: 1; /*JSで制御するため一旦表示*/
    display: none; /*JSのtoggleで表示させるため非表示に*/
  }
  .globalnav__main .globalnav__child.active {
    display: block;
  }
  .globalnav__main .globalnav__child li {
    margin: 0 20px;
  }
}
/* タブレット,スマホでメニューを開いた時に白くする */
@media screen and (max-width: 1180px) {
  .mainwrapper::after {
    position: fixed;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100vw;
    height: 100dvh;
    background-color: #fff;
    visibility: hidden;
    opacity: 0;
  }
  .mainwrapper._darker::after {
    visibility: visible;
    opacity: 0.8;
    z-index: 1;
  }
}
/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

サブメニュー

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.submenu {
  margin-bottom: 40px;
  container-type: inline-size;
}

.submenu__main {
  -moz-column-count: 2;
       column-count: 2;
}

/* 親メニューのスタイル */
.submenu__item {
  position: relative;
  padding: 10px;
  -moz-column-break-inside: avoid;
       break-inside: avoid;
}
.submenu__item a {
  display: inline-block;
  padding: 8px 10px 8px;
  text-decoration: none;
  word-break: break-word;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
}
.submenu__item > a {
  background-color: rgba(101, 119, 100, 0.8);
  color: #fff;
  width: 100%;
}

/* 子、孫メニューのスタイル */
.submenu__child > li > a {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 20px;
}
.submenu__child > li > a::after {
  content: "";
  display: block;
  height: 1px;
  background: #d02e3e;
}

.submenu__grandchild li {
  font-size: 1.4rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 10px;
}
.submenu__grandchild li::before {
  content: "";
  display: block;
  height: 10px;
  background-color: transparent;
  background-image: radial-gradient(#f4d395 20%, transparent 22%);
  background-size: 10px 10px;
  background-position: 0 0;
}
@container (max-width:600px) {
  .submenu__main {
    -moz-column-count: 1;
         column-count: 1;
  }
}
/* リンク無効aタグのホバー時のスタイルを削除 */
.submenu ._has-child > a {
  cursor: auto;
}

.submenu__child ._has-child > a:hover {
  background: none;
}

/* スマホ */
@media screen and (max-width: 520px) {
  /* クリックで表示 */
  .submenu__item._has-child .submenu__child,
  .submenu__item._has-child .submenu__child li._has-child .submenu__grandchild {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: 0.4s;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -ms-transition: 0.4s;
  }
  .submenu__item._has-child .submenu__child.active,
  .submenu__item._has-child .submenu__child li._has-child .submenu__grandchild.active {
    height: auto;
    overflow: auto;
    opacity: 1;
  }
}
/* 親メニューのみの場合の設定 */
.submenu__main:not(:has(.submenu__child)) .submenu__item {
  padding: 0;
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

ページUP

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.pageup {
  position: fixed;
  right: 2vw;
  bottom: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #f4d395;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  opacity: 0;
  visibility: hidden;
}
.pageup .arrow {
  border-color: #fff;
  margin-top: 10px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
}
.pageup._active {
  opacity: 1;
  visibility: visible;
}

@media (hover: hover) {
  .pageup:hover {
    background-color: #657764;
  }
}
/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

フッター

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
footer {
  padding: 4px;
  color: #fff;
  font-size: 1.2rem;
  text-align: right;
}

/* スマホ */
@media screen and (max-width: 520px) {
  footer {
    padding: 14px;
  }
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

メインビジュアル

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.mainvisual {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainvisual h1 {
  margin: 9rem 0 5rem 0;
}

.mainvisual .mainvisual__img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -2;
}
.mainvisual .mainvisual__img img {
  width: 100%;
  height: 100dvh;
  -o-object-fit: cover;
     object-fit: cover;
  filter: sepia(0.4);
  -webkit-filter: sepia(0.4);
}
.mainvisual .mainvisual__img.scroll-on {
  filter: blur(4px);
  -webkit-filter: blur(4px);
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -ms-transition: 0.4s;
}
.mainvisual .sitename {
    font-family: 'MapoGeumbitnaru' !important;
  font-size: clamp(3rem, 2rem + 5vw, 8rem);
  color: #fff;
  letter-spacing: 8px;
  text-shadow: 0px 0px 6px #586e63;
  max-width: calc(100% - 40px);
}

.sitename a {
  color: inherit;
}

.index .mainvisual {
  height: 100dvh;
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

更新履歴

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.update {
  height: 140px;
  overflow-y: auto;
  padding: 20px 40px;
  background-color: rgba(244, 211, 149, 0.4);
}

.update__item {
  display: flex;
  gap: 20px;
  padding: 8px 0;
}
.update__item:not(:last-child) {
  border-bottom: 1px solid #fff;
}

/* スマホ */
@media screen and (max-width: 520px) {
  .update {
    padding: 10px 20px;
  }
  .update__item {
    flex-direction: column;
    gap: 4px;
  }
}
/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

トピック一覧

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.topiclist__item {
  container-type: inline-size;
  margin-bottom: 40px;
}
.topiclist__item a {
  padding: 20px;
}
.topiclist__item:last-child {
  margin: 0;
}
.topiclist__item .grid {
  gap: 20px;
  text-decoration: none;
  align-items: flex-start;
}
.topiclist__item .grid img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.topiclist__item .grid p {
  margin: 0;
}

/* タブレット */
@media screen and (max-width: 1180px) {
  .topiclist__item a {
    padding: 0;
  }
}
@container (max-width: 600px) {
  .grid {
    gap: 10px;
    grid-template-columns: 1fr;
  }
}
/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

 ABOUT

 －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
/*－－－－－－－－－－ Profile －－－－－－－－－－*/
.profile__img {
  padding: 0 40px;
}
.profile__img img {
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  margin: auto;
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

LINK

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.linklist__item a {
  text-decoration: none;
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

 CONTACT

 －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.mailform input {
  width: max(50%, 400px);
}
.mailform textarea {
  width: 100%;
}

/* タブレット、スマホ */
@media screen and (max-width: 768px) {
  .mailform input,
  .mailform textarea {
    max-width: 100%;
  }
}
/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

 NOVEL

 －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
/*－－－－－－－－－－  小説一覧ページ －－－－－－－－－－*/
.novellist {
  margin-top: 20px;
}
.novellist.--2column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  /* スマホ */
}
.novellist.--2column .novellist__item {
  margin: 0;
}
.novellist.--2column > :last-child {
  margin-bottom: 0;
}
.novellist.--2column .novellist__text {
  margin-left: 0px;
}
@media screen and (max-width: 520px) {
  .novellist.--2column {
    grid-template-columns: 1fr;
  }
}

.novellist__item {
  margin-bottom: 40px;
}
.novellist__item .grid {
  grid-template-columns: repeat(auto-fill, minmax(20px, 1fr));
  gap: 20px;
}

/* 小説のタイトル */
.novellist__title {
  font-size: clamp(1.6rem, 1.56rem + 0.2vw, 1.8rem);
}

.short .novellist__title {
  font-size: clamp(1.4rem, 1.36rem + 0.2vw, 1.6rem);
}

.novellist__title + * {
  margin-left: 20px;
}

/* 数字プラス小タイトルの数字の色 */
.novellist__number {
  color: #657764;
  margin-right: 10px;
}

/* 短編小説の説明文 */
.novellist__text {
  display: block;
  font-size: 0.8em;
  margin: 10px;
  margin-left: 20px;
}

/*－－－－－－－－－－ 長編小説ページ －－－－－－－－－－*/
.longnovel .longnovel__title {
  font-weight: normal;
  margin: 40px 10px;
}
.longnovel .novellist .novellist__item {
  margin-bottom: 30px;
}
.longnovel .novellist > :last-child {
  margin-bottom: 0;
}
.longnovel .novellist.--2column .novellist__item {
  margin: 0;
}

/*－－－－－－－－－－ 小説のページ －－－－－－－－－－*/
.novelpage__inner {
  margin: auto;
  padding: 80px;
}

.novelpage__main {
  padding: 80px;
}

.novelpage__title {
  margin-bottom: 80px;
}

/* タブレット */
@media screen and (max-width: 1180px) {
  .novelpage__inner {
    padding: 0;
  }
  .novelpage__main {
    padding: 80px 20px;
  }
}
/* 前後ページへのナビ */
.pagenav {
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 80px 0;
}

.pagenav__item a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.pagenav__item a i {
  opacity: 0;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
}
.pagenav__item a:hover i {
  opacity: 1;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
}
.pagenav__item.--prev a i {
  margin-right: 10px;
}
.pagenav__item.--prev a:hover i {
  transform: translateX(-6px);
  -webkit-transform: translateX(-6px);
  -moz-transform: translateX(-6px);
  -ms-transform: translateX(-6px);
  -o-transform: translateX(-6px);
}
.pagenav__item.--next a i {
  margin-left: 10px;
}
.pagenav__item.--next a:hover i {
  transform: translateX(6px);
  -webkit-transform: translateX(6px);
  -moz-transform: translateX(6px);
  -ms-transform: translateX(6px);
  -o-transform: translateX(6px);
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

GALLERY

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.gallerylist {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 40px 0;
}

.gallerylist__item {
  width: calc((100% - 80px) / 5);
  height: auto;
}
@media screen and (max-width: 1180px) {
  .gallerylist__item {
    width: calc((100% - 60px) / 4);
  }
}
@media screen and (max-width: 767px) {
  .gallerylist__item {
    width: calc((100% - 40px) / 3);
  }
}
@media screen and (max-width: 520px) {
  .gallerylist__item {
    width: calc((100% - 20px) / 2);
  }
}
.gallerylist__item a {
  position: relative;
  width: 100%;
  display: block;
}
.gallerylist__item a::before {
  content: "";
  display: block;
  padding-top: 100%;
  /*100%=親要素の横幅*/
}
.gallerylist__item a img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

COMIC

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
/*－－－－－－－－－－ 漫画タイトル一覧ページ －－－－－－－－－－*/
.comiclist__item {
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}
.comiclist__item .comiclist__img {
  position: relative;
  width: 100%;
  height: 100%;
}
.comiclist__item .comiclist__img img {
  position: absolute;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
/* スマホ */
@media screen and (max-width: 520px) {
  .comiclist__item {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .comiclist__item .comiclist__img img {
    position: relative;
    max-height: 40vh;
  }
  .comiclist__item .comiclist__body {
    padding-top: 0;
  }
  .comiclist__item .comiclist__body .comiclist__title {
    position: static;
    width: 100%;
    margin: 20px 0;
  }
}
/*－－－－－－－－－－ 漫画表紙ページ －－－－－－－－－－*/
/* メイン画像 */
.comic__mainvisual {
  position: relative;
  margin-bottom: 40px;
}

/* タイトル */
.comic__title {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 1em 0;
  font-size: clamp(2rem, 1.2rem + 4vw, 6rem);
  color: #fff;
  text-shadow: 0px 0px 6px #657764;
  background-color: rgba(101, 119, 100, 0.2);
  word-break: keep-all;
}

/*－－－－－－－－－－ キャラクター紹介 －－－－－－－－－－*/
/* キャラクター名一覧 */
.charanamelist {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
}
.charanamelist .charanamelist__item {
  cursor: pointer;
}

/* キャラクタープロフィール部分 */
.charalist--3 {
  margin-bottom: 40px;
}
.charalist--3 .charalist__item {
  position: relative;
  height: 100%;
  display: none;
}
.charalist--3 .charalist__item .charalist__img {
  width: 40%;
  height: 100%;
  max-height: 60vh;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center top;
  object-position: center top;
}
.charalist--3 .charalist__item .charalist__body {
  width: calc(60% - 20px);
}
.charalist--3 .charalist__item .charalist__body > :first-child {
  margin-top: 0;
}
.charalist--3 .charalist__item .charalist__body .charalist__name {
  font-size: clamp(2rem, 1.422rem + 2.37vw, 3.2rem);
}
.charalist--3 .charalist__item.show {
  display: flex;
}

/* スマホ */
@media screen and (max-width: 768px) {
  .charalist--3 .charalist__item {
    display: none;
  }
  .charalist--3 .charalist__item.flex .charalist__img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    -o-object-fit: contain;
    object-fit: contain;
  }
  .charalist--3 .charalist__item.flex .charalist__img img {
    width: 100%;
    height: auto;
  }
  .charalist--3 .charalist__item.flex .charalist__body {
    width: 100%;
  }
}
/*－－－－－－－－－－ 漫画一覧 －－－－－－－－－－*/
.cardlist {
  container-type: inline-size;
}
.cardlist a {
  text-decoration: none;
}
.cardlist .cardlist__item {
  width: calc((100% - 60px) / 4);
}
.cardlist .cardlist__item a .cardlist__img {
  height: 200px;
  -o-object-fit: cover;
     object-fit: cover;
}

@container (max-width: 800px) {
  .cardlist .cardlist__item {
    width: calc((100% - 40px) / 3);
  }
}
@container (max-width: 600px) {
  .cardlist {
    gap: 10px;
  }
  .cardlist .cardlist__item {
    width: calc((100% - 20px) / 2);
  }
  .cardlist .cardlist__item a .cardlist__img {
    width: 100%;
    height: 140px;
  }
}
/*－－－－－－－－－－ 漫画のページ －－－－－－－－－－*/
.comicpage__main {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 60px;
  margin-bottom: 60px;
}
.comicpage__main img {
  margin: auto;
  margin-bottom: 20px;
}

/* スマホ */
@media screen and (max-width: 520px) {
  .comicpage__main {
    padding: 10px;
  }
}
.episodelist {
  margin: 40px 0;
  padding: 20px 40px;
}

/*－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

OFFLINE

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－*/
.off-list {
  gap: 60px;
  margin-bottom: 80px;
}

.storelist {
  gap: 10px;
  margin: 20px 0;
}

/* タブレット */
@media screen and (min-width: 769px) and (max-width: 1180px) {
  .off-list {
    gap: 20px;
  }
}

/* Box sizing rules */
/* Box sizingの定義 */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Set core body defaults */
/* bodyのデフォルトを定義 */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
/* ul、ol要素のリストスタイルを削除 */

/* A elements that don't have a class get default styles */
/* classを持たない要素はデフォルトのスタイルを取得 */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
/* img要素の扱いを簡単にする */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
/* article要素内の要素に自然な流れとリズムを定義 */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
/* inputやbuttonなどのフォントは継承を定義 */
input,
button,
textarea,
select {
  font: inherit;
}

li {
  margin: 0.5rem;
}

section img {
  border-radius: 15px;
  box-shadow: 5px 10px 10px #33333322;
  /* Initial state: full grayscale, normal brightness */
  opacity: 1;
  transition: opacity 0.3s ease-in-out; 
}

section img:hover {
  opacity: 0.7;
}

table {
  width: 100%;
  border-spacing: 0;
  border: 1px solid white;
}

thead {
  background-color: #ffffff99;
}

tbody td {
  background-color: #ffffff44;
  border-top: 2px solid white;
  text-align: center;
}

td {
  padding: 0.5rem;
}

.logo {
  margin-left:40px;
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
}

/* Remove all animations and transitions for people that prefer not to see them */
/* 見たくない人用に、すべてのアニメーションとトランジションを削除 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

</style>
<template>

  <header class="header">
  <!-- ハンバーガーメニュー -->
  <button id="js-hamburger" class="hamburger"><span class="hamburger__line"></span></button>
  <!-- メニュー -->
  <nav id="js-globalnav" class="globalnav">
    <div class="logo">
        <a href="/"><img src="/images/logo.jpeg" /></a>
    </div>
   <ul class="globalnav__main">
    <li class="globalnav__item"><a href="/">Top</a></li>
    <li class="globalnav__item"><a href="/member">Member</a>
    </li>
    <li class="globalnav__item"><a href="/feeds">Feed</a></li>
    <li class="globalnav__item _has-child"><a href="/song">Song</a>
     <ul class="globalnav__child">
      <li><a href="/original">Original</a></li>
      <li><a href="/cover">Cover</a></li>
     </ul>
    </li>
    <li class="globalnav__item"><a href="/posts">Post</a></li>
    <li class="globalnav__item"><a href="/link">Link</a></li>
   </ul>
  </nav><!-- メニューここまで -->
 </header>
 </template>
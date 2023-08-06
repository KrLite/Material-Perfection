---
hide:
  - navigation
  - toc
---

<style>
  .md-tabs {
	background-color: transparent;
	background: linear-gradient(rgba(0, 0, 0, .3), 30%, transparent);
  }

  .overlay {
    top: 0;
	bottom: 0;
    left: 0;
	right: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }

  .translucent {
    opacity: .5;
  }

  .sink {
    transform: translateY(-1.5em);
  }

  .smooth {
    transition: transform 0.1s ease;
  }

  .ghost {
	pointer-events: none;
  }

  .divider {
    height: 3em;
    width: 100%;
    background: linear-gradient(to right, transparent, 25%, var(--md-primary-fg-color--auto) 50%, 75%, transparent);
    background-size: 100% 0.1em;
    background-position: center;
    background-repeat: no-repeat;
    opacity: .1;
  }

  h1, h2, h3, h4, h5, h6 {
	font-family: "Ogg";
  }

  .title {
    width: 100%;
	height: 120vh;
  }

  .title-span {
	top: 0;
	left: 0;
	right: 0;
    width: 100%;
	height: 120vh;
	position: absolute;
  }

  .container {
    top: 55vh;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
	position: relative;
  }

  .combined {
    height: auto;
    width: 5.7em;
    max-height: 100%;
    max-width: calc(30% - 3em);
    margin-left: 1.1em;
    margin-right: 1.9em;
    object-fit: contain;
  }

  .content-flex {
    flex: 1;
  }

  .mdx-switch button {
    cursor: pointer;
    transition: opacity 0.25s;
  }

  .mdx-switch button:focus,
  .mdx-switch button:hover {
    opacity: .75;
  }

  .mdx-switch button > code {
    background-color: var(--md-primary-fg-color);
    color: var(--md-primary-bg-color);
    display: block;
  }

  .colored-text {
    color: var(--md-primary-fg-color--auto);
  }

  .md-typeset details.palette, .admonition.palette {
    font-size: .9em;
  }

  .mdx-parallax-blur {
    filter: blur(calc(max(0, var(--mdx-parallax)) * 4px));
	will-change: transform;
  }

  .mdx-parallax-shift {
    transform: translateY(calc(max(0, min(1, var(--mdx-parallax))) * -3vh));
  }

  .mdx-parallax-fade {
    opacity: calc(1 - var(--mdx-parallax));
  }

  *{
    box-sizing: border-box;
  }

  .parallax {
    perspective: 100px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
	right: 0;
    margin-left: -750px;
	margin-right: -750px;
  }

  .parallax__layer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .parallax__layer img {
    display: block;
    position: absolute;
    bottom: 0;
  }

  .parallax__cover {
    background: #2D112B;
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 2000px;
    z-index: 2;
  }

  .parallax__layer__0 {
    transform: translateZ(-300px) scale(4);
  }

  .parallax__layer__1 {
    transform: translateZ(-250px) scale(3.5);
  }

  .parallax__layer__2 {
    transform: translateZ(-200px) scale(3);
  }

  .parallax__layer__3 {
    transform: translateZ(-150px) scale(2.5);
  }

  .parallax__layer__4 {
    transform: translateZ(-100px) scale(2);
  }

  .parallax__layer__5 {
    transform: translateZ(-50px) scale(1.5);
  }

  .parallax__layer__6 {
    transform: translateZ(0px) scale(1);
  }
</style>

<section class="title">
  <div class="container parallax parallax-blur parallax-fade" data-mdx-parallax-start="55%" data-mdx-parallax-end="10%">
    <span class="colored combined" style="-webkit-mask-image: url('assets/images/logo.png');">
      <img
        src="assets/images/logo.png"
        alt="Material Perfection"
       />
    </span>
    <div class="content-flex">
      <h1>Material Perfection</h1>
      <blockquote class="translucent sink">
        An Out-of-the-Box Repository that Toggles <a href="https://github.com/squidfunk/mkdocs-material">mkdocs-material</a> to the Perfection.
      </blockquote>
    </div>
  </div>
</section>

<section class="parallax">
  <div class="parallax__layer parallax__layer__0">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true" />
  </div>
  <div class="parallax__layer parallax__layer__1">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true" />
  </div>
  <div class="parallax__layer parallax__layer__2">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true" />
  </div>
  <div class="parallax__layer parallax__layer__3">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true" />
  </div>
  <div class="parallax__layer parallax__layer__4">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true" />
  </div>
  <div class="parallax__layer parallax__layer__5">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true" />
  </div>
  <div class="parallax__layer parallax__layer__6">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true" />
  </div>
  <div class="parallax__cover"></div>
</section>

<!--
<section class="overlay ghost">
  <div class="rellax smooth bg-logo-1" data-rellax-speed="-1">
    <span class="colored" style="-webkit-mask-image: url('assets/images/logo.png');">
      <img src="assets/images/logo.png" />
    </span>
  </div>
  <div class="rellax smooth bg-logo-2" data-rellax-speed="-3">
    <span class="colored" style="-webkit-mask-image: url('assets/images/logo.png');">
      <img src="assets/images/logo.png" />
    </span>
  </div>
  <div class="rellax smooth bg-logo-3" data-rellax-speed="-2">
    <span class="colored" style="-webkit-mask-image: url('assets/images/logo.png');">
      <img src="assets/images/logo.png" />
    </span>
  </div>
</section>
-->

<h1 class="smooth mdx-parallax mdx-parallax-shift mdx-parallax-blur mdx-parallax-fade" data-mdx-parallax-start="23%" data-mdx-parallax-end="5%" data-mdx-parallax-bezier="cubic-bezier(.17, .84, .44, 1)" id="title">Mark It Down</h1>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

<div class="divider"></div>
<div class="para-space"></div>

<h1 class="smooth mdx-parallax mdx-parallax-shift mdx-parallax-blur mdx-parallax-fade" data-mdx-parallax-start="23%" data-mdx-parallax-end="5%" data-mdx-parallax-bezier="cubic-bezier(.17, .84, .44, 1)">Deep Customization</h1>

???+ palette inline end "<span class="mdx-switch"><span class="colored-text">Paint It Pretty</span>&emsp;<button data-md-color-primary="--md-primary-fg-color--auto"><code>clear</code></button></span>"

    <div class="mdx-switch">
        <button data-md-color-primary="red"><code>red</code></button>
        <button data-md-color-primary="pink"><code>pink</code></button>
        <button data-md-color-primary="purple"><code>purple</code></button>
        <button data-md-color-primary="deep-purple"><code>deep purple</code></button>
        <button data-md-color-primary="indigo"><code>indigo</code></button>
        <button data-md-color-primary="blue"><code>blue</code></button>
        <button data-md-color-primary="light-blue"><code>light blue</code></button>
        <button data-md-color-primary="cyan"><code>cyan</code></button>
        <button data-md-color-primary="teal"><code>teal</code></button>
        <button data-md-color-primary="green"><code>green</code></button>
        <button data-md-color-primary="light-green"><code>light green</code></button>
        <button data-md-color-primary="lime"><code>lime</code></button>
        <button data-md-color-primary="yellow"><code>yellow</code></button>
        <button data-md-color-primary="amber"><code>amber</code></button>
        <button data-md-color-primary="orange"><code>orange</code></button>
        <button data-md-color-primary="deep-orange"><code>deep orange</code></button>
        <button data-md-color-primary="brown"><code>brown</code></button>
        <button data-md-color-primary="grey"><code>grey</code></button>
        <button data-md-color-primary="blue-grey"><code>blue grey</code></button>
        <button data-md-color-primary="black"><code>black</code></button>
        <button data-md-color-primary="white"><code>white</code></button>
        <code>and more...</code>
    </div>

<script>
	var buttons = document.querySelectorAll("button[data-md-color-primary]");
	buttons.forEach(function(button) {
		button.addEventListener("click", function() {
			var attr = this.getAttribute("data-md-color-primary");
			document.body.setAttribute("data-md-color-primary", attr);
		});
	});
</script>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

<div class="divider"></div>
<div class="para-space"></div>

<h1 class="smooth mdx-parallax mdx-parallax-shift mdx-parallax-blur mdx-parallax-fade" data-mdx-parallax-start="23%" data-mdx-parallax-end="5%" data-mdx-parallax-bezier="cubic-bezier(.17, .84, .44, 1)">Out-of-the-Box</h1>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

<div class="ending-space"></div>

<script src="javascripts/rellax.min.js"></script>
<script>
	var rellax = new Rellax(".rellax");
</script>

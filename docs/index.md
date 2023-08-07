---
hide:
  - navigation
  - toc
title: "Material Perfection"
---

<style>
  h1, h2, h3, h4, h5, h6 {
    font-family: "Ogg";
    letter-spacing: .11rem !important;
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

  .ghost--escape {
    pointer-events: auto;
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

  .title {
    width: 100%;
    height: 225vh;
  }

  .title--container {
    top: 61vh;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }

  .title--content {
    flex: 1;
  }

  .title-combined {
    height: auto;
    width: 5.7em;
    max-height: 100%;
    max-width: calc(30% - 3em);
    margin-left: 1.1em;
    margin-right: 1.9em;
    object-fit: contain;
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

  .text-colored {
    color: var(--md-primary-fg-color--auto);
  }

  .button-use--container {
    top: 64px;
    left: 0;
    right: 0;
    width: 100%;
    height: calc(100% - 64px - 200vh);
    position: absolute;
    z-index: 2;
    overflow: hidden;
  }

  .button-use--text-container {
    position: absolute;
    padding-right: 1.5em;
    padding-left: 1.5em;
    float: left;
    min-width: 50%;
  }

  .button-use {
    top: -420px;
    margin-top: 45vh;
    position: sticky;
    display: flex;
    justify-content: flex-end;
    white-space: nowrap;
  }

  .button-use a {
    color: var(--md-default-bg-color);
    background: var(--md-primary-fg-color--auto);
    box-shadow: 0 0 2em var(--md-default-bg-color);
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: .6em;
    margin-right: .6em;
    padding: 1.2em 4.4em;
    border-radius: 1.2em;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 0.12em;
    transition: all .3s cubic-bezier(0.68, -0.1, 0.265, 1.55);
  }

  .button-use a:hover {
    color: var(--md-default-bg-color);
    margin-top: .3em;
    margin-bottom: .3em;
    margin-left: 0;
    margin-right: 0;
    padding: .9em 5em;
    text-decoration: underline;
  }

  .text-center {
    text-align: center;
  }

  .md-typeset details.colored-amt, .admonition.colored-amt {
    font-size: .9em;
  }

  .para-space {
    height: 25vh;
  }

  .trailing-space {
    height: 120vh;
  }

  .bg-logo--container {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    hright: 100;
    position: absolute;
    ovetflow: hidden;
  }

  .bg-logo--0 {
    left: 46vw;
    top: 55vh;
    position: absolute;
    opacity: .08;
    filter: blur(22px);
    will-change: transform;
  b transform: scale(1.7);
  }

  .bg-logo--1 {
    left: -6vw;
    top: 248vh;
    position: absolute;
    opacity: .1;
    filter: blur(27px);
    will-change: transform;
    transform: scale(1.2);
  }

  .bg-logo--2 {
    left: 43vw;
    top: 285vh;
    position: absolute;
    opacity: .2;
    filter: blur(10.5px);
    will-change: transform;
    transform: scale(0.65);
  }

  .bg-logo--3 {
    left: 21vw;
    top: 288vh;
    position: absolute;
    opacity: .069;
    filter: blur(32px);
    will-change: transform;
    transform: scale(1.8);
  }

  .parallax--blur {
    filter: blur(calc(max(0, var(--parallax)) * var(--radius)));
    will-change: transform; /* Fix rendering issues on Safari  */
  }

  .parallax--shift {
    transform: translateY(calc(max(0, min(1, var(--parallax))) * var(--shift)));
  }

  .parallax--fade {
    opacity: calc(1 - var(--parallax));
  }
</style>

<section class="title">
  <div class="title--container parallax smooth parallax--shift parallax--blur parallax--fade" data-parallax-start="55%" data-parallax-end="10%" style="--radius: 12px;--shift: 80vh;">
    <span class="title-combined colored" style="-webkit-mask-image: url('assets/images/logo.png');">
      <img
        src="assets/images/logo.png"
        alt="Material Perfection"
       />
    </span>
    <div class="title--content">
      <h1>Material Perfection</h1>
      <blockquote class="translucent sink">
        An Out-of-the-Box Repository that Toggles <a href="https://github.com/squidfunk/mkdocs-material">mkdocs-material</a> to the Perfection.
      </blockquote>
    </div>
  </div>
</section>

<!--
<section class="button-use--container ghost">
  <div class="button-use">
    <div class="button-use--text-container text-center parallax smooth parallax--shift" data-parallax-start="35%" data-parallax-end="0%" style="--shift: 80vh;">
      <a href="https://github.com/new?template_name=Material-Perfection" class="ghost--escape">USE THIS TEMPLATE →</a>
    </div>
  </div>
</section>
-->

<!--
<section class="bg-logo--container ghost">
  <div class="rellax smooth bg-logo--0" data-rellax-speed="1.3">
    <span class="colored" style="-webkit-mask-image: url('assets/images/logo.png');">
      <img src="assets/images/logo.png" />
    </span>
  </div>
  <div class="smooth bg-logo--1">
    <span class="rellax colored" data-rellax-speed="-1" style="-webkit-mask-image: url('assets/images/logo.png');">
      <img src="assets/images/logo.png" />
    </span>
  </div>
  <div class="smooth bg-logo--2">
    <span class="rellax colored" data-rellax-speed="-3" style="-webkit-mask-image: url('assets/images/logo.png');">
      <img src="assets/images/logo.png" />
    </span>
  </div>
  <div class="smooth bg-logo--3">
    <span class="rellax colored" data-rellax-speed="-2" style="-webkit-mask-image: url('assets/images/logo.png');">
      <img src="assets/images/logo.png" />
    </span>
  </div>
</section>
-->

<h1 class="smooth parallax parallax--shift parallax--blur parallax--fade" data-parallax-start="30%" data-parallax-end="5%" data-parallax-bezier="cubic-bezier(.17, .84, .44, 1)" style="--radius: 4px;--shift: -3vh;">Mark It Down</h1>

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

<h1 class="smooth parallax parallax--shift parallax--blur parallax--fade" data-parallax-start="30%" data-parallax-end="5%" data-parallax-bezier="cubic-bezier(.17, .84, .44, 1)" style="--radius: 4px;--shift: -3vh;">Fine Tuned</h1>

???+ palette inline end "<span class="mdx-switch"><span class="text-colored">Paint It Pretty</span>&emsp;<button data-md-color-primary="--md-primary-fg-color--auto"><code>clear</code></button></span>"

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

<h1 class="smooth parallax parallax--shift parallax--blur parallax--fade" data-parallax-start="30%" data-parallax-end="5%" data-parallax-bezier="cubic-bezier(.17, .84, .44, 1)" style="--radius: 4px;--shift: -3vh;">Out-of-the-Box</h1>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

<div class="trailing-space"></div>

<script src="javascripts/rellax.min.js"></script>
<script>
	var rellax = new Rellax(".rellax");
</script>

---
hide:
  - navigation
  - toc
---

<style>
  .translucent {
    opacity: .5;
  }

  .sink {
    transform: translateY(-1.5em);
  }

  .smooth {
    transition: transform 0.1s ease;
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
	  height: 200vh;
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

  .md-typeset details.colored-amt, .admonition.colored-amt {
    font-size: .9em;
  }

  .para-space {
    height: 25vh;
  }

  .huge-space {
    height: 300vh;
  }

  .parallax-blur {
    filter: blur(calc(max(0, 1 - var(--mdx-parallax)) * 12px));
  }

  .parallax-blur-s {
    filter: blur(calc(max(0, 1 - var(--mdx-parallax)) * 4px));
  }

  .parallax-shift {
    transform: translateY(calc(max(0, 1 - var(--mdx-parallax)) * 60vh));
  }

  .parallax-shift-s {
    transform: translateY(calc((1 - var(--mdx-parallax)) * -4em));
  }
</style>

<section class="title">
  <div class="container parallax smooth parallax-shift parallax-blur" parallax-start="10%" data-mdx-parallax-end="50%">
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

<h1 class="smooth parallax parallax-shift-s parallax-blur-s" data-mdx-parallax-start="10%" data-mdx-parallax-end="90%">Mark It Down</h1>

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

<h1 class="smooth parallax parallax-shift-s parallax-blur-s" data-mdx-parallax-start="10%" data-mdx-parallax-end="90%">Deep Customization</h1>

???+ colored-amt inline end "<span class="mdx-switch rellax" data-rellax-speed="5"><span class="colored-text">Paint It Pretty</span>&emsp;<button data-md-color-primary="--md-primary-fg-color--auto"><code>clear</code></button></span>"

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

<h1 class="smooth parallax parallax-shift-s parallax-blur-s" data-mdx-parallax-start="10%" data-mdx-parallax-end="90%">Out-of-the-Box</h1>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

<div class="huge-space"></div>

<script src="javascripts/rellax.min.js"></script>
<script>
	var rellax = new Rellax(".rellax");
</script>

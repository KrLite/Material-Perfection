---
hide:
  - navigation
  - toc
---

<style>
  .bg {
    height: 75vh;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin: auto;
    overflow: hidden;
  }

  .fit {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    position: absolute;
  }

  .fit img {
    width: 100%;
    height: 100;
    opacity: .1;
    z-index: -3;
  }

  .bg-gradient {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: auto;
    background: linear-gradient(7deg, var(--md-primary-fg-color--auto), 32%, transparent);
    opacity: .2;
    z-index: -1;
    mix-blend-mode: multiply;
  }

  .divider {
    height: 3em;
    width: 100%;
    background: linear-gradient(to right, transparent, var(--md-primary-fg-color--auto) 50%, transparent);
    background-size: 100% 0.05em;
    background-position: center;
    background-repeat: no-repeat;
    opacity: .25;
  }
	
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: calc(75vh - 5em);
    align-items: flex-start;
    justify-content: flex-start;
  }

  .combined span {
    height: auto;
    width: 5.7em;
    max-height: 100%;
    max-width: calc(30% - 3em);
    margin-left: 1.1em;
    margin-right: 1.9em;
    object-fit: contain;
  }

  .content {
    flex: 1;
  }

  .combined h1, blockquote {
    margin: 0;
    padding: 0;
  }

  .combined blockquote {
    opacity: 0.5;
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
</style>

<div class="bg">
  <div class="fit">
    <img class="parallax" src="assets/images/background.png" />
  </div>
  <div class="bg-gradient"></div>
</div>

<div class="container combined">
  <span class="colored" style="-webkit-mask-image: url('assets/images/logo.png');">
	<img
      src="assets/images/logo.png"
      alt="Material Perfection"
    />
   </span>
  <div class="content">
    <h1>Material Perfection</h1>
    <blockquote>
      An Out-of-the-Box Repository that Toggles <a href="https://github.com/squidfunk/mkdocs-material">mkdocs-material</a> to the Perfection.
    </blockquote>
  </div>
</div>

# Mark It Down

<div class="divider"></div>

???+ colored-amt inline end "<span class="mdx-switch"><span class="colored-text">Paint it Pretty</span>&emsp;<button data-md-color-primary="--md-primary-fg-color--auto"><code>clear</code></button></span>"

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

# Deep Customization

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
        euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
        purus auctor massa, nec semper lorem quam in massa.

<script>
  var buttons = document.querySelectorAll("button[data-md-color-primary]");
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-primary");
      document.body.setAttribute("data-md-color-primary", attr);
    });
  });
</script>

<div class="divider"></div>

# Out-of-the-Box

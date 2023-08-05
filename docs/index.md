---
hide:
  - navigation
  - toc
---

<style>
  .translucent {
    opacity: .5;
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

  .rellax-space {
	height: 25vh;
  }

  .huge-space {
	height: 300vh;
  }

  .parallax-dispatch {
	position: sticky;
	position: -webkit-sticky;
	top: 5em;
  }

  .animated {
    transition: opacity 0.3s, top 0.3s;
  }
</style>

<section class="title">
  <div class="container rellax fade blur" data-rellax-speed="-5" data-fade-offset="120" data-fade-duration-multiplier="0.45" data-blur-radius="32">
    <span class="colored combined" style="-webkit-mask-image: url('assets/images/logo.png');">
      <img
          src="assets/images/logo.png"
          alt="Material Perfection"
       />
    </span>
    <div class="content-flex">
      <h1>Material Perfection</h1>
      <blockquote class="translucent">
        An Out-of-the-Box Repository that Toggles <a href="https://github.com/squidfunk/mkdocs-material">mkdocs-material</a> to the Perfection.
      </blockquote>
    </div>
  </div>
</section>

<h1 class="animated fade blur shift" data-fade-offset="120" data-fade-duration="200" data-blur-radius="4" data-shift-duration="-32">Mark It Down</h1>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
purus auctor massa, nec semper lorem quam in massa.

Lorem ipsum.

<div class="divider"></div>
<div class="rellax-space"></div>

<h1 class="animated fade blur shift" data-fade-offset="120" data-fade-duration="200" data-blur-radius="4" data-shift-duration="-32">Deep Customization</h1>

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
<div class="rellax-space"></div>

<h1 class="animated fade blur shift" data-fade-offset="120" data-fade-duration="200" data-blur-radius="4" data-shift-duration="-32">Out-of-the-Box</h1>

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

<script>
  function getElementFadingPercentage(el) {
	offset = el.getAttribute('data-fade-offset') || 0;
	duration = el.getAttribute('data-fade-duration') || window.innerHeight;
	multiplier = el.getAttribute('data-fade-duration-multiplier') || 1;

    var rect = el.getBoundingClientRect();
	var screenCssPixelRatio = (window.outerWidth - 8) / window.innerWidth;
    return Math.min(Math.max(rect.top - offset, 0) / (duration * multiplier) * screenCssPixelRatio, 1);
  }

  function handleFade() {
    var elements = document.getElementsByClassName('fade');

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.style.opacity = getElementFadingPercentage(element);
    }
  }

  function handleBlur() {
    var elements = document.getElementsByClassName('blur');

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
	  radius = Math.pow(1 - getElementFadingPercentage(element), 2) * (element.getAttribute('data-blur-radius') || 16);

      element.style.filter = `blur(${radius}px)`;
      element.style.webkitFilter = `blur(${radius}px)`;
    }
  }

  function handleShift() {
    var elements = document.getElementsByClassName('shift');

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
	  duration = (1 - getElementFadingPercentage(element)) * (element.getAttribute('data-shift-duration') || window.innerHeight);
	  multiplier = element.getAttribute('data-shift-duration-multiplier') || 1;

      element.style.transform = `translateY(${duration * multiplier}px)`;
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
	handleFade();
	handleBlur();
	handleShift();
  });
  window.addEventListener('scroll', function() {
	handleFade();
	handleBlur();
	handleShift();
  });
</script>

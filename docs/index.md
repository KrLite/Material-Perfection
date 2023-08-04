<style>
 .container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;     
  height: auto;
  align-items: flex-start;
  justify-content: flex-start;
 }

 .combined img {
  height: auto;
  width: 5.5em;
  max-height: 100%;
  max-width: calc(30% - 3em);    
  margin-right: 3em;
  object-fit: contain;
 }

 .content {
  flex: 1;
 }

 @media screen and (min-width: 800px) {
  .combined img {
   max-width: none;
  }
 }

 .combined h1, blockquote {
  margin: 0;
  padding: 0;
 }
</style>

<div class="container combined">
  <img
    class="filtered"
    src="logo.png"
    alt="Material Perfection"
   />
  <div class="content">
    <h1>Material Perfection</h1>
    <blockquote>
    An Out-of-the-box Repository that Toggles <a href="https://github.com/squidfunk/mkdocs-material">mkdocs-material</a> to the Perfection.
  </blockquote>
  </div>
</div>

### Choosing a Color

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
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-primary]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-primary")
      document.body.setAttribute("data-md-color-primary", attr)
      var name = document.querySelector("#__code_1 code span.l")
      name.textContent = attr.replace("-", " ")
    })
  })
</script>

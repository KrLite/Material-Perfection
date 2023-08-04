<style>
 .container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;     
  height: auto;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid blue;
 }

 .combined img {
  height: auto;
  width: 30%;
  max-height: 100%;
  max-width: calc(30% - 3em);    
  margin-right: 3em;
  object-fit: contain;
  border: 1px solid red;
 }

 .content {
  flex: 1;
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

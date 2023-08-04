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

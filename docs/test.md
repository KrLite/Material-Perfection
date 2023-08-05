# My Parallax Section

<style>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid red; /* Debug border */
}

.parallax-inner {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid blue; /* Debug border */
}
</style>

<div class="parallax" style="background-image: url('path/to/your/image.jpg');">
  <div class="parallax-inner">
    This is the content of your parallax section.
  </div>
</div>

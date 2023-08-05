# My Parallax Section

<style>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid red; /* Debug border */
  height: 400px; /* Adjust the height as needed */
}

.parallax-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid blue; /* Debug border */
  height: 100%; /* Take full height of the parent element */
}
</style>

<div class="parallax" style="background-image: url('https://images.unsplash.com/photo-1557683316-973673baf926');">
  <div class="parallax-inner">
    This is the content of your parallax section.
  </div>
</div>

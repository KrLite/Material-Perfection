# My Page

<style>
#scrollingDiv {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh; /* Set initial height to 100% of viewport height */
    width: 100%;
    background-color: blue;
    transition: height 0.5s; /* Add transition for smooth animation */
}
</style>

<script>
  window.addEventListener('scroll', function() {
    var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrolled = window.scrollY;
    var ratio = scrolled / scrollHeight;
    var minHeight = 0.1 * window.innerHeight;
    var maxHeight = window.innerHeight;

    var newHeight = maxHeight - (maxHeight - minHeight) * ratio;
    document.getElementById('scrollingDiv').style.height = newHeight + 'px';
});
</script>

<div id="scrollingDiv"></div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus velit ante, vitae porttitor nunc porttitor at. Cras rutrum, nisl in efficitur fringilla, dui nunc scelerisque turpis, in rhoncus urna purus vitae orci. Sed ullamcorper, odio id tristique consectetur, elit elit consequat mi, ac luctus elit eros vel nunc. Suspendisse id turpis vel massa vulputate iaculis at quis urna.

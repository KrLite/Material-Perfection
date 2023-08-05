<script>
  .div {
    border: 1px solid red;
  }

  window.addEventListener('scroll', function() {
  var div1 = document.getElementById('div1');
  var div2 = document.getElementById('div2');
  var scrollPosition = window.scrollY;

  var div1BottomPosition = div1.offsetTop + div1.offsetHeight;
  var distanceFromViewportBottom = window.innerHeight - div1BottomPosition;

  var translation = Math.max(0, distanceFromViewportBottom - scrollPosition);

  div2.style.transform = 'translateY(' + translation + 'px)';
});

  #div1 {
  position: relative;
  height: 150px;
}

#div2 {
  position: fixed;
  bottom: 0;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
</script>

<div id="div1">
  <!-- Content of div1 -->
  P1
</div>

<div id="div2">
  <!-- Content of div2 -->
  P2
</div>

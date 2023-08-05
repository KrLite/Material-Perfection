  <style>
    #div1 {
      position: relative;
      height: 500px; /* Adjust as needed */
      border: 2px solid red; /* Added red border for testing */
    }
  
    #div2 {
      position: fixed;
      bottom: 0;
      transform: translateY(100%); /* Initially positioned below the viewport */
      transition: transform 0.3s ease; /* Smooth transition */
      border: 2px solid red; /* Added red border for testing */
    }
  </style>
  <div id="div1">
    <p>Content of div1</p>
    <p>Additional paragraph</p>
  </div>

  <div id="div2">
    <p>Content of div2</p>
  </div>

  <script>
    window.addEventListener('scroll', function() {
      var div1 = document.getElementById('div1');
      var div2 = document.getElementById('div2');
      var scrollPosition = window.scrollY;

      // Calculate the distance between div1 and the bottom of the viewport
      var div1BottomPosition = div1.offsetTop + div1.offsetHeight;
      var distanceFromViewportBottom = window.innerHeight - div1BottomPosition;

      // Calculate the translation value for div2
      var translation = Math.max(0, distanceFromViewportBottom - scrollPosition);

      div2.style.transform = 'translateY(' + translation + 'px)';
    });
  </script>

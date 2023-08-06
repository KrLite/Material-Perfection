---
hide:
  - navigation
  - toc
---

<style>
  .md-tabs {
	background-color: transparent;
	background: linear-gradient(rgba(0, 0, 0, .3), 30%, transparent);
  }

  *{
    box-sizing: border-box;
  }

  .parallax {
    perspective: 100px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
	right: 0;
    margin-left: -750px;
	margin-right: -750px;
  }

  .parallax__layer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .parallax__layer img {
    display: block;
    position: absolute;
    bottom: 0;
  }

  .parallax__cover {
    background: #2D112B;
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 2000px;
    z-index: 2;
  }

  .parallax__layer__0 {
    transform: translateZ(-300px) scale(4);
  }

  .parallax__layer__1 {
    transform: translateZ(-250px) scale(3.5);
  }

  .parallax__layer__2 {
    transform: translateZ(-200px) scale(3);
  }

  .parallax__layer__3 {
    transform: translateZ(-150px) scale(2.5);
  }

  .parallax__layer__4 {
    transform: translateZ(-100px) scale(2);
  }

  .parallax__layer__5 {
    transform: translateZ(-50px) scale(1.5);
  }

  .parallax__layer__6 {
    transform: translateZ(0px) scale(1);
  }

  .scrollable {
	height: 300vh;
  }
</style>

<section class="parallax">
  <div class="parallax__layer parallax__layer__0">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true" />
  </div>
  <div class="parallax__layer parallax__layer__1">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true" />
  </div>
  <div class="parallax__layer parallax__layer__2">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true" />
  </div>
  <div class="parallax__layer parallax__layer__3">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true" />
  </div>
  <div class="parallax__layer parallax__layer__4">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true" />
  </div>
  <div class="parallax__layer parallax__layer__5">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true" />
  </div>
  <div class="parallax__layer parallax__layer__6">
    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true" />
  </div>
  <div class="parallax__cover"></div>
</section>

<section class="scrollable"></section>

<template>
  <div>
    <header>
      <div class="website-header">
        <img :src="picture" />
        <h1>News Today</h1>
        <div class="social_icons">
          <ul class="top-links">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-linkedin"></i>
          </ul>
        </div>
      </div>

      <nav class="navbar navbar-expand-md">
        <!-- Brand -->

        <!-- Toggler/collapsibe Button -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">POLITICS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">WORLD</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">BUSINESS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">TRAVEL</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">TECHNOLOGY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">SPORT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CARS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">VIDEOS</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="breaking-news-section">
        <span id="btext">Breaking News</span>
        <span
          direction="left"
          onmouseover="this.stop()"
          onmouseout="this.start()"
        >
          <a href="#" class="breaking-news">
            <p class="bntime">16,April,2021</p>
            Wheather news
          </a>
          <a href="#" class="breaking-news">
            <p class="bntime">16,April,2021</p>
            Sports news
          </a>
          <a href="#" class="breaking-news">
            <p class="bntime">16,April,2021</p>
            Education news
          </a>
        </span>
      </div>
    </header>
    <main>
      <article id="popular-news">
        <div id="featured"></div>
        <div id="latest"></div>
        <div id="our-picks"></div>
      </article>
    </main>
  </div>
</template>
<script>
export default {
  name: "Newspaper",
  data() {
    return {
      picture: "abc.jpg",
      navlink:''
    };
  },
};
</script>
<style scoped>
body {
  padding: 0;
  margin: 0;
}
header {
  background-color: black;
  color: white;
}
img {
  height: 100px;
  width: 100px;
}
.top-links {
  display: flex;
  justify-content: space-between;
}

.social_icons {
  text-align: right;
  flex-grow: 1;
}

.social_icons ul li {
  cursor: pointer;
  margin: 0 7px;
}

.social_icons ul li a {
  width: 50%;
  font-size: 13px;
  padding: 10px 8px;
  display: inline-block;
}

.social_icons ul li {
  display: inline-block;
}

.social_icons ul li a i.fa {
  color: #fff;
  margin-right: 10px;
  font-size: 15px;
  text-align: center;
}

.social_icons ul li a {
  color: #fff;
  padding: 10px 20px;
  letter-spacing: 1px;
  border: 1px solid #fff;
  text-decoration: none;
}

.top-links li a.facebook {
  color: #fff;
  background-color: #3b5998;
  text-align: right;
  margin: 0 7px;
}

.top-links li a.twitter {
  color: #fff;
  background-color: #00aced;
  text-align: right;
  margin: 0 7px;
}

.top-links li a.linkedin {
  color: #fff;
  background-color: #0077b5;
  text-align: right;
  margin: 0 7px;
}

.top-links li a.facebook:hover,
.top-links li a.twitter:hover,
.top-links li a.linkedin:hover {
  background: transparent;
  transition: 0.5s all;
}
.website-header {
  padding: 20px;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
}
.website-header img {
  width: 50px;
  height: 50px;
  margin: 0 30px;
}
.website-header h1 {
  margin: auto 0;
}
:root {
  color: #e08b6c;
}
nav {
  background-color: black;
  height: 50px;
  margin-bottom: 20px;
}

nav ul {
  margin: 20px 0 0 0;
}

nav ul {
  padding: 10px 20px;
}
.navbar-nav li a {
  color: white;
  font-size: 20px;
  font-weight: 800;
}
.navbar-nav li a:hover {
  color: #e08b6c;
}
.breaking-news-section {
  padding: 0 30px 0 60px;
  display: flex;
}
#btext {
  width: 200px;
  font-size: 16px;
  text-transform: uppercase;
  color: brown;
  font-weight: 600;
  margin: auto 0;
}
.breaking-news {
  padding: 30px;
  color: white;
  font-weight: 800;
  display: inline-block;
}
.breaking-news,
.social_icons i:hover {
  color: brown;
  cursor: pointer;
}
.bntime {
  display: inline-block;
  color: rgba(255, 255, 255, 0.5);
  padding: 0 10px;
  font-size: 12px;
}
</style>
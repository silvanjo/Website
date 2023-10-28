<template>
    <div class="navbar">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="nav-links">
      <a href="#">Docs</a>
      <a href="#">API</a>
      <a href="#">Playground</a>
      <a href="#">Ecosystem</a>
      <a href="#">About</a>
      <a href="#">Sponsor</a>
      <a href="#">Partners</a>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
    .navbar {
        display: flex;
        align-items: center; /* This centers items vertically */
        justify-content: center; /* This centers items horizontally */
        padding: 10px 20px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .logo, .nav-links {
        margin: 0 15px; /* This adds space between the logo, and navigation links */
    }


    .logo img {
        height: 30px;
    }

    .nav-links {
        display: flex;
        gap: 10px;
    }

    .nav-links a {
        text-decoration: none;
        color: #333;
        margin: 0 5px;
        padding: 5px 10px;
        transition: background-color 0.2s;
    }

    .nav-links a:hover {
        background-color: #f5f5f5;
    }
</style>
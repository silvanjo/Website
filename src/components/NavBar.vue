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
    <button @click="toggleColorTheme">Light Mode</button>
  </div>
</template>

<script>

    export default
    {
        methods:
        {
            toggleColorTheme()
            {
                document.body.classList.toggle('light-theme')
            }
        }
    }

</script>

<style scoped>
    .navbar 
    {
        display: flex;
        align-items: center; /* This centers items vertically */
        justify-content: center; /* This centers items horizontally */
        
        padding: 10px 20px;
        margin: 0px;
        height: 70px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .logo, .nav-links 
    {
        margin: 0 15px; /* This adds space between the logo, and navigation links */
    }


    .logo img 
    {
        height: 30px;
    }

    .nav-links 
    {
        display: flex;
        gap: 10px;
    }

    .nav-links a 
    {
        text-decoration: none;
        color: var(--text-color);
        margin: 0 5px;
        padding: 5px 10px;
        border-radius: 5px;
        transition: background-color 0.2s;
    }

    .nav-links a:hover 
    {
        background-color: var(--hover-background-color);
    }
</style>

<template>
<nav>
    <div class="menu-item"><a href="#">Home</a></div>
    <div class="menu-item"><a href="#">About</a></div>
    <div class="menu-item"><a href="#">Contact</a></div>
   
</nav>    

</template>
<script>



export default{
    name:'navbar',
}

</script>
<style>
nav{
    display:flex;
    align-items: center;
    justify-content: center;
}

nav .menu-item{
color: white;
padding: 10px 20px;
position: relative;
text-align: center;
border-bottom: 3px solid transparent;
display: flex;
transition: 0.4s;
}
nav .menu-item a{
    color: inherit;
    text-decoration: none;

}

nav .menu-item.active,
nav .menu-item:hover {

background-color: black;
border-bottom-color: red;
}
</style>


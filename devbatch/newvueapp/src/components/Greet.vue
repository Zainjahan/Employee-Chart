<template>
    <h1 v-if="heroname==='zain jahan'">Hello {{name}} zain {{heroname}}</h1>
    <h2 v-else>Bye</h2>
    
</template>

<script>
export default{
    name:"Greet",
    props:['name','heroname'],
    
};
</script>

<style scoped>

</style>

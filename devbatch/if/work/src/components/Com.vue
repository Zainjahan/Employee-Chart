<template>
<div>
    <div id="app">
        <input type="text" v-model="newMovie"/>
        <button @click="addMovie">Add movies</button>
        <ul>
            <li v-for="(movie,index) in movies" :key="movie">{{movie}}({{index}})</li>

        </ul>
        <div class="ingredient" v-for="(ingredient,index) in ingredients" :key="'ing'+index">
            <div class="title">{{ingredient.title}}</div>
            <div class="price">{{ingredient.price}}</div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'Com',
    data(){
        return{
            newMovie:'',
            movies:['batsman','spiderman','hulk'],
            ingredients:[
                
                    {title:'apple',price:0.99},
                    {title:'apple',price:0.99},
                    {title:'apple',price:0.99}
            ]
        }
    },
    methods:{
        addMovie(){
            if(this.newMovie !=='')
            this.movies.push(this.newMovie);
            this.newMovie='';
        }
    }
}
                
</script>
<style scoped>

</style>
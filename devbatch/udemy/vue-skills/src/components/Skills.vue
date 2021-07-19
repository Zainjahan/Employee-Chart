<template>
<div class="hello">
  <div class="holder">
    <form @submit.prevent="addSkill">
    <input type="text" placeholder="enter a skill you have" v-model="skill" v-validate="'min:5'" name="skill">
    <input type="checkbox" id="checkbox" v-model="checked">
    <p class="alert" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
    </form>
    
    <ul>
      <li v-for="(data,index) in skills" :key='index'>{{data.skill}}</li>
    </ul>
    <p>These are the skills that you are possess</p>
   
</div>
</div>
</template>

<script>
export default {
  name: 'Skills',
  data(){
    return{
    skill:'',
    skills:[
      
      {"skills":"frontend developer"}
    ],
    
    }
  },
  methods:{
    checked:false,
    addSkill(){
  this.skills.push({skill:this.skill})
  this.skill='';
  console.log('this checkedbox value is:'+this.checked);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alert{
  background-color: yellow;
  width: 100%;
  height: 30px;
}
</style>

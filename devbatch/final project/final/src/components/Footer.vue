<template>
<div class="footer">
    <div id="root">
        <div id="container">
    <div id="contacts">
      <div id="contacts--contact">
        <p>{{ mail }}</p>
        <p>{{ phone }}</p>
      </div>
      <div id="contacts--social">
        <div class="fa-google"></div>
        <div class="fa-twitter"></div>
        <div class="fa-linkedin"></div>
      </div>
    </div>
    <div id="mentions">
      <p>{{ mention }}</p>
    </div>
   </div>
  
</div>
</div>
</template>
<script>
export default{
    name:'Footer',

data(){
    return{
      mail : 'zainjahan@gmail.com',
      phone : '06.00.00.00.00',
      mention : '2018 | mention'
    }
  }
};

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body{
  display:flex;
  background-color:#F0F8FF;
  height:95vh;
  justify-content:center;
  align-items:flex-end;
  font-family:Open Sans;
}

#container{
  padding-top:20px;
  margin-top:20px;
  width:100vw;
  color:white;
  background-color:#292354;
  display:flex;
  flex-direction:column;
  align-items:center;
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  text-align:right;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:30px;
  width:30px;
  background-color:white;
  border-radius:50%;
}
#mentions p {
  font-size:0.5em;
}
.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}

.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-google {
  background: #dd4b39;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}
footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}
</style>
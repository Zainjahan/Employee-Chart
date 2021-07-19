

const axios = require("axios")
const https = require("https")

const data =JSON.stringify({
    name:"zain",
    job:"developer"
});


axios.post('https://reqres.in/api/users',data).then(res=>{
    console.log(`Status code:${res.status}`);
    console.log(`Body:${JSON.stringify(res.data)}`);
}).catch(err=>{
    console.log(err)
})


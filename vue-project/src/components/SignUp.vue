<template>
<div class="cent mt-6">
 
    <h1>Sign Up</h1>
    <div class="register">
<input type="text" v-model="name" placeholder="Enter Name">
<input type="text" v-model="email" placeholder="Enter Email">
<input type="password" v-model="password" placeholder="Enter password">
<button v-on:click="signUp">Sign Up</button><br>
<router-link to="/login">Login</router-link>
</div>

    </div>
</template>

<script>
import axios from 'axios'
    export default {
     data(){
        return{
            name:"",
            email:"",
            password:"",
        }
     },
     methods:{
       async signUp(){

            let result= await axios.post("http://localhost:3000/users",{
                email:this.email,
                name:this.name,
                password:this.password
            })
            console.log(result)

            if(result.status==201){
                
                localStorage.setItem('user-info',JSON.stringify(result.data))
                this.$router.push({name:"Home"})
            }
        }
     },
     mounted(){
        let user=localStorage.getItem('user-info')
            if(user){
                this.$router.push({name:"Home"})
            }
        
     }
    }
</script>

<style scoped>
.cent{
    text-align: center;
}

.register input{
    margin-bottom: 30px;
    padding-left: 20px;
    width: 300px;
    height: 40px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button{
    border: 1px solid skyblue;
    cursor: pointer;
    color: #fff;
    background: skyblue;
    height: 40px;
    width: 320px;
    
}
</style>
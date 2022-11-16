<template>
  <div class="cent mt-10">
    
    <h1>Login Up</h1>
    <div class="register mt-10">
      <input class="border-color: rgb(249 115 22);" type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter password" />
      <button @click="login">Login</button><br />
      <router-link to="/signup">SignUp</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        let info=localStorage.getItem(JSON.stringify(result.data.name));
        console.log(`dear ${info} please go a head`)
        this.$router.push({ name: "Home" });
      }
   
      else{
       
       alert("You can't login")
      }
      console.warn(result);
    },
  },
  mounted(){
        let user=localStorage.getItem('user-info')
            if(user){
                this.$router.push({name:"Home"})
            }
        
     }
};
</script>

<style scoped>
.cent {
  text-align: center;
}
.logo {
  width: 100px;
}
.register input {
  margin-bottom: 30px;
  padding-left: 20px;
  width: 300px;
  height: 40px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button {
  border: 1px solid skyblue;
  cursor: pointer;
  color: #fff;
  background: skyblue;
  height: 40px;
  width: 320px;
}
</style>

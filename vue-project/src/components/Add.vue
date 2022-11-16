<template>
    <div class="flex justify-center mt-10">
  

<h1 class="text-3xl">Add Page</h1>
<div class="w-full max-w-xs">
  <form  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input v-model="restaurant.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Address
      </label>
      <input v-model="restaurant.address" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="address">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Contacts
      </label>
      <input  v-model="restaurant.contact" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="contact">
    </div>
    
    <div class="flex items-center justify-between">
      <button @click="addResto" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Add
      </button>
      
    </div>
  </form>
 
</div>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
      mounted(){
        let user=localStorage.getItem('user-info')
            if(!user){
                this.$router.push({name:"SignUp"})
            }
        
     },
     data(){
      return{
        restaurant:{
          name:"",
          address:"",
          contact:"",
        }
      }
     },
     methods:{
     async addResto(){
         console.warn(this.restaurant)

         const result=await axios.post("http://localhost:3000/restuarants",{
          name:this.restaurant.name,
          address:this.restaurant.address,
          contact:this.restaurant.contact
         });

         console.log("result",result)

         if(result.status==201){
          this.$router.push({name:"Home"})
         }
      }
     },
     mounted(){
      let user=localStorage.getItem("user-info")
      swal('Something went wrong.')
      if(!user){
        this.$router.push({name:"SignUp"})
      }

     }
    }
</script>

<style  scoped>

</style>
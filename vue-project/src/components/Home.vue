<template>
    <div class="flex justify-center mt-10">

      <button @click="showAlert">Hello world</button>

<table class="border-coallapse border border-slate-400 ">
  <thead>
    <tr >
      <th class="border-coallapse border border-slate-400 ">Id</th>
      <th class="border-coallapse border border-slate-400 " >Name</th>
      <th class="border-coallapse border border-slate-400 ">Contact</th>
      <th class="border-coallapse border border-slate-400 ">Address</th>
      <th class="border-coallapse border border-slate-400 ">Actions</th>
    </tr>

  </thead>
  <tbody>
    <tr class="border-coallapse border border-slate-400 " v-for="item in restaurants" :key="item.id">
      <td class="border-coallapse border border-slate-400 ">{{item.id}}</td>
      <td class="border-coallapse border border-slate-400 ">{{item.name}}</td>
      <td class="border-coallapse border border-slate-400 ">{{item.contact}}</td>
      <td class="border-coallapse border border-slate-400 ">{{item.address}}</td>
      <td>
        <router-link  class="bg-blue-500 bg-green-600 text-white font-bold py-2 px-4 rounded-full" :to="'/update/'+item.id">Update</router-link>
        <button class="bg-blue-500 bg-red-600 text-white font-bold py-2 px-4 rounded-full" @click="deleteRestaurant(item.id)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
      data(){
        return{
          name:'',
          restaurants:[],
        }
      },
      methods:{
      async  deleteRestaurant(id){
          let result= await axios.delete('http://localhost:3000/restuarants/'+id)
           console.log(result)
           if(result.status==200){
              this.loadData()
           }
        },
        async loadData(){
          let user=localStorage.getItem('user-info')
            if(!user){
                this.$router.push({name:"SignUp"})
            }
        let result= await axios.get('http://localhost:3000/restuarants')
        console.log(result)

        this.restaurants=result.data
        },
        showAlert() {
          Swal.fire({
                  toast: true,
                  icon: 'success',
                  title: 'You Posted successfully please add ingredients,steps, categories',
                  animation: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 6500,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
    
    
  })
    },
      },
      mounted(){
       this.loadData();
     }
    }
</script>

<style  scoped>

</style>
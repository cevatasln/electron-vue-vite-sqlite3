<template>
    <div class="home">
  Home screen
  <ul>
    <li v-for="(item, i) in list" :key="`list${i}`"> {{item}} </li>
  </ul>
    </div>
  </template>
  
  <script lang="ts">
 import { defineComponent } from 'vue'
 //import { getHome } from '../api/home'
 export default defineComponent({
    name: 'HomeView',
   // inject: ['ipcRenderer'],
   //mixins: [getHome],
    components: {
   
    },
    data() {
      return {
        list: [{name:"hhhh"}],
      }
    },
    mounted() {
    // this.getHome()
    },
    methods: {
  /*   async getSomeThing(){
const result = [{name:"hhhh"}]
     //const ipcRenderer = this.ipcRenderer
      //  const result = await ipcRenderer.invoke('home', [1, 2, 3]);
    console.log(result);

   
      }*/
    },
  });
  </script>
  
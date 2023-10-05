<template>
    <div>
      <Header ></Header>
       <div class="main-warp">
          <router-view/>
       </div>
    </div>
 </template>
 
 <script>
import Header from '../layout/Header.vue';
 
 const App = {
    data: () => {
       return {
       }
    },

    methods: {
 
    },

    watch: {
 
    },

    computed: {
 
    },
    
    components: {
      Header: Header
    },
    mounted: () => {
       console.log('Vue mounted');
    }
 }
 
 export default App;
 </script>

 <style scoped>
</style>
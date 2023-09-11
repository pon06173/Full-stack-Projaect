<template>
  <div>Hello Vue World</div>
</template>

<script>
  const App = {
      data: () => {
          dataTest: 2
          dataTest2: 2
      },
      methods: {
          
      },
      watch: {
          dataTest: function (oldValue, newValue) {
              
          }
      },
      computed: {
          dataTestAdd: function () {
              return dataTest + dataTest2;
          }
      },
      components: {

      },
      mounted: () => {
          console.log("App.vue가 초기화됨");
      }
  }

  export default App;
</script>
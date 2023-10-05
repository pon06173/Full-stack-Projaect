<template>
  <div>
      <span style="margin-right: 10px">
          <router-link to="/">메인</router-link>
      </span>
      <span>
          <router-link to="/cafe.page">메뉴관리</router-link>
      </span>
  </div>
</template>

<script>
  const App = {
      data: () => {
          return {
              testNumber: 1,
              testString: '문자열'
          }
      },
      mounted() {
          console.log('메인화면이 마운트 됨');
      },
  }

  export default App;
</script>
<template>
  <header>
    <!-- 네비바 -->
    <div class="nav">
      <router-link class="home" to="/">카페 메뉴관리</router-link>
      <ul>
        <li><router-link to="/cafe.page">메뉴</router-link></li>
        <li><router-link to="/orderList.page">주문 내역</router-link></li>
        <li><router-link to="/order.page">주문(고객)</router-link></li>
        <!-- <li><a href="#">관리자</a></li> -->
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {},
  components: {},
  mounted() {
    console.log("Header mounted");
  },
};
</script>

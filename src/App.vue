<template>
  <div id="app">
    <Notifications />
    <div class="content">
      <Header />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Notifications from "./components/notifications/index.vue";
import Header from "./components/header/index.vue";

export default {
  name: "App",
  components: {
    Notifications,
    Footer,
    Header,
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content {
  flex-grow: 1;
}
</style>

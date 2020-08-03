<template>
  <div id="app">
    <!-- Navigation -->
    <div id="nav">
      <template>
        <div>
          <TheNavbar></TheNavbar>
          <TheSidebar></TheSidebar>
        </div>
      </template>
    </div>
    <!-- End of Navigation -->

    <!-- Content   -->
    <vs-row>
      <vs-col id="router" class="container" :w="width" :offset="offset">
        <div>
          <router-view></router-view>
        </div>
      </vs-col>
    </vs-row>
    <!-- End of Content -->
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import TheSidebar from "./components/TheSidebar";

export default {
  components: {
    TheNavbar,
    TheSidebar
  },

  data: () => ({
    offset: 3,
    width: 10
  })
};
</script>

<style scoped>
.container {
  margin-top: 36px;
  border: 1px solid red;
}
</style>

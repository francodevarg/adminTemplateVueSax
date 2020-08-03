<template>
  <vs-sidebar fixed :open="open">
    <div @click="loadingMenu()">
      <router-link :to="{ name: 'Home' }">
        <vs-sidebar-item>
          <template #icon>
            <box-icon name="home-alt"></box-icon>
          </template>
          Home
        </vs-sidebar-item>
      </router-link>
    </div>
    <div @click="loadingMenu()">
      <router-link :to="{ name: 'About' }">
        <vs-sidebar-item>
          <template #icon>
            <box-icon name="comment-detail"></box-icon>
          </template>
          About
        </vs-sidebar-item>
      </router-link>
    </div>
  </vs-sidebar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("sidebar", ["open"])
  },

  methods: {
    ...mapMutations("navbar", ["loadOperation"]),

    loadingMenu() {
      this.loadOperation(true);
    }
  }
};
</script>

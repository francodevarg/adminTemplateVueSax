<template>
  <vs-navbar shadow square fixed v-model="active">
    <template #right>
      <!-- Burger Button -->
      <div class="menu-btn" @click="toggleMenu()">
        <div class="menu-btn__burger"></div>
      </div>
      <!-- End of Burger Button -->
    </template>
  </vs-navbar>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      active: "home",
      progress: 0
    };
  },

  computed: {
    ...mapState("navbar", ["loading"])
  },

  watch: {
    loading(newValue) {
      if (newValue) this.openLoading();
    }
  },

  methods: {
    ...mapActions({
      toggleSidebar: "sidebar/updateByMenu"
    }),

    ...mapMutations("navbar", ["initialize", "loadOperation"]),

    toggleMenu() {
      var isOpen = document.querySelector(".menu-btn").classList.toggle("open");
      this.toggleSidebar(isOpen);
    },

    // Loading
    openLoading() {
      // If responsive ==> when clicked then close the menu
      // if (window.innerWidth < 768) this.toggleMenu();

      const loadingUI = this.$vs.loading({ type: "scale" });

      setTimeout(() => {
        loadingUI.close();
        this.loadOperation(false);
      }, 500);
    }
  }
};
</script>

<style scoped>
/** ============= Only Burger Button ============= */

/** Border Button */
.menu-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
}

.menu-btn:hover {
  cursor: pointer;
}

/**  Button */
.menu-btn__burger {
  width: 25px;
  height: 2px;
  background: black;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}

.menu-btn__burger::before,
.menu-btn__burger::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 2px;
  background: black;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}

.menu-btn__burger::before {
  transform: translateY(-8px);
}

.menu-btn__burger::after {
  transform: translateY(8px);
}

/** Animation Button */

.menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
}

.menu-btn.open {
  border: 1px solid rgb(var(--primary));
}

.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
}

.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}
</style>

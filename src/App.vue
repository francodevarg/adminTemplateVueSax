<template ref="content">
  <div id="app">
    <!-- Navigation -->
    <div id="nav">
      <template>
        <div class="hidden">
          <!-- Navbar -->
          <vs-navbar shadow square fixed v-model="active">
            <template #right>
              <!-- Burger Button -->
              <div class="menu-btn" @click="toggleMenu()">
                <div class="menu-btn__burger"></div>
              </div>
              <!-- End of Burger Button -->
            </template>
          </vs-navbar>
          <!-- End of Navbar -->

          <!-- SideBar -->
          <vs-sidebar fixed v-model="active" :open="activeSidebar">
            <template #logo>
              <!-- ...img logo -->
            </template>
            <div @click="openLoading()">
              <vs-sidebar-item id="home" to="/">
                <template #icon>
                  <box-icon name="home-alt"></box-icon>
                </template>
                Home
              </vs-sidebar-item>
            </div>
            <div @click="openLoading()">
              <vs-sidebar-item id="market" to="/about">
                <template #icon>
                  <box-icon name="comment-detail"></box-icon>
                </template>
                About
              </vs-sidebar-item>
            </div>
          </vs-sidebar>
          <!-- End of SideBar -->
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
export default {
  data: () => ({
    active: "home",
    activeSidebar: false,
    progress: 0,
    offset: 3,
    width: 10,
  }),
  mounted() {
    if (window.innerWidth <= 768) {
      this.offset = 0;
      this.width = 12;
    } else {
      this.toggleMenu();
      document.querySelector(".menu-btn").style.display = "none";
      this.width = 9;
      this.offset = 3;
    }
    if (window.innerWidth > 1200) {
      this.width = 8;
      this.offset = 3;
      document.querySelector(".menu-btn").style.marginLeft = "260px";
    }
  },
  // ============= Methods =============
  methods: {
    // SideBar Menu
    toggleMenu() {
      this.activeSidebar = !this.activeSidebar;
      document.querySelector(".menu-btn").classList.toggle("open");
    },

    // Loading
    openLoading() {
      // If responsive ==> when clicked then close the menu
      if (window.innerWidth < 768) this.toggleMenu();

      // Loading
      const loading = this.$vs.loading({
        target: this.$refs.content,
        color: "red",
        background: "#fff",
        progress: 0,
        type: "scale",
      });
      const interval = setInterval(() => {
        if (this.progress <= 100) {
          loading.changeProgress(this.progress++);
        }
      }, 40);
      setTimeout(() => {
        loading.close();
        clearInterval(interval);
        this.progress = 0;
        loading.close();
      }, 3000);
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 36px;
  border: 1px solid red;
}

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

<template>
  <div class="content-div">
    <vs-button flat :active="active == 0" @click="active = 0">
      Active
    </vs-button>
    <vs-button flat :active="active == 0" @click="active = 0">
      Active
    </vs-button>
    <vs-button flat :active="active == 0" @click="active = 0">
      Active
    </vs-button>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.content-div {
  width: 200px;
  height: 200px;
  box-shadow: 0px 6px 25px -10px rgba(22, 22, 22, 0.1);
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 0.6rem;
}
</style>

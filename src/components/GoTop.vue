<template>
  <div class="gotop d-none">
    <a href="#" @click.prevent="top">
      <i class="fas fa-paw"></i>
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"

onMounted(() => {
  window.onscroll = (event: any) => {
    const el = document.querySelector(".gotop")
    if (el !== null) {
      if (event.target.scrollingElement.scrollTop > 250) {
        el.className = "gotop d-block"
      } else {
        el.className = "gotop d-none"
      }
    }
  }
})
function top() {
  document.documentElement.scrollTop = 0
}
</script>

<style lang="scss" scoped>
.gotop {
  position: fixed;
  right: 35px;
  bottom: 15px;
  z-index: 99;
  background-color: pink;
  width: 30px;
  height: 30px;
}
.gotop a {
  color: #5e6e6e;
  font-size: 40px;
}
@media (max-width: 768px) {
  .gotop {
    right: 10px;
    bottom: 5px;
  }
  .gotop a {
    font-size: 35px;
  }
}
</style>

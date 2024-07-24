<template>
  <div class="loader-container">
    <img :src="loader" alt="" />
  </div>
</template>

<script>
import { loader } from '@/assets'
export default {
  data() {
    return {
      loader
    }
  }
}
</script>

<style lang="scss" scoped></style>

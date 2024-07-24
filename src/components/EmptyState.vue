<template>
  <div class="empty-container">
    <img :src="empty" alt="" />
    <p>Add Books to cart, don&apos;t worry its free😊</p>
  </div>
</template>

<script>
import { empty } from '@/assets'
export default {
  data() {
    return {
      empty
    }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="error-container">
    <img :src="empty" alt="" />
    <p>Something happened, refresh!</p>
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

<template>
  <button @click="handleClick" class="cart-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ['cartAction'],
  methods: {
    handleClick() {
      this.$emit('cartAction')
    }
  }
}
</script>

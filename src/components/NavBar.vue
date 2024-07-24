<template>
  <header>
    <nav>
      <div class="nav-left-container">
        <div class="nav-logo">
          <span> SK</span>
          <h1>Stephen King</h1>
        </div>
      </div>
      <ul class="nav-items">
        <li v-for="nav in navLinks" :key="nav">{{ nav }}</li>
      </ul>
      <div class="nav-right-container">
        <CartButton @cartAction="openModal">
          <span class="badge">{{ updatedCartTotal }}</span>
          Cart
        </CartButton>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'pinia'
import { useCartStore } from '@/stores/useCart'
import CartButton from '@/components/cart/CartButton.vue'
export default {
  components: { CartButton },
  data() {
    return {
      navLinks: ['home', 'about', 'shop', 'team', 'contact']
    }
  },
  computed: {
    ...mapGetters(useCartStore, ['updatedCartTotal'])
  },
  methods: {
    ...mapActions(useCartStore, ['openModal'])
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div :class="['remove-scrollbar', 'cart-container']">
    <div v-if="cartItems.length === 0">
      <EmptyState />
    </div>

    <div v-else>
      <CartCard :key="item.id" v-for="item in cartItems" :item="item" />
      <div class="checkout">
        <p>
          Total: <span>{{ updatedCartTotal }} books</span>
        </p>
        <CartButton @click="resetCart">Checkout</CartButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'pinia'
import { useCartStore } from '@/stores/useCart'
import CartButton from '@/components/cart/CartButton.vue'
import CartCard from '@/components/cart/CartCard.vue'
import EmptyState from '@/components/EmptyState.vue'

export default {
  components: {
    CartButton,
    CartCard,
    EmptyState
  },
  computed: {
    ...mapState(useCartStore, ['cartItems', 'openCartModal']),
    ...mapGetters(useCartStore, ['updatedCartTotal'])
  },
  methods: {
    ...mapActions(useCartStore, ['resetCart'])
  }
}
</script>

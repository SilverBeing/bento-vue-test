<template>
  <div class="cart-item-container">
    <div class="cart-item-description">
      <h2>{{ item.title }}</h2>
      <p>
        {{
          item.description ||
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit nobis eveniet ullam fuga voluptates excepturi rem possimus'
        }}
      </p>
    </div>
    <div class="cart-quantity-control">
      <button @click="decreaseItemQuantity(item)">-</button>
      <p>{{ item.quantity }}</p>
      <button @click="increaseItemQuantity(item)">+</button>
    </div>
    <button @click="removeFromCart(item.id)">
      <IconDelete />
    </button>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/useCart'
import { mapActions } from 'pinia'
import IconDelete from '@/components/icons/IconDelete.vue'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    IconDelete
  },
  methods: {
    ...mapActions(useCartStore, ['increaseItemQuantity', 'decreaseItemQuantity', 'removeFromCart'])
  }
}
</script>

import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      openCartModal: false,

      cartItems: []
    }
  },
  getters: {
    updatedCartTotal: (state) => {
      return state.cartItems.reduce((sum, item) => {
        return sum + item.quantity
      }, 0)
    },
    isItemAlreadyInCart: (state) => (newItemid) => {
      return state.cartItems.some((item) => newItemid === item.id)
    }
  },
  actions: {
    updateQuantity(currentItem, targetItem, quantity) {
      if (currentItem.id === targetItem.id) {
        const newQuantity = currentItem.quantity + quantity
        return {
          ...currentItem,
          quantity: newQuantity < 1 ? 1 : newQuantity
        }
      } else {
        return currentItem
      }
    },
    addToCart(newItem) {
      if (this.isItemAlreadyInCart(newItem.id)) {
        this.cartItems = this.cartItems.map((item) => {
          return this.updateQuantity(item, newItem, newItem.quantity)
        })
      } else {
        this.cartItems.push(newItem)
      }
    },
    removeFromCart(itemId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId)
    },
    increaseItemQuantity(itemToIncrease) {
      this.cartItems = this.cartItems.map((item) => {
        return this.updateQuantity(item, itemToIncrease, 1)
      })
    },
    decreaseItemQuantity(itemToDecrease) {
      this.cartItems = this.cartItems.map((item) => {
        return this.updateQuantity(item, itemToDecrease, -1)
      })
    },
    resetCart() {
      this.cartItems = []
    },
    openModal() {
      this.openCartModal = !this.openCartModal
    }
  }
})

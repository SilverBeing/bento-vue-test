<template>
  <div class="book-detail-container">
    <div class="book-detail-header">
      <img :src="catOnBooks" alt="" />
      <h2 class="book-detail-title">{{ book.Title }}</h2>
      <div class="book-detail-note">
        <div v-if="book.Notes.length > 0 && book.Notes[0] !== ''">
          <p v-for="(note, index) in book.Notes" :key="index">{{ note }}</p>
        </div>
        <div v-else>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit nobis eveniet ullam
            fuga voluptates excepturi rem possimus nihil, natus iste hic voluptatum! Excepturi deb
          </p>
        </div>
      </div>
    </div>
    <div class="book-detail-description">
      <div class="book-detail-summary">
        <p><strong>Pages: </strong>{{ book.Pages }}</p>
        <p><strong>ISBN: </strong>{{ book.ISBN }}</p>
        <p><strong>Publisher: </strong>{{ book.Publisher }}</p>
        <p><strong>Handle: </strong>{{ book.handle }}</p>
        <p><strong>Year: </strong>{{ book.Year }}</p>
      </div>
      <div v-if="book.villains.length !== 0" class="book-detail-villains">
        <h3>Villains:</h3>
        <ul>
          <li v-for="villain in book.villains" :key="villain.name">{{ villain.name }}</li>
        </ul>
      </div>
    </div>
    <div class="book-detail-footer">
      <CartButton @cartAction="handleAddToCart">Add to cart</CartButton>
    </div>
  </div>
</template>

<script>
import CartButton from '@/components/cart/CartButton.vue'
import { catOnBooks } from '@/assets'
import { mapActions } from 'pinia'
import { useCartStore } from '@/stores/useCart'

export default {
  props: {
    book: {
      type: Object,
      required: true,
      default: () => ({
        Title: '',
        Notes: [],
        Publisher: '',
        Villains: [],
        Year: '',
        Pages: '',
        ISBN: '',
        handle: '',
        id: 0
      })
    }
  },
  data() {
    return {
      catOnBooks
    }
  },

  components: {
    CartButton
  },
  methods: {
    ...mapActions(useCartStore, ['addToCart']),
    handleAddToCart() {
      this.addToCart({
        id: this.book.id,
        title: this.book.Title,
        description: this.book.Notes[0] || '',
        quantity: 1
      })
    }
  }
}
</script>

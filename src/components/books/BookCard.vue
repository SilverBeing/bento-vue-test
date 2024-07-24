<template>
  <div class="book-container" @click.stop="toggleModal">
    <div class="divider"></div>
    <button
      @click.stop="
        addToCart({ id: book.id, title: book.Title, description: book.Notes[0], quantity: 1 })
      "
      class="add-to-cart"
    >
      Add to Cart
    </button>

    <h2 class="book-title">{{ book.Title }}</h2>
    <div class="book-description">
      <div class="book-note">
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
      <div class="book-year">
        <p>{{ book.Year }}</p>
      </div>
    </div>

    <div class="book-footer"></div>

    <MyModal v-if="openModal" @close="toggleModal">
      <BookDetail :book="book" />
    </MyModal>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useCartStore } from '@/stores/useCart'
import MyModal from '@/components/MyModal.vue'
import BookDetail from '@/components/books/BookDetail.vue'

export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      openModal: false
    }
  },
  components: {
    MyModal,
    BookDetail
  },
  methods: {
    ...mapActions(useCartStore, ['addToCart']),
    toggleModal() {
      this.openModal = !this.openModal
    }
  }
}
</script>

<style lang="scss" scoped></style>

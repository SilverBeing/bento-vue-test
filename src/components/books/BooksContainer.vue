<template>
  <section class="books-container">
    <h2>Every Book Written By Stephen King</h2>
    <p>It&apos;s free-who needs money when you have books?😁</p>

    <div class="books-grid-container">
      <BookCard v-for="book in booksInCurrentPage" :key="book.id" :book="book" />
    </div>
  </section>
</template>

<script>
import BookCard from '@/components/books/BookCard.vue'
import { useBooksStore } from '@/stores/useBooks'
import { mapGetters } from 'pinia'
export default {
  components: {
    BookCard
  },
  computed: {
    ...mapGetters(useBooksStore, ['booksInCurrentPage'])
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <NavBar />

    <div v-if="fetchStatus.loading">
      <IsLoading />
    </div>
    <div v-if="fetchStatus.error">
      <IsError />
    </div>
    <div v-if="fetchStatus.success">
      <div>
        <BooksContainer />
        <div v-show="openCartModal">
          <CartContainer />
        </div>
      </div>
    </div>

    <BooksPagination />
  </div>
</template>

<script>
import { useCartStore } from '@/stores/useCart'
import { useBooksStore } from '@/stores/useBooks'
import { mapState, mapActions } from 'pinia'
import NavBar from '@/components/NavBar.vue'
import BooksPagination from '@/components/BooksPagination.vue'
import BooksContainer from '@/components/books/BooksContainer.vue'
import CartContainer from '@/components/cart/CartContainer.vue'
import IsLoading from '@/components/IsLoading.vue'
import IsError from '@/components/IsError.vue'

export default {
  components: {
    NavBar,
    BooksPagination,
    BooksContainer,
    CartContainer,
    IsError,
    IsLoading
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(useCartStore, ['openCartModal']),

    ...mapState(useBooksStore, ['fetchStatus'])
  },
  methods: {
    ...mapActions(useBooksStore, ['getAllBooks'])
  },
  mounted() {
    this.getAllBooks()
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
}
</style>

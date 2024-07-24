import { getBooks } from '@/service'
import { defineStore } from 'pinia'
export const useBooksStore = defineStore('books', {
  state: () => {
    return {
      books: [],
      fetchStatus: {
        loading: false,
        error: false,
        success: false
      },
      currentPage: 1
    }
  },
  getters: {
    booksInCurrentPage: (state) =>
      [...state.books].slice((state.currentPage - 1) * 20, state.currentPage * 20),
    totalNumberOfPages: (state) => state.books?.length,
    offset: (state) => (state.currentPage - 1) * 20,
    total: (state) => state.books?.length
  },
  actions: {
    async getAllBooks() {
      this.fetchStatus.loading = true
      this.fetchStatus.error = false
      this.fetchStatus.success = false

      try {
        const books = await getBooks()

        this.books = books.data
        this.fetchStatus.success = true
      } catch (error) {
        console.error('Error fetching books:', error)
        this.fetchStatus.error = true
      } finally {
        this.fetchStatus.loading = false
      }
    },

    handlePageChange(page) {
      const totalPages = Math.ceil(this.books.length / 20)
      if (page >= 1 && page <= totalPages) {
        this.currentPage = page
      }
    },
    handleNext() {
      this.handlePageChange(this.currentPage + 1)
    },
    handlePrev() {
      this.handlePageChange(this.currentPage - 1)
    }
  }
})

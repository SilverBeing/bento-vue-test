<template>
  <footer>
    <div class="paginate-container">
      <span class="paginate-summary">
        Showing {{ offset + 1 }} to {{ Math.min(offset + 20, total) }} of {{ total }} items
      </span>
      <div class="paginate-indicator">
        <button @click="handlePrev">Prev</button>
        <button @click="handleNext">Next</button>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'pinia'
import { useBooksStore } from '@/stores/useBooks'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(useBooksStore, ['currentPage']),
    ...mapGetters(useBooksStore, ['offset', 'total'])
  },
  methods: {
    ...mapActions(useBooksStore, ['handlePrev', 'handleNext'])
  }
}
</script>

<style lang="scss" scoped></style>

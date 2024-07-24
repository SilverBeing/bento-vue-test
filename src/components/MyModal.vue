<template>
  <Teleport to="body">
    <div class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <button @click="close" class="close-button">
            <IconClose />
          </button>
        </div>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
import IconClose from '@/components/icons/IconClose.vue'
export default {
  emits: ['close'],
  components: {
    IconClose
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped></style>

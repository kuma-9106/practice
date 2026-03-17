<template>
    <div>
        <input type="text" ref="inputRef" :value="keyword">
        <button @click.prevent="onClick">
          検索
        </button>
    </div>
</template>

<script setup>
    import { ref, onMounted, nextTick } from 'vue'

    const inputRef = ref(null)

    onMounted(async () => {
    await nextTick()
    inputRef.value.focus()

});
</script>
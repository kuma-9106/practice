<template>
  <component
  :is="tagName"
  class="m-0">
    {{ props.title }}
  </component>
</template>

<script setup>
import { computed } from 'vue';
import PanelBasic from '../panels/panelBasic.vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: null,
    }
})

const tagName = computed(() => {
    return props.tag ? props.tag : PanelBasic;
})
</script>

<style>
.m-0 {
    margin: 0;
}
</style>
<template>
  <component :is="tagName" :id="`${props.id}-panelBasic-1`" class="border p-2">
    <HeadingBasic
      :id="`${props.id}-headingBasic-1`"
      :title="'でんき'"
      tag="h2"
      variant="h2"
    />
  </component>
</template>

<script setup>
import { computed } from "vue";
import HeadingBasic from "../components/headings/headingBasic.vue";
import PanelBasic from "../components/panels/panelBasic.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: null,
  },
});

const tagName = computed(() => {
  return props.tag ? props.tag : PanelBasic;
});
</script>

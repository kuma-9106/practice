<template>
  <component
    :is="tagName"
    :id="`${props.id}-panelBasic-1`"
    class="border p-2"
  >
    <HeadingBasic
      :id="`${props.id}-headingBasic-1`"
      :title="'ご利用料金'"
      tag="h2"
      variant="h2"
    />
    <ButtonBasic01
      :id="`${props.id}-buttonBasic-01`"
      class="d-block"
    />
    <ButtonBasic01
      :id="`${props.id}-buttonBasic-03`"
      class="d-block"
    />
  </component>
</template>

<script setup>
import { computed } from "vue";
import HeadingBasic from "../components/headings/headingBasic.vue";
import PanelBasic from "../components/panels/panelBasic.vue";
import ButtonBasic01 from "./buttonBasic01.vue";

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

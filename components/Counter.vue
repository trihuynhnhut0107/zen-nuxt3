<template>
  <div>
    <template>
      <p>Counter: {{ getCount }}</p>
      <button type="button" @click="increment">Increment</button>
    </template>
  </div>
</template>

<script>
import { useCounterStore } from "~/stores/Counter";

export default defineComponent({
  setup() {
    const store = useCounterStore();
    const getCount = computed(() => store.getCount);
    const { increment } = store;
    return { getCount, increment };
  },
});
</script>

<style></style>

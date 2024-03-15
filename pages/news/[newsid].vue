<template>
  <div>News id: {{ newsid }}</div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero odio
  dolorem blanditiis provident eveniet a laborum! Inventore odit id corporis,
  ratione, iure alias laboriosam quasi quaerat est illo impedit.
</template>

<script setup>
const { newsid } = useRoute().params;
</script>

<style lang="scss" scoped></style>

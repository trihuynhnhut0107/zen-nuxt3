<template>
  <div>
    <button class="text-btn">
      <slot />
    </button>
  </div>
</template>

<script></script>

<style>
.text-btn {
  @apply text-[#6a38ff] hover:underline hover:text-indigo-500;
}
</style>

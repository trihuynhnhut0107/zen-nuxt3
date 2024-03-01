<template>
  <div>
    <button class="click-btn">
      <slot />
    </button>
  </div>
</template>

<script></script>

<style>
.click-btn {
  @apply bg-[#6a38ff] text-xl text-center w-full h-full rounded-lg mt-2 font-sans-serif font-semibold py-1;
}
.space-grotesk-font {
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
</style>

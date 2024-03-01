<template>
  <div class="my-2">
    <label v-bind:class="[required ? 'required-field' : '']">
      {{ label }}
    </label>
    <br />
    <input
      class="input-field"
      v-bind:placeholder="placeholder"
      v-bind:type="[type ? type : 'text']"
      v-bind:required="[required ? true : false]"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: String,
    type: String,
    regex: String,
    error: String,
    required: Boolean,
  },
};
</script>

<style>
.input-field {
  @apply py-2 bg-[#2c2f34] border border-gray-300 rounded-lg w-full my-2 focus:bg-black px-2;
}
</style>

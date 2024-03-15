<template>
  <NuxtLoadingIndicator v-if="pending"></NuxtLoadingIndicator>
  <div class="home-page">
    <nav class="border-gray-200 dark:bg-gray-900">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"
      >
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="\img\ZENTLEMEN.2d078d2.png" class="h-8" alt="Zen Logo" />
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
          <PurpleButton><p class="nav-bar-btn">Payment</p></PurpleButton>
          <PurpleButton><p class="nav-bar-btn">Đăng nhập</p></PurpleButton>
        </div>
      </div>
    </nav>
    <div
      class="flex flex-wrap justify-around items-start mx-auto p-4 space-x-5 bg-[#222933]"
    >
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn class="bg-[#222933] text-white" v-bind="props">
            Dropdown <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item> A </v-list-item>
          <v-list-item> B </v-list-item>
          <v-list-item> C </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div
      class="flex flex-wrap justify-around max-w-screen-lg mx-auto p-4 space-x-5 bg-[#2c2f34]"
    >
      <v-carousel class="max-w-full" :continuous="true" :cycle="true">
        <div v-for="n in news">
          <NuxtLink :to="getNewsIDLink(n.id)">
            <v-carousel-item
              class="size-auto"
              :src="getImageLink(n.feature_image)"
              ><p class="justify-around space-x-5">
                {{ n.title }}
              </p></v-carousel-item
            >
          </NuxtLink>
        </div>
      </v-carousel>
    </div>
  </div>
</template>

<script setup>
const {
  data: newsData,
  error,
  pending,
} = await useLazyAsyncData("newsData", async () => {
  const data = await Promise.all([
    $fetch("https://api.zentlemen.vn/ddapp/news/list?limit=5"),
  ]);
  return data;
});

const news = newsData.value[0].data;

const getNewsIDLink = (NewsID) => {
  return `/news/${NewsID}.vue`;
};

const getImageLink = (imageId) => {
  return `https://api.zentlemen.vn/ddapp/file/resize-file/${imageId}/1?token=undefined`;
};
</script>

<style>
.home-page {
  @apply min-h-screen justify-center bg-[#212529] text-white;
}
.title {
  @apply flex flex-wrap items-center justify-center;
}

.nav-bar-btn {
  @apply py-1 px-2 text-sm;
}

.dropdown-title {
  @apply text-white;
}
</style>

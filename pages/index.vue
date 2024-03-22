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
      class="flex flex-wrap justify-around max-w-screen-lg mx-auto p-5 space-x-5 bg-[#2c2f34] object-fill"
    >
      <v-carousel show-arrows="hover" cycle hide-delimiter-background>
        <v-carousel-item v-for="n in news">
          <NuxtLink :to="getNewsIDLink(n.id)">
            <v-sheet
              height="100%"
              class="bg-transparent items-center justify-center content-center"
            >
              <div class="relative overflow-hidden">
                <img
                  :src="getImageLink(n.feature_image)"
                  alt="Avatar"
                  class="object-cover w-full"
                />
                <div
                  class="absolute w-full py-2.5 bottom-16 inset-x-0 bg-slate-600 bg-opacity-70 text-white text-xl text-center font-bold"
                >
                  {{ n.title }}
                </div>
              </div>
            </v-sheet>
          </NuxtLink>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script setup>
const { data: newsData, pending } = await useFetchAPI(
  "/ddapp/news/list?limit=5"
);

console.log(newsData.value.data);

const news = newsData.value.data;

// const news = toRaw(newsData.value)[0].data;

const getNewsIDLink = (NewsID) => {
  return `/news/${NewsID}`;
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

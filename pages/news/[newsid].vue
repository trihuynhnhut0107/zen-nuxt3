<template>
  <div class="bg-[#212529]">
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
      class="container flex mx-auto py-10 items-center text-white space-y-1 max-w-screen-xl"
    >
      <div>
        <div class="font-bold text-2xl py-5">{{ newsTitle }}</div>
        <div class="flex space-x-1 py-5">
          <div>Tác giả:</div>
          <div class="bg-[#6a38ff] rounded-lg font-[650] mx-2 px-5">
            {{ newsAuthor }}
          </div>
        </div>
        <div
          v-html="newsContent"
          class="relative inset-0 space-y-2 text-lg flex-col content-center"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { newsid } = useRoute().params;

const { data: newsData, pending } = await useFetchAPI(
  `//ddapp/news/detail/${newsid}`
);

const newsContent = newsData.value.data.content;
const newsTitle = newsData.value.data.title;
const newsAuthor = newsData.value.data.fullName;
const newsDate = newsData.value.data["created_at"];
</script>

<style scoped></style>

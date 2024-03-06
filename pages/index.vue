<template>
  <div class="home-page">
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
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
      <el-dropdown type="primary" class="dropdown-title">
        Đời sống
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown type="primary" class="dropdown-title">
        Bóng đá
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown type="primary" class="dropdown-title">
        Đời sống
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown type="primary" class="dropdown-title">
        Video
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown type="primary" class="dropdown-title">
        Livestreaming
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
            <el-dropdown-item> Tổng hợp </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {};
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

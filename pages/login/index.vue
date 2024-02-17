<template>
  <div class="login-page">
    <div class="container flex mx-auto px-4 py-2 items-center justify-center">
      <div class="grid grid-cols-2 grid-flow-row content-between gap-20">
        <div class="card-left">
          <div>
            <h6 class="card-item pt-[100px] text-5xl font-extrathin">
              Chào mừng bạn trở lại với Zentlemen
            </h6>
          </div>
          <div>
            <p class="card-item text-2xl font-light">
              Tại đây hãy chia sẻ với Zen những điều thú vị nhất trong cuộc
              sống.
            </p>
          </div>
          <div>
            <img src="\img\zen.97b5580.png" alt="test-picture" />
          </div>
        </div>
        <div class="input-field">
          <div>
            <h1 class="text-4xl font-extrathin">Đăng nhập</h1>
          </div>
          <div>
            <div class="input-field-item">
              <label for="username">Tài khoản</label>
            </div>
            <div class="input-field-item">
              <input
                type="text"
                class="input-username"
                placeholder="Nhập tài khoản"
              />
            </div>
            <div class="input-field-item">
              <label for="password">Mật khẩu</label>
            </div>
            <div class="input-field-item">
              <input
                type="password"
                class="input-password"
                placeholder="Mật khẩu"
              />
            </div>
            <div class="inline-flex input-field-item gap-1 text-xl">
              <p>Quên mật khẩu?</p>
              <button class="forgot-password">Đặt lại mật khẩu</button>
            </div>
          </div>

          <div class="login-btn">
            <button class="px-4 py-2">Đăng nhập</button>
          </div>
          <div class="inline-flex input-field-item gap-1">
            <p>Chưa có tài khoản?</p>
            <button class="signup">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login-page {
  @apply min-h-screen flex justify-center bg-[#212529] text-white font-sans-serif;
}
.input-username {
  @apply bg-[#212529] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5;
}
.input-password {
  @apply bg-[#212529] text-sm border border-gray-300 block w-full p-2.5 rounded-lg;
}
.card-left {
  @apply grid grid-flow-row grid-cols-1 row-span-2 justify-items-center gap-y-5 bg-gradient-to-b from-[rgba(255,153,201,0.8)] to-[rgb(106,56,255)] items-stretch rounded-2xl;
}
.card-item {
  @apply px-10;
}
.input-field {
  @apply grid grid-cols-1 grid-flow-row gap-10 py-5;
}
.input-field-item {
  @apply py-2 text-xl;
}
.forgot-password {
  @apply text-[#6f42c1] hover:underline hover:text-indigo-500;
}
.login-btn {
  @apply bg-[#6610f2] rounded-lg text-center hover:bg-indigo-500 text-2xl font-bold;
}
.signup {
  @apply text-[#6f42c1] hover:underline hover:text-indigo-500;
}

.space-grotesk-font {
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}
</style>

<template>
  <div class="login-page">
    <div
      class="container flex mx-auto px-10 py-2 items-center justify-center max-w-screen-xl"
    >
      <div class="grid grid-cols-2 grid-flow-row content-between gap-20">
        <div class="card-left bg-radial-gradient">
          <div>
            <h6 class="title text-[32px] font-extrathin">
              Chào mừng bạn trở lại với Zentlemen
            </h6>
          </div>
          <div>
            <p class="desc text-[20px] font-light">
              Tại đây hãy chia sẻ với Zen những điều thú vị nhất trong cuộc
              sống.
            </p>
          </div>
          <div>
            <img src="\img\zen.97b5580.png" alt="test-picture" />
          </div>
        </div>
        <div class="card-right">
          <div>
            <div>
              <h6 class="text-4xl font-medium">Đăng ký</h6>
            </div>
            <div>
              <InputField placeholder="Nhập tài khoản" label="Tài khoản" />
            </div>

            <div>
              <InputField
                placeholder="Nhập mật khẩu"
                type="password"
                label="Mật khẩu"
              />
            </div>

            <div class="my-2 inline-flex gap-1">
              <p>Quên mật khẩu?</p>
              <NuxtLink to="/reset-password">
                <TextButton>Đặt lại mật khẩu</TextButton>
              </NuxtLink>
            </div>

            <div>
              <PurpleButton> Đăng nhập </PurpleButton>
            </div>

            <div class="mt-4 inline-flex gap-1">
              <p>Chưa có tài khoản?</p>
              <NuxtLink to="/signup">
                <TextButton>Đăng ký</TextButton>
              </NuxtLink>
            </div>
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
  @apply bg-[#212529] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-sans-serif;
}
.input-password {
  @apply bg-[#212529] text-sm border border-gray-300 block w-full p-2.5 rounded-lg font-sans-serif;
}
.card-left {
  @apply grid grid-flow-row grid-cols-1 row-span-2 justify-items-center gap-y-5  items-stretch rounded-2xl  pt-[100px];
}

.title {
  @apply pt-[20px] px-[30px];
}
.desc {
  @apply px-[30px];
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
  font-style: normal;
}
</style>

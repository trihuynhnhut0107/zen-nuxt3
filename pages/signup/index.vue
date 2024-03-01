<template>
  <div class="signup-page">
    <div
      class="container flex mx-auto px-10 py-2 items-center justify-center max-w-screen-xl h-auto"
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
            <img
              class="img-after"
              src="\img\zen.97b5580.png"
              alt="test-picture"
            />
          </div>
        </div>
        <div class="card-right">
          <div>
            <div>
              <h6 class="text-4xl font-medium">Đăng ký</h6>
            </div>
            <div>
              <InputField
                placeholder="Nhập tài khoản"
                label="Tài khoản"
                required="true"
              />
            </div>
            <div>
              <InputField
                placeholder="Nhập tên hiển thị"
                label="Tên hiển thị"
                required="true"
              />
            </div>
            <div>
              <InputField
                placeholder="Nhập mật khẩu"
                type="password"
                label="Mật khẩu"
                required="true"
              />
            </div>
            <div>
              <InputField
                placeholder="Nhập địa chỉ email"
                type="email"
                label="Địa chỉ email"
                required="true"
              />
            </div>
            <div>
              <InputField
                placeholder="Nhập số điện thoại"
                type="password"
                label="Số điện thoại"
                required="true"
              />
            </div>
            <div>
              <PurpleButton> Đăng ký </PurpleButton>
            </div>

            <div class="mt-3 inline-flex gap-1">
              <p>Bạn có tài khoản?</p>
              <NuxtLink to="/login">
                <TextButton>Đăng nhập</TextButton>
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
.signup-page {
  @apply min-h-screen justify-center bg-[#212529] text-white font-sans-serif;
}

.card-left {
  @apply grid grid-flow-row grid-cols-1 row-span-2 justify-items-center gap-y-5  items-stretch rounded-2xl  pt-[100px];
}
.card-right {
  @apply grid grid-cols-1 grid-flow-row gap-10 py-7 content-center items-center justify-center;
}
.img-after {
  @apply w-[100%] object-fill;
}

.space-grotesk-font {
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.submit-btn {
  @apply bg-[#6a38ff] text-xl text-center w-full h-full rounded-lg mt-2;
}
.login-btn {
  @apply text-[#6a38ff] hover:underline hover:text-indigo-500;
}
.title {
  @apply pt-[20px] px-[30px];
}
.desc {
  @apply px-[30px];
}
</style>

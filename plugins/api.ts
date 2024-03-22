export default defineNuxtPlugin({
  setup() {
    const api = $fetch.create({
      baseURL: "https://api.zentlemen.vn",
    });
    return {
      provide: {
        api,
      },
    };
  },
});

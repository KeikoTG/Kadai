export const useRuntimeConfig = () => ({
  region: process.env.NUXT_REGION ?? "ap-northeast-1",
  bucketName: process.env.NUXT_BUCKET_NAME ?? "km-poketest-1028",
});

console.debug(process.env.NUXT_BUCKET_NAME);
console.debug(process.env.NUXT_REGION);
<script lang="ts" setup>
const { data: page } = await useAsyncData(() => queryCollection('content').path('/').first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' , fatal: true })
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>

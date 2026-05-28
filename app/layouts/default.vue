<script lang="ts" setup>
import { asImageSrc } from "@prismicio/client";
import { useCart } from "~/composables/useCart";
import TScene from "~/components/TScene.vue";


const route = useRoute();
const { client } = usePrismic();
const { data: settings } = await useAsyncData("settings", () =>
  client.getSingle("settings")
);

useSeoMeta({
  title: () => settings.value?.data.site_title ?? "Farbe Films",
  ogTitle: () => settings.value?.data.site_title ?? "Farbe Films",
  description: () => settings.value?.data.meta_description,
  ogDescription: () => settings.value?.data.meta_description,
  ogImage: () => asImageSrc(settings.value?.data.meta_image) ?? "",
});

onMounted(() => {
  if (route.query.order === "completed") {
    useCart().clear();
    useRouter().replace({ path: route.path });
  }
});
</script>

<template>
  <div>
    <AppHeader :settings="settings" class="fixed top-0 left-0 right-0 z-10" />
    <slot />
    <AppFooter :settings="settings" />
    <TCanvas class="fixed top-0 left-0 right-0 h-lvh ">
      <TScene />
    </TCanvas>
  </div>
</template>

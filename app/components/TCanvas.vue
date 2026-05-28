<script lang="ts" setup>
import { OrbitControls } from "@tresjs/cientos";
import { TresCanvas } from "@tresjs/core";

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <figure
    class="transition-opacity delay-300 duration-1000 ease-in-out"
    :class="{ 'opacity-0': !mounted }"
  >
    <TresCanvas>
      <OrbitControls />
      <TresPerspectiveCamera :fov="45" :position="[0, 0, 20]" />
      <TresMesh>
        <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
        <TresMeshBasicMaterial color="orange" />
      </TresMesh>
    </TresCanvas>
  </figure>
</template>

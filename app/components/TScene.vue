<script lang="ts" setup></script>

<template>
  <TresMesh cast-shadow>
    <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
    <TresMeshBasicMaterial color="orange" />
  </TresMesh>
  <TresMesh receive-shadow :position="[0, 0, -4]">
    <TresTorusGeometry :args="[400, 400, 10, 10]" />
    <TresMeshStandardMaterial
      color="#ffffff"
      :roughness="0.5"
      :metalness="0.5"
    />
  </TresMesh>

  <TresDirectionalLight
    cast-shadow
    :position="[-8, 6, 20]"
    :intensity="0.5"
    :shadow-mapSize-width="512"
    :shadow-mapSize-height="512"
    :shadow-camera-left="-16"
    :shadow-camera-right="16"
    :shadow-camera-top="16"
    :shadow-camera-bottom="-16"
    :color="0xffffff"
  />

  <SoftShadows :size="40" :samples="10" />
</template>

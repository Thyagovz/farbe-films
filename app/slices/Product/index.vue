<script setup lang="ts">
import { asText, type Content, isFilled } from "@prismicio/client";
import DescriptionList from "~/slices/Product/DescriptionList.vue";
import PassThrough from "~/slices/Product/PassThrough.vue";
import Div from "~/slices/Product/Div.vue";
import DescriptionTerm from "~/slices/Product/DescriptionTerm.vue";
import DescriptionDetails from "~/slices/Product/DescriptionDetails.vue";
import { SlideIn } from "#components";
import type { StripeProduct } from "#shared/types/stripe";
import { formatPrice } from "~/utils/formatPrice";

const props = defineProps(
  getSliceComponentProps<
    Content.ProductSlice,
    {
      stripeProducts: Record<string, StripeProduct>;
    }
  >()
);

const product = computed(() => {
  const prismicProduct = props.slice.primary.product;

  if (
    !isFilled.contentRelationship(prismicProduct) ||
    !prismicProduct.data?.stripe_id
  ) {
    return undefined;
  }

  const stripeProduct =
    props.context.stripeProducts[prismicProduct.data?.stripe_id];

  if (!stripeProduct) {
    return undefined;
  }

  return {
    ...prismicProduct,
    stripeProduct,
  };
});

const { items, upsertItem } = useCart();

const quantity = ref(1);
function setQuantity(value: number) {
  quantity.value = Math.max(1, value);
}
function onSubmit(event: Event) {
  event.preventDefault();

  if (!product.value) {
    return;
  }

  const maybeCartQuantity =
    items.value[product.value.stripeProduct.id]?.quantity ?? 0;

  upsertItem({
    product: product.value.stripeProduct,
    quantity: maybeCartQuantity + quantity.value,
    name: asText(product.value.data?.name) ?? "",
  });

  window.alert("onSubmit");

  setQuantity(1);
}
</script>

<template>
  <SlideIn
    v-if="product"
    as="article"
    class="bounded rich-text min-h-[150vh] flex flex-col justify-center"
  >
    <header :id="product.uid" class="rich-text pt-[25vh]">
      <PrismicRichText :field="product.data?.name" />
      <p aria-label="Price">
        {{ formatPrice(product.stripeProduct.price?.amount) }}
      </p>
    </header>
    <section class="rich-text">
      <h3 class="sr-only">Description</h3>
      <PrismicRichText :field="product.data?.description" />
    </section>
    <section class="rich-text">
      <h3 class="sr-only">Characteristics</h3>
      <PrismicTable
        :field="product.data?.characteristics"
        :components="{
          table: DescriptionList,
          tbody: PassThrough,
          tr: Div,
          th: DescriptionTerm,
          td: DescriptionDetails,
        }"
      />
    </section>
    <form
      class="mt-16 text-sm flex max-w-[calc(40ch+1rem)] -ml-4 items-start"
      @submit="onSubmit"
    >
      <div class="flex-1 flex items-center">
        <button class="cta" type="button" @click="setQuantity(quantity - 1)">
          -
        </button>
        <div class="flex-1 text-center">{{ quantity }}</div>
        <button class="cta" type="button" @click="setQuantity(quantity + 1)">
          +
        </button>
      </div>
      <div class="flex-1">
        <button class="w-full cta primary" type="submit">Add to cart</button>
        <ClientOnly>
          <p
            class="text-center"
            :class="{ invisible: !items[product.stripeProduct?.id]?.quantity }"
          >
            <NuxtLink to="/#cart" d class="cta muted">
              {{ items[product.stripeProduct?.id]?.quantity }} in cart
            </NuxtLink>
          </p></ClientOnly
        >
      </div>
    </form>
  </SlideIn>
  <SlideIn
    v-else
    as="article"
    class="bounded rich-text min-h-[150vh] flex flex-col justify-center"
  >
    <p>Product not found</p>
  </SlideIn>
</template>

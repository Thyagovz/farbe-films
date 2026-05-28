// server/api/products.get.ts
import { stripe } from "#server/utils/stripe";
import type { StripeProduct } from "#shared/types/stripe";

export default defineEventHandler(async () => {
  const products = await stripe.products.list({
    active: true,
  });

  const prices = await stripe.prices.list({
    active: true,
  });

  const productMap: Record<string, StripeProduct> = {};

  for (const product of products.data) {
    const price = prices.data.find((p) => p.product === product.id);

    productMap[product.id] = {
      id: product.id,
      price: price
        ? {
            id: price.id,
            amount: price.unit_amount,
          }
        : undefined,
    };
  }

  return productMap;
});

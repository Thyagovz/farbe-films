export function formatPrice(amount: number | null | undefined): string {
  if (amount == null) return "€0,00";

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(amount / 100);
}

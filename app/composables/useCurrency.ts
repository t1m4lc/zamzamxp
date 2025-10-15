export const useCurrency = () => {
  const { locale, t } = useI18n();

  // Exchange rate USD to EUR (you can make this dynamic later)
  const USD_TO_EUR = 0.92;

  const formatPrice = (priceInUSD: number): string => {
    if (locale.value === "fr") {
      const priceInEUR = Math.round(priceInUSD * USD_TO_EUR);
      return `${priceInEUR}€`;
    }
    return `$${priceInUSD}`;
  };

  const getPrice = (priceInUSD: number): number => {
    if (locale.value === "fr") {
      return Math.round(priceInUSD * USD_TO_EUR);
    }
    return priceInUSD;
  };

  const getCurrencySymbol = (): string => {
    return locale.value === "fr" ? "€" : "$";
  };

  const getCurrencyCode = (): string => {
    return locale.value === "fr" ? "EUR" : "USD";
  };

  return {
    formatPrice,
    getPrice,
    getCurrencySymbol,
    getCurrencyCode,
  };
};

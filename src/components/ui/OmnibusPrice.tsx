import { formatPrice } from "@/data/products";

interface OmnibusPriceProps {
  lowestPrice30Days: number;
  className?: string;
}

export function OmnibusPrice({
  lowestPrice30Days,
  className = "",
}: OmnibusPriceProps) {
  return (
    <p
      className={`font-sans text-[11px] leading-relaxed text-luxury/50 ${className}`}
      aria-label={`Najniższa cena z ostatnich 30 dni: ${formatPrice(lowestPrice30Days)}`}
    >
      Najniższa cena z 30 dni przed obniżką:{" "}
      <span className="text-luxury/70">{formatPrice(lowestPrice30Days)}</span>
    </p>
  );
}

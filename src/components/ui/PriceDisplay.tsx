import { formatPrice } from "@/data/products";
import { OmnibusPrice } from "./OmnibusPrice";

interface PriceDisplayProps {
  price: number;
  lowestPrice30Days: number;
  variant?: "dark" | "light";
}

export function PriceDisplay({
  price,
  lowestPrice30Days,
  variant = "dark",
}: PriceDisplayProps) {
  const priceColor = variant === "dark" ? "text-obsidian" : "text-luxury";

  return (
    <div className="space-y-1">
      <p
        className={`font-serif text-2xl tracking-wide md:text-3xl ${priceColor}`}
      >
        {formatPrice(price)}
      </p>
      <OmnibusPrice
        lowestPrice30Days={lowestPrice30Days}
        className={
          variant === "dark"
            ? "text-obsidian/50 [&_span]:text-obsidian/70"
            : ""
        }
      />
    </div>
  );
}

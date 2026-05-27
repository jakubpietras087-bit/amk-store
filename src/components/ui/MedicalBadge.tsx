import { ShieldCheck } from "lucide-react";

export function MedicalBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 border border-champagne/40 bg-champagne/5 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-luxury text-champagne">
      <ShieldCheck className="h-3 w-3 shrink-0" strokeWidth={1.5} />
      Wyrób Medyczny Klasy I
    </span>
  );
}

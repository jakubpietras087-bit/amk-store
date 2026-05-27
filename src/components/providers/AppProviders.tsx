"use client";

import type { ReactNode } from "react";
import { CheckoutProvider } from "@/contexts/CheckoutContext";
import { CookieProvider } from "@/contexts/CookieContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <CookieProvider>
      <CheckoutProvider>{children}</CheckoutProvider>
    </CookieProvider>
  );
}

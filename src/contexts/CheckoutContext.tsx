"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/data/products";

interface CheckoutContextValue {
  isOpen: boolean;
  selectedProduct: Product | null;
  openExpressCheckout: (product: Product) => void;
  closeExpressCheckout: () => void;
}

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openExpressCheckout = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeExpressCheckout = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
    window.setTimeout(() => setSelectedProduct(null), 400);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      selectedProduct,
      openExpressCheckout,
      closeExpressCheckout,
    }),
    [isOpen, selectedProduct, openExpressCheckout, closeExpressCheckout],
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout(): CheckoutContextValue {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within CheckoutProvider");
  }
  return context;
}

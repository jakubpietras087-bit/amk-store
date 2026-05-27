export interface ProductSpecs {
  wymiary: string;
  wypelnienie: string;
  pokrowiec: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  lowestPrice30Days: number;
  specs: ProductSpecs;
  collectionLabel: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "cervical-prestigio",
    slug: "cervical-prestigio",
    name: "AMK Cervical Prestigio",
    subtitle: "Poduszka pod kark",
    description:
      "Zniweluj napięcie migrenowe i ból kręgosłupa szyjnego. Idealne podparcie lordozy.",
    price: 499,
    lowestPrice30Days: 549,
    collectionLabel: "Cervical Prestigio",
    specs: {
      wymiary: "42 × 28 × 9 cm (wysokość profilu lordozy 7 cm)",
      wypelnienie:
        "Pianka memory z pamięcią kształtu, gęstość 55 kg/m³, certyfikat Oeko-Tex® Standard 100",
      pokrowiec:
        "Jedwab naturalny 22 momme z warstwą bambusową, zdejmowany, pranie 30°C",
    },
  },
  {
    id: "somnus-anatomica",
    slug: "somnus-anatomica",
    name: "AMK Somnus Anatomica",
    subtitle: "Poduszka pod głowę",
    description:
      "Ortopedyczna perfekcja snu. Anatomia dopasowana do każdej pozycji ciała.",
    price: 549,
    lowestPrice30Days: 599,
    collectionLabel: "Somnus Anatomica",
    specs: {
      wymiary: "60 × 40 × 12 cm (strefy barkowe i szyjne)",
      wypelnienie:
        "Pianka memory z pamięcią kształtu, dwustrefowa, reakcja termiczna 3–5 s",
      pokrowiec:
        "Jedwab z bawełnianą podszewką, oddychający splot satynowy, pranie 30°C",
    },
  },
  {
    id: "genu-comfort",
    slug: "genu-comfort",
    name: "AMK Genu Comfort",
    subtitle: "Poduszka między kolana",
    description:
      "Stabilizacja miednicy i odciążenie dolnego odcinka pleców dla śpiących na boku.",
    price: 429,
    lowestPrice30Days: 479,
    collectionLabel: "Genu Comfort",
    specs: {
      wymiary: "25 × 20 × 15 cm (kształt ergonomiczny „klepsydra”)",
      wypelnienie:
        "Pianka memory z pamięcią kształtu, średnia twardość, antybakteryjna impregnacja",
      pokrowiec: "Jedwab z dodatkiem lyocell, hipoalergiczny, pranie 30°C",
    },
  },
  {
    id: "sedile-premium",
    slug: "sedile-premium",
    name: "AMK Sedile Premium",
    subtitle: "Poduszka pod pośladki",
    description:
      "Luksusowa ulga dla kręgosłupa podczas wielogodzinnej pracy przy biurku lub w podróży.",
    price: 599,
    lowestPrice30Days: 649,
    collectionLabel: "Sedile Premium",
    specs: {
      wymiary: "45 × 38 × 8 cm (otwór centralny redukujący ucisk)",
      wypelnienie:
        "Pianka memory z pamięcią kształtu, wysoka gęstość 60 kg/m³, stabilizacja miednicy",
      pokrowiec:
        "Jedwab antypoślizgowy z gumą silikonową, pokrowiec zdejmowany, pranie 30°C",
    },
  },
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

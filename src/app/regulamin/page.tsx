import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin Sklepu | AMK",
  description: "Regulamin sklepu internetowego AMK Sp. z o.o.",
};

export default function RegulaminPage() {
  return (
    <LegalPageLayout title="Regulamin Sklepu">
      <section>
        <h2 className="font-serif text-xl text-obsidian">§1 Postanowienia ogólne</h2>
        <p>
          Niniejszy Regulamin określa zasady korzystania ze sklepu internetowego
          AMK dostępnego pod adresem amk.pl, prowadzonego przez AMK Sp. z o.o. z
          siedzibą w Warszawie.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-obsidian">§2 Składanie zamówień</h2>
        <p>
          Zamówienia można składać 24 godziny na dobę, 7 dni w tygodniu. Umowa
          sprzedaży zostaje zawarta z chwilą potwierdzenia przyjęcia zamówienia
          przez Sprzedawcę, wysłanego na adres e-mail Klienta.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-obsidian">§3 Ceny i płatności</h2>
        <p>
          Ceny produktów podane na stronie są cenami brutto w PLN i zawierają
          podatek VAT. Informacja o najniższej cenie z 30 dni przed obniżką
          wyświetlana jest zgodnie z dyrektywą Omnibus (UE) 2019/2161.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-obsidian">§4 Prawo odstąpienia</h2>
        <p>
          Konsument ma prawo odstąpić od umowy w terminie 14 dni bez podania
          przyczyny, z wyjątkiem wyrobów medycznych rozpakowanych ze względów
          higienicznych, zgodnie z art. 38 pkt 5 ustawy o prawach konsumenta.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-obsidian">§5 Reklamacje</h2>
        <p>
          Reklamacje można składać drogą elektroniczną na adres
          reklamacje@amk.pl lub za pomocą formularza dostępnego w sekcji Zwroty
          i Reklamacje. AMK rozpatruje reklamacje w terminie 14 dni roboczych.
        </p>
      </section>
    </LegalPageLayout>
  );
}

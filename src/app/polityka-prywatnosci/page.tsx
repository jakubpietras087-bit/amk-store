import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności i RODO | AMK",
  description:
    "Polityka prywatności i informacja o przetwarzaniu danych osobowych AMK Sp. z o.o.",
};

export default function PolitykaPrywatnosciPage() {
  return (
    <LegalPageLayout title="Polityka Prywatności i RODO">
      <section>
        <h2 className="font-serif text-xl text-obsidian">Administrator danych</h2>
        <p>
          Administratorem Twoich danych osobowych jest AMK Sp. z o.o., ul.
          Przykładowa 12, 00-001 Warszawa, e-mail: iod@amk.pl.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-obsidian">Cele i podstawy przetwarzania</h2>
        <p>
          Przetwarzamy dane w celu realizacji zamówień (art. 6 ust. 1 lit. b
          RODO), marketingu bezpośredniego na podstawie zgody (art. 6 ust. 1
          lit. a RODO) oraz wypełnienia obowiązków prawnych, w tym podatkowych
          i rachunkowych.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-obsidian">Twoje prawa</h2>
        <p>
          Przysługuje Ci prawo dostępu, sprostowania, usunięcia, ograniczenia
          przetwarzania, przenoszenia danych, sprzeciwu oraz cofnięcia zgody w
          dowolnym momencie. Masz prawo wniesienia skargi do Prezesa UODO.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-obsidian">Pliki cookie</h2>
        <p>
          Serwis wykorzystuje pliki cookie niezbędne, analityczne i
          marketingowe. Preferencjami zarządzasz poprzez baner zgody lub ustawienia
          zaawansowane dostępne na stronie głównej.
        </p>
      </section>
      <section>
        <h2 className="font-serif text-xl text-obsidian">Okres przechowywania</h2>
        <p>
          Dane zamówień przechowujemy przez okres wymagany przepisami prawa (do
          6 lat). Dane marketingowe — do momentu wycofania zgody lub wniesienia
          sprzeciwu.
        </p>
      </section>
    </LegalPageLayout>
  );
}

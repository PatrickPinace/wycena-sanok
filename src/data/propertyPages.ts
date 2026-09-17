export interface PropertyPage {
  slug: string;
  navLabel: string;
  shortLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  ctaText: string;
  scopeTitle: string;
  scopeIntro: string;
  scopeItems: string[];
  purposesTitle: string;
  purposes: string[];
  documentsTitle: string;
  documents: string[];
}

export const propertyPages: PropertyPage[] = [
  {
    slug: 'wycena-mieszkania-sanok',
    navLabel: 'Lokale mieszkalne, także w budowie',
    shortLabel: 'Wycena mieszkania',
    h1: 'Wycena mieszkania Sanok',
    metaTitle: 'Wycena mieszkania Sanok — operat szacunkowy | Zbigniew Gilarski',
    metaDescription:
      'Wycena mieszkania w Sanoku i okolicy — operat szacunkowy do kredytu, sprzedaży, spadku lub podziału majątku. Rzeczoznawca majątkowy, uprawnienia nr 1376.',
    eyebrow: 'Lokale mieszkalne · spółdzielcze i odrębna własność',
    lead: 'Wyceniam mieszkania w Sanoku i powiecie sanockim — zarówno z odrębną własnością, jak i spółdzielczym własnościowym prawem do lokalu, także lokale w budowie.',
    ctaText: 'wyceny mieszkania',
    scopeTitle: 'Co obejmuje wycena mieszkania',
    scopeIntro:
      'Operat szacunkowy mieszkania uwzględnia lokalizację, stan techniczny i standard wykończenia, piętro i układ, a także aktualne ceny transakcyjne podobnych lokali w Sanoku.',
    scopeItems: [
      'Lokale z odrębną własnością',
      'Spółdzielcze własnościowe prawo do lokalu',
      'Mieszkania w budowie, na podstawie umowy deweloperskiej',
      'Mieszkania z najmem lub innym obciążeniem',
    ],
    purposesTitle: 'Do czego najczęściej służy wycena mieszkania',
    purposes: [
      'Zabezpieczenie kredytu hipotecznego',
      'Sprzedaż lub zakup na podstawie realnej wartości rynkowej',
      'Podział majątku lub zniesienie współwłasności',
      'Ustalenie podatku od spadku lub darowizny',
    ],
    documentsTitle: 'Dokumenty potrzebne do wyceny mieszkania',
    documents: [
      'Numer księgi wieczystej lub zaświadczenie ze spółdzielni',
      'Akt notarialny lub umowa deweloperska',
      'Rzut lokalu i metraż powierzchni użytkowej',
      'Umowa przedwstępna — przy wycenie do kredytu',
    ],
  },
  {
    slug: 'wycena-domu-sanok',
    navLabel: 'Działki zabudowane budynkami mieszkalnymi',
    shortLabel: 'Wycena domu',
    h1: 'Wycena domu Sanok',
    metaTitle: 'Wycena domu Sanok — operat szacunkowy | Zbigniew Gilarski',
    metaDescription:
      'Wycena domu jednorodzinnego w Sanoku i okolicy — operat szacunkowy do kredytu, sprzedaży lub ubezpieczenia. Rzeczoznawca majątkowy, uprawnienia nr 1376.',
    eyebrow: 'Domy jednorodzinne · działki zabudowane',
    lead: 'Wyceniam domy jednorodzinne oraz działki zabudowane budynkami mieszkalnymi na terenie Sanoka i powiatu sanockiego.',
    ctaText: 'wyceny domu',
    scopeTitle: 'Co obejmuje wycena domu',
    scopeIntro:
      'Operat uwzględnia powierzchnię i standard budynku, rok budowy i stan techniczny, wielkość i zagospodarowanie działki, a także dostęp do drogi i mediów.',
    scopeItems: [
      'Domy wolnostojące i w zabudowie bliźniaczej',
      'Domy w budowie lub wymagające dokończenia',
      'Domy z zabudową gospodarczą',
      'Nieruchomości z księgą wieczystą lub bez uregulowanego stanu prawnego',
    ],
    purposesTitle: 'Do czego najczęściej służy wycena domu',
    purposes: [
      'Zabezpieczenie kredytu hipotecznego',
      'Sprzedaż lub zakup na podstawie realnej wartości rynkowej',
      'Ustalenie podatku od spadku lub darowizny',
      'Cele ubezpieczeniowe',
    ],
    documentsTitle: 'Dokumenty potrzebne do wyceny domu',
    documents: [
      'Numer księgi wieczystej lub odpis KW',
      'Projekt budowlany lub inwentaryzacja budynku',
      'Pozwolenie na budowę i dziennik budowy',
      'Zawiadomienie o zakończeniu budowy',
    ],
  },
  {
    slug: 'wycena-dzialki-sanok',
    navLabel: 'Działki niezabudowane',
    shortLabel: 'Wycena działki',
    h1: 'Wycena działki Sanok',
    metaTitle: 'Wycena działki Sanok — operat szacunkowy | Zbigniew Gilarski',
    metaDescription:
      'Wycena działki niezabudowanej w Sanoku i okolicy — operat szacunkowy do sprzedaży, kredytu lub opłaty planistycznej. Rzeczoznawca majątkowy, uprawnienia nr 1376.',
    eyebrow: 'Działki niezabudowane · budowlane i rolne',
    lead: 'Wyceniam działki niezabudowane na terenie Sanoka i powiatu sanockiego — budowlane, rolne oraz z potencjałem inwestycyjnym.',
    ctaText: 'wyceny działki',
    scopeTitle: 'Co obejmuje wycena działki',
    scopeIntro:
      'Operat uwzględnia przeznaczenie w miejscowym planie zagospodarowania lub warunkach zabudowy, powierzchnię i kształt działki, dostęp do drogi i mediów oraz lokalizację.',
    scopeItems: [
      'Działki budowlane',
      'Działki rolne i rolno-budowlane',
      'Działki z rozpoczętą budową',
      'Działki bez dostępu do drogi publicznej',
    ],
    purposesTitle: 'Do czego najczęściej służy wycena działki',
    purposes: [
      'Sprzedaż lub zakup na podstawie realnej wartości rynkowej',
      'Zabezpieczenie kredytu bankowego',
      'Ustalenie opłaty adiacenckiej lub planistycznej',
      'Podział majątku lub zniesienie współwłasności',
    ],
    documentsTitle: 'Dokumenty potrzebne do wyceny działki',
    documents: [
      'Numer księgi wieczystej lub odpis KW',
      'Wypis z rejestru gruntów',
      'Wyrys z mapy ewidencyjnej',
      'Wypis z miejscowego planu zagospodarowania lub decyzja o warunkach zabudowy',
    ],
  },
  {
    slug: 'wycena-lokalu-uzytkowego-sanok',
    navLabel: 'Lokale użytkowe i nieruchomości komercyjne',
    shortLabel: 'Wycena lokalu użytkowego',
    h1: 'Wycena lokalu użytkowego Sanok',
    metaTitle: 'Wycena lokalu użytkowego i nieruchomości komercyjnej Sanok | Zbigniew Gilarski',
    metaDescription:
      'Wycena lokalu użytkowego i nieruchomości komercyjnej w Sanoku — operat szacunkowy do kredytu, sprzedaży lub najmu. Rzeczoznawca majątkowy, uprawnienia nr 1376.',
    eyebrow: 'Lokale użytkowe · nieruchomości komercyjne · kamienice',
    lead: 'Wyceniam lokale użytkowe, nieruchomości komercyjne, garaże i kamienice na terenie Sanoka i powiatu sanockiego.',
    ctaText: 'wyceny lokalu użytkowego',
    scopeTitle: 'Co obejmuje wycena lokalu użytkowego',
    scopeIntro:
      'Operat uwzględnia przeznaczenie i funkcję lokalu, standard i stan techniczny, lokalizację pod kątem działalności gospodarczej oraz aktualne stawki najmu na rynku lokalnym.',
    scopeItems: [
      'Lokale usługowe i handlowe',
      'Nieruchomości komercyjne i biurowe',
      'Kamienice',
      'Garaże i miejsca postojowe',
    ],
    purposesTitle: 'Do czego najczęściej służy wycena lokalu użytkowego',
    purposes: [
      'Zabezpieczenie kredytu bankowego',
      'Sprzedaż lub zakup na podstawie realnej wartości rynkowej',
      'Wniesienie aportu lub sprawozdania finansowe',
      'Negocjacje najmu lub sprzedaży',
    ],
    documentsTitle: 'Dokumenty potrzebne do wyceny lokalu użytkowego',
    documents: [
      'Numer księgi wieczystej lub odpis KW',
      'Akt notarialny lub inny dokument potwierdzający tytuł prawny',
      'Rzut lokalu i metraż powierzchni użytkowej',
      'Umowy najmu, jeśli lokal jest wynajmowany',
    ],
  },
];

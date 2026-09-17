/**
 * Dokleja skonfigurowany base path (Astro `base`, np. "/wycena-sanok/") przed
 * ścieżką zaczynającą się od "/". Pozwala trzymać w komponentach zwykłe
 * ścieżki bezwzględne ("/mapa/") i działać zarówno w korzeniu domeny,
 * jak i pod subpath (np. GitHub Pages).
 *
 * Sam fragment ("#oferta", bez wiodącego "/") zostaje bez zmian - to kotwica
 * na tej samej stronie, base jej nie dotyczy.
 */
export function withBase(path: string): string {
  if (path.startsWith('#')) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${normalizedBase}${path}`;
}

---
title: Vyhledávání dat v Bluesky
sidebar:
  label: Vyhledávání
  order: 2
---

### Vyhledávání podle klíčových slov

Základním způsobem vyhledávání je vyhledávání podle klíčových slov. Klíčová slova mohou být jakékoli slovo, které se
vyskytuje v textu, názvu nebo popisu postu. Pokud slova umístíte do uvozovek, vyhledávání bude hledat přesnou shodu.
Například vyhledávání `"mám hlad"` najde pouze posty, které obsahují
[přesně tuto frázi](https://bsky.app/search?q=%22m%C3%A1m+hlad%22).

### Vyhledávání podle účtu `to:` a `mentions:`

Pro vyhledání postů, které zmínily [konkrétního uživatele](https://bsky.app/search?q=to%3Absky.cz), můžete použít `to:`
nebo `mentions:`. Například `to:bsky.cz` najde všechny posty, které byly zaslány uživateli `bsky.cz`. `mentions:bsky.cz`
najde všechny posty, které zmínily uživatele `bsky.cz`. Další možnost je vyhledávat text `@bsky.cz`

### Hledání ve svém obsahu `from:me`

Pokud chcete vyhledávat pouze ve obsahu, stačí přidat `from:me` a poté uvést klíčová slova, která chcete vyhledat.
Případně můžete vyhledávat `mentions:me`, což vyfiltruje všechny posty, které zmínily váš účet.

### Hledání odkazů na doménu `domain:`

Pokud chcete vyhledat všechny posty, které obsahují odkaz na konkrétní doménu, můžete použít `domain:`. Například
[`domain:irozhlas.cz`](https://bsky.app/search?q=domain%3Airozhlas.cz) najde všechny posty, které obsahují odkaz na
doménu `irozhlas.cz`.

### Hledání podle jazyka `lang:`

Vyhledávání podle jazyka je možné pomocí `lang:` a [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
kódu jazyka. Takže například `lang:cs` najde všechny posty, které jsou psány v češtině.

### Hledání podle data `since:` a `until:`

Formát `YYYY-MM-DD` nebo `YYYY-MM-DDTHH:MM:SSZ` včetně UTC offsetu. Například
`from:me since:2024-01-01 until:2024-01-30` vrátí
[všechny posty](https://bsky.app/search?q=from%3Ame+since%3A2024-01-01+until%3A2024-01-30), které jste vytvořili mezi 1.
a 30. lednem 2024.

:::tip[Co dál?]
Podívejte se do [dokumentace](https://bsky.social/about/blog/05-31-2024-search) pro další informace o
vyhledávání.
:::

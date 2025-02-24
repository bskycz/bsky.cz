---
title: České statistiky
---

Statistiky týkající se českých uživatelů najdete na webu https://stats.bsky.cz.

## Jak to funguje?

Pro tvorbu statistik se používá [bsky-cz-backend](https://github.com/bskycz/bsky-cz-backend) (Javascript), který sbírá data každých 30 minut. Jako databáze se využívá SQLite3 (odkaz na celý export níže).

SQLite znamená že databáze je jeden soubor, který si můžete stáhnout (viz `archive.sql` níže) a pracovat s ním pomocí nějakého SQL klienta, jako například DbGate.

## Aktuální data

Datové soubory: https://data.bsky.cz/

- `bundle.json` - vygenerovaná data pro web bsky.cz, obsahuje seznam uživatelů
- `archive.sql.zst` - SQL export (celá databáze), obsahuje všechny účty a příspěvky, komprimováno pomocí ZStandard
- `bundles/*` - předchozí bundles
- `archives/*` - předchozí SQL exporty
---
title: Embed Bluesky příspěvků
---

Bluesky podporuje oEmbed formát, takže příspěvky můžete snadno vkládat na své webové stránky. Stačí použít odkaz na
příspěvek a Bluesky se postará o zbytek.

Oficiální oEmbed endpoint pro Bluesky příspěvky je [https://embed.bsky.app/oembed](https://embed.bsky.app/oembed), který
přijímá následující HTTP GET query parametry:

- `url` (povinný): bsky.app nebo AT-URI odkazující na příspěvek
- `format` (volitelný): json je výchozí a jediný podporovaný formát
- `maxwidth` (volitelný, celé číslo): rozsah je `220` až `600`; výchozí je `600`
- `maxheight` (volitelný, celé číslo): součást oEmbed specifikace, ale pro embedy Bluesky příspěvků se nepoužívá

Více informací naleznete v [dokumentaci](https://docs.bsky.app/docs/advanced-guides/oembed)

## Komunitní embed knihovna

Bluesky příspěvky je možné vkládat na web také prostřednictvím
komunitního [open-source](https://github.com/mary-ext/bluesky-embed)
nástroje [Bluesky Embed](https://mary-ext.github.io/bluesky-embed/).
# HDA

Особисті додатки під ім’ям HDA. Не компанія і не студія — лише видавець у магазинах додатків.

Цей репозиторій — статичний сайт (GitHub Pages) зі сторінками додатків і політикою конфіденційності.

**Сайт:** [https://dmitryguzov.github.io/hda.github.io/](https://dmitryguzov.github.io/hda.github.io/)  
Зараз у staging: `robots.txt` Disallow + `noindex` на сторінках (пошуковики не індексують; хто знає URL — може відкрити).

---

## English

Personal apps under the HDA name. Not a company or a studio — just the publisher name in the app stores.

This repository is a static site (GitHub Pages) with app landing pages and privacy policies.

**Live:** [https://dmitryguzov.github.io/hda.github.io/](https://dmitryguzov.github.io/hda.github.io/)  
Currently staging: `robots.txt` Disallow + `noindex` on pages (not indexed; anyone with the URL can still open it).

---

## Додатки / Apps

| Додаток / App | Опис / Description | Сторінка / Page |
| --- | --- | --- |
| **Keepbay** | Офлайн-облік авто, витрат, поїздок і нагадувань | [`keepbay/`](keepbay/) |
| **Capsa** | Локальний десктопний трекер проєктів, задач і заробітку | [`capsa/`](capsa/) |

## Структура / Structure

```
├── index.html          # Хаб HDA / HDA hub
├── privacy.html        # Редірект на Keepbay privacy / Redirect
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── keepbay/            # Keepbay
├── capsa/              # Capsa
├── css/                # Стилі / Styles
├── js/                 # Скрипти / Scripts
└── assets/             # Іконки, OG-зображення / Icons & OG images
```

## Локальний перегляд / Local preview

Сайт статичний — достатньо відкрити `index.html` у браузері або підняти будь-який локальний HTTP-сервер у корені репозиторію.

```bash
# приклад / example
npx serve .
```

Якщо з’явиться власний домен — оновіть абсолютні URL у `robots.txt`, `sitemap.xml` і в `og:` / `canonical` мета-тегах на сторінках.

## Ліцензія / License

Контент і код сайту належать HDA. Усі права захищено, якщо не зазначено інше.

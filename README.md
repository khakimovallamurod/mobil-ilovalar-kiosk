# Mobil ilovalar · IT Markaz kiosk

Monitor uçun avtomatik almaşadigan sahifa. Har bir mobil ilova navbat bilan körinadi, ilova rasmlari esa telefon ekranida özi almaşib turadi.

## Işga tuşiriş

- `index.html` faylini brauzerda oçing. Töliq ekran uçun **F** tugmasini bosing.
- GitHub Pages'ga butun papkani yuklang (`index.html` ildizda tursin).

Tugmalar: **→ / ←** keyingi va oldingi ilova, **Probel** pauza, **F** töliq ekran. Sensorli ekranda çapga yoki öngga suring.

## Rasm qöşiş

Har bir ilovaning öz papkasi bor:

| Ilova | Papka |
|---|---|
| CHILD.INFO | `images/childinfo/` |
| Todo App | `images/todoapp/` |
| ÖzKey | `images/ozkey/` |
| Navai Tour | `images/navaitour/` |
| SamDU AI | `images/samduai/` |

1. Rasmlarni papkaga **raqam bilan** nomlab joylang: `1.jpg`, `2.jpg`, `3.png` va hokazo. `jpg`, `jpeg`, `png` va `webp` qabul qilinadi.
2. Raqamlar ketma-ket bölsin: 1, 2, 3... Oraliqda ikkita raqam tuşib qolsa, keyingi rasmlar körinmaydi.
3. Ilova logosi uçun papkaga `logo.png` qöying. Logo bölmasa, ilova nomining birinçi harfi körsatiladi.

Sahifa papkadagi rasmlarni özi topadi, kodga hiç narsa yoziş şart emas. Rasm köp bölsa, ilova ekranda uzoqroq turadi va hamma rasmlar körsatiladi.

Nima uçun raqamli nomlar: oddiy veb-sahifa papka içidagi fayllar röyxatini köra olmaydi. Şuning uçun sahifa `1`, `2`, `3`... nomli rasmlarni tartib bilan qidiradi.

## Matn va sozlamalar

Barça matnlar, havolalar va ranglar `js/data.js` faylida:

- `slideSeconds`: har bir ilova necha soniya turadi (standart 16).
- `shotSeconds`: rasmlar necha soniyada almaşadi (standart 3.5).
- `introSeconds`: kiriş slaydi vaqti, `0` qilsangiz kiriş slaydi çiqmaydi.
- Yangi ilova qöşiş uçun `apps` röyxatiga yangi blok qöşing va `images/` içida uning `id` nomi bilan papka oçing.

QR kodlar `link` havolasidan avtomatik yasaladi, internet şart emas. Şriftlar Google Fonts'dan yuklanadi. Internet bölmasa, tizim şrifti işlatiladi.

# 🚀 Abdulahad Mahmudjonov — Portfolio & Backend System

Ushbu loyiha **Abdulahad Mahmudjonov** (Java Backend Developer) uchun yaratilgan **mukammal, zamonaviy, to'liq responsiv** portfolio va backend tizimidir.

---

## 🌟 Asosiy Xususiyatlar (Key Features)

### 1. 🌓 Oq va Qora Fon (Dark / Light Theme)
- Saytning yuqori o'ng qismidagi tugma orqali mavzuni **Dark** (quyosh/oy animatsiyasi bilan) va **Light** fonga bir zumda o'tkazish mumkin.
- Barcha matnlar, kartochkalar, soyalar, borderlar va navigatsiya ikkala rejimda ham ideal kontrastga ega.
- Tanlangan mavzu brauzer xotirasida (`localStorage`) saqlanadi va sahifa yangilansa ham yo'qolmaydi.

### 2. 🌍 3 xil Til (Multi-Language: UZ, RU, EN)
- Sayt **O'zbekcha (UZ)**, **Ruscha (RU)** va **Inglizcha (EN)** tillarida to'liq ishlaydi.
- Sahifadagi **har bir matn**, loyihalar tavsifi, ko'nikmalar, modallar, aloqa shakli va bildirishnomalar professional tarzda tarjima qilingan.
- Sahifani qayta yuklamasdan til bir zumda o'zgaradi va `localStorage`da saqlanadi.
- Hero bo'limidagi dinamik **Typewriter animatsiyasi** tanlangan tilga mos ravishda avtomatik o'zgaradi.

### 3. ☕ Mukammal Java 21 REST API Backend
- `backend/src/com/abdulahad/portfolio/BackendServer.java` — **Java 21 Virtual Threads** asosida yozilgan, hech qanday qo'shimcha tashqi kutubxonalarsiz ishlaydigan tezkor HTTP & REST server.
- **REST API Endpointlari:**
  - `GET /api/health` — Server holati, Java versiyasi, ish vaqti va xotira (RAM) hisoboti.
  - `GET /api/stats` — Tashrif buyuruvchilar soni (Visitor counter) va loyihalar statistikasi.
  - `GET /api/profile` — Ishlab chiquvchining to'liq profili va ma'lumotlari.
  - `GET /api/projects` — Barcha loyihalar ma'lumotlari (JSON).
  - `POST /api/contact` — Aloqa formasidan yuborilgan xabarlarni qabul qiladi, validatsiya qiladi va `backend/data/messages.json` fayliga saqlaydi!
  - `GET /api/messages` — Serverga kelib tushgan barcha xabarlar ro'yxati (Admin).
  - `GET /` — Barcha frontend fayllarini (`index.html`, `css`, `js`, `img`) avtomatik uzatadi (Static File Server).
- **Oflayn / Mustaqil rejim:** Agar backend ishga tushirilmagan bo'lsa ham, frontend to'liq ishlaydi (aloqa shakli xabarlarni `localStorage`ga xavfsiz saqlaydi va foydalanuvchiga Telegram havolasini taqdim etadi).

### 4. 💻 Interaktiv Frontend Komponentlari
- **Dinamik Typewriter:** Hero bo'limida kasbiy rollarning navbatma-navbat yozilib o'chishi.
- **Interaktiv Loyihalar Modali:** Har bir loyiha ustiga bosganda uning arxitekturasi, imkoniyatlari va texnologiyalari ko'rinadi.
- **Filterlash:** Ko'nikmalar (Backend, Baza, Asboblar, Arxitektura) va Loyihalarni toifalar bo'yicha saralash.
- **CV Ko'rish & Chop etish:** Bir klikda rezyumeni ko'rish va chop etish (Print / PDF).
- **JSON Terminal:** Nusxa olish tugmasi bilan chiroyli dasturchi profili.
- **Toast Bildirishnomalar:** Til o'zgarganda, nusxa olinganda yoki xabar yuborilganda chiroyli pop-up bildirishnomalar.
- **Mobil Moslashuvchanlik:** Telefon, planshet va kompyuter ekranlariga 100% moslashuvchan.

---

## ⚡ Qanday Ishga Tushirish Kerak? (How to Run)

### 1-usul: Java Backend bilan (Tavsiya etiladi 🚀)
Loyihaning asosiy papkasidagi tayyor skriptni ishga tushiring:
- **Windows Batch:** `run-backend.bat` fayliga sichqoncha bilan ikki marta bosing.
- yoki **PowerShell:**
  ```powershell
  .\run-backend.ps1
  ```
Server ishga tushgach, brauzeringizda quyidagi manzilni oching:
👉 **`http://localhost:8080`**

### 2-usul: Python orqali (Muqobil)
Agar tizimingizda Python bo'lsa:
```bash
python server.py
```
Brauzerda: `http://localhost:8080`

### 3-usul: To'g'ridan-to'g'ri brauzerda ochish
Hech qanday server ishga tushirmasdan, shunchaki `index.html` faylini brauzerda (Chrome, Edge, Firefox) ochishingiz mumkin. Barcha animatsiyalar, mavzular va tillar to'liq ishlaydi!

---

## 📁 Loyiha Strukturasi (Project Tree)

```
Partfolio/
├── backend/
│   ├── src/com/abdulahad/portfolio/
│   │   └── BackendServer.java   # Java 21 REST & Static server
│   ├── bin/                     # Kompilyatsiya qilingan .class fayllar
│   └── data/
│       └── messages.json        # Saqlangan kontakt xabarlari
├── css/
│   └── style.css                # Mukammal Dark & Light mavzuli CSS
├── js/
│   ├── script.js                # Asosiy dastur mantig'i, modallar, API
│   └── translations.js          # UZ, RU, EN lug'atlari
├── img/
│   ├── profile.svg              # Dasturchi vektor avatar surati
│   ├── project-restaurant.svg   # Restoran tizimi illyustratsiyasi
│   ├── project-education.svg    # CRM tizimi illyustratsiyasi
│   ├── project-banking.svg      # Bank API arxitekturasi
│   └── project-bot.svg          # Telegram bot vizuali
├── 404.html                     # Zamonaviy 404 xatolik sahifasi
├── index.html                   # Asosiy veb-sahifa
├── pom.xml                      # Maven / IntelliJ IDEA konfiguratsiyasi
├── run-backend.bat              # 1-klikda Java serverni ishga tushirish
├── run-backend.ps1              # PowerShell server runner
├── server.py                    # Python muqobil server
└── README.md                    # Loyiha qo'llanmasi
```

---

## 👨‍💻 Muallif
**Abdulahad Mahmudjonov** — Java Backend Developer  
- **Telegram:** [@Abdulahad_Mahmudjonov](https://t.me/Abdulahad_Mahmudjonov)  
- **GitHub:** [github.com/AbdulahadMahmudjonov](https://github.com/AbdulahadMahmudjonov)  
- **Email:** mahmudjonov.dev@gmail.com  

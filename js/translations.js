/**
 * Multi-language dictionary for Abdulahad Mahmudjonov's Portfolio
 * Languages supported: UZ (Uzbek), RU (Russian), EN (English)
 */
const translations = {
  uz: {
    // Navigation
    nav_home: "Bosh sahifa",
    nav_about: "Men haqimda",
    nav_skills: "Ko'nikmalar",
    nav_projects: "Loyihalar",
    nav_roadmap: "Yo'l xaritasi",
    nav_contact: "Aloqa",
    nav_cv: "CV",

    // Hero
    hero_badge: "HAMKORLIKKA TAYYOR",
    hero_greeting: "Salom, men",
    hero_name: "Abdulahad Mahmudjonov",
    hero_roles: [
      "Java Backend Developer",
      "Spring Boot & REST API Mutaxassisi",
      "Yuqori Samaradorlikdagi Arxitektura",
      "Ma'lumotlar Bazalari & SQL Ishqibozi"
    ],
    hero_slogan: "Murakkab muammolarga — sodda, tezkor, xavfsiz va ishonchli backend yechimlar. Yuqori yuklamali tizimlar va toza kod yozishga intiluvchi dasturchi.",
    hero_btn_contact: "Bog'lanish",
    hero_btn_projects: "Loyihalarim",
    hero_btn_cv: "CV yuklab olish",
    scroll_down: "PASTGA",

    // Stats
    stat_age_num: "16",
    stat_age_title: "YOSH",
    stat_age_desc: "Yosh va maksimal motivatsiyali",
    stat_projects_num: "4+",
    stat_projects_title: "LOYIHALAR",
    stat_projects_desc: "Haqiqiy amaliy loyihalar",
    stat_tech_num: "10+",
    stat_tech_title: "TEXNOLOGIYALAR",
    stat_tech_desc: "Zamonaviy backend vositalari",
    stat_motivation_num: "100%",
    stat_motivation_title: "KOD SIFATI",
    stat_motivation_desc: "Toza arxitektura & OOP",

    // About
    about_title: "Men haqimda",
    about_subtitle: "Backend muhandisligi va dasturlashga bo'lgan ishtiyoqim",
    about_p1: "Men <strong>Abdulahad Mahmudjonov</strong> — zamonaviy va xavfsiz <strong>Java Backend</strong> tizimlarini yaratishga ixtisoslashgan yosh va g'ayratli dasturchiman.",
    about_p2: "Dasturlashda asosiy e'tiborimni <strong>Java Core, OOP tamoyillari, Ma'lumotlar tuzilmalari, Spring Boot</strong> va ma'lumotlar bazalarining yuqori unumdorligiga qarataman. Har bir loyihamda kodning tozaligi (Clean Code), SOLID qoidalari va xavfsizlik birinchi o'rinda turadi.",
    about_p3: "Doimiy ravishda yangi texnologiyalarni o'rganish, mikroxizmatlar (microservices) arxitekturasi va real biznes masalalarini hal qiluvchi kuchli tizimlar yaratish ustida ishlayapman.",
    about_highlights_title: "Asosiy yo'nalishlarim:",
    about_h1: "Ishonchli va xavfsiz RESTful API larni loyihalash",
    about_h2: "Ma'lumotlar bazalarini optimallashtirish (SQL, PostgreSQL, Indexing)",
    about_h3: "Ko'p oqimli (Multithreading) va tezkor backend jarayonlar",
    about_h4: "Doimiy izlanish, intizom va jamoa bilan samarali ishlash",
    json_copy_btn: "JSON nusxalash",
    json_copied: "Nusxalandi!",

    // Skills
    skills_title: "Texnologiyalar & Stack",
    skills_subtitle: "Loyihalarimda qo'llaydigan professional vositalar va ko'nikmalar",
    filter_all: "Barchasi",
    filter_backend: "Backend & Core",
    filter_database: "Ma'lumotlar bazasi",
    filter_tools: "Asboblar & DevOps",
    filter_arch: "Arxitektura & Asoslar",

    skill_java_desc: "OOP, Collections, Stream API, Multithreading, Generics, Lambdas",
    skill_spring_desc: "Spring Boot, Spring MVC, Spring Data JPA, Spring Security asoslari",
    skill_hibernate_desc: "Entity mapping, HQL/JPQL, Caching, Tranzaksiyalar boshqaruvi",
    skill_postgres_desc: "Murakkab so'rovlar, Joins, Triggers, Indexing, Tranzaksiyalar",
    skill_redis_desc: "Keshlashtirish, In-memory xotira, Key-value data strukturasi",
    skill_rest_desc: "REST arxitekturasi, HTTP metodlar, Status kodlar, Swagger/OpenAPI",
    skill_docker_desc: "Konteynerlashtirish, Dockerfile, Container tarmoqlari",
    skill_git_desc: "Versiyalar nazorati, Branching, GitHub Actions, Team collaboration",
    skill_solid_desc: "Clean Code, SOLID, DRY, KISS, Design Patterns (Singleton, Factory, Builder)",
    skill_unit_desc: "JUnit 5, Mockito, Test-Driven tamoyillari asosida tekshirish",

    // Projects
    projects_title: "Amaliy Loyihalar",
    projects_subtitle: "Haqiqiy muammolarga ishlab chiqilgan backend tizimlari",
    project_tab_all: "Barchasi",
    project_tab_java: "Java Core",
    project_tab_spring: "Spring Boot",
    project_tab_bot: "Telegram Bot",

    project_1_title: "Restoran Boshqaruv Tizimi",
    project_1_desc: "Stollarni band qilish, ofitsiantlar va buyurtmalar navbati, taomlar menyusi va chek chiqarishni avtomatlashtiruvchi yuqori tezlikdagi tizim.",
    project_1_modal_details: "Ushbu loyiha restoran faoliyatidagi barcha ichki jarayonlarni tizimlashtiradi. Ko'p oqimli (Multithreading) mexanizm orqali bir vaqtning o'zida kelib tushadigan buyurtmalar navbatini (Queue) yo'qotishlarsiz boshqaradi. Ma'lumotlar doimiy fayl va kesh xotirada saqlanadi.",

    project_2_title: "O'quv Markazi CRM Tizimi",
    project_2_desc: "Talabalar ro'yxati, guruhlar davomati, to'lovlar jadvali va o'qituvchilar yuklamasini to'liq nazorat qiluvchi kompleks backend platforma.",
    project_2_modal_details: "Katta hajmdagi ma'lumotlar bilan ishlashga moslashtirilgan. Spring Boot va PostgreSQL yordamida tezkor qidiruv, to'lovlar hisob-kitobi va oylik hisobotlarni avtomatik generatsiya qilish imkoniyatiga ega.",

    project_3_title: "Bank & Hamyon REST API",
    project_3_desc: "Mijozlar hisob raqamlari o'rtasida pul o'tkazmalari, tranzaksiyalar xavfsizligi va balans hisobini ta'minlovchi yuqori ishonchli FinTech API.",
    project_3_modal_details: "ACID prinsiplariga to'liq asoslangan @Transactional xizmat. Balansdriftining oldini oluvchi optimistik va pessimistik blokirovkalar, JWT orqali xavfsiz autentifikatsiya va Swagger API hujjati bilan jihozlangan.",

    project_4_title: "Telegram e-Commerce Boti",
    project_4_desc: "Mijozlar uchun tovarlarni tanlash, savatcha va buyurtma berish, administratorlar uchun esa yangi buyurtmalarni monitoring qilish boti.",
    project_4_modal_details: "Telegram Bots Java API kutubxonasiga asoslangan. Webhook yordamida minimal kechikish bilan xabarlarni qabul qiladi va buyurtma holatini real vaqtda yangilab turadi.",

    project_view_btn: "Batafsil ko'rish",
    project_github_btn: "GitHub kod",
    project_features_title: "Asosiy xususiyatlar:",
    project_tech_used: "Ishlatilgan texnologiyalar:",

    // Roadmap
    roadmap_title: "Rivojlanish & Yo'l Xaritasi",
    roadmap_subtitle: "Bosqichma-bosqich o'sish tarixi va yaqin kelajakdagi maqsadlarim",
    step_1_date: "2023 - 2024",
    step_1_title: "Dasturlash Asoslari & Algoritmlar",
    step_1_desc: "Algoritmik fikrlash, sintaksis, massivlar, satrlar va asosiy hisoblash mantiqlarini chuqur o'rganish.",
    step_2_date: "2024 - 2025",
    step_2_title: "Java Core & OOP Chuqur O'rganish",
    step_2_desc: "Merosxo'rlik, polimorfizm, inkapsulyatsiya, abstraksiya, Collections Framework, istisnolar (Exceptions) va fayllar bilan ishlash.",
    step_3_date: "2025 - 2026",
    step_3_title: "Ma'lumotlar Bazasi & Spring Boot Ekotizimi",
    step_3_desc: "PostgreSQL relyatsion bazasi, SQL so'rovlar, JDBC, Hibernate/JPA va Spring Boot orqali mustahkam REST API loyihalash.",
    step_4_date: "Hozir & Kelajak",
    step_4_title: "Mikroxizmatlar & Highload Tizimlar",
    step_4_desc: "Docker, Kubernetes, Apache Kafka, Redis kesh va taqsimlangan arxitektura bo'yicha bilimlarni mustahkamlash.",

    // Contact
    contact_title: "Keling, gaplashamiz",
    contact_subtitle: "Loyiha, taklif, ish imkoniyati yoki shunchaki fikr almashish uchun yozing",
    contact_form_name: "Ismingiz",
    contact_form_name_ph: "Masalan: Azimjon Yoqubov",
    contact_form_contact: "Telegram yoki Email",
    contact_form_contact_ph: "Masalan: @azimjon yoki user@example.com",
    contact_form_subject: "Mavzu",
    contact_form_subject_ph: "Loyiha bo'yicha / Hamkorlik / Savol",
    contact_form_message: "Xabaringiz",
    contact_form_message_ph: "Xabaringiz mazmunini batafsil yozing...",
    contact_btn_send: "Xabar yuborish",
    contact_btn_sending: "Yuborilmoqda...",
    contact_alt_title: "// To'g'ridan-to'g'ri bog'lanish:",
    contact_tg_btn: "Telegram orqali yozish",
    contact_email_btn: "Email nusxalash",
    contact_phone_lbl: "Aloqa:",
    contact_location_lbl: "Manzil:",
    contact_location_val: "Toshkent, O'zbekiston",
    contact_status_lbl: "Bandlik:",
    contact_status_val: "Hamkorlik va amaliyotga tayyor",

    // Footer
    footer_rights: "Barcha huquqlar himoyalangan.",
    footer_built_with: "Java & Sof Zamonaviy Texnologiyalar bilan yaratilgan",
    footer_backend_status: "Backend API:",
    footer_status_checking: "Tekshirilmoqda...",
    footer_status_online: "Server Onlayn (Java 21)",
    footer_status_offline: "Oflayn rejim (Lokal)",

    // Modals
    modal_close: "Yopish",
    cv_modal_title: "Abdulahad Mahmudjonov — Rezyume (CV)",
    cv_download_pdf: "CV yuklab olish (PDF/Print)",
    cv_summary_title: "Qisqacha ma'lumot:",
    cv_summary_text: "Intiluvchan va mas'uliyatli Java Backend dasturchi. Toza kod yozish, ma'lumotlar tuzilmalari va Spring Boot REST API vositalarida amaliy tajribaga ega.",

    // Toasts
    toast_copied: "Buferga nusxalandi!",
    toast_form_success: "Rahmat! Xabaringiz muvaffaqiyatli qabul qilindi.",
    toast_form_server_saved: "Xabaringiz serverga saqlandi va tez orada javob beriladi!",
    toast_form_offline: "Xabaringiz mahalliy xotiraga saqlandi. Telegram orqali ham yozishingiz mumkin!",
    toast_theme_dark: "Qorong'i mavzu yoqildi",
    toast_theme_light: "Yorug' mavzu yoqildi",
    toast_lang_changed: "Til o'zgartirildi: O'zbekcha"
  },

  ru: {
    // Navigation
    nav_home: "Главная",
    nav_about: "Обо мне",
    nav_skills: "Навыки",
    nav_projects: "Проекты",
    nav_roadmap: "Путь",
    nav_contact: "Контакты",
    nav_cv: "Резюме",

    // Hero
    hero_badge: "ОТКРЫТ К СОТРУДНИЧЕСТВУ",
    hero_greeting: "Привет, я",
    hero_name: "Абдулахад Махмуджонов",
    hero_roles: [
      "Java Backend Разработчик",
      "Специалист по Spring Boot & REST API",
      "Высокопроизводительная Архитектура",
      "Энтузиаст Баз Данных & SQL"
    ],
    hero_slogan: "Для сложных задач — простые, быстрые, безопасные и надежные backend решения. Стремлюсь к созданию высоконагруженных систем и чистого кода.",
    hero_btn_contact: "Связаться",
    hero_btn_projects: "Мои проекты",
    hero_btn_cv: "Скачать резюме",
    scroll_down: "ВНИЗ",

    // Stats
    stat_age_num: "16",
    stat_age_title: "ЛЕТ",
    stat_age_desc: "Молодость и максимальный фокус",
    stat_projects_num: "4+",
    stat_projects_title: "ПРОЕКТА",
    stat_projects_desc: "Реальные практические проекты",
    stat_tech_num: "10+",
    stat_tech_title: "ТЕХНОЛОГИЙ",
    stat_tech_desc: "Современные backend инструменты",
    stat_motivation_num: "100%",
    stat_motivation_title: "КАЧЕСТВО",
    stat_motivation_desc: "Чистая архитектура и ООП",

    // About
    about_title: "Обо мне",
    about_subtitle: "Моя философия backend разработки и страсть к коду",
    about_p1: "Я — <strong>Абдулахад Махмуджонов</strong>, целеустремленный и энергичный разработчик, специализирующийся на надежных <strong>Java Backend</strong> системах.",
    about_p2: "В разработке я фокусируюсь на <strong>Java Core, принципах ООП, структурах данных, Spring Boot</strong> и производительности баз данных. В каждом проекте для меня в приоритете чистота кода (Clean Code), правила SOLID и информационная безопасность.",
    about_p3: "Постоянно совершенствую навыки, изучаю микросервисную архитектуру и создаю устойчивые системы, решающие реальные задачи бизнеса.",
    about_highlights_title: "Ключевые направления:",
    about_h1: "Проектирование надежных и защищенных RESTful API",
    about_h2: "Оптимизация реляционных баз данных (SQL, PostgreSQL, Indexing)",
    about_h3: "Многопоточность (Multithreading) и производительные процессы",
    about_h4: "Дисциплина, непрерывное обучение и эффективная командная работа",
    json_copy_btn: "Копировать JSON",
    json_copied: "Скопировано!",

    // Skills
    skills_title: "Технологии & Стек",
    skills_subtitle: "Инструменты и технологии, которые я использую в работе",
    filter_all: "Все",
    filter_backend: "Backend & Core",
    filter_database: "Базы данных",
    filter_tools: "Инструменты & DevOps",
    filter_arch: "Архитектура & Основы",

    skill_java_desc: "ООП, Collections, Stream API, Multithreading, Generics, Lambdas",
    skill_spring_desc: "Spring Boot, Spring MVC, Spring Data JPA, основы Spring Security",
    skill_hibernate_desc: "Entity mapping, HQL/JPQL, Кэширование, управление транзакциями",
    skill_postgres_desc: "Сложные запросы, Joins, Triggers, Индексация, Транзакции",
    skill_redis_desc: "Кэширование, In-memory хранилище, Key-value структуры данных",
    skill_rest_desc: "REST архитектура, HTTP методы, Коды ответов, Swagger/OpenAPI",
    skill_docker_desc: "Контейнеризация, Dockerfile, изоляция окружений",
    skill_git_desc: "Контроль версий, ветвление, GitHub Actions, командная работа",
    skill_solid_desc: "Clean Code, SOLID, DRY, KISS, Паттерны проектирования",
    skill_unit_desc: "JUnit 5, Mockito, принципы модульного тестирования",

    // Projects
    projects_title: "Практические Проекты",
    projects_subtitle: "Архитектура и реализация систем под реальные сценарии",
    project_tab_all: "Все",
    project_tab_java: "Java Core",
    project_tab_spring: "Spring Boot",
    project_tab_bot: "Telegram Bot",

    project_1_title: "Система Управления Рестораном",
    project_1_desc: "Автоматизация бронирования столов, очередей заказов, работы официантов, меню и генерации чеков.",
    project_1_modal_details: "Проект систематизирует все внутренние процессы ресторана. Реализован многопоточный пул обработки заказов без блокировок, гарантирующий сохранность данных и своевременную печать фискальных счетов.",

    project_2_title: "CRM Учебного Центра",
    project_2_desc: "Комплексная платформа для учета студентов, посещаемости групп, расписания оплаты и аналитики преподавателей.",
    project_2_modal_details: "Спроектирована под высокую масштабируемость. Использует Spring Boot и PostgreSQL для быстрого поиска, автоматического расчета задолженностей и формирования сводных отчетов.",

    project_3_title: "Банковский & Кошельковый REST API",
    project_3_desc: "Высоконадежный FinTech API для межбанковских переводов, безопасности транзакций и аудита счетов.",
    project_3_modal_details: "Полное соответствие принципам ACID в аннотации @Transactional. Защита от race condition через пессимистические/оптимистические блокировки, авторизация по JWT токенам и интерактивная документация Swagger.",

    project_4_title: "Telegram e-Commerce Бот",
    project_4_desc: "Бот для просмотра каталога товаров, корзины и оформления заказов с мгновенными уведомлениями администрации.",
    project_4_modal_details: "Разработан на библиотеке Telegram Bots Java API. Работает через Webhook с ультранизкой задержкой и мгновенным обновлением статуса заказов в реальном времени.",

    project_view_btn: "Подробнее",
    project_github_btn: "GitHub код",
    project_features_title: "Ключевые особенности:",
    project_tech_used: "Использованный стек:",

    // Roadmap
    roadmap_title: "Карьерный Путь & Развитие",
    roadmap_subtitle: "Этапы профессионального становления и ближайшие ориентиры",
    step_1_date: "2023 - 2024",
    step_1_title: "Основы Программирования и Алгоритмы",
    step_1_desc: "Алгоритмическое мышление, базовые синтаксические конструкции, структуры данных и логика вычислений.",
    step_2_date: "2024 - 2025",
    step_2_title: "Глубокое изучение Java Core & ООП",
    step_2_desc: "Наследование, полиморфизм, инкапсуляция, абстракция, Collections Framework, исключения и ввод/вывод (I/O).",
    step_3_date: "2025 - 2026",
    step_3_title: "Базы Данных & Экосистема Spring Boot",
    step_3_desc: "Реляционная СУБД PostgreSQL, продвинутые SQL запросы, Hibernate/JPA и разработка устойчивых REST API на Spring Boot.",
    step_4_date: "Настоящее & Будущее",
    step_4_title: "Микросервисы & Высоконагруженные Системы",
    step_4_desc: "Docker, Kubernetes, брокеры сообщений Kafka, распределенный кэш Redis и построение масштабируемой архитектуры.",

    // Contact
    contact_title: "Давайте пообщаемся",
    contact_subtitle: "Готов обсудить интересные проекты, сотрудничество или стажировку",
    contact_form_name: "Ваше имя",
    contact_form_name_ph: "Например: Алексей Иванов",
    contact_form_contact: "Telegram или Email",
    contact_form_contact_ph: "Например: @username или user@domain.com",
    contact_form_subject: "Тема сообщения",
    contact_form_subject_ph: "Проект / Предложение / Консультация",
    contact_form_message: "Сообщение",
    contact_form_message_ph: "Опишите вашу идею или вопрос...",
    contact_btn_send: "Отправить сообщение",
    contact_btn_sending: "Отправка...",
    contact_alt_title: "// Прямые контакты:",
    contact_tg_btn: "Написать в Telegram",
    contact_email_btn: "Скопировать Email",
    contact_phone_lbl: "Телефон:",
    contact_location_lbl: "Локация:",
    contact_location_val: "Ташкент, Узбекистан",
    contact_status_lbl: "Занятость:",
    contact_status_val: "Готов к проектам и практике",

    // Footer
    footer_rights: "Все права защищены.",
    footer_built_with: "Сделано на Java и современных веб-технологиях",
    footer_backend_status: "Backend API:",
    footer_status_checking: "Проверка...",
    footer_status_online: "Сервер Онлайн (Java 21)",
    footer_status_offline: "Офлайн режим (Локальный)",

    // Modals
    modal_close: "Закрыть",
    cv_modal_title: "Абдулахад Махмуджонов — Резюме (CV)",
    cv_download_pdf: "Скачать Резюме (PDF/Печать)",
    cv_summary_title: "Краткое резюме:",
    cv_summary_text: "Амбициозный Java Backend разработчик. Практический опыт построения чистой архитектуры, реляционных БД и Spring Boot REST API.",

    // Toasts
    toast_copied: "Скопировано в буфер!",
    toast_form_success: "Спасибо! Ваше сообщение принято.",
    toast_form_server_saved: "Сообщение успешно доставлено на сервер!",
    toast_form_offline: "Сообщение сохранено локально. Вы также можете написать напрямую в Telegram!",
    toast_theme_dark: "Включена тёмная тема",
    toast_theme_light: "Включена светлая тема",
    toast_lang_changed: "Язык изменён: Русский"
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_roadmap: "Roadmap",
    nav_contact: "Contact",
    nav_cv: "Resume",

    // Hero
    hero_badge: "OPEN TO WORK & COLLABORATION",
    hero_greeting: "Hello, I am",
    hero_name: "Abdulahad Mahmudjonov",
    hero_roles: [
      "Java Backend Developer",
      "Spring Boot & REST API Engineer",
      "High-Performance Architecture Enthusiast",
      "Database & SQL Specialist"
    ],
    hero_slogan: "Crafting clean, reliable, fast, and scalable backend solutions for challenging problems. Dedicated to high-load performance and robust code design.",
    hero_btn_contact: "Get In Touch",
    hero_btn_projects: "Explore Projects",
    hero_btn_cv: "Download CV",
    scroll_down: "SCROLL",

    // Stats
    stat_age_num: "16",
    stat_age_title: "YEARS OLD",
    stat_age_desc: "Young, hungry, and laser-focused",
    stat_projects_num: "4+",
    stat_projects_title: "PROJECTS",
    stat_projects_desc: "Production-ready backend apps",
    stat_tech_num: "10+",
    stat_tech_title: "TECHNOLOGIES",
    stat_tech_desc: "Modern enterprise backend toolset",
    stat_motivation_num: "100%",
    stat_motivation_title: "CODE QUALITY",
    stat_motivation_desc: "Clean Architecture & OOP",

    // About
    about_title: "About Me",
    about_subtitle: "My engineering philosophy and passion for backend systems",
    about_p1: "I am <strong>Abdulahad Mahmudjonov</strong> — an ambitious and energetic developer dedicated to engineering dependable, scalable <strong>Java Backend</strong> systems.",
    about_p2: "My core technical focus centers on <strong>Java Core, OOP paradigms, Data Structures, Spring Boot</strong>, and database optimization. In every project, I champion Clean Code, SOLID principles, and proactive security practices.",
    about_p3: "I continually deepen my knowledge of microservices architecture, concurrent computing, and distributed design to solve tangible real-world business problems.",
    about_highlights_title: "Core competencies:",
    about_h1: "Designing bulletproof and secure RESTful APIs",
    about_h2: "Relational database performance tuning (SQL, PostgreSQL, Indexing)",
    about_h3: "Multithreading and high-throughput concurrent processing",
    about_h4: "Disciplined workflow, rapid learning, and team communication",
    json_copy_btn: "Copy JSON",
    json_copied: "Copied!",

    // Skills
    skills_title: "Tech Stack & Skills",
    skills_subtitle: "Technologies and methodologies I leverage daily",
    filter_all: "All",
    filter_backend: "Backend & Core",
    filter_database: "Databases",
    filter_tools: "Tools & DevOps",
    filter_arch: "Architecture & Fundamentals",

    skill_java_desc: "OOP, Collections, Streams, Concurrency, Generics, Lambdas",
    skill_spring_desc: "Spring Boot, Spring MVC, Spring Data JPA, Spring Security fundamentals",
    skill_hibernate_desc: "Entity mapping, HQL/JPQL, Caching strategies, Transaction boundaries",
    skill_postgres_desc: "Complex queries, Joins, Triggers, B-Tree indexes, ACID guarantees",
    skill_redis_desc: "In-memory caching, Key-value primitives, session acceleration",
    skill_rest_desc: "REST architectural constraints, HTTP semantics, OpenAPI/Swagger docs",
    skill_docker_desc: "Containerization, Multi-stage builds, isolated environments",
    skill_git_desc: "Version control, feature branches, pull requests, GitHub CI workflows",
    skill_solid_desc: "Clean Architecture, SOLID, DRY, Design Patterns (Singleton, Factory, Builder)",
    skill_unit_desc: "JUnit 5, Mockito, test coverage, defensive programming",

    // Projects
    projects_title: "Featured Projects",
    projects_subtitle: "Engineered solutions solving practical business requirements",
    project_tab_all: "All",
    project_tab_java: "Java Core",
    project_tab_spring: "Spring Boot",
    project_tab_bot: "Telegram Bot",

    project_1_title: "Restaurant Management System",
    project_1_desc: "Comprehensive table reservation, order queuing, kitchen dispatching, and automated billing engine.",
    project_1_modal_details: "Engineered to eliminate order contention using concurrent thread pools and structured memory queues. Supports instant invoice printing and persistent transaction logs.",

    project_2_title: "Education Center CRM",
    project_2_desc: "Full-scale administrative platform handling student enrollments, attendance tracking, tuition billing, and faculty workloads.",
    project_2_modal_details: "Built with Spring Boot and PostgreSQL, delivering high-speed search, automated monthly invoicing, and analytical reporting dashboards.",

    project_3_title: "Banking & Wallet REST API",
    project_3_desc: "Enterprise-grade FinTech service facilitating secure inter-account fund transfers and transactional ledger audits.",
    project_3_modal_details: "Guarantees strict ACID compliance via @Transactional workflows. Prevents double-spending using pessimistic database locks, secured with stateless JWT auth and Swagger UI.",

    project_4_title: "Telegram e-Commerce Bot",
    project_4_desc: "Customer-facing Telegram storefront with catalog browsing, shopping cart, and instant staff notification pipelines.",
    project_4_modal_details: "Powered by the Java Telegram Bots API with Webhook event dispatching. Delivers sub-10ms response times and synchronous admin order alerts.",

    project_view_btn: "View Details",
    project_github_btn: "GitHub Source",
    project_features_title: "Key Highlights:",
    project_tech_used: "Stack & Tools:",

    // Roadmap
    roadmap_title: "Career Roadmap & Milestones",
    roadmap_subtitle: "My continuous journey of growth and future milestones",
    step_1_date: "2023 - 2024",
    step_1_title: "Foundations & Algorithmic Problem Solving",
    step_1_desc: "Mastering computational logic, arrays, strings, basic algorithms, and coding fluency.",
    step_2_date: "2024 - 2025",
    step_2_title: "Deep Dive into Java Core & OOP",
    step_2_desc: "Inheritance, Polymorphism, Encapsulation, Abstraction, Collections, Multithreading, and I/O streams.",
    step_3_date: "2025 - 2026",
    step_3_title: "Databases & Spring Boot Ecosystem",
    step_3_desc: "Relational databases (PostgreSQL), advanced SQL, Hibernate/JPA, and resilient RESTful API design with Spring Boot.",
    step_4_date: "Present & Future",
    step_4_title: "Microservices & Distributed Systems",
    step_4_desc: "Container orchestration with Docker, message streaming with Kafka, Redis caching, and resilient high-load architectures.",

    // Contact
    contact_title: "Let's Connect",
    contact_subtitle: "Open to discussions, project collaborations, and internship opportunities",
    contact_form_name: "Your Name",
    contact_form_name_ph: "e.g. John Doe",
    contact_form_contact: "Telegram or Email",
    contact_form_contact_ph: "e.g. @telegram_handle or name@company.com",
    contact_form_subject: "Subject",
    contact_form_subject_ph: "Project Collaboration / Job Opportunity / Inquiry",
    contact_form_message: "Message",
    contact_form_message_ph: "Share your ideas or requirements in detail...",
    contact_btn_send: "Send Message",
    contact_btn_sending: "Sending...",
    contact_alt_title: "// Direct Contact Channels:",
    contact_tg_btn: "Message on Telegram",
    contact_email_btn: "Copy Email Address",
    contact_phone_lbl: "Phone:",
    contact_location_lbl: "Location:",
    contact_location_val: "Tashkent, Uzbekistan",
    contact_status_lbl: "Availability:",
    contact_status_val: "Ready for projects & internships",

    // Footer
    footer_rights: "All rights reserved.",
    footer_built_with: "Crafted with Java & Modern Web Standards",
    footer_backend_status: "Backend API:",
    footer_status_checking: "Checking...",
    footer_status_online: "Server Online (Java 21)",
    footer_status_offline: "Offline Mode (Local)",

    // Modals
    modal_close: "Close",
    cv_modal_title: "Abdulahad Mahmudjonov — Curriculum Vitae",
    cv_download_pdf: "Download CV (PDF/Print)",
    cv_summary_title: "Executive Summary:",
    cv_summary_text: "Enthusiastic and disciplined Java Backend Developer with proven competence in OOP principles, clean coding standards, PostgreSQL, and Spring Boot REST microservices.",

    // Toasts
    toast_copied: "Copied to clipboard!",
    toast_form_success: "Thank you! Your message has been received.",
    toast_form_server_saved: "Message successfully dispatched to server database!",
    toast_form_offline: "Saved to local storage. You can also reach out via Telegram!",
    toast_theme_dark: "Dark mode activated",
    toast_theme_light: "Light mode activated",
    toast_lang_changed: "Language changed: English"
  }
};
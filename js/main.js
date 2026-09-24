const STORE = {
  // Paste the Play Store listing when it is live:
  // play: "https://play.google.com/store/apps/details?id=com.hdaapps.vehicle_management",
  play: "",
};

const DEVICE = {
  iosReady: false,
};

/** Fill `url` when the account is live. Empty url = shown as “soon”. */
const SOCIAL = {
  hda: {
    instagram: { handle: "hda.apps", url: "" },
    threads: { handle: "hda.apps", url: "" },
    facebook: { handle: "hda.apps", url: "" },
  },
  keepbay: {
    instagram: { handle: "keepbay.app", url: "" },
    threads: { handle: "keepbay.app", url: "" },
    facebook: { handle: "keepbay.app", url: "" },
  },
  capsa: {
    instagram: { handle: "capsa.app", url: "" },
    threads: { handle: "capsa.app", url: "" },
    facebook: { handle: "capsa.app", url: "" },
  },
};

const SOCIAL_NETWORKS = ["instagram", "threads", "facebook"];

const I18N = {
  uk: {
    htmlLang: "uk",
    title: "Keepbay — облік авто офлайн",
    description:
      "Keepbay — офлайн-додаток для обліку авто, витрат, поїздок і нагадувань. Дані лишаються на телефоні.",
    nav: {
      features: "Можливості",
      plans: "Free і Pro",
      faq: "Питання",
      privacy: "Конфіденційність",
      download: "Android",
      trial: "Тріал",
    },
    hero: {
      eyebrow: "Для турботливих водіїв",
      title: "Гараж, витрати і нагадування — завжди під рукою.",
      lead: "Keepbay веде авто офлайн: страховки, сервіс, розхідники, поїздки й карта. Хмарний акаунт не потрібен.",
      cta: "Android незабаром",
      secondary: "Дивитись можливості",
      trialCta: "Спробувати 7 днів",
      soon: "Спочатку Google Play. iPhone з’явиться пізніше.",
      pills: ["Офлайн", "Android незабаром", "Тріал 7 днів"],
    },
    device: {
      label: "Рамка пристрою",
      android: "Android",
      ios: "iPhone",
      later: "Пізніше",
      iosSoon: "iPhone з’явиться пізніше",
    },
    hub: {
      docTitle: "HDA — особисті додатки",
      description:
        "HDA — ім’я видавця особистих додатків. Не компанія і не студія. Keepbay, Capsa і наступні додатки живуть тут.",
      apps: "Додатки",
      about: "Про HDA",
      eyebrow: "Особисті додатки",
      title: "Додатки під ім’ям HDA.",
      lead: "HDA — не компанія і не студія. Це просто ім’я видавця в магазинах, те саме, що в адресі пошти. Тут живуть сторінки додатків.",
      appsTitle: "Додатки",
      appsLead: "Keepbay і Capsa вже мають сторінки. Інші з’являться тут, коли будуть готові.",
      keepbayBody: "Офлайн-облік авто, витрат, поїздок і нагадувань. Android незабаром, iPhone пізніше.",
      keepbayCta: "Сторінка додатку",
      capsaBody: "Локальний трекер часу для проєктів, задач і заробітку в гривнях. Windows незабаром, macOS і Linux пізніше.",
      capsaCta: "Сторінка додатку",
      keepbayPrivacy: "Keepbay · конфіденційність",
      capsaPrivacy: "Capsa · конфіденційність",
      soonTitle: "Інші додатки",
      soonBody: "Мобільні й десктопні. Тут будуть окремі сторінки — без вигаданих назв, поки продукт не готовий.",
      soonCta: "З’являться тут",
      aboutTitle: "Чому просто HDA",
      aboutBody:
        "Немає ТОВ, ФОП у шапці сайту і «студії». HDA — позначка видавця: так зручніше тримати кілька додатків в одному місці. Юридичні тексти й політика — на сторінці конкретного додатку.",
      footerNote: "Ім’я видавця, не зареєстрована компанія.",
      socialTitle: "Соцмережі",
      socialLead: "Акаунти ще створюються — з’являться тут, коли будуть готові.",
      socialLabel: "Соцмережі HDA",
      socialSoon: "скоро",
      socialInstagram: "Instagram",
      socialThreads: "Threads",
      socialFacebook: "Facebook",
    },
    social: {
      label: "Соцмережі",
      soon: "скоро",
      instagram: "Instagram",
      threads: "Threads",
      facebook: "Facebook",
    },
    capsa: {
      title: "Capsa — капсула часу",
      description:
        "HDA - Capsa — локальний десктопний трекер проєктів, задач і заробітку. Дані лишаються на комп’ютері.",
      nav: {
        features: "Можливості",
        faq: "Питання",
        privacy: "Конфіденційність",
        download: "Windows",
      },
      hero: {
        eyebrow: "Капсула часу",
        title: "Проєкти, години і гривні — на цьому комп’ютері.",
        lead: "Capsa рахує час локально: профілі, задачі, таймер у треї, помодоро й PDF-репорти. Хмари немає.",
        cta: "Windows незабаром",
        secondary: "Дивитись можливості",
        soon: "Спочатку Windows. macOS і Linux — пізніше.",
        pills: ["Локально", "Windows незабаром", "Без хмари"],
      },
      mock: {
        search: "Пошук",
        profile: "Розробка",
        navTimer: "Таймер",
        navCalendar: "Календар",
        navReports: "Репорти",
        navFocus: "Фокус",
        navSettings: "Налаштування",
        running: "Йде сесія",
        today: "Сьогодні",
        week: "Тиждень",
        rate: "Ставка",
        perHour: "за годину",
        norm: "Норма дня",
        recent: "Останні сесії",
        calendarTitle: "Календар",
        daySum: "Середа · ₴ 2 614",
        reportTitle: "Репорт за тиждень",
        hours: "Години",
        earned: "Нараховано",
      },
      features: {
        title: "Години, задачі й заробіток в одному вікні",
        lead: "Той самий спокій, що в додатку: темний інтерфейс, помаранчевий акцент і база, яка нікуди не їде.",
        timer: {
          title: "Таймер у треї",
          body: "Лічильник живе в головному процесі. Вікно можна сховати — сесія не зупиняється. Є острів і окреме міні-вікно.",
        },
        profiles: {
          title: "Профілі і ставки",
          body: "Окремі світи роботи: свої проєкти, задачі й ціна години. Усюди гривня. Проєкт може перевизначити ставку профілю.",
        },
        focus: {
          title: "Фокус і помодоро",
          body: "Окремий зворотний таймер: робота рахує гроші, фокус тримає ритм. Можна від’єднати острів у плаваюче вікно.",
        },
        calendar: {
          title: "Календар днів",
          body: "Дні, години й суми по проєктах. Пауза при простої, якщо за комп’ютером ніхто не працює.",
        },
        reports: {
          title: "Репорти PDF",
          body: "Прев’ю в додатку і збереження файлу. Зручно віддати клієнту години й нарахування без хмарного акаунта.",
        },
        data: {
          title: "Дані на диску",
          body: "SQLite на комп’ютері, автокопія поруч. Скріншоти сесії — лише якщо увімкнути, у папку Зображення.",
        },
      },
      story: {
        timerTitle: "Таймер не завмирає разом із вікном",
        timerBody:
          "Закриття ховає Capsa в трей. Повний вихід — з меню іконки. Острів коротко підказує простій, щогодинні позначки й норму дня.",
        profileTitle: "Окремий світ на кожен спосіб заробітку",
        profileBody:
          "Профіль тримає свої ставки, проєкти, знімки й репорти. Зручно розділити розробку, дизайн і підробіток.",
        focusTitle: "Помодоро поруч, але не замість роботи",
        focusBody:
          "Фокус не дублює робочий таймер. Якщо острів уже крутиться, завершений помодоро не пише другий рядок у історію.",
        shotTitle: "Знімки екрана — лише за бажанням",
        shotBody:
          "Поки таймер іде, Capsa може знімати екран з обраним інтервалом. На паузі кадрів немає. Якщо вимкнути опцію, таймер працює як завжди.",
      },
      privacy: {
        title: "Локально за замовчуванням",
        body: "Записи лишаються в SQLite на цьому комп’ютері. Немає хмарного акаунта і фонової відправки на сторонні сервери.",
        cta: "Політика конфіденційності",
      },
      faq: {
        title: "Короткі відповіді",
        lead: "Так само, як у розділі Довідка в додатку.",
        q1: "Де зберігаються дані?",
        a1: "У локальній базі SQLite. На Windows це %APPDATA%/Capsa/tracker.db, поруч автокопія tracker.db.bak. Хмарний акаунт не потрібен.",
        q2: "Чи потрібен інтернет?",
        a2: "Ні. Трекер, таймер, календар і репорти працюють офлайн. Capsa не відправляє записи в мережу.",
        q3: "Як рахується заробіток?",
        a3: "У гривнях за ефективною ставкою проєкту або профілю. Якщо в проєкті ставка порожня, береться профіль.",
        q4: "Куди діваються скріншоти?",
        a4: "Якщо опцію увімкнено — у папку Зображення/HDA - Capsa, підпапки по датах. На паузі знімки не робляться.",
        q5: "Чому вікно не закривається?",
        a5: "Закриття ховає додаток у трей, щоб таймер жив далі. Повний вихід — з меню іконки в треї.",
        q6: "Чи є Free і Pro?",
        a6: "Ні. Немає магазинної підписки й внутрішніх покупок. Capsa — локальний десктопний додаток; платформи з’являться, коли збірка буде готова.",
        q7: "На яких системах буде Capsa?",
        a7: "Збірка вже вміє Windows, macOS і Linux. Публічний реліз — спочатку Windows. macOS і Linux пізніше, без вигаданих посилань на магазини.",
      },
      cta: {
        title: "Спочатку Windows",
        body: "Capsa збирається як десктопний додаток. Інсталятор для Windows з’явиться тут, коли буде готовий. macOS і Linux — наступними.",
      },
      stores: {
        win: "Windows",
        winMeta: "Інсталятор незабаром",
        winBadge: "Скоро",
        mac: "macOS",
        macMeta: "У планах, не зараз",
        macBadge: "Пізніше",
        linux: "Linux",
        linuxMeta: "AppImage / deb — пізніше",
        linuxBadge: "Пізніше",
      },
      footer: {
        copy: "HDA - Capsa",
        note: "Особистий десктопний додаток. Видавець — HDA. Спочатку Windows. Магазин ще не підключений.",
      },
      legal: {
        title: "Політика конфіденційності",
        updated: "Оновлено 15 вересня 2026",
        intro:
          "HDA - Capsa — локальний десктопний трекер часу. Ця сторінка пояснює, які дані обробляються і куди вони можуть піти. Повноцінні юридичні умови з’являться перед публічним релізом; нижче — фактична поведінка поточної версії.",
        h1: "Які дані зберігаються",
        p1: "Профілі, проєкти, задачі, сесії, ставки, репорти й налаштування зберігаються локально в SQLite. На Windows файл — %APPDATA%/Capsa/tracker.db. Поруч лежить автокопія tracker.db.bak. Хмарний акаунт для роботи не потрібен.",
        h2: "Скріншоти",
        p2: "Знімки екрана робляться лише якщо ви ввімкнули опцію і поки йде робочий таймер. Файли зберігаються в папці Зображення/HDA - Capsa. На паузі кадрів немає. Якщо опцію вимкнено, таймер працює як завжди — просто без знімків.",
        h3: "Простій і сповіщення",
        p3: "Пауза при простої дивиться на активність миші й клавіатури на цьому комп’ютері. Системні сповіщення (кінець помодоро, підказки острова) лишаються локальними. Окремого сервера Capsa немає.",
        h4: "Експорт і імпорт",
        p4: "У налаштуваннях можна вивантажити файл .db і, якщо є знімки, папку HDA-Capsa-screenshots. Імпорт замінює базу; попередня копія лишається як tracker.db.before-import. Capsa не надсилає ці файли нікуди сама.",
        h5: "Мережа",
        p5: "Трекер не відправляє записи в мережу. Немає хмарної синхронізації, облікового запису HDA і фонової телеметрії.",
        h6: "Аналітика і реклама",
        p6: "Додаток не підключає рекламу, трекери й аналітику третіх сторін.",
        h7: "Діти",
        p7: "Capsa не призначений для дітей і не збирає свідомо дані неповнолітніх.",
        h8: "Зміни",
        p8: "Якщо з’явиться магазинна публікація або нові сервіси, цю політику оновимо до релізу. Актуальна версія завжди на цій сторінці.",
      },
    },
    mock: {
      vehicle: "Volkswagen",
      model: "ID.4",
      subtitle: "ID.4 · AC3344KI",
      auto: "Авто",
      cardTab: "Картка",
      plateLabel: "Номер",
      plate: "AC3344KI",
      kmLabel: "Пробіг",
      km: "24,500 км",
      kmUnit: "км",
      insurance: "Страховка",
      trips: "Поїздки",
      startTrip: "Почати поїздку",
      startTripMeta: "Запис маршруту з GPS",
      tripList: "Список поїздок",
      tripListMeta: "Остання: Невідомо",
      garageTitle: "Ваш гараж",
      startKm: "Старт",
      nowKm: "Зараз",
      typeEscooter: "Електросамокат",
      typeBicycle: "Велосипед",
      typeCar: "Авто",
      typeScooter: "Скутер",
      search: "Пошук",
      all: "Усі",
      note: "Нотатка",
      service: "Сервіс",
      electric: "Електро",
      done: "Виконано",
      wash: "Мийка",
      parking: "Парковка",
      coffeeWash: "Кава і мийка",
      chargeDc: "Зарядка DC",
      toll: "Платна дорога",
      date1: "2 вер. 2026",
      date2: "1 вер. 2026",
      templates: "Шаблони",
      mapTitle: "Сервіси",
      city: "Охтирка",
      settingsTitle: "Налаштування",
      user: "Користувач",
      freePro: "Free і Pro",
      notifications: "Сповіщення",
      mapGeo: "Мапа та геолокація",
      nfc: "NFC-мітки",
      backup: "Резервна копія",
      docsLock: "Захист документів",
      templatesFab: "Кнопка шаблонів на вкладці Дії",
      language: "Мова",
      theme: "Тема",
      developer: "Інструменти розробника",
    },
    features: {
      title: "Все, що потрібно авто в одному місці",
      lead: "Той самий спокій, що в додатку: короткі картки, золотий акцент і дані, які нікуди не їдуть без вашого дозволу.",
      garage: {
        title: "Гараж",
        body: "Авто чи мото, техпаспорт, VIN, пробіг і архів проданих. На Free робочим є одне авто.",
      },
      actions: {
        title: "Дії та витрати",
        body: "Заправки, сервіс, мийка, штрафи й нотатки. Один шаблон доступний у Free, до 30 на авто — у Pro.",
      },
      reminders: {
        title: "Нагадування",
        body: "Страховка, розхідники й власні нагадування за датою або пробігом. Pro додає турботу про авто.",
      },
      trips: {
        title: "Поїздки",
        body: "GPS-трекінг працює з заблокованим екраном, а завершений маршрут можна анімовано переграти на карті.",
      },
      map: {
        title: "Карта",
        body: "Свої СТО, АЗС і мийки, керований кеш карти. Pro додає офлайн-райони й точки стоянки авто.",
      },
      offline: {
        title: "Дані на пристрої",
        body: "Усі записи в локальній базі. Excel завжди під рукою; повна копія на Google Drive — у Pro, коли ви самі її запускаєте.",
      },
    },
    showcase: {
      eyebrow: "Справжній Keepbay",
      title: "Спокійний інтерфейс для щоденних справ",
      body: "Без рекламного шуму та зайвих екранів. Гараж, витрати й маршрути говорять однією зрозумілою мовою.",
      point1: "Реальні екрани",
      point2: "Дані на пристрої",
      point3: "Створено для водія",
      alt: "Головна, дії та деталі поїздки в Keepbay",
    },
    story: {
      garageTitle: "Додайте авто — і все збирається навколо нього",
      garageBody:
        "Розхідники, поломки, страховки, документи й статистика прив’язані до вибраного авто. Перемикач на головній змінює весь контекст.",
      remindTitle: "Сповіщення, які не кричать без причини",
      remindBody:
        "Поліс спливає, фільтр просить заміни, після довгої поїздки варто глянути пробіг. Keepbay нагадує м’яко і по суті.",
      tripTitle: "Контролюй маршрут — і витрати",
      tripBody:
        "Записуйте поїздки, дивіться паливо, час і загальну статистику. Тижневий графік на головній лишається навіть на Free.",
      startTitle: "Керуйте транспортом просто і наочно",
      startBody:
        "Головна, гараж, дії, карта і налаштування. Решта — страховки, документи, звіти — відкривається з карток, коли знадобиться.",
    },
    privacy: {
      title: "Офлайн за замовчуванням",
      body: "Записи лишаються на пристрої. Під час активної поїздки геолокація може працювати у фоні, але маршрут не надсилається на сторонні сервери.",
      cta: "Політика конфіденційності",
    },
    trial: {
      eyebrow: "7 днів Pro без оплати",
      title: "Спробуйте Pro 7 днів",
      body: "Пробний період відкриває всі фічі Pro — усі авто, документи, шаблони, бекап на Drive, звіти й офлайн-карти. Після закінчення робочим лишається одне авто, дані залишаються на телефоні.",
      where: "Увімкнути тріал можна в Налаштуваннях → Free і Pro.",
      days: "днів",
      step1Title: "Без картки",
      step1: "Покупка ще не підключена. Тріал відкривається в додатку без оплати.",
      step2Title: "Усі фічі Pro",
      step2: "Гараж без ліміту, документи, шаблони, автобекап, звіти й офлайн-карта.",
      step3Title: "Дані лишаються",
      step3: "Після 7 днів зайві авто замкнуться. Документи й фото, які вже є, можна дивитись.",
    },
    plans: {
      title: "Free і Pro",
      lead: "Free повністю веде одне авто офлайн. Pro відкриває гараж, документи, шаблони, звіти й офлайн-карту.",
      freeName: "Free",
      proName: "Pro",
      freePrice: "Безкоштовно",
      proPrice: "Покупка ще не підключена · є тріал на 7 днів",
      groupCore: "Основний облік",
      groupLimits: "Ліміти",
      groupAdvanced: "Розширені можливості",
      groupSecurity: "Безпека й копії",
      vehicles: "Авто в гаражі",
      vehiclesFree: "1 активне · 1 зміна",
      vehiclesPro: "без ліміту",
      charts: "Період графіків",
      chartsFree: "90 днів",
      chartsPro: "увесь період",
      reminders: "Власні нагадування",
      remindersFree: "1",
      remindersPro: "20",
      core: "Дії, поїздки, страховка, розхідники, NFC і віджети",
      activity: "Журнал активності",
      yes: "є",
      care: "Турбота про авто",
      documents: "Папка документів",
      photos: "Фото до записів",
      photosPro: "до 6 на запис",
      evEnergy: "Статистика електротранспорту",
      templates: "Шаблони дій",
      templatesFree: "1 на авто",
      templatesPro: "до 30 на авто",
      places: "Місця на карті",
      placesFree: "до 20",
      placesPro: "до 200",
      parking: "Стоянки авто",
      maps: "Офлайн-райони карти",
      mapsPro: "до 5",
      reports: "Звіти PDF",
      soldArchive: "Архів проданих авто",
      backup: "Копія даних",
      backupFree: "Excel",
      backupPro: "Drive + Excel",
      autoBackup: "Автобекап на Drive",
      security: "App Lock і захист документів",
      dash: "—",
      note: "Після завершення тріалу дані залишаються на пристрої. Обмежуються лише можливості Pro.",
    },
    faq: {
      title: "Короткі відповіді",
      lead: "Так само, як у розділі допомоги в додатку.",
      q1: "Де зберігаються дані?",
      a1: "Локально на телефоні в базі Keepbay. Хмарний акаунт для роботи не потрібен.",
      q2: "Чим відрізняються Free і Pro?",
      a2: "Free дозволяє повністю вести одне авто офлайн. Pro відкриває всі авто, документи, шаблони, автобекап, біометрію додатка, захист документів, звіти й офлайн-райони карти. Є пробний Pro на 7 днів.",
      q3: "Чи потрібен інтернет?",
      a3: "Ні, для обліку — ні. Інтернет потрібен для онлайн-карти, завантаження офлайн-району та копії на Google Drive.",
      q4: "Як захистити додаток і документи?",
      a4: "У Pro можна заблокувати весь додаток біометрією і окремо папку документів PIN або біометрією. У Free додаток і вже збережені файли відкриваються без пароля.",
      q5: "Куди діваються резервні копії?",
      a5: "Excel працює без акаунта. Повна копія на Google Drive з фото — у Pro, лише коли ви експортуєте або вмикаєте автобекап.",
      q6: "Як працює тріал?",
      a6: "У Налаштуваннях → Free і Pro активуйте пробний Pro на 7 днів. Усі фічі відкриті. Коли термін спливе, робочим лишається одне авто, дані не видаляються. Новий тріал можна знову ввімкнути на тій самій сторінці.",
      q7: "Чи буде Keepbay на iPhone?",
      a7: "Так, але не зараз. Спочатку виходить Android у Google Play. iOS з’явиться пізніше, коли Android стабільно житиме в магазині.",
      q8: "Чи працює запис поїздки із заблокованим екраном?",
      a8: "Так. Під час активної поїздки Android показує постійне сповіщення, а Keepbay продовжує записувати GPS у фоні. Для стабільної роботи потрібні фоновий доступ до геолокації та відсутність жорсткого обмеження батареї.",
    },
    cta: {
      title: "Спочатку Android",
      body: "Keepbay вже збирається в Google Play. iPhone буде, але не в першій хвилі — коли Android стабільно житиме в магазині.",
    },
    stores: {
      android: "Android",
      androidMeta: "Незабаром у Google Play",
      androidBadge: "Скоро",
      ios: "iPhone",
      iosMeta: "App Store — у планах, не зараз",
      iosBadge: "Пізніше",
    },
    footer: {
      copy: "Keepbay",
      note: "Особистий додаток. Видавець — HDA. Спочатку Android, iPhone — пізніше. Покупка в магазині ще не підключена.",
    },
    legal: {
      title: "Політика конфіденційності",
      updated: "Оновлено 19 вересня 2026",
      intro:
        "Keepbay — офлайн-додаток для обліку транспорту. Ця сторінка пояснює, які дані обробляються і куди вони можуть піти. Повноцінні юридичні умови з’являться перед публікацією в магазині; нижче — фактична поведінка поточної версії.",
      h1: "Які дані зберігаються",
      p1: "Усі записи (авто, дії, страховки, розхідники, поломки, нотатки, поїздки, документи, фото, точки на карті) зберігаються локально на пристрої в базі додатка та у файлах. Хмарний акаунт для роботи не потрібен.",
      h2: "Геолокація",
      p2: "Місцезнаходження використовується для режиму їзди та карти. Під час активної поїздки GPS може працювати у фоні й із заблокованим екраном; Android показує постійне сповіщення. Точки маршруту пакетно зберігаються в локальній базі та не надсилаються на сервер Keepbay. Якщо відмовити в дозволі, решта функцій працює як раніше, але трек поїздки не збережеться.",
      h3: "Сповіщення",
      p3: "Нагадування про страховку, розхідники, турботу про авто та власні події створюються локально на пристрої. Вони не надсилаються на зовнішній сервер Keepbay — окремого сервера немає.",
      h4: "Резервні копії",
      p4: "Експорт і імпорт таблиць Excel працюють без облікового запису. Копія на Google Drive з’являється лише в Pro, коли ви самі її запускаєте або вмикаєте автобекап. Для Drive потрібен вхід у ваш Google-акаунт. Keepbay не надсилає дані на сторонні сервери «у фоні».",
      h5: "NFC",
      p5: "Мітки NFC зберігають посилання на авто в гаражі та можуть відкрити режим поїздки. Якщо захист додатка активний, дія виконується лише після розблокування. Дані мітки не передаються в хмару.",
      h6: "Аналітика і реклама",
      p6: "Додаток не підключає рекламу, трекери й аналітику третіх сторін.",
      h7: "Діти",
      p7: "Keepbay не призначений для дітей і не збирає свідомо дані неповнолітніх.",
      h8: "Зміни",
      p8: "Якщо з’явиться магазинна підписка або нові сервіси, цю політику оновимо до релізу. Актуальна версія завжди на цій сторінці.",
    },
  },
  en: {
    htmlLang: "en",
    title: "Keepbay — offline vehicle log",
    description:
      "Keepbay is an offline app for vehicles, expenses, trips, and reminders. Your data stays on the phone.",
    nav: {
      features: "Features",
      plans: "Free & Pro",
      faq: "FAQ",
      privacy: "Privacy",
      download: "Android",
      trial: "Trial",
    },
    hero: {
      eyebrow: "For careful drivers",
      title: "Garage, costs, and reminders — always at hand.",
      lead: "Keepbay keeps your vehicle offline: insurance, service, consumables, trips, and a map. No cloud account required.",
      cta: "Android soon",
      secondary: "See features",
      trialCta: "Try 7 days",
      soon: "Google Play first. iPhone comes later.",
      pills: ["Offline", "Android soon", "7-day trial"],
    },
    device: {
      label: "Device frame",
      android: "Android",
      ios: "iPhone",
      later: "Later",
      iosSoon: "iPhone comes later",
    },
    hub: {
      docTitle: "HDA — personal apps",
      description:
        "HDA is the publisher name for personal apps. Not a company or a studio. Keepbay, Capsa, and future apps live here.",
      apps: "Apps",
      about: "About HDA",
      eyebrow: "Personal apps",
      title: "Apps under the HDA name.",
      lead: "HDA is not a company or a studio. It is just the publisher name in the stores — the same one as in the email address. Product pages live here.",
      appsTitle: "Apps",
      appsLead: "Keepbay and Capsa already have pages. Others will appear here when they are ready.",
      keepbayBody: "An offline log for vehicles, costs, trips, and reminders. Android soon, iPhone later.",
      keepbayCta: "App page",
      capsaBody: "A local time tracker for projects, tasks, and earnings in hryvnia. Windows soon, macOS and Linux later.",
      capsaCta: "App page",
      keepbayPrivacy: "Keepbay · privacy",
      capsaPrivacy: "Capsa · privacy",
      soonTitle: "Other apps",
      soonBody: "Mobile and desktop. They will get their own pages — no placeholder names until a product is ready.",
      soonCta: "Coming here",
      aboutTitle: "Why just HDA",
      aboutBody:
        "There is no registered company in the header, and no “studio”. HDA is a publisher label: a single place for several apps. Legal text and privacy live on each app’s page.",
      footerNote: "A publisher name, not a registered company.",
      socialTitle: "Social",
      socialLead: "Accounts are still being set up — they will appear here when ready.",
      socialLabel: "HDA social links",
      socialSoon: "soon",
      socialInstagram: "Instagram",
      socialThreads: "Threads",
      socialFacebook: "Facebook",
    },
    social: {
      label: "Social",
      soon: "soon",
      instagram: "Instagram",
      threads: "Threads",
      facebook: "Facebook",
    },
    capsa: {
      title: "Capsa — a time capsule",
      description:
        "HDA - Capsa is a local desktop tracker for projects, tasks, and earnings. Data stays on this computer.",
      nav: {
        features: "Features",
        faq: "FAQ",
        privacy: "Privacy",
        download: "Windows",
      },
      hero: {
        eyebrow: "A time capsule",
        title: "Projects, hours, and hryvnia — on this computer.",
        lead: "Capsa tracks time locally: profiles, tasks, a tray timer, pomodoro, and PDF reports. There is no cloud.",
        cta: "Windows soon",
        secondary: "See features",
        soon: "Windows first. macOS and Linux come later.",
        pills: ["Local", "Windows soon", "No cloud"],
      },
      mock: {
        search: "Search",
        profile: "Development",
        navTimer: "Timer",
        navCalendar: "Calendar",
        navReports: "Reports",
        navFocus: "Focus",
        navSettings: "Settings",
        running: "Session running",
        today: "Today",
        week: "This week",
        rate: "Rate",
        perHour: "per hour",
        norm: "Daily goal",
        recent: "Recent sessions",
        calendarTitle: "Calendar",
        daySum: "Wednesday · ₴ 2,614",
        reportTitle: "Weekly report",
        hours: "Hours",
        earned: "Earned",
      },
      features: {
        title: "Hours, tasks, and earnings in one window",
        lead: "The same calm as in the app: a dark interface, an orange accent, and a database that does not leave this machine.",
        timer: {
          title: "Timer in the tray",
          body: "The counter lives in the main process. Hide the window — the session keeps running. There is an island and a separate mini window.",
        },
        profiles: {
          title: "Profiles and rates",
          body: "Separate work worlds: their own projects, tasks, and hourly rate. Currency is hryvnia. A project can override the profile rate.",
        },
        focus: {
          title: "Focus and pomodoro",
          body: "A separate countdown: work counts money, focus keeps the rhythm. The island can detach into a floating window.",
        },
        calendar: {
          title: "Day calendar",
          body: "Days, hours, and totals by project. Idle pause if nobody is at the computer.",
        },
        reports: {
          title: "PDF reports",
          body: "Preview in the app and save a file. Handy for sending hours and totals to a client without a cloud account.",
        },
        data: {
          title: "Data on disk",
          body: "SQLite on this computer, with an automatic copy next to it. Session screenshots only if you turn them on, into Pictures.",
        },
      },
      story: {
        timerTitle: "The timer does not freeze with the window",
        timerBody:
          "Closing hides Capsa in the tray. A full quit is from the icon menu. The island briefly shows idle pauses, hourly marks, and the daily goal.",
        profileTitle: "A separate world for each way you earn",
        profileBody:
          "A profile keeps its own rates, projects, shots, and reports. Handy to split development, design, and side work.",
        focusTitle: "Pomodoro sits beside work, not instead of it",
        focusBody:
          "Focus does not duplicate the work timer. If the island is already running, a finished pomodoro does not write a second history row.",
        shotTitle: "Screenshots only if you want them",
        shotBody:
          "While the timer runs, Capsa can capture the screen at a chosen interval. Nothing is taken on pause. If you turn the option off, the timer works as usual.",
      },
      privacy: {
        title: "Local by default",
        body: "Records stay in SQLite on this computer. There is no cloud account and no background upload to third-party servers.",
        cta: "Privacy policy",
      },
      faq: {
        title: "Short answers",
        lead: "The same as in the in-app Help section.",
        q1: "Where is the data stored?",
        a1: "In a local SQLite database. On Windows that is %APPDATA%/Capsa/tracker.db, with an automatic copy tracker.db.bak next to it. No cloud account is required.",
        q2: "Do I need the internet?",
        a2: "No. The tracker, timer, calendar, and reports work offline. Capsa does not send records over the network.",
        q3: "How is earnings calculated?",
        a3: "In hryvnia, using the effective project or profile rate. If the project rate is empty, the profile rate is used.",
        q4: "Where do screenshots go?",
        a4: "If the option is on — into Pictures/HDA - Capsa, in date folders. Nothing is captured while paused.",
        q5: "Why doesn’t the window quit?",
        a5: "Closing hides the app in the tray so the timer can keep running. A full quit is from the tray icon menu.",
        q6: "Is there Free and Pro?",
        a6: "No. There is no store subscription and no in-app purchases. Capsa is a local desktop app; platform downloads will appear when a build is ready.",
        q7: "Which systems will Capsa support?",
        a7: "The build already targets Windows, macOS, and Linux. The public release is Windows first. macOS and Linux come later, with no made-up store links.",
      },
      cta: {
        title: "Windows first",
        body: "Capsa is built as a desktop app. The Windows installer will appear here when it is ready. macOS and Linux follow.",
      },
      stores: {
        win: "Windows",
        winMeta: "Installer soon",
        winBadge: "Soon",
        mac: "macOS",
        macMeta: "Planned, not now",
        macBadge: "Later",
        linux: "Linux",
        linuxMeta: "AppImage / deb — later",
        linuxBadge: "Later",
      },
      footer: {
        copy: "HDA - Capsa",
        note: "A personal desktop app. Publisher: HDA. Windows first. The store is not connected yet.",
      },
      legal: {
        title: "Privacy policy",
        updated: "Updated 15 September 2026",
        intro:
          "HDA - Capsa is a local desktop time tracker. This page explains what data is processed and where it can go. Full legal terms will appear before a public release; below is the actual behaviour of the current version.",
        h1: "What is stored",
        p1: "Profiles, projects, tasks, sessions, rates, reports, and settings are stored locally in SQLite. On Windows the file is %APPDATA%/Capsa/tracker.db. An automatic copy tracker.db.bak sits next to it. No cloud account is required.",
        h2: "Screenshots",
        p2: "Screen captures happen only if you turn the option on and while the work timer is running. Files are stored in Pictures/HDA - Capsa. Nothing is captured on pause. If the option is off, the timer works as usual — just without shots.",
        h3: "Idle detection and notifications",
        p3: "Idle pause watches mouse and keyboard activity on this computer. System notifications (pomodoro end, island hints) stay local. There is no separate Capsa server.",
        h4: "Export and import",
        p4: "Settings can export a .db file and, if shots exist, an HDA-Capsa-screenshots folder. Import replaces the database; the previous copy remains as tracker.db.before-import. Capsa does not send these files anywhere on its own.",
        h5: "Network",
        p5: "The tracker does not send records over the network. There is no cloud sync, no HDA account, and no background telemetry.",
        h6: "Analytics and ads",
        p6: "The app does not include ads, trackers, or third-party analytics.",
        h7: "Children",
        p7: "Capsa is not directed at children and does not knowingly collect data from minors.",
        h8: "Changes",
        p8: "If a store listing or new services appear, this policy will be updated before release. The current version always lives on this page.",
      },
    },
    mock: {
      vehicle: "Volkswagen",
      model: "ID.4",
      subtitle: "ID.4 · AC3344KI",
      auto: "Vehicle",
      cardTab: "ID card",
      plateLabel: "Plate",
      plate: "AC3344KI",
      kmLabel: "Mileage",
      km: "24,500 km",
      kmUnit: "km",
      insurance: "Insurance",
      trips: "Trips",
      startTrip: "Start a trip",
      startTripMeta: "Record the route with GPS",
      tripList: "Trip list",
      tripListMeta: "Last: Unknown",
      garageTitle: "Your garage",
      startKm: "Start",
      nowKm: "Now",
      typeEscooter: "E-scooter",
      typeBicycle: "Bicycle",
      typeCar: "Car",
      typeScooter: "Scooter",
      search: "Search",
      all: "All",
      note: "Note",
      service: "Service",
      electric: "Electric",
      done: "Done",
      wash: "Wash",
      parking: "Parking",
      coffeeWash: "Coffee & wash",
      chargeDc: "DC charge",
      toll: "Toll road",
      date1: "2 Sep 2026",
      date2: "1 Sep 2026",
      templates: "Templates",
      mapTitle: "Services",
      city: "Okhtyrka",
      settingsTitle: "Settings",
      user: "Username",
      freePro: "Free and Pro",
      notifications: "Notifications",
      mapGeo: "Map and location",
      nfc: "NFC tags",
      backup: "Backup",
      docsLock: "Document lock",
      templatesFab: "Templates button on Actions",
      language: "Language",
      theme: "Theme",
      developer: "Developer tools",
    },
    features: {
      title: "Everything your vehicle needs in one place",
      lead: "The same calm as in the app: compact cards, a gold accent, and data that does not leave the phone unless you say so.",
      garage: {
        title: "Garage",
        body: "Cars or motorcycles, title scan, VIN, mileage, and a sold archive. Free keeps one working vehicle.",
      },
      actions: {
        title: "Actions and costs",
        body: "Fuel, service, washes, fines, and notes. Free includes one template; Pro allows up to 30 per vehicle.",
      },
      reminders: {
        title: "Reminders",
        body: "Insurance, consumables, and custom reminders by date or mileage. Pro adds vehicle-care nudges.",
      },
      trips: {
        title: "Trips",
        body: "GPS tracking continues with the screen locked, and completed routes can be replayed with animation on the map.",
      },
      map: {
        title: "Map",
        body: "Your own service, fuel, and wash spots, plus manageable map cache. Pro adds offline regions and parking pins.",
      },
      offline: {
        title: "On-device data",
        body: "Every record lives in a local database. Excel is always available; a full Google Drive copy is Pro, and only when you start it.",
      },
    },
    showcase: {
      eyebrow: "The real Keepbay",
      title: "A calm interface for everyday vehicle care",
      body: "No advertising noise or unnecessary screens. Your garage, costs, and routes all speak the same clear visual language.",
      point1: "Real app screens",
      point2: "On-device data",
      point3: "Made for drivers",
      alt: "Keepbay Home, Actions, and Trip Details screens",
    },
    story: {
      garageTitle: "Add a vehicle — everything gathers around it",
      garageBody:
        "Consumables, breakdowns, insurance, documents, and stats belong to the selected car. The Home switcher changes the whole context.",
      remindTitle: "Notifications that do not shout for nothing",
      remindBody:
        "A policy is ending, a filter is due, mileage needs a look after a long trip. Keepbay reminds you gently and to the point.",
      tripTitle: "Stay in control of the route — and the spend",
      tripBody:
        "Log trips, see fuel, time, and overall stats. The 7-day Home chart stays available even on Free.",
      startTitle: "Manage your vehicle simply and clearly",
      startBody:
        "Home, Garage, Actions, Map, and Settings. Insurance, documents, and reports open from cards when you need them.",
    },
    privacy: {
      title: "Offline by default",
      body: "Records stay on this device. Location may run in the background during an active trip, but your route is not sent to third-party servers.",
      cta: "Privacy policy",
    },
    trial: {
      eyebrow: "7 days of Pro, no payment",
      title: "Try Pro for 7 days",
      body: "The trial unlocks every Pro feature — all vehicles, documents, templates, Drive backup, reports, and offline maps. When it ends, one working car remains; your data stays on the phone.",
      where: "Turn the trial on later in Settings → Free & Pro.",
      days: "days",
      step1Title: "No card",
      step1: "Store purchase is not wired yet. The trial opens in the app with no payment.",
      step2Title: "All Pro features",
      step2: "Unlimited garage, documents, templates, auto-backup, reports, and offline maps.",
      step3Title: "Data stays",
      step3: "After 7 days extra vehicles lock. Documents and photos you already added can still be opened.",
    },
    plans: {
      title: "Free & Pro",
      lead: "Free fully manages one vehicle offline. Pro unlocks the garage, documents, templates, reports, and offline maps.",
      freeName: "Free",
      proName: "Pro",
      freePrice: "Free",
      proPrice: "Store purchase is not wired yet · 7-day trial",
      groupCore: "Core tracking",
      groupLimits: "Limits",
      groupAdvanced: "Advanced features",
      groupSecurity: "Security & backups",
      vehicles: "Vehicles in garage",
      vehiclesFree: "1 active · 1 switch",
      vehiclesPro: "unlimited",
      charts: "Chart period",
      chartsFree: "90 days",
      chartsPro: "full history",
      reminders: "Custom reminders",
      remindersFree: "1",
      remindersPro: "20",
      core: "Actions, trips, insurance, consumables, NFC & widgets",
      activity: "Activity log",
      yes: "yes",
      care: "Vehicle care",
      documents: "Document folder",
      photos: "Record photos",
      photosPro: "up to 6 per record",
      evEnergy: "EV statistics",
      templates: "Action templates",
      templatesFree: "1 per vehicle",
      templatesPro: "up to 30 per vehicle",
      places: "Map places",
      placesFree: "up to 20",
      placesPro: "up to 200",
      parking: "Parking pins",
      maps: "Offline map regions",
      mapsPro: "up to 5",
      reports: "PDF reports",
      soldArchive: "Sold vehicle archive",
      backup: "Data copy",
      backupFree: "Excel",
      backupPro: "Drive + Excel",
      autoBackup: "Drive auto-backup",
      security: "App Lock & document protection",
      dash: "—",
      note: "Data is not deleted after a trial ends. Only Pro features lock.",
    },
    faq: {
      title: "Short answers",
      lead: "The same tone as in-app help.",
      q1: "Where is my data stored?",
      a1: "Locally on the phone in the Keepbay database. You do not need a cloud account to use the app.",
      q2: "What is the difference between Free and Pro?",
      a2: "Free lets you fully manage one vehicle offline. Pro unlocks every vehicle, documents, templates, auto-backup, biometric app lock, a private document vault, reports, and offline map regions. There is a 7-day Pro trial.",
      q3: "Do I need the internet?",
      a3: "Not for logging. The internet is needed for the online map, downloading an offline region, and a Google Drive copy.",
      q4: "How do I protect the app and documents?",
      a4: "Pro can lock the whole app with biometrics and, separately, the documents folder with a PIN or biometrics. On Free the app and files you already have open without a password.",
      q5: "Where do backups go?",
      a5: "Excel works without an account. A full Google Drive copy with photos is Pro, and only when you export it or turn on auto-backup.",
      q6: "How does the trial work?",
      a6: "In Settings → Free & Pro, start a 7-day Pro trial. Every feature unlocks. When it ends, one working vehicle remains and nothing is deleted. You can start a new trial on the same screen.",
      q7: "Will Keepbay be on iPhone?",
      a7: "Yes, but not yet. Android ships first on Google Play. iOS will follow later, once Android is stable in the store.",
      q8: "Does trip recording work with the screen locked?",
      a8: "Yes. During an active trip Android shows an ongoing notification while Keepbay continues recording GPS in the background. For reliable tracking, allow background location and do not apply strict battery restrictions.",
    },
    cta: {
      title: "Android first",
      body: "Keepbay is heading to Google Play. iPhone will come, but not in the first wave — after Android is stable in the store.",
    },
    stores: {
      android: "Android",
      androidMeta: "Coming soon on Google Play",
      androidBadge: "Soon",
      ios: "iPhone",
      iosMeta: "App Store — planned, not now",
      iosBadge: "Later",
    },
    footer: {
      copy: "Keepbay",
      note: "A personal app. Publisher: HDA. Android first, iPhone later. Store purchases are not connected yet.",
    },
    legal: {
      title: "Privacy policy",
      updated: "Updated 19 September 2026",
      intro:
        "Keepbay is an offline vehicle log. This page explains what data is processed and where it may go. Full legal terms will appear before a store release; below is the actual behavior of the current version.",
      h1: "What is stored",
      p1: "All records (vehicles, actions, insurance, consumables, breakdowns, notes, trips, documents, photos, map points) stay locally on the device in the app database and files. You do not need a cloud account to use Keepbay.",
      h2: "Location",
      p2: "Location is used for drive mode and the map. During an active trip GPS may run in the background and while the screen is locked; Android shows an ongoing notification. Route points are saved in batches to the local database and are not sent to a Keepbay server. If you decline permission, the rest of the app still works, but a trip track is not saved.",
      h3: "Notifications",
      p3: "Reminders for insurance, consumables, vehicle care, and custom events are created locally on the device. They are not sent to a Keepbay server — there is no separate server.",
      h4: "Backups",
      p4: "Excel export and import work without an account. A Google Drive copy is created only on Pro, when you export it or turn on auto-backup. Drive requires signing in to your Google account. Keepbay does not send data to third-party servers in the background.",
      h5: "NFC",
      p5: "NFC tags store a link to a vehicle in the garage and can open drive mode. If app lock is active, the action runs only after you unlock the app. Tag data is not uploaded to the cloud.",
      h6: "Analytics and ads",
      p6: "The app does not include ads, trackers, or third-party analytics.",
      h7: "Children",
      p7: "Keepbay is not directed at children and does not knowingly collect data from minors.",
      h8: "Changes",
      p8: "If a store subscription or new services appear, this policy will be updated before release. The current version always lives on this page.",
    },
  },
};

const THEME_KEY = "keepbay-theme";
const LANG_KEY = "keepbay-lang";
const DEVICE_KEY = "keepbay-device";

function get(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

function socialCopy(lang) {
  const root = I18N[lang] || I18N.uk;
  return {
    label: root.social?.label || "Social",
    soon: root.social?.soon || "soon",
    networks: {
      instagram: root.social?.instagram || "Instagram",
      threads: root.social?.threads || "Threads",
      facebook: root.social?.facebook || "Facebook",
    },
  };
}

function renderSocial(lang) {
  const copy = socialCopy(lang);
  document.querySelectorAll("[data-social]").forEach((nav) => {
    const brand = nav.dataset.social;
    const accounts = SOCIAL[brand];
    if (!accounts) {
      nav.hidden = true;
      return;
    }

    const brandLabel = brand === "hda" ? "HDA" : brand === "keepbay" ? "Keepbay" : "Capsa";
    nav.setAttribute("aria-label", `${brandLabel} · ${copy.label}`);
    nav.innerHTML = "";

    SOCIAL_NETWORKS.forEach((key) => {
      const account = accounts[key];
      if (!account) return;
      const networkName = copy.networks[key] || key;
      const handle = account.handle;
      const liveUrl = (account.url || "").trim();
      const el = document.createElement(liveUrl ? "a" : "span");
      el.className = "social-link" + (liveUrl ? "" : " is-soon");
      if (liveUrl) {
        el.href = liveUrl;
        el.target = "_blank";
        el.rel = "noopener noreferrer me";
        el.setAttribute("aria-label", `${networkName} · @${handle}`);
      } else {
        el.setAttribute(
          "aria-label",
          `${networkName} · @${handle} · ${copy.soon}`,
        );
        el.title = `${networkName} @${handle} — ${copy.soon}`;
      }
      el.innerHTML = `<span class="social-network">${networkName}</span><span class="social-handle">@${handle}</span>${
        liveUrl ? "" : `<span class="social-soon">${copy.soon}</span>`
      }`;
      nav.appendChild(el);
    });
  });
}

function applyI18n(lang) {
  const root = I18N[lang] || I18N.uk;
  const page = document.body.dataset.page;
  const isCapsa = page === "capsa" || page === "capsa-privacy";
  const dict = isCapsa ? { ...root, ...root.capsa, htmlLang: root.htmlLang } : root;
  document.documentElement.lang = dict.htmlLang;
  const docTitle =
    page === "privacy"
      ? `${dict.legal.title} — Keepbay`
      : page === "capsa-privacy"
        ? `${dict.legal.title} — Capsa`
        : page === "hub"
          ? dict.hub.docTitle
          : dict.title;
  const docDescription =
    page === "privacy" || page === "capsa-privacy"
      ? dict.legal.intro
      : page === "hub"
        ? dict.hub.description
        : dict.description;

  document.title = docTitle;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", docDescription);

  const setMeta = (selector, content) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute("content", content);
  };
  setMeta('meta[property="og:title"]', docTitle);
  setMeta('meta[property="og:description"]', docDescription);
  setMeta('meta[property="og:locale"]', lang === "en" ? "en_US" : "uk_UA");
  setMeta('meta[name="twitter:title"]', docTitle);
  setMeta('meta[name="twitter:description"]', docDescription);

  renderSocial(lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = get(dict, el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = get(dict, el.dataset.i18nAlt);
    if (typeof value === "string") el.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-list]").forEach((el) => {
    const value = get(dict, el.dataset.i18nList);
    if (!Array.isArray(value)) return;
    el.innerHTML = value.map((item) => `<span class="pill">${item}</span>`).join("");
  });

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.textContent = lang === "uk" ? "EN" : "UA";
  const deviceGroup = document.querySelector(".device-switch");
  const deviceLabel = get(dict, "device.label");
  if (deviceGroup && typeof deviceLabel === "string") {
    deviceGroup.setAttribute("aria-label", deviceLabel);
  }
  const iosBtn = document.querySelector('.device-switch [data-device="ios"]');
  const iosSoon = get(dict, "device.iosSoon");
  if (iosBtn && !DEVICE.iosReady && typeof iosSoon === "string") {
    iosBtn.title = iosSoon;
    iosBtn.setAttribute("aria-label", iosSoon);
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute("content", theme === "light" ? "#EFEBE4" : "#253139");
  }
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.setAttribute("aria-label", theme === "dark" ? "Light theme" : "Dark theme");
    btn.innerHTML =
      theme === "dark"
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="2"/><path d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15.5 13.5A6.5 6.5 0 0 1 10.5 4 7 7 0 1 0 20 13.5a6.5 6.5 0 0 1-4.5 0Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';
  }
}

function preferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function preferredLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "uk" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("uk") ? "uk" : "uk";
}

function preferredDevice() {
  if (!DEVICE.iosReady) return "android";
  const saved = localStorage.getItem(DEVICE_KEY);
  return saved === "ios" ? "ios" : "android";
}

function applyDevice(device) {
  if (!DEVICE.iosReady) device = "android";
  const frame = document.querySelector(".phone[data-device]");
  if (frame) frame.dataset.device = device;
  document.querySelectorAll(".device-switch [data-device]").forEach((btn) => {
    const ios = btn.dataset.device === "ios";
    btn.disabled = ios && !DEVICE.iosReady;
    btn.classList.toggle("is-on", btn.dataset.device === device);
  });
}

function initDeviceSwitch() {
  let device = preferredDevice();
  applyDevice(device);
  if (!DEVICE.iosReady) localStorage.setItem(DEVICE_KEY, "android");
  document.querySelectorAll(".device-switch [data-device]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      device = btn.dataset.device === "ios" ? "ios" : "android";
      localStorage.setItem(DEVICE_KEY, device);
      applyDevice(device);
    });
  });
}

function wireStoreButtons() {
  document.querySelectorAll("[data-store='play']").forEach((btn) => {
    if (!STORE.play) return;
    btn.href = STORE.play;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  });
}

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function initReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;
  if (reducedMotion()) {
    nodes.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
  );
  nodes.forEach((el) => io.observe(el));
}

function initParallax() {
  const layers = [...document.querySelectorAll(".parallax-scene [data-parallax]")];
  if (!layers.length || reducedMotion()) return;
  const mobile = window.matchMedia("(max-width: 720px)");
  let ticking = false;

  const apply = () => {
    ticking = false;
    if (mobile.matches) {
      layers.forEach((el) => {
        el.style.transform = "";
      });
      return;
    }
    const y = window.scrollY;
    layers.forEach((el) => {
      const speed = Number(el.dataset.parallax) || 0;
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(apply);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  apply();
}

function initAccordion() {
  document.querySelectorAll("[data-accordion]").forEach((root) => {
    root.querySelectorAll(".acc-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".acc");
        const open = item.classList.contains("is-open");
        root.querySelectorAll(".acc").forEach((acc) => {
          acc.classList.remove("is-open");
          acc.querySelector(".acc-btn")?.setAttribute("aria-expanded", "false");
        });
        if (!open) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  });
}

function initTrialCounter() {
  const el = document.getElementById("trial-days");
  if (!el) return;
  const target = 7;
  if (reducedMotion()) {
    el.textContent = String(target);
    return;
  }
  let started = false;
  const run = () => {
    if (started) return;
    started = true;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / 700);
      el.textContent = String(Math.round(target * t));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      run();
      io.disconnect();
    }
  }, { threshold: 0.4 });
  io.observe(el);
}

function initHeaderCompact() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("is-compact", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

const MOCK_NAV_ICONS = ["home", "garage", "actions", "map", "settings"];

function initMockNav() {
  document.querySelectorAll("[data-mock-nav]").forEach((el) => {
    const active = Number(el.dataset.mockNav);
    el.classList.add("mock-nav");
    el.innerHTML = MOCK_NAV_ICONS.map((name, i) => {
      const cls = [i === active ? "on" : "", i === 2 ? "dot" : ""].filter(Boolean).join(" ");
      return `<span${cls ? ` class="${cls}"` : ""}><span class="nav-ico nav-${name}"></span></span>`;
    }).join("");
  });
}

function initPhoneSlideshow() {
  initMockNav();
  document.querySelectorAll("[data-phone-slides], [data-desk-slides]").forEach((root) => {
    const slides = [...root.querySelectorAll(".phone-slide, .desk-slide")];
    if (slides.length < 2) return;

    let index = 0;
    const show = (n) => {
      slides.forEach((slide, i) => slide.classList.toggle("is-active", i === n));
    };

    if (reducedMotion()) {
      show(0);
      return;
    }

    let timer = null;
    const INTERVAL = 5000;
    const next = () => {
      index = (index + 1) % slides.length;
      show(index);
    };
    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    const start = () => {
      stop();
      timer = setInterval(next, INTERVAL);
    };

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    start();
  });
}

function init() {
  let theme = preferredTheme();
  let lang = preferredLang();
  applyTheme(theme);
  applyI18n(lang);
  wireStoreButtons();
  initReveal();
  initParallax();
  initAccordion();
  initTrialCounter();
  initHeaderCompact();
  initDeviceSwitch();
  initPhoneSlideshow();

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  });

  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    lang = lang === "uk" ? "en" : "uk";
    localStorage.setItem(LANG_KEY, lang);
    applyI18n(lang);
  });

  initMobileMenu();
}

function initMobileMenu() {
  const menuBtn = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const backdrop = document.getElementById("menu-backdrop");
  if (!menuBtn || !mobileNav) return;

  const setOpen = (open) => {
    document.documentElement.classList.toggle("menu-open", open);
    menuBtn.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    mobileNav.setAttribute("aria-hidden", String(!open));
  };

  menuBtn.addEventListener("click", () => {
    setOpen(!document.documentElement.classList.contains("menu-open"));
  });
  backdrop?.addEventListener("click", () => setOpen(false));
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) setOpen(false);
  });
}

document.addEventListener("DOMContentLoaded", init);

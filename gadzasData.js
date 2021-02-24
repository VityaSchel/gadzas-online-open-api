let fakeMock = {}

window.filtersList = {
  all: "Все",
  best: "Лучшее",
  classic: "Классика",
  donates: "Донатерские",
  characters: "Персонажи",
  lite: "Лайт-гадзы",
  mega: "Мега-гадзы"
}

let gadzasData = {
  best: {
    gadzaOnline: {
      name: 'Топовая годзилла от Валеры специально для нашего сайта 💖',
      description: '10D penisumbra suhachevskaya гадза от 2 августа 2020 года',
      duration: 91,
      year: 2020,
      source: 'special',
    },

    _3450D: {
      name: '3450D',
      description: 'Легендарная гадза, появившаяся еще в 2016 году, породившая целую эпоху новых гадзил',
      duration: 10,
      year: 2016,
      source: '3450D',
    },

    _3450Drev: {
      name: '3450D (reversed)',
      description: 'Легендарная гадза не становится менее легендарной, если ее развернуть',
      duration: 10,
      year: 2016,
      source: '3450Drev',
    },

    holyAtmosphereGadza: {
      name: 'Церковная гадза (атмосферная edition)',
      description: 'Совершенная гадза-молитва для пожилых помиловоний Господом, лучшая их церковных',
      duration: 82,
      year: 2019,
      source: 'tserkovnaya2',
    },

    vitasMasloMaskGadza: {
      name: 'Витас масло маска маслорий мега космическая гадза',
      description: '',
      duration: 133,
      year: 2017,
      source: 'maslovitaasa',
    },

    cringeGadza: {
      name: 'Кринжовая гадза',
      description: 'Православная ультрагадза для Ольги Аркадьевны Сулеймановой',
      duration: 86,
      year: 2020,
      source: 'cringe',
    },

    doubleChurchAkuna: {
      name: 'Двойная церковная акуна матата',
      description: '',
      duration: 142,
      year: 2020,
      source: 'doubleChurchAkuna',
    },

    slavBillieJeanGadza: {
      name: 'Православная гадза билли джина',
      description: '',
      duration: 93,
      year: 2020,
      source: 'jean',
    },

    ohSatan: {
      name: 'Ой сатана',
      description: '',
      duration: 56,
      year: 2020,
      source: 'oisatana',
    }
  },

  classic: {

    holyGadza: {
      name: 'Церковная гадза',
      description: 'Неожиданная гадза с сюрпризом от святого духа Валерия. Аминь',
      duration: 42,
      year: 2018,
      source: 'tserkovnaya',
    },

    _300gadza: {
      name: 'Гадза за 200',
      description: 'Одна из первых гадз для донатеров, чувствуется старый погибший на донбассе дед',
      duration: 18,
      year: 2016,
      source: '200',
    },

    modern3Dgadza: {
      name: 'Современная 3D гадза',
      description: 'Гадза, пережившая целых три перезалива на сайт',
      duration: 32,
      year: 2016,
      source: 'sovremennaya',
    },

    gameoverMegaGadza: {
      name: 'Хаме овер твар (МЕГА ГАДЗА)',
      description: 'Эта гадза раскрывает нам все чувства во время падения в getting over it',
      duration: 33,
      year: 2019,
      source: 'gameOverTvar',
    },

    turboDieselEchoMercedes: {
      name: 'Турбо Дизель Эхо Мерседес',
      description: 'Обосратая ЗВЕРСКАЯ УЛЬТРАГАДЗА ИЗ НЕДР пожилго чрева ВАЛЕРИЯ, Чувствутеся демон Сухач',
      duration: 49,
      year: 2017,
      source: 'turboDieselEchoMercedes',
    },

    classic3Dgadza: {
      name: 'Классическая 3D',
      description: 'ГРОМКАЯ стереоскопическая-косммическая гадза, передающая боль в душе украинского киборга',
      duration: 27,
      year: 2016,
      source: '3dclassic',
    },

    _3D_5dot0: {
      name: '3D 5.0',
      description: 'Самая стандартная три д пять ноль гадзилла со слабовыраженными эффектами денчеза ранней стадии',
      duration: 16,
      year: 2018,
      source: '3d50tank',
    },

    _1000gadza: {
      name: 'Гадза за 1000',
      description: 'Мощная эпичная и качественная гадза за одну тысячу российских гривен',
      duration: 13,
      year: 2019,
      source: '1000',
    },

    _500gadza: {
      name: 'Гадза за 500',
      description: 'Нежная гадза, ласкающая уши, как Денис ласкает масочку',
      duration: 41,
      year: 2020,
      source: '500',
    },

    _999gadza: {
      name: 'Гадза за 999',
      description: 'Классическая донатерская гадза, отличающаяся от тысячной не только рублем, но и годом (Дед деньги не считал, а Денис - жадный вор)',
      duration: 65,
      year: 2019,
      source: '999',
    },

    turboWin: {
      name: 'Турбо вин',
      description: 'Отчаянный денис, еще не освоившийся после кражи маски, пытается изобразить, что он - дед',
      duration: 41,
      year: 2018,
      source: 'turbowin',
    },


  },

  donates: {
    satan: {
      name: 'Сатана',
      description: 'Демонская (денисовская) гадза, изгнанная из Глада Валакаса, путем сброса звоночка',
      duration: 33,
      year: 2019,
      source: 'satana',
    },

    beggarGadza: {
      name: 'Нищяя гадза',
      description: 'Гадза для нищего донатера, выпросившего гадзу',
      duration: 32,
      year: 2020,
      source: 'nishaya',
    },

    aveGadza: {
      name: 'Ave gadza',
      description: 'Аве Мария, Аве Сатан. Гадза-молитва во имя Иисуса. Господи, помилуй. Аминь.',
      duration: 26,
      year: 2020,
      source: 'ave',
    },

    hyenaGadza: {
      name: 'Газда для гиены',
      description: '',
      duration: 22,
      year: 2020,
      source: 'giena',
    },

    mackrelGadza: {
      name: 'Газда для скумбрии',
      description: '',
      duration: 19,
      year: 2020,
      source: 'skumbriya',
    },

    beggarProgrammerGadza: {
      name: 'Газда для нищего программиста телеграма',
      description: '',
      duration: 32,
      year: 2020,
      source: 'telegramdev',
    },

    teacherGadza: {
      name: 'Гадза для училки',
      description: '',
      duration: 13,
      year: 2018,
      source: 'teacher',
    },

    rabbitGadza: {
      name: 'Крольчачья гадза',
      description: '',
      duration: 23,
      year: 2020,
      source: 'suhachevskaya',
    },

    christmasGadza: {
      name: 'Рождественнская гадза',
      description: '',
      duration: 12,
      year: 2020,
      source: 'christmas',
    },

    gladSobaka: {
      name: 'Глад собака',
      description: '',
      duration: 32,
      year: 2020,
      source: 'gladsobaka',
    },

    eleazarGadza: {
      name: 'Гадза за упокой Елеазара',
      description: '',
      duration: 38,
      year: 2020,
      source: 'elizar',
    },

    rapGadza: {
      name: 'Реперская годза',
      description: '',
      duration: 10,
      year: 2020,
      source: 'rap',
    },

    sharpGadza: {
      name: 'Резкая гадза',
      description: '',
      duration: 77,
      year: 2019,
      source: 'rezkaya',
    },

    gayGadza: {
      name: 'Гейская гадза',
      description: '',
      duration: 17,
      year: 2020,
      source: 'gay',
    },

    lullabyGadza: {
      name: 'Колыбельная гадза',
      description: '',
      duration: 124,
      year: 2020,
      source: 'kolybel',
    },

    doubleTurboGadza: {
      name: 'Двойная турбо гадза с одной турбиной как на бэмере',
      description: '',
      duration: 33,
      year: 2020,
      source: 'bemer',
    },

    lindaRabbit: {
      name: 'Для Линды Заяц',
      description: '',
      duration: 15,
      year: 2020,
      source: 'linda',
    },

    eugeneDolbaeb: {
      name: 'Для программиста Евгения',
      description: '',
      duration: 9,
      year: 2020,
      source: 'programmer',
    },

    holyKurgan: {
      name: 'Святой курган',
      description: '',
      duration: 89,
      year: 2020,
      source: 'kurgan',
    },

    amazingBigGadza: {
      name: 'Шикарная большая гадза',
      description: '',
      duration: 21,
      year: 2020,
      source: 'amazing',
    },

    platypusGadza: {
      name: 'Утконосная гадза',
      description: '',
      duration: 15,
      year: 2020,
      source: 'utkanos',
    },

    zyablGadza: {
      name: 'Гадза для зяблов',
      description: '',
      duration: 22,
      year: 2020,
      source: 'zyabl',
    },

    dustsucker: {
      name: 'Пылесос для сухача',
      description: '',
      duration: 30,
      year: 2020,
      source: 'pylesos',
    },

    mayki: {
      name: 'ВсеМайкиТочкаСру',
      description: '',
      duration: 17,
      year: 2018,
      source: 'mayki',
    },

    indianChrishin: {
      name: 'Индусско-кришинаисская гадза',
      description: '',
      duration: 14,
      year: 2020,
      source: 'indianChrishin'
    }
  },

  characters: {
    denchezGadza: {
      name: 'Гадза с эффектами денчика',
      description: 'Погань вылезла и украла маску (еще в 2018 году)',
      duration: 54,
      year: 2019,
      source: 'denis',
    },

    lawyerGadza: {
      name: 'Гадза юриста',
      description: 'Специальная гадза, укрепившая любовные отношения между Юристом и Дедом',
      duration: 11,
      year: 2017,
      source: 'urist',
    },

    mongolGadza: {
      name: 'Монгольская гадза',
      description: 'Денчиковая гадзилла-молитва с мощным началом',
      duration: 27,
      year: 2019,
      source: 'mongol',
    },

    exgirlfriendGadza: {
      name: 'Гадза для бывшей',
      description: 'Слабоватая гадза для бывшей Дениски',
      duration: 16,
      year: 2018,
      source: 'bivshaya',
    },

    colonelGadza: {
      name: 'Гадза для полковника',
      description: 'Присутствует эффект слетания масочки и ранняя стадия Сухача',
      duration: 52,
      year: 2017,
      source: 'polkovnic',
    },

    yulechkenaGadza: {
      name: 'Юлечкина гадзочка',
      description: 'Неандертальская гадза от пожилой черной обезьяны',
      duration: 8,
      year: 2017,
      source: 'ula',
    },

    bigGorilla: {
      name: 'Big gorilla',
      description: '',
      duration: 14,
      year: 2020,
      source: 'biggorilla',
    },

    gayClubGadza: {
      name: 'Гадза для гей клуба спа воды (+ответная от Евгения)',
      description: 'Женечка гадзанул в ответку',
      duration: 25,
      year: 2016,
      source: 'spavoda',
    },

    pitbul: {
      name: 'Пит буль',
      description: '',
      duration: 17,
      year: 2020,
      source: 'pitbul',
    },

    stalkerGadza: {
      name: 'Сталкерская хадза',
      description: '',
      duration: 39,
      year: 2020,
      source: 'stalker',
    },

    svetlanaSignals: {
      name: 'Сигналы для Светланы',
      description: '',
      duration: 19,
      year: 2019,
      source: 'signal',
    },

    angelGadza: {
      name: 'Ангельская гадза',
      description: '',
      duration: 69,
      year: 2020,
      source: 'angel',
    },

    penisSuhachevGadza: {
      name: 'Гадза от пениса сухачева',
      description: '',
      duration: 24,
      year: 2019,
      source: 'penis',
    },

    hellGadzepala: {
      name: 'Адская гадзепала',
      description: '',
      duration: 103,
      year: 2020,
      source: 'hell',
    },

    four_three_two_one_takist_eblan: {
      name: 'Четыре, три, два, ноль. Танкист - кроль',
      description: '',
      duration: 106,
      year: 2020,
      source: 'tankrol',
    },

    metalRockTank: {
      name: 'Метал рок танк',
      description: '',
      duration: 37,
      year: 2020,
      source: 'metaltank'
    },

    oksikPenaPubg: {
      name: 'Гадза пены в пабг (с эффектом Оксика)',
      description: 'НЕ СЧИТАААААЕТСЯ!!!',
      duration: 44,
      year: 2021,
      source: 'oksikPenaPubg'
    },

    fatherOfGadz: {
      name: 'Отче Наш',
      description: 'Запись с черного ящика бройлера 747 за 25 секунд до крушения',
      duration: 25,
      year: 2020,
      source: 'fatherOfGods'
    }
  },

  lite: {
    demoGadza: {
      name: 'Демо-гадза',
      description: 'Демо за 100 рублей',
      duration: 1,
      year: 2020,
      source: 'demo',
    },

    meow: {
      name: 'Мяу',
      description: 'Лайтовая мяудза от вора масочки',
      duration: 29,
      year: 2020,
      source: 'meow',
    },

    cyberGadza: {
      name: 'Кибер-гадза',
      description: 'Борьба дениса с валакасом в 14 секундах',
      duration: 14,
      year: 2018,
      source: 'cyber',
    },

    cosmicGadza: {
      name: 'Космическая гадза',
      description: 'Послание с космического корабля, на который денис отправил деда',
      duration: 15,
      year: 2017,
      source: 'space',
    },

    mySummerCar: {
      name: 'Гадза Май Самарского Кара',
      description: '',
      duration: 14,
      year: 2020,
      source: 'mysummercar',
    },

    warzoneGadzas: {
      name: 'Две варзоновских годзиллы',
      description: '',
      duration: 22,
      year: 2020,
      source: 'warzone',
    },

    gadzepala4you: {
      name: 'Гадзепала в ваш дом',
      description: '',
      duration: 16,
      year: 2019,
      source: 'do',
    },

    loudestGadza: {
      name: '"Самая громкая гадза" (нет)',
      description: '',
      duration: 12,
      year: 2016,
      source: 'gromkaya',
    },

    demo150: {
      name: 'Демо (150)',
      description: '',
      duration: 3,
      year: 2020,
      source: 'demo150',
    },

    gadzality: {
      name: 'Годзалити',
      description: '',
      duration: 9,
      year: 2020,
      source: 'gadzality',
    },


    winGadza: {
      name: 'Победная гадза',
      description: '',
      duration: 14,
      year: 2020,
      source: 'pobednaya',
    },

    scaryGadza: {
      name: 'Страшная гадза',
      description: '',
      duration: 13,
      year: 2020,
      source: 'strah',
    },


    americanGadza: {
      name: 'Гадзилла по-амэрыкански',
      description: '',
      duration: 22,
      year: 2020,
      source: 'usa',
    },

    throatTrombGadza: {
      name: 'Гадза, из-за которой у Валеры оторвался горловой тромб',
      description: '',
      duration: 51,
      year: 2020,
      source: 'tromb',
    },

    meowdza: {
      name: 'Мяудза',
      description: '',
      duration: 5,
      year: 2020,
      source: 'maydza',
    },

    streamSniperGadza: {
      name: 'Стримснайперская гадза',
      description: '',
      duration: 7,
      year: 2020,
      source: 'streamsniper',
    },

    BmLM: {
      name: 'Black Mamba Lives Matter',
      description: '',
      duration: 6,
      year: 2020,
      source: 'blackmamba',
    },
  },

  mega: {
    godza: {
      name: 'godза',
      description: 'Ультраобосратая гадза с эффектом присутствия настоящего деда',
      duration: 18,
      year: 2017,
      source: 'godzavr',
    },

    effectHolyOldGadza: {
      name: 'Гадза с эффектом присутствия пожилой славянской гадзы',
      description: 'Святая христианская гадза-молитва с вкраплениями славянской гадзы',
      duration: 161,
      year: 2019,
      source: 'gadzaWithEffectOfSlavGadze',
    },

    _5dot0gadza: {
      name: 'Гадза 5.0',
      description: 'Гадза, в который пожилой воин сфейлил на середине',
      duration: 23,
      year: 2016,
      source: '5dot0',
    },

    tractor: {
      name: 'Трактор',
      description: 'Гадза, в которой пожилая масочка валеры залагала и крашнулась',
      duration: 25,
      year: 2020,
      source: 'traktor',
    },

    mostPowerfullGadza: {
      name: 'Мощнейшая гадза за всю историю',
      description: 'Мегажоская гадза от пожилого внутреннего зверя Пениса Сухачевского',
      duration: 51,
      year: 2020,
      source: 'gadzepala',
    },

    tankistGadza: {
      name: 'Гадза для танкистов',
      description: 'Длинная жоская таксогадза пожилого слонопотавра',
      duration: 111,
      year: 2017,
      source: 'tankist',
    },

    maskFlewOffGadza: {
      name: 'Гадза под слетание маски',
      description: 'На аудио запечатлен момент слетания маски с Дениса и вырывания внутреннего демона',
      duration: 12,
      year: 2017,
      source: 'slet',
    },

    _5twin: {
      name: '5 Твин',
      description: 'Нелепое подобие церковной атмосферной гадзы, наспех сделанное денисом сухачевским',
      duration: 101,
      year: 2018,
      source: '5twin',
    },

    surrender: {
      name: 'Сдавайся ты окружен',
      description: 'НЛО захватило маску, украв ее у Дениса (а хто ето?) ало ало ало ало ало',
      duration: 126,
      year: 2017,
      source: 'nlo',
    },

    catGadza: {
      name: 'Кошачья гадза',
      description: 'Внезапная мяудза от Пениса',
      duration: 29,
      year: 2020,
      source: 'cat',
    },

    catGadzaTankist: {
      name: 'Кошачья гадза (для танкистов)',
      description: 'Роковая мяудза от подстольной нечисти',
      duration: 84,
      year: 2020,
      source: 'cat2',
    },

    vrchatgadza: {
      name: 'Виртуальная гадза для VR Chat',
      description: '',
      duration: 16,
      year: 2018,
      source: 'vr',
    },

    metalGadza: {
      name: 'Металл гадза',
      description: '',
      duration: 64,
      year: 2020,
      source: 'metal',
    },

    anomalyCosmicGadza: {
      name: 'Аномально-космическая гадза',
      description: '',
      duration: 78,
      year: 2020,
      source: 'anomalspace',
    },

    christovaSpirit: {
      name: 'Гадза Христова духа (за 1000)',
      description: '',
      duration: 254,
      year: 2020,
      source: 'jesus',
    },

    satanMegaGadza: {
      name: 'Сатанистская мега-гадза',
      description: '',
      duration: 204,
      year: 2020,
      source: 'satanamega',
    },

    _4D_6dot5_extraplus: {
      name: '4D 6.5 Гадза Extra+',
      description: '',
      duration: 134,
      year: 2018,
      source: '6dot5extraplus',
    },

    _alik: {
      name: 'МЕГА гадза от Алика Кутакбашева',
      description: '',
      duration: 9,
      year: 2021,
      source: 'alik',
    },

    celebrate: {
      name: 'Поздравительная гадза',
      description: 'С днем рождения, наш сайт!',
      duration: 18,
      year: 2021,
      source: 'celebrate',
    }
  },
}

window.gadzasData = gadzasData

window._gadzasData = {}
for(let _category of Object.keys(window.gadzasData)){
  Object.assign(window._gadzasData, window.gadzasData[_category])
}

function importAllGadzas(r) {
  let gadzasfiles = {};
  r.keys().map((item, index) => { gadzasfiles[item.replace('./', '')] = r(item); });
  return gadzasfiles;
}

export default gadzasData;

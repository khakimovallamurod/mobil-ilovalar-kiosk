/* Ilovalar ma'lumotlari. Matn yoki havolani şu yerda özgartiring.
   id = images/ içidagi papka nomi. Rasmlar: images/<id>/1.jpg, 2.jpg, 3.png ...
   Logo (ixtiyoriy): images/<id>/logo.png */

window.KIOSK = {
  title: "Mobil ilovalar",
  slideSeconds: 16,     // har bir ilova ekranda turadigan vaqt (soniya)
  shotSeconds: 3.5,     // ilova rasmlari almaşiş vaqti (soniya)
  introSeconds: 9,      // kiriş slaydi vaqti (0 = kiriş slaydi körsatilmaydi)

  apps: [
    {
      id: "childinfo",
      name: "CHILD.INFO",
      color: "#f59e0b",
      tag: "Darslar va öyinlar",
      tagline: "Boşlanğiç sinf öquvçilari uçun ta'limiy mobil ilova",
      desc: "Interaktiv topşiriqlar, öyinlar va testlar orqali informatika asoslarini qiziqarli örgatadi.",
      caption: "Darslar, öyinlar va natijalar bir joyda",
      link: "https://play.google.com/store/apps/details?id=uz.childinfo.app",
      features: [
        "Informatika asoslari böyiça darslar",
        "Algoritm va mantiq topşiriqlari",
        "Ta'limiy öyinlar",
        "Testlar va natijalar",
        "Xotira va diqqatni rivojlantiriş",
        "Yulduzlar bilan rağbatlantiriş"
      ],
      advantages: [
        "Boşlanğiç sinf uçun moslaşgan",
        "Qiziqarli va tuşunarli örganiş",
        "Özbek tilida",
        "Bola natijalarini kuzatiş",
        "Rangli va qulay interfeys"
      ]
    },
    {
      id: "todoapp",
      name: "Todo App",
      color: "#2563eb",
      tag: "Eslatma · Kalendar",
      tagline: "Qulay vazifalar rejalaştirgiçi va eslatmalar",
      desc: "Kuningizni tartibga soling. Vazifalar, eslatmalar va kalendar bitta ilovada.",
      caption: "Vazifalar, eslatmalar va kalendar bir joyda",
      link: "https://play.google.com/store/apps/details?id=uz.saydullayev.todoapp",
      features: [
        "Vazifa va röyxatlarni tez qöşiş",
        "Iş, öqiş va şaxsiy toifalar",
        "Eslatma va bildirişnomalar",
        "Qulay içki kalendar",
        "Profilga ism va rasm qöşiş",
        "Zamonaviy va tezkor dizayn"
      ],
      advantages: [
        "Oddiy, ammo kuçli ilova",
        "Muhim işlar unutilmaydi",
        "Vaqtni samarali boşqariş",
        "Kunni oson rejalaştiriş",
        "Çiroyli va tezkor interfeys"
      ]
    },
    {
      id: "ozkey",
      name: "ÖzKey",
      color: "#0ea5e9",
      tag: "Beta versiya",
      tagline: "Özbek klaviaturasi, lotin va kirill yozuvi",
      desc: "Söz takliflari, tarjima va mavzular bilan Android uçun tezkor özbekça klaviatura.",
      caption: "Lotin, kirill, tarjima va emoji bir klaviaturada",
      link: "https://play.google.com/store/apps/details?id=uz.uzbekkeyboard",
      features: [
        "Ö, Ğ, Ş, Ç harflari bilan yoziş",
        "Kirill alifbosida yoziş",
        "Aqlli söz takliflari va avtotuzatiş",
        "Ilova içida tarjima",
        "Nusxalangan matnlar va emoji",
        "Klaviatura körinişini tanlaş"
      ],
      advantages: [
        "Reklamasiz",
        "Ma'lumot yiğilmaydi, töliq maxfiy",
        "Yengil va tezkor",
        "Lotin va kirillda aniq yoziş",
        "Har kungi foydalaniş uçun qulay"
      ]
    },
    {
      id: "navaitour",
      name: "Navai Tour",
      color: "#10b981",
      tag: "Turizm xizmatlari",
      tagline: "Özbekiston böyiça sayohat yordamçisi",
      desc: "Diqqatga sazovor joylar, mehmonxonalar, restoranlar va gidlarni bitta ilovada toping.",
      caption: "Joylar, mehmonxonalar va restoranlar bir ilovada",
      link: "https://play.google.com/store/apps/details?id=com.navaitour.app",
      features: [
        "Diqqatga sazovor joylar",
        "Mehmonxonalar",
        "Restoran va kafelar",
        "Gid xizmatlari",
        "Foydali sayohat xizmatlari",
        "Joylar böyiça qulay qidiruv"
      ],
      advantages: [
        "Hamma ma'lumot bir joyda",
        "Sayohatni oson rejalaştiriş",
        "Mahalliy va xorijiy turistlar uçun",
        "Turizmni rivojlantirişga hissa",
        "Qulay va tuşunarli interfeys"
      ]
    },
    {
      id: "samduai",
      name: "SamDU AI",
      color: "#7c3aed",
      tag: "Test versiya",
      tagline: "Samarqand davlat universiteti uçun AI yordamçi",
      desc: "Universitet bilan boğliq savollarga tez va aniq javob beruvçi aqlli mobil yordamçi.",
      caption: "Savollaringizga AI soniyalarda javob beradi",
      link: "https://play.google.com/apps/testing/uz.samdu.ai",
      features: [
        "Aqlli AI chatbot",
        "Fakultetlar va dars jadvallari",
        "Sönggi yangiliklar va e'lonlar",
        "Ovozli savol beriş",
        "Köp beriladigan savollarga javoblar",
        "Universitet qoidalari böyiça javoblar"
      ],
      advantages: [
        "Soniyalarda javob",
        "Talaba, abituriyent va öqituvçilar uçun",
        "Özbek tilida",
        "SamDU AI Lab tomonidan yaratilgan",
        "Universitet doim yoningizda"
      ]
    }
  ]
};

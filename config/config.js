const CURRENCY = 'UAH';

const CURRENCY_EXCHANGE = {
    USD: 27.96,
    RUB: 0.38,
};

const BASKET = {
    elements: 4,
    price: 4000,
};

const TOP_MENU = {
    catalog: {
        order: 1,
        title: 'Каталог',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    about_company: {
        order: 2,
        title: 'О компании',
        submenu: [
            {
                order: 2,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 1,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    payment_delivery: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    payment_delivery1: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    payment_delivery2: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    payment_delivery3: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    payment_delivery4: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    payment_delivery5: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    payment_delivery6: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    payment_delivery7: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
};

const MENU = [
    {
        order: 1,
        title: 'VOIP ОБОРУДОВАНИЕ',
        url: 'voip_equipment.html',
    },
    {
        order: 6,
        title: 'SKYPE оборудование',
        url: 'skype_equipment.html',
    },
    {
        order: 3,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 2,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
    },
    {
        order: 7,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
    },
    {
        order: 5,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
    },
    {
        order: 8,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
    },
    {
        order: 9,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
    },
    {
        order: 10,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
    },
    {
        order: 11,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
    },
    {
        order: 12,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
    }
];

const NEWS = [
    {
        date: '2021/01/01',
        title: 'Новинка от «Элтекс» - точка доступа WEP',
        description: 'Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.',
        img: 'images/firstAdvertisingImg.jpg',
        url: 'voip_equipment1.html',
    },
    {
        date: '2020/12/25',
        title: 'Новинка от компании Grandstream!',
        description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
        img: 'images/secondAdvertisingImg.jpg',
        url: 'voip_equipment2.html',
    },
    {
        date: '2021/01/14',
        title: 'WiFi точка доступа от компании Grandstream!',
        description: 'Уже скоро в продаже!',
        img: 'images/thirdAdvertisingImg.jpg',
        url: 'voip_equipment3.html',
    },
    {
        date: '2021/05/16',
        title: 'WiFi точка доступа от компании Grandstream!',
        description: 'Уже скоро в продаже!',
        img: 'images/firstAdvertisingImg.jpg',
        url: 'voip_equipment4.html',
    }
];

const BANNER = [
    {
        order: 1,
        img: 'images/sliderImage.jpg',
        url: 'voip_equipment1.html',
    },
    {
        order: 3,
        img: 'images/mockSliderImage1.jpg',
        url: 'voip_equipment2.html',
    },
    {
        order: 2,
        img: 'images/mockSliderImage2.jpg',
        url: 'voip_equipment3.html',
    }
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',

        oldPrice: '1100',
        currency: 'USD',
        date: '2021/02/01',
        url: 'new_items/item2.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '1300',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/13',
        url: 'new_items/item3.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/01',
        url: 'new_items/item4.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '999',
        oldPrice: '12h10',
        currency: 'UAH',
        date: '2021/01/23'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '1000',
        oldPrice: '1500',
        currency: 'UAH',
        date: '2020/01/01',
        url: 'new_items/item6.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '9999',
        oldPrice: '1500',
        currency: 'UAH',
        date: '2018/01/01',
        url: 'new_items/item7.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/01',
        url: 'new_items/item4.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '999',
        oldPrice: '12h10',
        currency: 'UAH',
        date: '2021/01/23'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '1000',
        oldPrice: '1500',
        currency: 'UAH',
        date: '2020/01/01',
        url: 'new_items/item6.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '9999',
        oldPrice: '1500',
        currency: 'UAH',
        date: '2018/01/01',
        url: 'new_items/item7.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '500',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item1.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2020/12/25',
        url: 'new_items/item2.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '100',
        oldPrice: '1100',
        currency: 'USD',
        date: '2020/12/25',
        url: 'new_items/item3.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '50000',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item4.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP',
        price: '230',
        oldPrice: '1100',
        currency: 'USD',
        date: '2020/12/25',
        url: 'new_items/item5.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '150',
        oldPrice: '200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item1.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '150',
        oldPrice: '200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item2.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '150',
        oldPrice: '200',
        currency: 'UAH',
        date: '2021/01/13',
        url: 'https://same_url/item3.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '150',
        oldPrice: '200',
        currency: 'RUB',
        date: '2021/01/13',
        url: 'https://same_url/item4.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/IP%20телефон%201.png',
        price: '150',
        oldPrice: '200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item5.html'
    }
];

// time_action format: "d" - day, "h" - hour, "m" - minute. if doesn't exist = infinity
const PROMOTIONS = [
    {
        title: 'Название акции',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/акция1.png',
        url: 'https://same_url/item1.html',
        time_action: '1d 2h 20m'
    },
    {
        title: 'Название акции 2',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/акция2.png',
        url: 'https://same_url/item2.html',
    },
    {
        title: 'Название акции',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/акция3.png',
        url: 'https://same_url/item1.html',
        time_action: '0d 20h 20m'
    },
    {
        title: 'Название акции',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'images/акция4.png',
        url: 'https://same_url/item1.html',
        time_action: '5d 1h 6m'
    },
];

const BUYING_RIGHT_NOW = [
    {
        title: 'Название товара',
        img: 'images/popularProduct1.jpg',
        url: 'https://same_url/item1.html',
    },
    {
        title: 'Название товара 2',
        img: 'images/popularProduct2.jpg',
        url: 'https://same_url/item2.html',
    },
    {
        title: 'Название товара 3',
        img: 'images/popularProduct3.jpg',
        url: 'https://same_url/item3.html',
    },
    {
        title: 'Название товара 4',
        url: 'https://same_url/item4.html',
    },
    {
        title: 'Название товара 5',
        img: 'images/popularProduct4.jpg',
        url: 'https://same_url/item5.html',
    },
]
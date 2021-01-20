// Price conversion
ITEMS.forEach((item, index) => {
    if (item.date) {
        ITEMS[index].date = new Date(item.date).getTime()
    }
    ITEMS[index].price = Number(ITEMS[index].price)
    ITEMS[index].oldPrice = Number(ITEMS[index].oldPrice)
    if (!isNaN(item.price) && item.currency && item.currency !== CURRENCY) {
        ITEMS[index].price = Math.trunc(ITEMS[index].price * CURRENCY_EXCHANGE[item.currency])
        if(!isNaN(item.oldPrice)) {
            ITEMS[index].oldPrice = Math.trunc(ITEMS[index].oldPrice * CURRENCY_EXCHANGE[item.currency])
        }
        ITEMS[index].currency = CURRENCY
    }
})

// top menu sort
let mainMenu = []
for (let key in TOP_MENU) {
    mainMenu.push(TOP_MENU[key])
}
mainMenu = mainMenu
    .sort((a, b) => a.order > b.order ? 1 : -1)
    .slice(0, 9)

// new products sort
const newProductItems = ITEMS
    .filter(item => item.type === 'new')
    .sort((a, b) => a.date < b.date ? 1 : -1)

// recommended products sort
const recommendedProductItems = ITEMS
    .filter(item => item.type === 'recommended')
    .sort((a, b) => a.price > b.price ? 1 : -1)

// sale products sort
const saleProductItems = ITEMS
    .filter(item => item.type === 'sale')
    .sort((a, b) => a.oldPrice - a.price < b.oldPrice - b.price ? 1 : -1)

const cart = {
    items: BASKET.elements,
    totalPrice: BASKET.price,
    currency: CURRENCY
}

displayMainMenu()
displayBurgerMenu()
updateCart()
displayCatalogMenu()
displayNews()
slider()
displayProductItems('new', document.querySelector('.newProductItemsBlock'), newProductItems.slice(0, 10))
displayProductItems('recommended', document.querySelector('.recommendProductItemsBlock'), recommendedProductItems.slice(0, 10))
displayProductItems('sale', document.querySelector('.discountProductItemsBlock'), saleProductItems.slice(0, 10))
displayProductItems('promotion', document.querySelector('.stockItemsBlock'), PROMOTIONS.slice(0, 10))
displayProductItems('popular', document.querySelector('.popularProductItemsBlock'), BUYING_RIGHT_NOW)

document.querySelectorAll('.carouselBlock').forEach(
    item => carousel(item.querySelector('.carouselContainer'), item.querySelector('.carousel'), item.querySelector('.mobileCarousel')))

// main menu display
function displayMainMenu() {
    const container = document.querySelector('.navigation')
    mainMenu.forEach(item => {
        container.querySelector('ul').insertAdjacentHTML('beforeend',
            `<li>
                ${ item.url
                    ? `<a href="${ item.url }">${ item.title }</a>`
                    : `<p class="dropdownMenu">${ item.title }</p>`
                }
                ${ item.submenu
                    ? `<div>
                            ${ item.submenu
                                .sort((a, b) => a.order > b.order ? 1 : -1)
                                .map(subitem => {
                                    return `<a href="${ subitem.url ?? '#' }">${ subitem.title }</a>`
                                })
                                .join('')
                            }
                        </div>`
                    : ''
                }
            </li>`
        )
    })
}

// burger menu display
function displayBurgerMenu() {
    const container = document.querySelector('.mobileMenu')
    mainMenu.forEach(item => {
        container.querySelector('ul').insertAdjacentHTML('beforeend',
            `<li>
                ${ item.url
                    ? `<a href="${ item.url }">${ item.title }</a>`
                    : `<span class="mobileDropdownMenu" onclick="toggleSubmenu(event)">${ item.title }</span>`
                }
                ${ item.submenu
                    ? `<div>
                        ${ item.submenu
                            .sort((a, b) => a.order > b.order ? 1 : -1)
                            .map(subitem => {
                                return `<a href="${ subitem.url ?? '#' }">${ subitem.title }</a>`
                            })
                            .join('')
                        }
                    </div>`
                    : ''
                }
            </li>`
        )
    })
}

function toggleSubmenu(event) {
    event.target.parentNode.querySelector('div').style.display = event.target.parentNode.querySelector('div').style.display === 'block' ? 'none' : 'block'
}

function updateCart(price) {
    if (price) {
        cart.items++
        cart.totalPrice += price
    }
    document.querySelectorAll('.cartCounter').forEach(item => {
        item.innerHTML = cart.items
    })
    document.querySelector('.cartTotalPrice').innerHTML = cart.totalPrice
    document.querySelector('.cartCurrency').innerHTML = cart.currency
}

// catalog menu display
function displayCatalogMenu() {
    const container = document.querySelector('.catalogMenu')
    MENU
        .sort((a, b) => a.order > b.order ? 1 : -1)
        .forEach(item => {
            container.querySelector('ul').insertAdjacentHTML('beforeend',
                `<li class="catalogMenuItem">
                <a href="${ item.url ?? '#'}">
                    ${ item.title }
                </a>
            </li>`
            )
        })

    const leftButton = container.querySelector('.catalogMenuButtonLeft')
    const rightButton = container.querySelector('.catalogMenuButtonRight')
    leftButton.addEventListener('click', () => menuScroll('left'))
    rightButton.addEventListener('click', () => menuScroll('right'))

    if (MENU.length > 10) {
        rightButton.style.display = 'block'
    }

    function menuScroll(direction) {
        const menuOffset = Number(container.querySelectorAll('li')[0].style.transform.match(/(?<=\().+(?=%)/))
        if (direction === 'left') {
            const newOffset = menuOffset + 100
            container.querySelectorAll('li').forEach(item => {
                item.style.transform = `translateX(${newOffset}%)`
            })

            rightButton.style.display = 'block'
            if (newOffset === 0) {
                leftButton.style.display = 'none'
            }
        } else if (direction === 'right') {
            const newOffset = menuOffset - 100
            container.querySelectorAll('li').forEach(item => {
                item.style.transform = `translateX(${newOffset}%)`
            })

            leftButton.style.display = 'block'
            if (MENU.length - 10 === -newOffset / 100) {
                rightButton.style.display = 'none'
            }
        }
    }
}

// news display
function displayNews() {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    const newsCount = 3
    NEWS
        .filter(item => item.date && item.title && item.description && item.img && item.url)
        .sort(() => Math.random() - 0.5)
        .slice(0, newsCount)
        .forEach(item => {
            const day = item.date.match(/(?<=\/)\d+$/)
            const month = Number(item.date.match(/(?<=\/)\d+(?=\/)/))
            document.querySelector('.newsContainer').insertAdjacentHTML('beforeend',
                `<div class="newsColumnItem">
                  <div class="newsColumnItemImg">
                    <img src="${ item.img }" alt="${ item.title }">
                    <div class="newsColumnItemDay">${ day }</div>
                    <p>${ months[month - 1] }</p>
                  </div>
                  <div class="newsColumnItemInfo">
                    <a href="#">${ item.title }</a>
                    <p>Предприятие «Элтекс» запустило производство точки доступа WER-2ac.</p>
                  </div>
                </div>`
            )
        })
}

// slider
function slider() {
    const container = document.querySelector('#slides')
    const controlsContainer = document.querySelector('.slideControls')
    BANNER
        .filter(item => item.img)
        .sort((a, b) => a.order > b.order ? 1 : -1)
        .forEach(item => {
            container.insertAdjacentHTML('beforeend',
                `<li class="slide">
                    <img src="${ item.img }" alt="Слайд">
                </li>`
            )
            controlsContainer.querySelector('.dots').insertAdjacentHTML('beforeend',
                `<li class="dot"></li>`
            )
        })

    const slides = container.querySelectorAll('.slide')
    const dots = controlsContainer.querySelectorAll('.dot')
    let currentSlide = 0
    slides[currentSlide].classList.add('active')
    dots[currentSlide].classList.add('active')
    const slideInterval = setInterval(nextSlide,5000)

    controlsContainer.querySelector('.leftArrow').addEventListener('click', prevSlide)
    controlsContainer.querySelector('.rightArrow').addEventListener('click', () => nextSlide(false))
    dots.forEach((item, index) => {
        dots[index].addEventListener('click', () => chooseSlide(index))
    })

    function nextSlide(auto = true) {
        slides[currentSlide].classList.remove('active')
        dots[currentSlide].classList.remove('active')
        currentSlide = (currentSlide + 1) % slides.length
        slides[currentSlide].classList.add('active')
        dots[currentSlide].classList.add('active')
        if (!auto) {
            clearInterval(slideInterval)
        }
    }

    function prevSlide() {
        slides[currentSlide].classList.remove('active')
        dots[currentSlide].classList.remove('active')
        currentSlide = currentSlide !== 0 ? currentSlide - 1 : slides.length - 1
        slides[currentSlide].classList.add('active')
        dots[currentSlide].classList.add('active')
        clearInterval(slideInterval)
    }

    function chooseSlide(id) {
        slides[currentSlide].classList.remove('active')
        dots[currentSlide].classList.remove('active')
        currentSlide = id
        slides[currentSlide].classList.add('active')
        dots[currentSlide].classList.add('active')
        clearInterval(slideInterval)
    }
}

// products display
function displayProductItems(type, container, items) {
    switch (type) {

        case 'new':
            items.forEach(item => {
                container.querySelector('.carousel').insertAdjacentHTML('beforeend',
                    `<div class="newProductItem carouselItem">
                      <a href="${ item.url ?? '#'}">
                        <div class="newProductItemImg">
                          <img src="${ item.img ?? 'images/icons/noImage.png'}" alt="${ item.description }">
                        </div>
                        <a href="${ item.url ?? '#'}">${ item.description }</a>
                        <div class="newProductItemPriceBlock">
                            ${ !isNaN(item.price)
                                ? `<p>Цена:</p>
                                    <p class="price">${ item.price } ${CURRENCY}</p>
                                    ${ !isNaN(item.oldPrice)
                                    ? `<p class="oldPrice">${ item.oldPrice } ${CURRENCY}</p>`
                                    : ''
                                }`
                                : '<p style="color: #797471;">Товар временно недоступен</p>'
                            }
                        </div>
                        <div class="newProductItemBuyLine">
                          ${ !isNaN(item.price)
                            ? `<button class="newProductItemBuyButton" onclick="updateCart(${ item.price })">
                                <img src="images/icons/foodBasket.png" alt="купить">
                                    купить
                                </button>`
                            : ''
                            }
                          ${ item.url
                                ? `<a href="${ item.url }">Подробнее</a>`
                                : ''
                            }
                        </div>
                      </a>
                    </div>`
                )
            })
            break

        case 'recommended':
            items.forEach(item => {
                container.querySelector('.carousel').insertAdjacentHTML('beforeend',
                    `<div class="recommendProductItem carouselItem">
                      <a href="${ item.url ?? '#'}">
                        <div class="recommendProductItemImg">
                          <img src="${ item.img ?? 'images/icons/noImage.png'}" alt="${ item.description }">
                        </div>
                        <a href="${ item.url ?? '#'}">${ item.description }</a>
                        <div class="recommendProductItemPriceBlock">
                            ${ !isNaN(item.price)
                        ? `<p>Цена:</p>
                                    <p class="price">${ item.price } ${CURRENCY}</p>
                                    ${ !isNaN(item.oldPrice)
                            ? `<p class="oldPrice">${ item.oldPrice } ${CURRENCY}</p>`
                            : ''
                        }`
                        : '<p style="color: #797471;">Товар временно недоступен</p>'
                            }
                        </div>
                        <div class="recommendProductItemBuyLine">
                          <button class="recommendProductItemBuyButton" ${ isNaN(item.price) ? 'disabled' : ''} onclick="updateCart(${ item.price })">
                            <img src="images/icons/foodBasket.png" alt="купить">
                            купить
                          </button>
                          ${ item.url
                        ? `<a href="${ item.url }">Подробнее</a>`
                        : ''
                            }
                        </div>
                      </a>
                    </div>`
                )
            })
            break

        case 'sale':
            items.forEach(item => {
                container.querySelector('.carousel').insertAdjacentHTML('beforeend',
                    `<div class="discountProductItem carouselItem">
                      <a href="${ item.url ?? '#'}">
                        <div class="discountProductItemImg">
                          <img src="${ item.img ?? 'images/icons/noImage.png'}" alt="${ item.description }">
                        </div>
                        <a href="${ item.url ?? '#'}">${ item.description }</a>
                        <div class="discountProductItemPriceBlock">
                            ${ !isNaN(item.price)
                        ? `<p>Цена:</p>
                                    <p class="price">${ item.price } ${CURRENCY}</p>
                                    ${ !isNaN(item.oldPrice)
                            ? `<p class="oldPrice">${ item.oldPrice } ${CURRENCY}</p>`
                            : ''
                        }`
                        : '<p style="color: #797471;">Товар временно недоступен</p>'
                            }
                        </div>
                        <div class="discountProductItemBuyLine">
                          <button class="discountProductItemBuyButton" ${ isNaN(item.price) ? 'disabled' : ''} onclick="updateCart(${ item.price })">
                            <img src="images/icons/foodBasket.png" alt="купить">
                            купить
                          </button>
                          ${ item.url
                        ? `<a href="${ item.url }">Подробнее</a>`
                        : ''
                            }
                        </div>
                      </a>
                    </div>`
                )
            })
            break

        case 'promotion':
            items.forEach(item => {
                const days = item.time_action?.match(/\d+(?=d)/)
                const hours = item.time_action?.match(/\d+(?=h)/)
                const minutes = item.time_action?.match(/\d+(?=m)/)
                container.querySelector('.carousel').insertAdjacentHTML('beforeend',
                    `<div class="stockItem carouselItem">
                      <a href="${ item.url ?? '#'}">${ item.title }</a>
                      <img src="${ item.img ?? 'images/icons/noImage.png'}" alt="${ item.title }">
                      ${ item.description ? `<p>${ item.description }</p>` : ''}
                      <div class="stockItemValidityBlock">
                        <p>Срок действия:</p>
                        <div class="timer">
                          ${item.time_action
                                ? `<div class="days">
                                    <span>${Math.trunc(days / 10)}</span>
                                    <span>${days % 10}</span>
                                    <p>дней</p>
                                  </div>
                                  <span class="timerColon">:</span>
                                  <div class="hours">
                                    <span>${Math.trunc(hours / 10)}</span>
                                    <span>${hours % 10}</span>
                                    <p>часов</p>
                                  </div>
                                  <span class="timerColon">:</span>
                                  <div class="minutes">
                                    <span>${Math.trunc(minutes / 10)}</span>
                                    <span>${minutes % 10}</span>
                                    <p>минут</p>
                                  </div>`
                                : '<p>Бессрочно</p>'
                            }
                        </div>
                      </div>
                      <div class="detailsLink">
                        ${item.url
                            ? `<a href="${item.url}">Подробнее</a>`
                            : ''
                        }
                      </div>
                    </div>`
                )
            })
            break

        case 'popular':
            items.forEach(item => {
                container.insertAdjacentHTML('beforeend',
                    `<div class="popularProductItem">
                        <a href="${ item.url ?? '#'}">
                          <div class="popularProductItemImg">
                            <img src="${ item.img ?? 'images/icons/noImage.png'}" alt="${ item.title }">
                          </div>
                          <div class="popularProductItemLink">
                            <a href="${ item.url ?? '#'}">${ item.title }</a>
                          </div>
                        </a>
                     </div>`
                )
            })
            break

        default:
            return
    }
}

function carousel(parent, container, mobile) {
    const items = container.querySelectorAll('.carouselItem')
    const leftButton = parent.parentNode.querySelector('.carouselLeft')
    const rightButton = parent.parentNode.querySelector('.carouselRight')
    const mobileLeftButton = mobile.querySelector('.mobileLeft')
    const mobileRightButton = mobile.querySelector('.mobileRight')

    const config = {
        visible: [0],
        itemsCount: 0,
        itemWidth: 0,
        margin: 0,
        currentMode: 0
    }

    setCarouselConfig()

    window.addEventListener('resize', setCarouselConfig)
    leftButton.addEventListener('click', carouselMoveLeft)
    rightButton.addEventListener('click', carouselMoveRight)
    mobileLeftButton.addEventListener('click', carouselMoveLeft)
    mobileRightButton.addEventListener('click', carouselMoveRight)

    function setCarouselConfig() {
        let newMode = 0

        if (window.innerWidth >= 1140) {
            config.itemsCount = 4
            config.itemWidth = 250
            config.margin = 25
            newMode = 1140
        } else if (window.innerWidth < 1140 && window.innerWidth >= 980) {
            config.itemsCount = 4
            config.itemWidth = 230
            config.margin = 13
            newMode = 980
        } else if (window.innerWidth < 980 && window.innerWidth >= 750) {
            config.itemsCount = 3
            config.itemWidth = 230
            config.margin = 17
            newMode = 750
        } else if (window.innerWidth < 750) {
            config.itemsCount = 1
            config.itemWidth = 230
            config.margin = 90
            newMode = 320
        }

        if (newMode !== config.currentMode) {
            config.currentMode = newMode
            if (items.length > config.itemsCount) {
                leftButton.classList.remove('hidden')
                rightButton.classList.remove('hidden')
                mobileLeftButton.classList.remove('hidden')
                mobileRightButton.classList.remove('hidden')
                carouselSetup()
            } else {
                leftButton.classList.add('hidden')
                rightButton.classList.add('hidden')
                mobileLeftButton.classList.add('hidden')
                mobileRightButton.classList.add('hidden')
            }
        }
    }

    function carouselSetup() {
        let currentPosition = config.visible[0]
        config.visible = []
        for (let i = currentPosition ; i < currentPosition + config.itemsCount; i++) {
            if (items[i]) {
                config.visible.push(i)
            } else {
                config.visible.unshift(config.visible[0] - 1)
                currentPosition = config.visible[0]
            }
        }
        container.style.transform = `translateX(${currentPosition * -(config.itemWidth + config.margin)}px)`

        if (config.visible[0] === 0) {
            leftButton.classList.add('hidden')
            mobileLeftButton.classList.add('hidden')
        } else if (config.visible[config.visible.length - 1] === items.length - 1) {
            rightButton.classList.add('hidden')
            mobileRightButton.classList.add('hidden')
        }
    }

    function carouselMoveLeft() {
        if (config.visible[0] === 0) {
            config.visible.unshift(items.length - 1)
        } else {
            config.visible.unshift(config.visible[0] - 1)
        }
        config.visible.pop()

        const containerLeftPosition = Number(container.style.transform.match(/(?<=\().+(?=px)/))
        container.style.transform = `translateX(${containerLeftPosition + (config.itemWidth + config.margin)}px)`
        leftButton.removeEventListener('click', carouselMoveLeft)
        rightButton.removeEventListener('click', carouselMoveRight)
        mobileLeftButton.removeEventListener('click', carouselMoveLeft)
        mobileRightButton.removeEventListener('click', carouselMoveRight)
        rightButton.classList.remove('hidden')
        mobileRightButton.classList.remove('hidden')

        if (config.visible[0] === 0) {
            leftButton.classList.add('hidden')
            mobileLeftButton.classList.add('hidden')
        } else {
            leftButton.addEventListener('click', carouselMoveLeft)
            mobileLeftButton.addEventListener('click', carouselMoveLeft)
        }

        setTimeout(() => {
            rightButton.addEventListener('click', carouselMoveRight)
            mobileRightButton.addEventListener('click', carouselMoveRight)
        }, 1000)
    }

    function carouselMoveRight() {
        if (config.visible[config.visible.length - 1] === items.length - 1) {
            config.visible.push(0)
        } else {
            config.visible.push(config.visible[config.visible.length - 1] + 1)
        }
        config.visible.shift()

        const containerLeftPosition = Number(container.style.transform.match(/(?<=\().+(?=px)/))
        container.style.transform = `translateX(${containerLeftPosition - (config.itemWidth + config.margin)}px)`
        leftButton.removeEventListener('click', carouselMoveLeft)
        rightButton.removeEventListener('click', carouselMoveRight)
        mobileLeftButton.removeEventListener('click', carouselMoveLeft)
        mobileRightButton.removeEventListener('click', carouselMoveRight)
        leftButton.classList.remove('hidden')
        mobileLeftButton.classList.remove('hidden')

        if (config.visible[config.visible.length - 1] === items.length - 1) {
            rightButton.classList.add('hidden')
            mobileRightButton.classList.add('hidden')
        } else {
            rightButton.addEventListener('click', carouselMoveRight)
            mobileRightButton.addEventListener('click', carouselMoveRight)
        }

        setTimeout(() => {
            leftButton.addEventListener('click', carouselMoveLeft)
            mobileLeftButton.addEventListener('click', carouselMoveLeft)
        }, 1000)
    }
}
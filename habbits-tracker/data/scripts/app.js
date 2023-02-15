// 'use strict'

let habbits = []
const HABBITS_KEY = "HABBITS_KEY"
let globalHabbitId

let page = {
    menu: document.querySelector('.menu__list'),
    header: {
        title: document.querySelector('.header__title'),
        progressPersent: document.querySelector('.progress__percent'),
        progressCoverBar: document.querySelector('.progress__cover-bar'),
    },
    content: {
        daysContainer: document.querySelector('.days-container'),
        newDay: document.querySelector('.habbit__day')
    },
    popup: {
        window: document.querySelector('.case'),
        popupInputIcon: document.querySelector('input[name="popup-icon_input"]'),
        popupInputTarget: document.querySelector('input[name="habbit-target"]'),
        popupInputTitle:  document.querySelector('input[name="habbit-title"]')
    }
}
/* utils */

function loadData() {
    const stringData = localStorage.getItem(HABBITS_KEY)
    const arrayData = JSON.parse(stringData)

    if (Array.isArray(arrayData)) {
        habbits = arrayData
    }
}

function saveData() {
    localStorage.setItem(HABBITS_KEY, JSON.stringify(habbits))
}


/* render */

function rerenderMenu(activeHabbit) {
    page.content.innerHTML = ''
    for (let habbit of habbits) {
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`)
        if (!existed) {
            const el = document.createElement("button")
            el.setAttribute('menu-habbit-id', habbit.id)
            el.classList.add('button-icon')
            el.addEventListener('click', () => rerender(habbit.id))
            el.innerHTML = `<img src="./src/${habbit.icon}.svg" alt=${habbit.name}>`

            if (habbit.id === activeHabbit.id) {
                el.classList.add('button-icon_active')
            }
            page.menu.appendChild(el)

            continue
        }
        if (activeHabbit.id === habbit.id) {
            existed.classList.add('button-icon_active')
        } else {
            existed.classList.remove('button-icon_active')
        }

    }

}

function rerenderHeader(activeHabbit) {
    page.header.title.innerText = activeHabbit.name

    let progress = activeHabbit.days.length / activeHabbit.target * 100
    let persentProgress = progress >= 100 ? 100 : progress.toFixed(0)
    page.header.progressPersent.innerText = `${persentProgress}%`
    page.header.progressCoverBar.style.width = `${persentProgress}%`

}

function renderContent(activeHabbit) {
    if (habbits.length!==0) {
        document.querySelector('.start-display').classList.add('.hiden')
        document.querySelector('.habbits-container').classList.remove('.hiden')
    } else {
        document.querySelector('.start-display').classList.remove('.hiden')
        document.querySelector('.habbits-container').classList.add('.hiden')
    }
    let days = activeHabbit.days
    page.content.daysContainer.innerHTML = ''

    for (let day in days) {

        let dayEl = document.createElement("div")
        dayEl.classList.add("habbit")
        dayEl.innerHTML = `
            <div class="habbit__day">День ${Number(day)+1}</div>
            <div class="habbit__comment">${days[Number(day)].comment}</div>
            <button class="habbit__delete" onClick="deleteDay(${Number(day)})">
              <img src="./src/delete.svg" />
            </button>
        `
        page.content.daysContainer.appendChild(dayEl)
    }
    page.content.newDay.innerText = `День ${days.length+1}`

}


function rerender(activeHabbitId) {
    globalHabbitId = activeHabbitId
    document.querySelector('.start-display').classList.add('hiden')
    document.querySelector('section').classList.remove('hiden')
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId)
    if (!activeHabbit) {
        return
    }

    rerenderMenu(activeHabbit)
    rerenderHeader(activeHabbit)
    renderContent(activeHabbit)
}

/* work with comment form */
function addNewDay(event) {
    const form = event.target
    event.preventDefault()
    form['writedComment'].classList.remove('error')
    let data = new FormData(event.target);
    comment = data.get("writedComment")
    if (!comment) {
        console.log('comment')
        form['writedComment'].classList.add('error')
    } else {
        habbits = habbits.map(habbit => {
            if (habbit.id === globalHabbitId) {
                return {
                    ...habbit,
                    days: [...habbit.days, {
                        comment
                    }]
                }
            }
            return habbit
        })
        form['writedComment'].value = ''
    }
    saveData()
    rerender(globalHabbitId)
}

function deleteDay(indexEl) {
    habbits[globalHabbitId].days.splice(indexEl,1)
    saveData()
    rerender(globalHabbitId)
}

function togglePopup(bool) {
    if (document.querySelector('.warningEl')) {
        document.querySelector('.popup__input-container').removeChild(document.querySelector('.warningEl'))
    }
    
    if (bool) {
        page.popup.window.classList.add('open')
    } else {
        page.popup.window.classList.remove('open')
    }
}

/* work with popap */

function resetData(el,array) {
    array.forEach(inputName => {
        el.querySelector(`[name=${inputName}]`).value = ''
    });
}

function setPopupIcon(context, icon) {
    page.popup.window.querySelector('.button-icon_active').classList.remove('button-icon_active')
    context.classList.add('button-icon_active')

    page.popup.popupInputIcon.value = icon

}

function getpopupInputValue(name) {
    return document.querySelector(`[name=${name}]`).value
}

function addNewHabbitItem(event) {
    let popupInputIconValue = page.popup.popupInputIcon.value
    let popupInputTitleValue = page.popup.popupInputTitle.value
    let popapInputTargetValue =  page.popup.popupInputTarget.value

    resetData(event.target, ['habbit-title','habbit-target'])

    event.preventDefault()
    if (popupInputIconValue && popupInputTitleValue && popapInputTargetValue>0) {
        let newHabbitItem = {
            "id": habbits.length,
            "icon": popupInputIconValue,
            "name": popupInputTitleValue,
            "target": popapInputTargetValue,
            "days": []
        }
        habbits.push(newHabbitItem)
        saveData()
        rerender(newHabbitItem.id)
        page.popup.window.classList.remove('open')
    } else {
        if (!document.querySelector('.warningEl')) {
            let warningEl = document.createElement('p')
            warningEl.classList.add('warningEl')
            warningEl.innerText = 'Не заполнены или некорректно заполнены элементы ввода!'
            document.querySelector('.popup__input-container').appendChild(warningEl)
        }
    }
}

/* init */

(() => {
    loadData();
    if (habbits.length === 0 ) {
            document.querySelector('.start-display').classList.remove('hiden')
            document.querySelector('section').classList.add('hiden')
    } else {
    rerender(habbits[0].id)
    }
})()
path = 'robofactory: '

  let components = [
    'casing',
    // 'tests'
  ]

let board_splashes = [
  'add processor',
  'add memory',
  'add storage',
]
let case_splashes = [
  'building body',
  `adding board`,
  'wiring'
]
let test_splashes = [
  'components',
  `personality`,
  `motor skills`
]

let news = [
  // each line can be 125 characters
]

function displayNumbers(id='') {
  gewi(id).textContent = getCookie(path + id)
}
let buildingBoards = false
function board_assemble() {
  console.log(path + 'building board')
    // let cpu = Number(getCookie(gewi('boards').textContent = getCookie(path + 'boards')path + 'cpu'))
    // let ram = Number(getCookie(path + 'ram'))
    // let ssd = Number(getCookie(path + 'ssd'))
    // let mobo = Number(getCookie(path + 'mobo'))
    // let casing = Number(getCookie(path + 'casing'))
    let boards = Number(getCookie(path + 'boards'))
    let wait_time = Number(getCookie(path + 'boardTime'))
    // eval(element + ' = getCookie(path + '')')

    if (!buildingBoards) {
      console.log(path + 'enough stuff')
      buildingBoards = true
      gewi('board_progress').innerHTML = '....'; gewi('board_splash').innerHTML = 'starting...'
      setTimeout(() => {
        gewi('board_progress').innerHTML = '#...'; gewi('board_splash').innerHTML = board_splashes[0] + '...';
        setTimeout(() => {
        gewi('board_progress').innerHTML = '##..'; gewi('board_splash').innerHTML = board_splashes[1] + '...';
        setTimeout(() => {
        gewi('board_progress').innerHTML = '###.'; gewi('board_splash').innerHTML = board_splashes[2] + '...';
        setTimeout(() => {
        gewi('board_progress').innerHTML = '####'; gewi('board_splash').innerHTML = 'done';
        setTimeout(() => {
        gewi('board_progress').innerHTML = '....'; gewi('board_splash').innerHTML = 'done'; setCookie(path + 'boards', Number(getCookie(path + 'boards'))+1); displayNumbers('boards'); buildingBoards = false}, 1000)},
        wait_time)},
        wait_time)},
        wait_time)},
        1000)
    }
    // else {
    //   console.log(path + 'not enough stuff')
    // }
}
let casing = false
function case_assemble() {
  console.log(path + 'casing robot')
    // let cpu = Number(getCookie(path + 'cpu'))
    // let ram = Number(getCookie(path + 'ram'))
    // let ssd = Number(getCookie(path + 'ssd'))
    // let mobo = Number(getCookie(path + 'mobo'))
    // let casing = Number(getCookie(path + 'casing'))
    let cased = Number(getCookie(path + 'cased'))
    let boards = Number(getCookie(path + 'boards'))
    let wait_time = Number(getCookie(path + 'caseTime'))
    // eval(element + ' = getCookie(path + '')')

    if (boards > 0 && !casing) {
      console.log(path + 'enough stuff')
      casing = true
      gewi('case_progress').innerHTML = '....'; gewi('case_splash').innerHTML = 'starting...'
      setTimeout(() => {gewi('cased').textContent = getCookie(path + 'cased')
        gewi('case_progress').innerHTML = '#...'; gewi('case_splash').innerHTML = case_splashes[0] + '...';
        setTimeout(() => {
        gewi('case_progress').innerHTML = '##..'; gewi('case_splash').innerHTML = case_splashes[1] + '...';
        setTimeout(() => {
        gewi('case_progress').innerHTML = '###.'; gewi('case_splash').innerHTML = case_splashes[2] + '...';
        setTimeout(() => {
        gewi('case_progress').innerHTML = '####'; gewi('case_splash').innerHTML = 'done';
        setTimeout(() => {
        gewi('case_progress').innerHTML = '....'; gewi('case_splash').innerHTML = 'done'; setCookie(path + 'cased', Number(getCookie(path + 'cased'))+1); setCookie(path + 'boards', Number(getCookie(path + 'boards'))-1); displayNumbers('cased'); displayNumbers('boards'); casing = false}, 1000)},
        wait_time)},
        wait_time)},
        wait_time)},
        1000)

    }
    else {
      console.log(path + 'not enough stuff')
    }
}
let testingActive = false
function testing() {
  console.log(path + 'testing robot')
    // let cpu = Number(getCookie(path + 'cpu'))
    // let ram = Number(getCookie(path + 'ram'))
    // let ssd = Number(getCookie(path + 'ssd'))
    // let mobo = Number(getCookie(path + 'mobo'))
    let cased = Number(getCookie(path + 'cased'))
    let complete = Number(getCookie(path + 'complete'))
    // let boards = Number(getCookie(path + 'boards'))
    let wait_time = Number(getCookie(path + 'completeTime'))
    // eval(element + ' = getCookie(path + '')')

    if (cased > 0 && !testingActive) {
      console.log(path + 'enough stuff')
      testingActive = true
      gewi('test_progress').innerHTML = '....'; gewi('test_splash').innerHTML = 'starting...'
      setTimeout(() => {
        gewi('test_progress').innerHTML = '#...'; gewi('test_splash').innerHTML = test_splashes[0] + '...';
        setTimeout(() => {
        gewi('test_progress').innerHTML = '##..'; gewi('test_splash').innerHTML = test_splashes[1] + '...';
        setTimeout(() => {
        gewi('test_progress').innerHTML = '###.'; gewi('test_splash').innerHTML = test_splashes[2] + '...';
        setTimeout(() => {
        gewi('test_progress').innerHTML = '####'; gewi('test_splash').innerHTML = 'done';
        setTimeout(() => {
        gewi('test_progress').innerHTML = '....'; gewi('test_splash').innerHTML = 'done'; setCookie(path + 'complete', Number(getCookie(path + "complete"))+1); setCookie(path + 'cased', Number(getCookie(path + 'cased'))-1); gewi('complete').textContent = getCookie(path + 'complete'); displayNumbers('cased'); displayNumbers('complete'); testingActive = false}, 1000)},
        wait_time)},
        wait_time)},
        wait_time)},
        1000)

    }
    else {
      console.log(path + 'not enough stuff')
    }
}

function sell() {
  console.log(path + 'selling robot')
    let complete = Number(getCookie(path + 'complete'))

    if (Number(getCookie(path + 'complete')) > 0) {
      console.log(path + 'enough stuff')
      complete = Number(getCookie(path + 'complete'))
      setCookie(path + 'complete', complete-1)
      displayNumbers('complete')
      dollars = Number(getCookie(path + 'dollars'))
      setCookie(path + 'dollars', Number(getCookie(path + 'dollars')) + Number(getCookie(path + 'price')))
      setCookie(path + 'allDollars', Number(getCookie(path + 'dollars')))
      displayNumbers('dollars')
    }
}
// function case_assemble() {
//   let casing = Number(getCookie(path + 'casing'))
//   let boards = Number(getCookie(path + 'boards'))

//   if (boards > 0 && casing > 0) {

//   }
// }

function autosell() {
  setInterval(() => {
    if (getCookie(path + 'autosell') == 'true')
    sell()
  }, Number(getCookie(path + 'autosellTime')))
}
function autosellClick() {
  let dollars = Number(getCookie(path + 'dollars'))
  if (dollars >= 50000 && getCookie(path + 'autoselling') !== 'true') {
    setCookie(path + 'autoselling', 'true')
    setCookie(path + 'dollars', Number(getCookie(path + dollars)) - 50000)
    setCookie(path + 'autosell', true)
    gewi('autosell').style.display = 'none'
  }
}

function resetGame() {
  setCookie(path + 'boards', 0)
  setCookie(path + 'cased', 0)
  setCookie(path + 'complete', 0)
  setCookie(path + 'dollars', 0)
  setCookie(path + 'allDollars', 0)
  setCookie(path + 'price', 5000)
  setCookie(path + 'boardTime', 2000)
  setCookie(path + 'caseTime', 2500)
  setCookie(path + 'completeTime', 3000)
  setCookie(path + 'autosellTime', 2000)
  setCookie(path + 'autosell', false)
  setCookie(path + 'boardSplash1', 'placeholder')
  setCookie(path + 'boardSplash2', 'placeholder')
  setCookie(path + 'boardSplash3', 'placeholder')
  setCookie(path + 'autoselling', 'false')
  gewi('boards').textContent = getCookie(path + 'boards')
  gewi('cased').textContent = getCookie(path + 'cased')
  gewi('complete').textContent = getCookie(path + 'complete')
  gewi('dollars').textContent = getCookie(path + 'dollars')
  gewi('price').textContent = getCookie(path + 'price')
}

function init() {
  paths = [
    'military',
    ''
  ]
  for (let index = 0; index < paths.length; index++) {
    const element = paths[index];
    ensureCookie(path + element, 0)
    // gewi(element).textContent = getCookie(path + element)
  }

  ensureCookie(path + 'boards', 0)
  ensureCookie(path + 'cased', 0)
  ensureCookie(path + 'complete', 0)
  ensureCookie(path + 'dollars', 0)
  ensureCookie(path + 'allDollars', 0)
  ensureCookie(path + 'price', 5000)
  ensureCookie(path + 'boardTime', 2000)
  ensureCookie(path + 'caseTime', 2500)
  ensureCookie(path + 'completeTime', 3000)
  ensureCookie(path + 'autosellTime', 2000)
  ensureCookie(path + 'autosell', false)
  ensureCookie(path + 'boardSplash1', 'placeholder')
  ensureCookie(path + 'boardSplash2', 'placeholder')
  ensureCookie(path + 'boardSplash3', 'placeholder')
  gewi('boards').textContent = getCookie(path + 'boards')
  gewi('cased').textContent = getCookie(path + 'cased')
  gewi('complete').textContent = getCookie(path + 'complete')
  gewi('dollars').textContent = getCookie(path + 'dollars')
  gewi('price').textContent = getCookie(path + 'price')

  gewi('board_progress').innerHTML = '....'
  gewi('board_splash').innerHTML = 'none'
  gewi('case_progress').innerHTML = '....'
  gewi('case_splash').innerHTML = 'none'
  gewi('test_progress').innerHTML = '....'
  gewi('test_splash').innerHTML = 'none'
  if (getCookie(path + 'autosell') == 'true') {
    gewi('autosell').style.display = 'none'
  }
  let displays = [
    'boards',
    'cased',
    'complete',
    'dollars',
    'price',
    // ''
  ]
  setInterval(() => {
    for (let index = 0; index < displays.length; index++) {
      const element = displays[index];
      displayNumbers(element)
    }
    if (Number(getCookie(path + 'allDollars')) > 0) {
      qSel('.center').style.display = 'initial'
    }
    else {
      qSel('.center').style.display = 'none'
    }
  }, 100)

  gewi('board_assemble').onclick = () => {board_assemble()}
  gewi('case_assemble').onclick = () => {case_assemble()}
  gewi('testing').onclick = () => {testing()}
  gewi('sell').onclick = () => {sell()}
  gewi('autosell').onclick = () => {autosellClick()}
  gewi('reset').onclick = () => {resetGame()}
  autosell()
  setTimeout(() => {
    gewi('finish').remove()
  }, 500)

}

// event listeners
document.addEventListener('DOMContentLoaded', () => {
  window.onload = () => {
    qSel('.images').remove()
    // setTimeout( () => {
    // gewi('loading').remove()}, 800)
    // let chromeAgent = userAgentString.indexOf("Chrome") > -1;
    // if (chromeAgent) {
    //   gewi('click') += `This game has not been tested on Chrome, so visual errors may occur!`
    // }
    init()
  }
  // document.body.innerHTML += `<div id="click" onclick="init(); this.remove()">Click to play!<br><br>${selectableVsynth('miku')}</div>`
})
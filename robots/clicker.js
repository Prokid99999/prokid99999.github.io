path = 'robofactory: '

  let components = [
    'casing',
    // 'tests'
  ]

let test_splashes = [
  'testing components',
  `testing personality`,
  `testing motor skills`
]

let news = [
  // each line can be 125 characters
]

function board_assemble() {
  console.log(path + 'building board')
    // let cpu = Number(getCookie(path + 'cpu'))
    // let ram = Number(getCookie(path + 'ram'))
    // let ssd = Number(getCookie(path + 'ssd'))
    // let mobo = Number(getCookie(path + 'mobo'))
    // let casing = Number(getCookie(path + 'casing'))
    let boards = Number(getCookie(path + 'boards'))
    let wait_time = 2000
    // eval(element + ' = getCookie(path + '')')

    // if (cpu > 0 && ram > 0 && ssd > 0 && mobo > 0) {
      console.log(path + 'enough stuff')
      gewi('board_progress').innerHTML = '....'; gewi('board_splash').innerHTML = 'starting...'
      setTimeout(() => {
        gewi('board_progress').innerHTML = '#...'; gewi('board_splash').innerHTML = 'adding processor...';
        setTimeout(() => {
        gewi('board_progress').innerHTML = '##..'; gewi('board_splash').innerHTML = 'adding memory...';
        setTimeout(() => {
        gewi('board_progress').innerHTML = '###.'; gewi('board_splash').innerHTML = 'adding storage...';
        setTimeout(() => {
        gewi('board_progress').innerHTML = '####'; gewi('board_splash').innerHTML = 'done';
        setTimeout(() => {
        gewi('board_progress').innerHTML = '....'; gewi('board_splash').innerHTML = 'done'; setCookie(path + 'boards', boards+1); gewi('boards').textContent = getCookie(path + 'boards')}, 1000)},
        wait_time)},
        wait_time)},
        wait_time)},
        1000)



    // }
    // else {
    //   console.log(path + 'not enough stuff')
    // }
}
function case_assemble() {
  console.log(path + 'casing robot')
    // let cpu = Number(getCookie(path + 'cpu'))
    // let ram = Number(getCookie(path + 'ram'))
    // let ssd = Number(getCookie(path + 'ssd'))
    // let mobo = Number(getCookie(path + 'mobo'))
    // let casing = Number(getCookie(path + 'casing'))
    let cased = Number(getCookie(path + 'cased'))
    let boards = Number(getCookie(path + 'boards'))
    let wait_time = 2500
    // eval(element + ' = getCookie(path + '')')

    if (boards > 0) {
      console.log(path + 'enough stuff')
      gewi('case_progress').innerHTML = '....'; gewi('case_splash').innerHTML = 'starting...'
      setTimeout(() => {
        gewi('case_progress').innerHTML = '#...'; gewi('case_splash').innerHTML = 'building body...';
        setTimeout(() => {
        gewi('case_progress').innerHTML = '##..'; gewi('case_splash').innerHTML = 'adding board...';
        setTimeout(() => {
        gewi('case_progress').innerHTML = '###.'; gewi('case_splash').innerHTML = 'wiring...';
        setTimeout(() => {
        gewi('case_progress').innerHTML = '####'; gewi('case_splash').innerHTML = 'done';
        setTimeout(() => {
        gewi('case_progress').innerHTML = '....'; gewi('case_splash').innerHTML = 'done'; setCookie(path + 'cased', cased+1); setCookie(path + 'boards', Number(getCookie(path + 'boards'))-1); gewi('cased').textContent = getCookie(path + 'cased'); gewi('boards').textContent = getCookie(path + 'boards')}, 1000)},
        wait_time)},
        wait_time)},
        wait_time)},
        1000)

    }
    else {
      console.log(path + 'not enough stuff')
    }
}
function testing() {
  console.log(path + 'testing robot')
    // let cpu = Number(getCookie(path + 'cpu'))
    // let ram = Number(getCookie(path + 'ram'))
    // let ssd = Number(getCookie(path + 'ssd'))
    // let mobo = Number(getCookie(path + 'mobo'))
    let cased = Number(getCookie(path + 'cased'))
    let complete = Number(getCookie(path + 'complete'))
    // let boards = Number(getCookie(path + 'boards'))
    let wait_time = 3000
    // eval(element + ' = getCookie(path + '')')

    if (cased > 0) {
      console.log(path + 'enough stuff')
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
        gewi('test_progress').innerHTML = '....'; gewi('test_splash').innerHTML = 'done'; setCookie(path + 'complete', complete+1); setCookie(path + 'cased', Number(getCookie(path + 'cased'))-1); gewi('complete').textContent = getCookie(path + 'complete'); gewi('cased').textContent = getCookie(path + 'cased')}, 1000)},
        wait_time)},
        wait_time)},
        wait_time)},
        1000)

    }
    else {
      console.log(path + 'not enough stuff')
    }
}
// function case_assemble() {
//   let casing = Number(getCookie(path + 'casing'))
//   let boards = Number(getCookie(path + 'boards'))

//   if (boards > 0 && casing > 0) {

//   }
// }

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
  gewi('boards').textContent = getCookie(path + 'boards')
  gewi('cased').textContent = getCookie(path + 'cased')
  gewi('complete').textContent = getCookie(path + 'complete')

  gewi('board_progress').innerHTML = '....'
  gewi('board_splash').innerHTML = 'none'
  gewi('case_progress').innerHTML = '....'
  gewi('case_splash').innerHTML = 'none'
  gewi('test_progress').innerHTML = '....'
  gewi('test_splash').innerHTML = 'none'

  gewi('board_assemble').onclick = () => {board_assemble()}
  gewi('case_assemble').onclick = () => {case_assemble()}
  gewi('testing').onclick = () => {testing()}
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
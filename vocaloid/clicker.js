path = 'vocaloid clicker - '
function vsynthLog (msg='') {
  console.log(`/'O'\\ > ${msg}`)
}
function mikuLog (msg='') {
  vsynthLog(msg)
}

if (checkCookie(path + 'debug') === 'error') {
  setCookie(path + 'debug', false, debug)
}
debug = getCookie(path + 'debug')
if (debug === 'false') {debug = false}
else if (debug === 'true') {debug = true}

if (checkCookie(path + 'unlockedTeto') === 'error') {
  setCookie(path + 'unlockedTeto', false, debug)
}

let unlockedTeto = getCookie(path + 'unlockedTeto')
if (unlockedTeto === 'false') {unlockedTeto = false}
else if (unlockedTeto === 'true') {unlockedTeto = true}

if (checkCookie(path + 'unlockedNeru') === 'error') {
  setCookie(path + 'unlockedNeru', false, debug)
}

let unlockedNeru = getCookie(path + 'unlockedNeru')
if (unlockedNeru === 'false') {unlockedNeru = false}
else if (unlockedNeru === 'true') {unlockedNeru = true}

if (checkCookie(path + 'mikus') === 'error') {
  setCookie(path + 'mikus', 0, debug)
}
if (checkCookie(path + 'amikus') === 'error') {
  setCookie(path + 'amikus', 0, debug)
}
if (checkCookie(path + 'tetos') === 'error') {
  setCookie(path + 'tetos', 0, debug)
}
if (checkCookie(path + 'atetos') === 'error') {
  setCookie(path + 'atetos', 0, debug)
}
if (checkCookie(path + 'nerus') === 'error') {
  setCookie(path + 'nerus', 0, debug)
}
if (checkCookie(path + 'anerus') === 'error') {
  setCookie(path + 'anerus', 0, debug)
}
if (checkCookie(path + 'alukas') === 'error') {
  setCookie(path + 'alukas', 0, debug)
}
if (checkCookie(path + 'volume') === 'error') {
  setCookie(path + 'volume', 10, debug)
}

// functions
// function getMikus() {
//   return Number(getCookie(path + 'mikus'))
// }
// function getTetos() {
//   return Number(getCookie(path + 'tetos'))
// }
// function getNerus() {
//   return Number(getCookie(path + 'nerus'))
// }
function getVsynths(vsynth='') {
  return Number(getCookie(path + vsynth + 's'))
}
function getAutoVsynth(vsynth='') {
  return Number(getCookie(path + 'a' + vsynth + 's'))
}
function displayVsynth(vsynth='') {
  let vsynths = getCookie(path + vsynth + 's')
  gewi(`${vsynth}s`).innerHTML = `${vsynths} ${sentenceCase(vsynth)}s`
}
function displayAutoVsynth(vsynth='') {
  let avsynths = getAutoVsynth(vsynth)
  gewi(`${vsynth[0]}ps`).innerHTML = avsynths + ` ${sentenceCase(vsynth)}s per second.`
}
function buyAutoVsynth(vsynth='') {
  gewi(`${vsynth}Auto`).addEventListener('click', () => {
    let vsynths = getVsynths(vsynth)
    let avsynths = getAutoVsynth(vsynth)
    if (vsynths >= 25) {
      avsynths++
        setCookie(path + `a${vsynth}s`, avsynths, debug)
        vsynths -= 25
        setCookie(path + `${vsynth}s`, vsynths, debug)
      displayVsynth(vsynth)
      displayAutoVsynth(vsynth)
      if (avsynths == 1) {
        autoVsynth(vsynth)
      }
    }
  })}
async function autoVsynth (vsynth = '', debug) {
  mikuLog(`starting auto${sentenceCase(vsynth)}`)
  let vsynths = getVsynths(vsynth)
  let avsynths = getAutoVsynth(vsynth)

  while (avsynths > 0) {
    if (debug) {mikuLog(`a${vsynth}s > 0`)}
    vsynths = getVsynths(vsynth)
    avsynths = getAutoVsynth(vsynth)
    if (avsynths < 1000) {
      vsynths = getVsynths(vsynth)
      setCookie(path + vsynth + 's', vsynths +1, debug)
    gewi(vsynth + 's').innerHTML = vsynths + " " + sentenceCase(vsynth) + 's'
      await delay(1000 / avsynths)
    }
    else {
      vsynths = getVsynths(vsynth)
      setCookie(path + vsynth + 's', vsynths + Math.round(avsynths / 30), debug)
    gewi(vsynth + 's').innerHTML = vsynths + sentenceCase(vsynth) + 's'
      await delay(30)
    }
  }
}
function selectableVsynth(vsynth='', size='4rem') {
  return `<img src="./faces/${vsynth}.svg" style="border: none; width: ${size};" onmouseenter="this.src = '/vocaloid/faces/${vsynth}Selected.svg'" onmouseleave="this.src = '/vocaloid/faces/${vsynth}.svg'">`
}
function selectedVsynth(vsynth='', size='4rem') {
  return `<img src="./faces/${vsynth}Selected.svg" style="border: none; width: ${size};">`
}
function onclickVsynth(vsynth) {
  gewi(`${vsynth}Face`).onclick = () => {
    let vsynths = getCookie(path + `${vsynth}s`)
    vsynths++
    setCookie(path + `${vsynth}s`, vsynths, debug)
    displayVsynth(vsynth)
  }
}

function funFacts(list=[`1`, `2`, `3`]) {
  gewi('funtext').innerHTML = facts()
  gewi('funtext').onclick = () => {
    gewi('funtext').innerHTML = facts()
  }
  gewi('funfacts').onclick = () => {
    gewi('funtext').innerHTML = facts()
  }
}function random(list) {
  return list[Math.floor(Math.random() * list.length)]
}

var chooseName = function (a, N, B) {
  num = Math.floor(Math.random() * a.length - N);
  N = Math.min(N + 1, B);
  name = a.splice(num,1);
  a.push(name);
}
function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

let mikus = getVsynths('miku')
let amikus = Number(getCookie(path + 'amikus'))
let tetos = getVsynths('teto')
let nerus = getVsynths('neru')
let lukas = getVsynths('luka')
let alukas = getAutoVsynth('luka')

let allVsynths = [
  'miku',
  'teto',
  'neru',
  'luka'
]

// init
function init() {

  gewi('tetos').innerHTML = ' ' + tetos + ' Tetos'
  gewi('nerus').innerHTML = ' ' + nerus + ' Nerus'

  for (let index = 0; index < allVsynths.length; index++) {
    const element = allVsynths[index];

    displayVsynth(element)
    gewi(`${element}Face`).innerHTML = selectableVsynth(element)
    onclickVsynth(element)
    buyAutoVsynth(element)
    if (getCookie(path + `unlocked${sentenceCase(element)}`) === 'done') {
      qSelA(`.${element}`).forEach(element => {element.style.display = 'inline-block'})
      vsynthFacts.push(
        `Kasane Teto<br>${selectedVsynth('teto', '3rem')}`,
          'Kasane Teto\'s gender is "Chimera".',
          `Kasane Teto was conceived as an April Fools' joke, and was later turned into an UTAU voicebank.`,
          `Kasane Teto is considered a Vocaloid, some placing her on the same level or even higher than Hatsune Miku.`,
          `<strong>Breaking News:</strong> Self-proclaimed "Vocaloid fan" writes transfem Teto detransition, crucified by fanbase. More at 7.`
      )
    }
  }

  gewi('reset').addEventListener('click', () => {
    if (window.confirm('Do you really want to reset?')) {
      for (let index = 0; index < allVsynths.length; index++) {
        const element = allVsynths[index];
        setCookie(path + `a${element}s`, 0, debug)
        setCookie(path + `${element}s`, 0, debug)
        setCookie(path + `unlockedTeto`, false, debug)

        displayVsynth(element)
        qSelA(`.${element}`).forEach(element => {element.style.display = 'none'})
      }
    qSelA('.miku').forEach(element => {element.style.display = 'inline-block'})
    window.location.reload(true)
  }
  })
  funFacts(vsynthFacts)

  sing()
  tick()

  window.onload = () => {
    gewi('loading').remove()
    qSel('.images').remove()
  }

  const music = document.createElement('audio')

  music.src = '/vocaloid/music/Machine Love Medley.mp3'
  music.loop = 'true'
  music.id = 'music'
  music.currentTime = getCookie(path + 'musicTime')

  document.body.append(music)

  gewi('volume-slider').value = getCookie(path + 'volume')

  gewi('music').volume = gewi('volume-slider').value / 100;
  gewi('music').addEventListener('ended', () => {
    // setTimeout(`gewi('music').src = tracks[tracks.length % playing]; gewi('music').play()`, 30)

  })
  gewi('volume').innerHTML = getCookie(path + 'volume');
  gewi('volume-slider').addEventListener('input', function(e) {
    gewi('music').volume = e.currentTarget.value / 100;
    gewi('volume').innerHTML = e.currentTarget.value
  })
  gewi('volume-slider').addEventListener('change', function(e) {
    setCookie(path + 'volume', e.currentTarget.value, debug)
  })
  gewi('playbackBar').input = function() {
    gewi('music').currentTime = gewi('playbackBar').value
  }
  gewi('music').onloadedmetadata = (e) => {
    gewi('playbackBar').max = Math.round(e.currentTarget.duration)
    e.currentTime = getCookie(path + 'musicTime')
  }

  setInterval(() => {
    // console.log('music time: ' + (gewi('music').currentTime));
    setCookie(path + 'musicTime', (gewi('music').currentTime), false, debug)
    gewi('playbackBar').value = gewi('music').currentTime
  }, 30);

  gewi('music').play()
}

// sing
function sing() {
  for (let index = 0; index < allVsynths.length; index++) {
    const element = allVsynths[index];

    autoVsynth(element)
  }
}

const amiku = async () => {
  mikus = getMikus()
  amikus = getAutoVsynth('miku')

  while (amikus > 0) {
    mikus = getMikus()
    amikus = getAutoVsynth('miku')
    if (amikus < 1000) {
      mikus = getMikus()
      setCookie(path + 'mikus', mikus +1, debug)
    gewi('mikus').innerHTML = `${mikus} Mikus`
      await delay(1000 / amikus)
    }
    else {
      mikus = getMikus()
      setCookie(path + 'mikus', mikus + Math.round(amikus / 30), debug)
    gewi('mikus').innerHTML = `${mikus} Mikus`
      await delay(30)
    }
  }
}
const ateto = async () => {
  tetos = getTetos()
  atetos = getCookie(path + 'atetos')

  while (atetos > 0) {
    if (atetos < 1000) {
      tetos = getTetos()
      setCookie(path + 'tetos', tetos +1, debug)
    gewi('tetos').innerHTML = `${tetos} Tetos`
      await delay(1000 / atetos)
    }
    else {
      tetos = getTetos()
      setCookie(path + 'tetos', tetos + Math.round(atetos / 30), debug)
    gewi('tetos').innerHTML = `${tetos} Tetos`
      await delay(30)
    }
  }
}
const aneru = async () => {
  nerus = getNerus()
  anerus = getCookie(path + 'anerus')

  while (anerus > 0) {
    if (anerus < 1000) {
      nerus = getNerus()
      setCookie(path + 'nerus', nerus +1, debug)
    gewi('nerus').innerHTML = `${nerus} Nerus`
      await delay(1000 / anerus)
    }
    else {
      nerus = getNerus()
      setCookie(path + 'nerus', nerus + Math.round(anerus / 30), debug)
    gewi('nerus').innerHTML = `${nerus} Nerus`
      await delay(30)
    }
  }
}


// tick
const tick = async () => {
  while (true) {

    // mikus = getMikus()
    // tetos = Number(getCookie(path + 'tetos'))
    // nerus = Number(getCookie(path + 'nerus'))
    // atetos = Number(getCookie(path + 'atetos'))
    // anerus = Number(getCookie(path + 'anerus'))

    // displayVsynth('miku')
    // gewi('tetos').innerHTML = `${tetos} Tetos`
    // gewi('nerus').innerHTML = `${nerus} Nerus`

    // gewi('mps').innerHTML = amikus + ' Mikus per second.'
    // gewi('tps').innerHTML = atetos + ' Tetos per second.'
    // gewi('nps').innerHTML = anerus + ' Nerus per second.'

  for (let index = 0; index < allVsynths.length; index++) {
    const element = allVsynths[index];
    displayVsynth(element)
    displayAutoVsynth(element)
  }
    amikus = Number(getCookie(path + 'amikus'))
    if (amikus === 20) {setCookie(path + 'unlockedTeto', true), debug}
    if (getCookie(path + 'unlockedTeto') === 'true') {
      qSelA('.teto').forEach(element => {element.style.display = 'inline-block'})
      vsynthFacts.push (
        `Kasane Teto<br>${selectedVsynth('teto', '3rem')}`,
          'Kasane Teto\'s gender is "Chimera".',
          `Kasane Teto was conceived as an April Fools' joke, and was later turned into an UTAU voicebank.`,
          `Kasane Teto is considered a Vocaloid, some placing her on the same level or even higher than Hatsune Miku.`,
          `<strong>Breaking News:</strong> Self-proclaimed "Vocaloid fan" writes transfem Teto detransition, crucified by fanbase. More at 7.`,
      )

      setCookie(path + 'unlockedTeto', 'done', debug)
    }
    if (atetos === 10) {setCookie(path + 'unlockedNeru', true), debug}
    if (getCookie(path + 'unlockedNeru') === 'true') {
      qSelA('.neru').forEach(element => {element.style.display = 'inline-block'})
      vsynthFacts.push (
        `Akita Neru<br>${selectedVsynth('neru', '3rem')}`,
          '9 hour makeout session with the Baka Polycule<sup>TM</sup>',
          `Hatsune Miku, Akita Neru and Kasane Teto are often portrayed as being in a romantic relationship, forming the Baka Polycule<sup>TM</sup>.`,
          'What if each member of the Baka Polycule<sup>TM</sup> painted their thumbnails the colors of the other two? For example, Miku would have one thumbnail red and the other yellow', // Teto would have one blue and one yellow, Neru, one blue one red',
      )

      setCookie(path + 'unlockedNeru', 'done', debug)
    }

    facts = randomNoRepeats(vsynthFacts)

    // end
    await delay(100)
  }
}

function sentenceCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

vsynthFacts = [
  `Hatsune Miku<br>${selectedVsynth('miku', '3rem')}`,
    'Every Miku is canon, which means Miku is canonically super gay',
    `The original release of the Hatsune Miku voicebank was 19 years ago, in 2007.`,
    "The term 'Vocaloid' is often used to refer to the general idea of voice synthesizers, rather than the specific software named 'VOCALOID'.",

]
  "",
  ``,
    ``,
''

// vsynthFacts = list[Math.floor(Math.random() * vsynthFacts.length)]
let facts = randomNoRepeats(vsynthFacts)


document.addEventListener('DOMContentLoaded', () => {
  init()
})
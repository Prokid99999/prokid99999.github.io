path = 'vocaloid clicker - '
function vsynthLog (msg='') {
  console.log(`/'O'\\ > ${msg}`)
}
function mikuLog (msg='') {
  vsynthLog(msg)
}
function tetoLog(msg='') {
  console.log(`\\/O\\/ > ${msg}`)
}
function neruLog(msg='') {
  console.log(`/'O > ${msg}`)
}

if (checkCookie(path + 'debug') === 'error') {
  setCookie(path + 'debug', false, debug)
}
let debug = getCookie(path + 'debug')
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
  setCookie(path + 'tetos', 25, debug)
}
if (checkCookie(path + 'atetos') === 'error') {
  setCookie(path + 'atetos', 0, debug)
}
if (checkCookie(path + 'nerus') === 'error') {
  setCookie(path + 'nerus', 25, debug)
}
if (checkCookie(path + 'anerus') === 'error') {
  setCookie(path + 'anerus', 0, debug)
}
if (checkCookie(path + 'lukas') === 'error') {
  setCookie(path + 'lukas', 25, debug)
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
    purchaseAutoVsynth(vsynth)
  })}
function purchaseAutoVsynth(vsynth='', amount=1) {
    let vsynths = getVsynths(vsynth)
    let avsynths = getAutoVsynth(vsynth)
    // miku
    if (vsynth === 'miku') {
      if (vsynths >= 25*amount) {
      mikuLog('purchasing miku')
        avsynths += amount
          setCookie(path + `a${vsynth}s`, avsynths, debug)
          vsynths -= 25*amount
          setCookie(path + `${vsynth}s`, vsynths, debug)
        displayVsynth(vsynth)
        displayAutoVsynth(vsynth)
        if (avsynths == 1) {
          autoVsynth(vsynth)
        }
        }
      }
      // teto
      else if (vsynth === 'teto') {
        let mikus = getVsynths('miku')
        if (vsynths >= 25*amount && mikus >= 2500*amount) {
        tetoLog('purchasing teto')
          avsynths += amount
          setCookie(path + `a${vsynth}s`, avsynths, debug)
          vsynths -= 25*amount
          setCookie(path + `${vsynth}s`, vsynths, debug)
          mikus -= 2500*amount
          setCookie(path + 'mikus', mikus, debug)
        displayVsynth(vsynth)
        displayAutoVsynth(vsynth)
        if (avsynths == 1) {
          autoVsynth(vsynth)
        }
        }
      }
      // neru
      else if (vsynth === 'neru') {
        let mikus = getVsynths('miku')
        let tetos = getVsynths('teto')
        vsynths = getVsynths(vsynth)
        if (vsynths >= 25*amount && tetos >= 2500*amount && mikus >= 5000*amount) {
          neruLog('purchasing neru')
          avsynths += amount
          setCookie(path + `a${vsynth}s`, avsynths, debug)
          vsynths -= 25*amount
          setCookie(path + `${vsynth}s`, vsynths, debug)
          tetos -= 2500*amount
          setCookie(path + 'tetos', tetos, debug)
          mikus -= 5000*amount
          setCookie(path + 'mikus', mikus, debug)
          displayVsynth(vsynth)
          displayAutoVsynth(vsynth)
          if (avsynths == 1) {
            autoVsynth(vsynth)
          }
        }
      }
      else if (vsynth === 'luka') {
        let mikus = getVsynths('miku')
        let tetos = getVsynths('teto')
        let nerus = getVsynths('neru')
        vsynths = getVsynths(vsynth)
        if (vsynths >= 25*amount && nerus >= 2500*amount && tetos >= 5000*amount && mikus >= 10000*amount) {
          neruLog('purchasing neru')
          avsynths += amount
          setCookie(path + `a${vsynth}s`, avsynths, debug)
          vsynths -= 25*amount
          setCookie(path + `${vsynth}s`, vsynths, debug)
          nerus -= 2500*amount
          setCookie(path + 'nerus', nerus, debug)
          tetos -= 5000*amount
          setCookie(path + 'tetos', tetos, debug)
          mikus -= 10000*amount
          setCookie(path + 'mikus', mikus, debug)
          displayVsynth(vsynth)
          displayAutoVsynth(vsynth)
          if (avsynths == 1) {
            autoVsynth(vsynth)
          }
        }
      }
  }
async function autoVsynth (vsynth = '') {
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
    gewi(vsynth + 's').innerHTML = vsynths + " " + sentenceCase(vsynth) + 's'
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
  }

  if (getCookie(path + 'mikuNews') === 'done') {
    mikuFacts.forEach(element => {vsynthFacts.push(element)})
    facts = randomNoRepeats(vsynthFacts)
  }

    facts = randomNoRepeats(vsynthFacts)
  if (getCookie(path + 'unlockedTeto') === 'done') {
    qSelA('.teto').forEach(element => {element.style.display = 'block'})
    tetoFacts.forEach(element => {vsynthFacts.push(element)})
    facts = randomNoRepeats(vsynthFacts)
  }
  if (getCookie(path + 'unlockedNeru') === 'done') {
    qSelA('.neru').forEach(element => {element.style.display = 'block'})
    neruFacts.forEach(element => {vsynthFacts.push(element)})
    facts = randomNoRepeats(vsynthFacts)
  }
  if (getCookie(path + 'unlockedLuka') === 'done') {
    qSelA('.luka').forEach(element => {element.style.display = 'block'})
    qSelA('.family').forEach(element => {element.style.display = 'block'})
    lukaFacts.forEach(element => {vsynthFacts.push(element)})
    facts = randomNoRepeats(vsynthFacts)
    qSelA('.family').forEach(element => {element.style.display = 'block'})
  }

  gewi('reset').addEventListener('click', () => {
    if (window.confirm('Do you really want to reset?')) {
      for (let index = 0; index < allVsynths.length; index++) {
        const element = allVsynths[index];
        setCookie(path + `a${element}s`, 0, debug)
        setCookie(path + `${element}s`, 25, debug)
        setCookie(path + `unlocked${sentenceCase(element)}`, false, debug)

        displayVsynth(element)
        qSelA(`.${element}`).forEach(element => {element.style.display = 'none'})
      }
    setCookie(path+'mikus', 0)
    qSelA('.miku').forEach(element => {element.style.display = 'block'})
    window.location.reload(true)
  }
  })

  window.onkeydown = function (event) {
    if (event.key === 'ArrowRight') {
      // right arrow
    }
    else if (event.key === 'ArrowLeft') {
      // left arrow
    }
    else if (event.key === 'ArrowUp') {
    // Up Arrow pressed
    }
    else if (event.key === 'ArrowDown') {
      // Down Arrow pressed
    }
    else if (event.key === 'e') {
      console.log('e')
    }
    else if (event.key === 'm') {
      purchaseAutoVsynth('miku')
    }
    else if (event.key === 'M') {
      purchaseAutoVsynth('miku', 10)
    }
    else if (event.key === 't') {
      purchaseAutoVsynth('teto')
    }
    else if (event.key === 'T') {
      purchaseAutoVsynth('teto', 10)
    }
    else if (event.key === 'n') {
      purchaseAutoVsynth('neru')
    }
    else if (event.key === 'N') {
      purchaseAutoVsynth('neru', 10)
    }
    else if (event.key === 'l') {
      purchaseAutoVsynth('luka')
    }
    else if (event.key === 'L') {
      purchaseAutoVsynth('luka', 10)
    }
  }

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
  // gewi('playbackBar').input = function() {
  //   gewi('music').currentTime = gewi('playbackBar').value
  // }
  gewi('music').onloadedmetadata = (e) => {
    gewi('playbackBar').max = Math.round(e.currentTarget.duration)
    gewi('music').currentTime = getCookie(path + 'musicTime')
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
    let amikus = getAutoVsynth('miku')
    if (amikus >= 1 && getCookie(path + 'mikuNews') != 'done' && getCookie(path + 'mikuNews') != 'true') {setCookie(path + 'mikuNews', true), true}
    if (getCookie('mikuNews') === 'true') {
      mikuFacts.forEach(element => {vsynthFacts.push(element)})
      facts = randomNoRepeats(vsynthFacts)
      setCookie(path + 'mikuNews', 'done')
    }

    if (amikus >= 100 && getCookie(path + 'unlockedTeto') != 'done' && getCookie(path + 'unlockedTeto') != 'true') {setCookie(path + 'unlockedTeto', true), true}
    if (getCookie(path + 'unlockedTeto') === 'true') {
      qSelA('.teto').forEach(element => {element.style.display = 'block'})
      tetoFacts.forEach(element => {vsynthFacts.push(element)})
      facts = randomNoRepeats(vsynthFacts)

      setCookie(path + 'unlockedTeto', 'done', debug)
    }

    let atetos = getAutoVsynth('teto')
    if (atetos >= 200 && getCookie(path + 'unlockedNeru') != 'done' && getCookie(path + 'unlockedNeru') != 'true') {setCookie(path + 'unlockedNeru', true), true}
    if (getCookie(path + 'unlockedNeru') === 'true') {
      qSelA('.neru').forEach(element => {element.style.display = 'block'})
      neruFacts.forEach(element => {vsynthFacts.push(element)})
      facts = randomNoRepeats(vsynthFacts)

      setCookie(path + 'unlockedNeru', 'done', debug)
    }

    let anerus = getAutoVsynth('neru')
    if (anerus >= 300 && getCookie(path + 'unlockedLuka') != 'done' && getCookie(path + 'unlockedLuka') != 'true') {setCookie(path + 'unlockedLuka', true), true}
    if (getCookie(path + 'unlockedLuka') === 'true') {
      qSelA('.luka').forEach(element => {element.style.display = 'block'})
      qSelA('.family').forEach(element => {element.style.display = 'block'})
      lukaFacts.forEach(element => {vsynthFacts.push(element)})
      facts = randomNoRepeats(vsynthFacts)

      setCookie(path + 'unlockedLuka', 'done', debug)
    }

    // end
    await delay(100)
  }
}

function sentenceCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

vsynthFacts = [
  "The term 'Vocaloid' is often used to refer to the general idea of voice synthesizers, rather than the specific software named VOCALOID.",
    "There are at least three mainstream vocal synthesizers: VOCALOID, UTAU, and SynthV.",
    // "Every Vocaloid is a vocal synthesizer that comes with a character for recognizability.",
    "Vocal synthesizers are like any other musical synthesizer, but with words and an anime girl.",

]
let mikuFacts = [
  `Hatsune Miku<br>${selectedVsynth('miku', '3rem')}`,
    'Every Miku is canon, which means Miku is canonically super gay',
    `The release of the Hatsune Miku v1 voicebank was 19 years ago, in 2007.`,
    'Violent dispute over whether world-famous singer Hatsune Miku is "a top or a bottom" continues to rage. 43 hospitalized, 12 dead.'

]
let tetoFacts = [
  `Kasane Teto<br>${selectedVsynth('teto', '3rem')}`,
    'Kasane Teto\'s gender is "Chimera".',
    `Kasane Teto was conceived as an April Fools' joke, and was later turned into an UTAU voicebank.`,
    `Kasane Teto is considered a Vocaloid, some placing her on the same level or even higher than Hatsune Miku.`,
    `<strong>Breaking News:</strong> Self-proclaimed "Vocaloid fan" writes transfem Teto detransition, tied up and paraded through city by fanbase. More at 7.`,
    `Twitter claims Kasane Teto "cannot be 'transgender'", reasoning ranges from "that is not what the creator said" to "'Transgender' people are mentally ill and should be euthanized".`,
]
let neruFacts = [
  `Akita Neru<br>${selectedVsynth('neru', '3rem')}`,
    '9 hour makeout session with the Baka Polycule<sup>TM</sup>',
    `Hatsune Miku, Akita Neru and Kasane Teto are often portrayed as being in a romantic relationship, forming the Baka Polycule<sup>TM</sup>.`,
    'What if each member of the Baka Polycule<sup>TM</sup> painted their thumbnails the colors of the other two? For example, Miku would have one thumbnail red and the other yellow...', // Teto would have one blue and one yellow, Neru, one blue one red',
    `Twitter users continue to fight among themselves over the gender of popular singer Kasane Teto, death threats number more than a thousand.`,
    `<strong>Breaking News:</strong> A "Vocaloid fan" admitted to writing a "detransition" fan fiction featuring SynthV idol Kasane Teto, they were promptly beaten senseless, tied up, and paraded through the city to be burned on a cross. Given context, witnesses said: "Deserved."`,
]
let lukaFacts = [
  `Megurine Luka<br>${selectedVsynth('luka', '3rem')}`,
    `<b>Shattering News:</b> Many people would let Luka step on them.<br>The editors of the Shattering News leave no comment.`,
    `Luka is the first adult character made for Vocaloid.`,
    `Luka lacks a V3 voicebank, only having V2 and V4.`,
]
  "",
  ``,
    ``,
''

// vsynthFacts = list[Math.floor(Math.random() * vsynthFacts.length)]
let facts = randomNoRepeats(vsynthFacts)

function unlockVsynth(vsynth='') {
  setCookie(path + `unlocked${sentenceCase(vsynth)}`, true)
}

// event listeners
document.addEventListener('DOMContentLoaded', () => {
  init()
})
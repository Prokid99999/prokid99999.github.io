path = 'vocaloid clicker - '

if (checkCookie(path + 'debug') === 'error') {
  setCookie(path + 'debug', false)
}
debug = getCookie(path + 'debug')
if (debug === 'false') {debug = false}
else if (debug === 'true') {debug = true}

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
if (checkCookie(path + 'volume') === 'error') {
  setCookie(path + 'volume', 10, debug)
}

// functions
function getMikus() {
  return Number(getCookie(path + 'mikus'))
}
function getTetos() {
  return Number(getCookie(path + 'tetos'))
}
function getNerus() {
  return Number(getCookie(path + 'nerus'))
}
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
  avsynths = getAutoVsynth(vsynth)
  gewi(`${vsynth[0]}ps`).innerHTML = avsynths + ` ${sentenceCase(vsynth)}s per second.`
}
function setAutoVsynth(vsynth='') {
  gewi(`${vsynth}Auto`).addEventListener('click', async (e) => {
    vsynths = getVsynths(vsynth)
    avsynths = getAutoVsynth(vsynth)
    if (vsynths >= 25) {
    avsynths++
    if (avsynths === 1) {
    eval(`a${vsynth}`)}
      setCookie(
        path + `a${vsynth}s`,
        avsynths
      )
      vsynths -= 25
      setCookie(path + `${vsynth}s`,
        vsynths
      )
    displayVsynth(vsynth)
    gewi(`${vsynth[0]}ps`).innerHTML = avsynths + ' ' + sentenceCase(`${vsynth}s per second.`)
    }
  })}
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
    setCookie(path + `${vsynth}s`, vsynths)
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

let mikus = getMikus()
let amikus = Number(getCookie(path + 'amikus'))
let tetos = getTetos()
let nerus = getNerus()

let allVsynths = [
  'miku',
  'teto',
  'neru',
]

function init() {

  gewi('tetos').innerHTML = ' ' + tetos + ' Tetos'
  gewi('nerus').innerHTML = ' ' + nerus + ' Nerus'

  for (let index = 0; index < allVsynths.length; index++) {
    const element = allVsynths[index];

    displayVsynth(element)
    gewi(`${element}Face`).innerHTML = selectableVsynth(element)
    onclickVsynth(element)
    setAutoVsynth(element)
  }

  gewi('reset').addEventListener('click', () => {
    setCookie(path+'amikus', 0)
    setCookie(path+'atetos', 0)
    setCookie(path+'anerus', 0)
    setCookie(path+'mikus', 0)
    setCookie(path+'tetos', 0)
    setCookie(path+'nerus', 0)

  })

  setInterval(() => {
    // console.log('music time: ' + (gewi('music').currentTime));
    setCookie(path + 'musicTime', (gewi('music').currentTime), false)
    gewi('playbackBar').value = gewi('music').currentTime
  }, 0.5*1000);
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
  gewi('volume').innerHTML = getCookie(path + 'volume');
  gewi('volume-slider').addEventListener('input', function(e) {
    gewi('music').volume = e.currentTarget.value / 100;
    gewi('volume').innerHTML = e.currentTarget.value
  })
  gewi('volume-slider').addEventListener('change', function(e) {
    setCookie(path + 'volume', e.currentTarget.value)
  })
  gewi('playbackBar').input = function() {
    gewi('music').currentTime = gewi('playbackBar').value
  }
  gewi('music').onloadedmetadata = (e) => {
    gewi('playbackBar').max = Math.round(e.currentTarget.duration)
    e.currentTime = getCookie(path + 'musicTime')
  }

  gewi('music').play()
}

async function sing() {
  amiku()
  ateto()
  aneru()
}

const amiku = async () => {
  mikus = getMikus()
  amikus = getAutoVsynth('miku')

  while (amikus > 0) {
    mikus = getMikus()
    amikus = getAutoVsynth('miku')
    if (amikus < 1000) {
      mikus = getMikus()
      setCookie(path + 'mikus', mikus +1)
    gewi('mikus').innerHTML = `${mikus} Mikus`
      await delay(1000 / amikus)
    }
    else {
      mikus = getMikus()
      setCookie(path + 'mikus', mikus + Math.round(amikus / 30))
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
      setCookie(path + 'tetos', tetos +1)
    gewi('tetos').innerHTML = `${tetos} Tetos`
      await delay(1000 / atetos)
    }
    else {
      tetos = getTetos()
      setCookie(path + 'tetos', tetos + Math.round(atetos / 30))
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
      setCookie(path + 'nerus', nerus +1)
    gewi('nerus').innerHTML = `${nerus} Nerus`
      await delay(1000 / anerus)
    }
    else {
      nerus = getNerus()
      setCookie(path + 'nerus', nerus + Math.round(anerus / 30))
    gewi('nerus').innerHTML = `${nerus} Nerus`
      await delay(30)
    }
  }
}

const tick = async () => {
  while (true) {

    mikus = getMikus()
    // tetos = Number(getCookie(path + 'tetos'))
    // nerus = Number(getCookie(path + 'nerus'))
    // amikus = Number(getCookie(path + 'amikus'))
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
    // displayVsynth(element)
    displayAutoVsynth(element)
  }

    await delay(100)
  }
}

function sentenceCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

vsynthFacts = [
  '9 hour makeout session with the Baka Polycule<sup>TM</sup>',
  'What if each member of the Baka Polycule<sup>TM</sup> painted their thumbnails the colors of the other two? For example, Miku would have one thumbnail red and the other yellow', // Teto would have one blue and one yellow, Neru, one blue one red',
  "The term 'Vocaloid' is used to refer to the general idea of voice synthesizers, rather than the specific software named 'VOCALOID'.",

  `Akita Neru<br>${selectedVsynth('neru', '3rem')}`,

  `Hatsune Miku<br>${selectedVsynth('miku', '3rem')}`,
    'Fun Fact: Every Miku is canon, which means Miku is canonically super gay',
    `The original release of the Hatsune Miku voicebank was 19 years ago, in 2007.`,
    `Hatsune Miku, Akita Neru and Kasane Teto are often portrayed as being in a romantic relationship, forming the Baka Polycule<sup>TM</sup>.`,

  `Kasane Teto<br>${selectedVsynth('teto', '3rem')}`,
    'Fun Fact: Kasane Teto\'s gender is "chimera".',
    `Kasane Teto was conceived as an April Fools' joke, and was later turned into an UTAU voicebank.`,
    `Kasane Teto is considered a Vocaloid, some placing her on the same level or even higher than Hatsune Miku.`,
    `<strong>Breaking News:</strong> Self-proclaimed "Vocaloid fan" writes transfem Teto detransition fan fiction, crucified by fanbase. More at 7.`,
]
  "",
  ``,
    ``,
''

// vsynthFacts = list[Math.floor(Math.random() * vsynthFacts.length)]

const facts = randomNoRepeats(vsynthFacts)
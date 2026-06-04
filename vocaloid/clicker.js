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

let purchase = 0

if (checkCookie(path + 'debug') === 'error') {
  setCookie(path + 'debug', false)
}
let debug = false
if (getCookie(path+'debug') === 'true') {debug = true}
if (getCookie(path+'debug') === 'false') {debug = false}

if (checkCookie(path + 'unlockedMiku') === 'error') {
  setCookie(path + 'unlockedMiku', false, debug)
}
if (checkCookie(path + 'unlockedTeto') === 'error') {
  setCookie(path + 'unlockedTeto', false, debug)
}
if (checkCookie(path + 'unlockedNeru') === 'error') {
  setCookie(path + 'unlockedNeru', false, debug)
}
if (checkCookie(path + 'unlockedLuka') === 'error') {
  setCookie(path + 'unlockedLuka', false, debug)
}
if (checkCookie(path + 'unlockedKagamines') === 'error') {
  setCookie(path + 'unlockedKagamines', false, debug)
}

if (checkCookie(path + 'mikus') === 'error') {
  setCookie(path + 'mikus', 25, debug)
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
if (checkCookie(path + 'rins') === 'error') {
  setCookie(path + 'rins', 25, debug)
}
if (checkCookie(path + 'arins') === 'error') {
  setCookie(path + 'arins', 0, debug)
}
if (checkCookie(path + 'lens') === 'error') {
  setCookie(path + 'lens', 25, debug)
}
if (checkCookie(path + 'alens') === 'error') {
  setCookie(path + 'alens', 0, debug)
}
if (checkCookie(path + 'defokos') === 'error') {
  setCookie(path + 'defokos', 25, debug)
}
if (checkCookie(path + 'adefokos') === 'error') {
  setCookie(path + 'adefokos', 0, debug)
}
if (checkCookie(path + 'reis') === 'error') {
  setCookie(path + 'reis', 25, debug)
}
if (checkCookie(path + 'areis') === 'error') {
  setCookie(path + 'areis', 0, debug)
}
if (checkCookie(path + 'volume') === 'error') {
  setCookie(path + 'volume', 10, debug)
}

// functions
function getVsynths(vsynth='') {
  return Number(getCookie(path + vsynth + 's'))
}
function getAutoVsynth(vsynth='') {
  return Number(getCookie(path + 'a' + vsynth + 's'))
}
function displayVsynth(vsynth='') {
  let vsynths = Number(getCookie(path + vsynth + 's'))
  if (vsynths >= 1000000) {
    gewi(`${vsynth}s`).innerHTML = `${vsynths.toExponential(2)} ${sentenceCase(vsynth)}s`
  }
  else {
    gewi(`${vsynth}s`).innerHTML = `${vsynths} ${sentenceCase(vsynth)}s`
  }
}
function displayAutoVsynth(vsynth='') {
  let avsynths = getAutoVsynth(vsynth)
  if (avsynths >= 1000000) {
    gewi(`${vsynth}ps`).innerHTML = `${avsynths.toExponential(2)} ${sentenceCase(vsynth)}s per second.`
  }
  else {
    gewi(`${vsynth}ps`).innerHTML = `${avsynths} ${sentenceCase(vsynth)}s per second.`
  }
}
function buyAutoVsynth(vsynth='') {
  gewi(`${vsynth}Auto`).addEventListener('click', () => {
    purchaseAutoVsynth(vsynth, purchase)
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
        if (vsynths >= 25*amount && nerus >= 2500*amount && tetos >= 5000*amount && mikus >= 100000*amount) {
          mikuLog(`purchasing ${vsynth}`)
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
      else if (vsynth === 'rin' || vsynth === 'len') {
        let mikus = getVsynths('miku')
        let tetos = getVsynths('teto')
        let nerus = getVsynths('neru')
        let lukas = getVsynths('luka')
        vsynths = getVsynths(vsynth)
        if (vsynths >= 25*amount && lukas >= 2500*amount && nerus >= 5000*amount && tetos >= 10000*amount && mikus >= 1000000*amount) {
          mikuLog(`purchasing ${vsynth}`)
          avsynths += amount
          setCookie(path + `a${vsynth}s`, avsynths, debug)
          vsynths -= 25*amount
          setCookie(path + `${vsynth}s`, vsynths, debug)
          lukas -= 2500*amount
          setCookie(path + 'lukas', lukas, debug)
          nerus -= 5000*amount
          setCookie(path + 'nerus', nerus, debug)
          tetos -= 10000*amount
          setCookie(path + 'tetos', tetos, debug)
          mikus -= 100000*amount
          setCookie(path + 'mikus', mikus, debug)
          displayVsynth(vsynth)
          displayAutoVsynth(vsynth)
          if (avsynths === 1) {
            autoVsynth(vsynth)
          }
        }
      }
      else if (vsynth === 'defoko') {
        let mikus = getVsynths('miku')
        let tetos = getVsynths('teto')
        let nerus = getVsynths('neru')
        let lukas = getVsynths('luka')
        let rins = getVsynths('rin')
        let lens = getVsynths('len')
        vsynths = getVsynths(vsynth)
        if (vsynths >= 25*amount && lens >= 2500*amount && rins >= 2500*amount && lukas >= 2500*amount && nerus >= 2500*amount && tetos >= 1e+20*amount && mikus >= 2500*amount) {
          mikuLog(`purchasing ${vsynth}`)
          avsynths += amount
          setCookie(path + `a${vsynth}s`, avsynths, debug)
          vsynths -= 25*amount
          setCookie(path + `${vsynth}s`, vsynths, debug)
          lukas -= 2500*amount
          setCookie(path + 'lukas', lukas, debug)
          rins -= 2500*amount
          setCookie(path + 'rins', rins, debug)
          lens -= 2500*amount
          setCookie(path + 'lens', lens, debug)
          nerus -= 2500*amount
          setCookie(path + 'nerus', nerus, debug)
          tetos -= 1e+20*amount
          setCookie(path + 'tetos', tetos, debug)
          mikus -= 2500*amount
          setCookie(path + 'mikus', mikus, debug)
          displayVsynth(vsynth)
          displayAutoVsynth(vsynth)
          if (avsynths === 1) {
            autoVsynth(vsynth)
          }
        }
      }
      else if (vsynth === 'rei') {
        let mikus = getVsynths('miku')
        let tetos = getVsynths('teto')
        let nerus = getVsynths('neru')
        let lukas = getVsynths('luka')
        let rins = getVsynths('rin')
        let lens = getVsynths('len')
        let defokos = getVsynths('defoko')
        vsynths = getVsynths(vsynth)
        if (vsynths >= 25*amount && lens >= 2500*amount && rins >= 2500*amount && lukas >= 2500*amount && nerus >= 2500*amount && tetos >= 1e+20*amount && mikus >= 2500*amount) {
          mikuLog(`purchasing ${vsynth}`)
          avsynths += amount
          setCookie(path + `a${vsynth}s`, avsynths, debug)
          vsynths -= 25*amount
          setCookie(path + `${vsynth}s`, vsynths, debug)
          lukas -= 2500*amount
          setCookie(path + 'lukas', lukas, debug)
          rins -= 2500*amount
          setCookie(path + 'rins', rins, debug)
          lens -= 2500*amount
          setCookie(path + 'lens', lens, debug)
          nerus -= 2500*amount
          setCookie(path + 'nerus', nerus, debug)
          tetos -= 1e+20*amount
          setCookie(path + 'tetos', tetos, debug)
          // defokos -= 1e+7*amount
          // setCookie(path + 'defokos', defokos, debug)
          mikus -= 2500*amount
          setCookie(path + 'mikus', mikus, debug)
          displayVsynth(vsynth)
          displayAutoVsynth(vsynth)
          if (avsynths === 1) {
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
    displayVsynth(vsynth)
      await delay(1000 / avsynths)
    }
    else {
      vsynths = getVsynths(vsynth)
      setCookie(path + vsynth + 's', vsynths + Math.round(avsynths / 30), debug)
    displayVsynth(vsynth)
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
  qSelA(`.${vsynth}Face`).forEach(element => {
    element.onclick = () => {
    let vsynths = getCookie(path + `${vsynth}s`)
    vsynths++
    setCookie(path + `${vsynth}s`, vsynths, debug)
    displayVsynth(vsynth)
  }})
}
function checkVsynthCookie(vsynth) {
  if (checkCookie(path + `${vsynth}s`) === 'error') {
    setCookie(path + `${vsynth}s`, 25, debug)
  }
  if (checkCookie(path + `a${vsynth}s`) === 'error') {
    setCookie(path + `a${vsynth}s`, 0, debug)
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
  'luka',
  'rin',
  'len',
  'defoko',
  'rei'
]
let skins = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
]

// init
function init() {


  for (let index = 0; index < allVsynths.length; index++) {
    const vsynth = allVsynths[index];
    const element = vsynth
    const skin = skins[index];

    displayVsynth(vsynth)
    qSelA(`.${vsynth}Face`).forEach(element => {element.innerHTML = selectableVsynth(skin+vsynth)})
    gewi(`${vsynth}Face`).innerHTML = selectableVsynth(skin+vsynth, '1rem')
    onclickVsynth(vsynth)
    buyAutoVsynth(vsynth)
    checkVsynthCookie(vsynth)
  }

  if (getCookie(path + 'unlockedMiku') === 'done') {
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
  }
  if (getCookie(path+'unlockedKagamines') === 'done') {
    qSelA('.rin').forEach(element => {element.style.display = 'block'})
    qSelA('.len').forEach(element => {element.style.display = 'block'})
    kagamineFacts.forEach(element => {vsynthFacts.push(element)})
    facts = randomNoRepeats(vsynthFacts)
  }
  if (getCookie(path + 'unlockedDefoko') === 'done') {
    qSelA('.defoko').forEach(element => {element.style.display = 'block'})
    qSelA('.utaus').forEach(element => {element.style.display = 'block'})
    defokoFacts.forEach(element => {vsynthFacts.push(element)})
    facts = randomNoRepeats(vsynthFacts)
  }
  if (getCookie(path + 'unlockedRei') === 'done') {
    qSelA('.rei').forEach(element => {element.style.display = 'block'})
    reiFacts.forEach(element => {vsynthFacts.push(element)})
    facts = randomNoRepeats(vsynthFacts)
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
    // setCookie(path+'mikus', 0)
    qSelA('.miku').forEach(element => {element.style.display = 'block'})
    window.location.reload(true)
  }
  })

  window.onkeydown = function (event) {
    if (document.activeElement != gewi('purchaseNumber')) {
      if (event.key === 'ArrowRight') {
        // right arrow
      }
      if (event.key === 'ArrowLeft') {
        // left arrow
      }
      if (event.key === 'ArrowUp') {
      // Up Arrow pressed
      }
      if (event.key === 'ArrowDown') {
        // Down Arrow pressed
      }
      if (event.key === 'e') {
        console.log('e')
      }
      if (event.key === '1') {
        purchaseAutoVsynth('miku', purchase)
      }
      if (event.key === '!') {
        purchaseAutoVsynth('miku', purchase*10)
      }
      if (event.key === '2') {
        purchaseAutoVsynth('teto', purchase)
      }
      if (event.key === '@') {
        purchaseAutoVsynth('teto', purchase*10)
      }
      if (event.key === '3') {
        purchaseAutoVsynth('neru', purchase)
      }
      if (event.key === '#') {
        purchaseAutoVsynth('neru', purchase*10)
      }
      if (event.key === '4') {
        purchaseAutoVsynth('luka', purchase)
      }
      if (event.key === '$') {
        purchaseAutoVsynth('luka', purchase*10)
      }
      if (event.key === '5') {
        purchaseAutoVsynth('rin', purchase)
      }
      if (event.key === '%') {
        purchaseAutoVsynth('rin', purchase*10)
      }
      if (event.key === '6') {
        purchaseAutoVsynth('len', purchase)
      }
      if (event.key === '^') {
        purchaseAutoVsynth('len', purchase*10)
      }
      if (event.key === '7') {
        purchaseAutoVsynth('defoko', purchase)
      }
      if (event.key === '&') {
        purchaseAutoVsynth('defoko', purchase*10)
      }
      if (event.key === '8') {
        purchaseAutoVsynth('rei', purchase)
      }
      if (event.key === '*') {
        purchaseAutoVsynth('rei', purchase*10)
      }
    }
  }

  purchase = Number(gewi('purchaseNumber').value)
  gewi('purchaseNumber').addEventListener('change', () => {
    let pNumber = Number(gewi('purchaseNumber').value)
    purchase = pNumber
  })

  funFacts(vsynthFacts)
  sing()
  tick()

  window.onload = () => {
    qSel('.images').remove()
    setTimeout( () => {gewi('loading').remove()}, 800 )
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
    if (Number(getCookie(path+element+'s')) < 0) {
      setCookie(path + element+'s', 0)
    }
  }
    let amikus = getAutoVsynth('miku')
    if (amikus >= 1 && getCookie(path + 'unlockedMiku') != 'done' && getCookie(path + 'unlockedMiku') != 'true') {setCookie(path + 'unlockedMiku', true), true}
    if (getCookie(path + 'unlockedMiku') === 'true') {
      setCookie(path + 'unlockedMiku', 'done')
      mikuFacts.forEach(element => {vsynthFacts.push(element)})
      facts = randomNoRepeats(vsynthFacts)
    }

    if (amikus >= 1000 && getCookie(path + 'unlockedTeto') != 'done' && getCookie(path + 'unlockedTeto') != 'true') {setCookie(path + 'unlockedTeto', true), true}
    if (getCookie(path + 'unlockedTeto') === 'true') {
      qSelA('.teto').forEach(element => {element.style.display = 'block'})
      tetoFacts.forEach(element => {vsynthFacts.push(element)})
      facts = randomNoRepeats(vsynthFacts)

      setCookie(path + 'unlockedTeto', 'done', debug)
    }

    let atetos = getAutoVsynth('teto')
    if (atetos >= 1000 && getCookie(path + 'unlockedNeru') != 'done' && getCookie(path + 'unlockedNeru') != 'true') {setCookie(path + 'unlockedNeru', true), true}
    if (getCookie(path + 'unlockedNeru') === 'true') {
      qSelA('.neru').forEach(element => {element.style.display = 'block'})
      neruFacts.forEach(element => {vsynthFacts.push(element)})
      facts = randomNoRepeats(vsynthFacts)

      setCookie(path + 'unlockedNeru', 'done', debug)
    }

    let anerus = getAutoVsynth('neru')
    if (anerus >= 1000 && getCookie(path + 'unlockedLuka') != 'done' && getCookie(path + 'unlockedLuka') != 'true') {setCookie(path + 'unlockedLuka', true), true}
    if (getCookie(path + 'unlockedLuka') === 'true') {
      qSelA('.luka').forEach(element => {element.style.display = 'block'})
      qSelA('.family').forEach(element => {element.style.display = 'block'})
      lukaFacts.forEach(element => {vsynthFacts.push(element)})
      facts = randomNoRepeats(vsynthFacts)

      setCookie(path + 'unlockedLuka', 'done', debug)
    }

    let alukas = getAutoVsynth('luka')
    if (alukas >= 1000 && getCookie(path + 'unlockedKagamines') != 'done' && getCookie(path + 'unlockedKagamines') != 'true') {setCookie(path + 'unlockedKagamines', true), true}
    if (getCookie(path + 'unlockedKagamines') === 'true') {
      qSelA('.rin').forEach(element => {element.style.display = 'block'})
      qSelA('.len').forEach(element => {element.style.display = 'block'})
      kagamineFacts.forEach(element => {vsynthFacts.push(element)})
      facts = randomNoRepeats(vsynthFacts)

      setCookie(path + 'unlockedKagamines', 'done', debug)
    }

    if (atetos >= 1e+17 && getCookie(path + 'unlockedDefoko') != 'done' && getCookie('unlockedDefoko') != 'true') {setCookie(path + 'unlockedDefoko', true)}
    if (getCookie(path + 'unlockedDefoko') === 'true') {
      qSelA('.defoko').forEach(element => {element.style.display = 'block'})
      qSelA('.utaus').forEach(element => {element.style.display = 'block'})
      defokoFacts.forEach(element => {vsynthFacts.push(element)})
      facts = randomNoRepeats(vsynthFacts)

      setCookie(path + 'unlockedDefoko', 'done', debug)
    }
    if (atetos >= 1e+20 && getCookie(path + 'unlockedRei') != 'done' && getCookie('unlockedRei') != 'true') {setCookie(path + 'unlockedRei', true)}
    if (getCookie(path + 'unlockedRei') === 'true') {
      qSelA('.rei').forEach(element => {element.style.display = 'block'})
      // qSelA('.utaus').forEach(element => {element.style.display = 'block'})
      reiFacts.forEach(element => {vsynthFacts.push(element)})
      facts = randomNoRepeats(vsynthFacts)

      setCookie(path + 'unlockedRei', 'done', debug)
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

]
let tetoFacts = [
  `Kasane Teto<br>${selectedVsynth('teto', '3rem')}`,
    'Kasane Teto\'s gender is "Chimera".',
    // `Kasane Teto was conceived as an April Fools' joke, and was later turned into an UTAU voicebank.`,
    // `Kasane Teto is considered a Vocaloid, some placing her on the same level or even higher than Hatsune Miku.`,
    `<strong>Breaking News:</strong> Self-proclaimed "Vocaloid fan" writes transfem Teto detransition, tied up and paraded through city by fanbase. More at 7.`,
    `Twitter claims Kasane Teto "cannot be transgender", reasoning ranges from "that is not what the creator said" to "'Transgender' people are mentally ill and should kill themselves".`,
    'Violent dispute over whether world-famous singer Hatsune Miku is "a top or a bottom" continues to rage. 43 hospitalized, 12 dead.'
]
let neruFacts = [
  `Akita Neru<br>${selectedVsynth('neru', '3rem')}`,
    '<a href="/vocaloid/the goods.html">9 hour makeout session with the Baka Polycule<sup>TM</sup></a>',
    `Hatsune Miku, Akita Neru and Kasane Teto are often portrayed as being in a romantic relationship, forming the Baka Polycule<sup>TM</sup>.`,
    'What if each member of the Baka Polycule<sup>TM</sup> painted their thumbnails the colors of the other two? For example, Miku would have one thumbnail red and the other yellow. Teto would have one blue and one yellow, Neru, one blue one red',
    '*beep bee-beep beep beep bee-beep beep beep*',
    `Twitter users continue to fight among themselves over the gender of popular singer Kasane Teto, death threats number more than a thousand.`,
    `<strong>Breaking News:</strong> A "Vocaloid fan" admitted to writing a "detransition" fan fiction featuring UTAU and SynthV idol Kasane Teto; they were promptly beaten senseless, tied up, and paraded through the city to be burned on a cross. Witnesses commented: "Deserved."`,
]
let lukaFacts = [
  `Megurine Luka<br>${selectedVsynth('luka', '3rem')}`,
    `<b>Shattering News:</b> Many people would let Luka step on them.<br>The editors of Shattering News leave no comment.`,
    `Luka is the first adult character made for Vocaloid.`,
    `Luka lacks a V3 voicebank, only having V2 and V4.`,
]
let kagamineFacts = [
  `Kagamine Rin<br>${selectedVsynth('rin', '3rem')}`,
  `Kagamine Len<br>${selectedVsynth('len', '3rem')}`
]
let defokoFacts = [
  `Uta 'Defoko' Utane<br>${selectedVsynth('defoko', '3rem')}`
]
let reiFacts = [
  `Adachi Rei<br>${selectedVsynth('rei', '3rem')}`
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
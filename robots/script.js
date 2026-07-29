// service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(registration) {
    tesLog('Service Worker registered with scope: ' + registration.scope);
  }).catch(function(error) {
    tesLog('Service Worker registration failed:', error);
  });
}

// variables
var path = location.pathname

var script = document.createElement('script')
script.src = '/r34/porn.js'

var pornSidebar = `\
  <h1><a href="/r34/r34.html"><span style="color: white;">prawns</span></a></h1>\
  <a href="all.html" class="red"><span>all</span></a><br>\
  <a class="blue" href="assets.html"><span>assets</span></a><br>\
  <span onclick="tesLog('setting sidebar to artistSidebar'); addSidebar(artistSidebar)" class="blue"><span>Artists</span></span><br>
  <a href="/r34/sources.html" class="blue"><span>Sources</span></a><br>
  <br>\
  \
  <a class="blue" href="/r34/comics.html"><span>Comics</span></a><br><br>` +
  `<a href="/r34/cavestory.html" id="cavestory" class="blue" onmouseenter="gewi(\'quotehead\').src=\'/r34/cavestory/assets/Sprite-0002.svg\'" onmouseleave="gewi(\'quotehead\').src=\'/r34/cavestory/assets/Sprite-0001.svg\'" onload="gewi(\'quotehead\').src=\'/r34/cavestory/assets/Sprite-0001.svg\'"><span>Cave Story</span></a> <img src="/r34/cavestory/assets/Sprite-0001.svg" style="border: none; width: 16px; height: 10px;" id="quotehead"><br>\
  <a href="/r34/dragon-maid.html" class="blue"><span>Dragon Maid</span></a><br>\
  <a href="/r34/hard-degen.html" class="blue"><span>Hard Degenerate</span></a><br>\
  <a href="/r34/hoyo.html" class="blue"><span>Hoyoverse</span></a><br>\
  <a class="blue" href="/r34/irl.html"><span>IRL</span></a><br>\
  <a class="blue" href="/r34/mario.html"><span>Mario</span></a><br>\
  <a href="/r34/miku.html" id="cavestory" class="blue" onmouseenter="gewi(\'mikuhead\').src=\'/icons/mikuSelected.png\'" onmouseleave="gewi(\'mikuhead\').src=\'/icons/miku.png\'" onload="gewi(\'mikuhead\').src=\'/icons/miku.png\'"><span>Miku</span> <img src="/icons/miku.png" style="border: none; width: 1rem; height: 1rem" id="mikuhead"></a><br>\
  <a class="blue" href="/r34/Overwatch.html"><span>Overwatch</span></a><br>\
  <a class="blue" href="/r34/other.html"><span>Other</span></a><br>\
  <a class="blue" href="/r34/pokemon.html"><span>Pokemon</span></a><br>\
  <a class="blue" href="/r34/rouge.html"><span>Rouge the Bat</span></a><br>\
  <a class="blue" href="/r34/roblox.html"><span>Roblox</span></a><br>\
  <a class="blue" href="/r34/terraria.html"><span>Terraria</span></a><br>\
  <a class="blue" href="/r34/touhou.html"><span>Touhou</span></a><br>\
  <a class="blue" href="/r34/zonkpunch.html"><span>Zonkpunch</span></a><br>
  <br>\
  <a class="blue" href="/r34/audio.html"><span>Audio</span></a><br>\
  <a class="blue" href="/r34/shibby.html"><span>shibby</span></a><br><br>\
  <button onclick="location.reload(true)">ctrl+f5</button><br><br>\
  <span class="hidden", style="color: #111;" onclick="window.open('/r34/ia/ai.html', '_self')">ai</span><br>
  <span class="hidden", style="color: #111;" onclick="window.open('/r34/files.html', '_self')">Files</span>
`
var artistSidebar = `
<h1>Artists</h1>
<a class="blue"><span onclick="tesLog('setting sidebar to pornSidebar'); addSidebar(pornSidebar)">Back</span></a><br><br>
<a class='red' href='/r34/bonkge.html'><span>Bonkge</span></a><br>
${addlink('/r34/puppysnackz.html', 'puppysnackz')}
${addlink('/r34/puddingdraws.html', 'puddingdraws')}
${addlink('/r34/onigiriarts.html', 'onigiriarts')}
${addlink('/r34/zko.html', 'zko')}
`

var pokemonSidebar = '\
  <h1>Viewers</h1>\
  <a href="/r34/pokemon/cynthia+houndoom-viewer.html">Cynthia x Houndoom</a>\
'

var mikuSidebar =
  '<h1>Viewers</h1>' +
  '<a href="/r34/miku/miku_viewer.html">Cat Miku</a><br>' +
  '<a href="/r34/miku/migu_viewer.html">Migu</a><br>' +
  '<a href="/r34/miku/mikgu.html">Miku Teto</a><br>' +
  '<a href="/r34/miku/migu.html">Horny Migu</a><br>' +
  '<a href="/r34/miku/brmikucomic.html">brmikucomic</a>'

var sona = '<h1>sonas</h1>\
  <a href="/character-sheets/femsona.html"><span>femsona</span></a><br>\
  <a href="/character-sheets/enbysona.html"><span>themsona</span></a><br>'
  // <a href="/character-sheets/mascsona.html"><span>mascsona</span></a>'

var dragonSidebar = '<h1>Viewers</h1>'
+ '<a href="/r34/dragon-maid/miss-tohru.html">Miss Tohru</a><br>'
+ `<a href="/r34/dragon-maid/tohru-ililu.html">Tohru x Ilulu</a><br>`

var aiSidebar = `
    <h1>viewers</h1>
    <a href="/r34/ia/bocchi/bocchi-ai-viewer.html">bocchi</a><br>
    <a href="/r34/ia/miku/ai-miku-viewer.html">miku</a>
`

var puppySidebar = `
<h1>Viewers</h1>
${addLink('/r34/puppysnackz/ava.html', 'Ava')}
${addLink('/r34/puppysnackz/agnes.html', 'Agnes Taciyon')}
${addLink('/r34/puppysnackz/ladylovense.html', 'Lady Lovense')}
`

let hardSidebar = `
<h1>comics</h1>
${addlink('/r34/xxx/ceiling-and-treatment.html', 'comic')}
`

var program = [
    '(^///^) ',
    "(o///o) ",
    "(0///0) ",
    "(>///<) ",
    " ( /o///o) ",
    " ( /0///0) ",
    "(v///v) ",
    '(-///-) ',
    '(u///u) ',
]

var tes = ["(o ^ o) ", "(- ^ -) "]

var me = [':3 > ', ';3 > ']

// functions
function setCookie(cname, cvalue, output = true, exdays = 365) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';page=/';
  if (output) {
  console.log(
    tes[0] + 'Set cookie \'' + cname + '\' with value \'' + cvalue + '\'; ' + expires
  )}
}

function setArrayCookie(name, value, daysToLive = 365) {
  // Serialize the value (array --> string)
  var serializedValue = JSON.stringify(value);

  // Set expiration date
  var date = new Date();
  date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000)); // days --> milliseconds
  var expires = `expires=${date.toUTCString()}`;

  // Combine all cookie attributes[0]
  var cookie = `${name}=${encodeURIComponent(serializedValue)}; ${expires}; path=/; SameSite=Strict`;

  // Add "secure" attribute if using HTTPS
  if (window.location.protocol === "https:") {
    cookie += "; secure";
  }

  // Set the cookie
  document.cookie = cookie;
}

function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function getArrayCookie(name) {
  // Split all cookies into an array of "name=value" strings
  var cookies = document.cookie.split(";");

  // Loop through cookies to find the one with the matching name
  for (let cookie of cookies) {
    // Trim whites[0]pace and split into name/value
    var [cookieName, cookieValue] = cookie.trim().split("=");

    // If the name matches, decode and parse the value
    if (cookieName === name) {
      try {
        // Decode URI and parse JSON
        return JSON.parse(decodeURIComponent(cookieValue));
      } catch (error) {
        // Handle invalid JSON (e.g., manually modified cookie)
        console.error("Failed to parse cookie:", error);
        return null;
      }
    }
  }

  // Return null if cookie not found
  return null;
}

function checkCookie(cname, output=true) {
  let anti = getCookie(cname)
  if (anti != '') {
    if (output) {
    console.log(
      tes[0] + 'Found cookie \'' + cname + '\' with value \'' + getCookie(cname) + '\''
    )}
    return 'success!'
  } else {
    errorMessage('Couldn\'t find cookie ' + cname)
    return 'error'
  }
}

function checkArrayCookie(cname) {
  let anti = getArrayCookie(cname)
  if (anti != null) {
    console.log(
      tes[0] + 'Found cookie \'' + cname + '\' with value \'' + getArrayCookie(cname) + '\''
    )
    return 'success!'
  } else {
    errorMessage('Couldn\'t find cookie \'' + cname + '\'')
    return 'error'
  }
}

function deleteCookie(cname, cvalue='', output = true, exdays = -7) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';page=/';
  if (output) {
  console.log(
    tes[0] + 'Deleted cookie \'' + cname + '\''
  )}
}

function ensureCookie(cookie='', defaultVal='') {
  if (checkCookie(cookie) === 'error') {
    setCookie(cookie, defaultVal)
  }
}

// function fetchJSONData(jsonFile="./tes[0]t.json") {
//   fetch(jsonFile)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Failed to fetch data:', error));
// }

function displayStory(content = ['wtf'], pageSetup='', showChapters, volume=0.1, doCookies = true, doX = false, doY = true, doOutput = false) {
  var page = window.location.pathname + ' - '
  var showSlide = (n) => {
    gewi('story').innerHTML = content[n]
    vol(volume)
  }

  // const next

  let index = Number(getCookie(page + 'index'))
  if (index + 1 > content.length) {
    setCookie(page + 'index', 0, doOutput)
    index = 0
  }
  if (index + 1 === content.length) {
    gewi('prev').style.display = 'inline'
    gewi('prev1').style.display = 'inline'
    gewi('next').style.display = 'none'
    gewi('next1').style.display = 'none'
  }
  else {
    gewi('prev').style.display = 'inline'
    gewi('prev1').style.display = 'inline'
    gewi('next').style.display = 'inline'
    gewi('next1').style.display = 'inline'
  }
  if (index === 0) {
    gewi('prev').style.display = 'none'
    gewi('prev1').style.display = 'none'
    gewi('next').style.display = 'inline'
    gewi('next1').style.display = 'inline'
    if (content.length <= 1) {
      gewi('prev').style.display = 'none'
      gewi('prev1').style.display = 'none'
      gewi('next').style.display = 'none'
      gewi('next1').style.display = 'none'
    }
  }
  if (doCookies == true) {
    if (doX === true && checkCookie(page + 'scrollx', false) === 'error') {
      setCookie(page + 'scrollx', 0, doOutput)
    }
    if (doY === true && checkCookie(page + 'scrolly', false) === 'error') {
      setCookie(page + 'scrolly', 0, doOutput)
    }
    if (checkCookie(page + 'index', false) === 'error') {
      setCookie(page + 'index', 0, doOutput)
      index = 0
    }
    if (index === 'NaN') {
      setCookie(page + 'index', 0, doOutput)
      index = 0
    }
  }
  showSlide(index)
  if (doCookies = true) {
    window.scrollTo(
      Number(getCookie(page + 'scrollx')),
      Number(getCookie(page + 'scrolly'))
    )
  }
  function nextPage() {
    var videoElement = qSelA('video')
    try {videoElement.forEach(element => {
      element.pause()
      element.removeAttribute('src')
      element.load()
    })}
    catch (TypeError) {tesLog('no videos')}
    index = (index + 1) % content.length
    gewi('center').textContent = index
    if (index + 1 >= content.length) {
      gewi('next').style.display = 'none'
      gewi('next1').style.display = 'none'
      gewi('prev').style.display = 'inline'
      gewi('prev1').style.display = 'inline'
    }
    else {
      gewi('next').style.display = 'inline'
      gewi('next1').style.display = 'inline'
      gewi('prev').style.display = 'inline'
      gewi('prev1').style.display = 'inline'
    }
    window.scrollTo(0, 0)
    showSlide(index)
    vol(volume)
    if (doCookies == true) {
      setCookie(page + 'index', index, doOutput)
    }
    char()
  }
  function prevPage() {
    var videoElement = qSelA('video')
    try {videoElement.forEach(element => {
      element.pause()
      element.removeAttribute('src')
      element.load()
    })}
    catch (TypeError) {tesLog('no videos')}
    index = (index + content.length - 1) % content.length
    gewi('center').textContent = index
    if (index === 0) {
      gewi('prev').style.display = 'none'
      gewi('prev1').style.display = 'none'
      gewi('next').style.display = 'inline'
      gewi('next1').style.display = 'inline'
    }
    else {
      gewi('prev').style.display = 'inline'
      gewi('prev1').style.display = 'inline'
      gewi('next').style.display = 'inline'
      gewi('next1').style.display = 'inline'
    }
    window.scrollTo(0, 0)
    showSlide(index)
    vol(volume)
    if (doCookies == true) {
      setCookie(page + 'index', index, doOutput)
    }
    char()
  }
  gewi('next').addEventListener('click', () => {
    nextPage()
  })
  gewi('next1').addEventListener('click', () => {
    nextPage()
  })
  gewi('prev').addEventListener('click', () => {
    prevPage()
  })
  gewi('prev1').addEventListener('click', () => {
    prevPage()
  })
  window.onkeydown = function (event) {
    if (event.key === 'ArrowRight') {
    }
    if (event.key === 'ArrowLeft') {
    }
    if (event.key === 'ArrowUp') {
    // Up Arrow pressed
    }
    if (event.key === 'ArrowDown') {
      // Down Arrow pressed
    }
    if (event.key === 'PageDown') {
      event.preventDefault()
      if (index + 1 != content.length) {
        nextPage()
      }
    }
    if (event.key === 'PageUp') {
      event.preventDefault()
      if (index != 0) {
        prevPage()
      }
    }
    if (event.key === 'Home') {
      event.preventDefault()
      if (index != 0) {
        showSlide(0)
        window.scrollTo(0,0)
        gewi('prev').style.display = 'none'
        gewi('prev1').style.display = 'none'
        gewi('next').style.display = 'inline'
        gewi('next1').style.display = 'inline'
        index = 0
        gewi('center').textContent = index
        if (doCookies == true) {
          setCookie(page + 'index', 0, doOutput)
        }
      }
    }
    if (event.key === 'End') {
      event.preventDefault()
      if (index != content.length -1) {
        showSlide(content.length-1)
        window.scrollTo(0, 0)
        gewi('next').style.display = 'none'
        gewi('next1').style.display = 'none'
        gewi('prev').style.display = 'inline'
        gewi('prev1').style.display = 'inline'
        index = content.length -1
        gewi('center').textContent = index
        if (doCookies == true) {
          setCookie(page + 'index', content.length-1, doOutput)
        }
      }
    }
  }
  function char() {
    try {
    gewi('char').addEventListener('dblclick', () => {
      word_count()
    })
    }
    catch (TypeError) {
      if (doOutput) {errorMessage('story: no char element')}
    }
  }
  char()
  if (doCookies == true) {
    window.addEventListener('scrollend', () => {
      if (doX === true) {
        setCookie(page + 'scrollx', window.scrollX, doOutput)
      }
      if (doY === true) {
        setCookie(page + 'scrolly', window.scrollY, doOutput)
      }
    })
  }
  if (doOutput) {tesLog('finished loading story')}
}

let startState = 'not started'

/**
 * Starts displayStory
 * @param {Array} content content in the thing
 * @param {Boolean} format do you want it formatted? true, false, top
 * @param {Boolean} doOutput
 * @param {Number} volume the volume you want videos to be set to on page turn
 * @param {String} pageSetup how you want to display pages (unused for now)
 * @param {Boolean} doCookies
 * @param {Boolean} doX
 * @param {Boolean} doY
 */
function startStory(content=['wtf'], format=false, showChapters=true, doOutput=true, volume=0.1, pageSetup=[''], doCookies=true, doX=false, doY=true) {
  if (doOutput) {tesLog('starting story...')}
  var s = document.createElement('script');
  s.id = 'text'
  if (startState === 'not started') {
    getScript('/text.js')
    if (doOutput) {tesLog('story: fetched text')}
    startState = 'debug check'
  }
  if (window.location.href.indexOf('http://localhost:8001') > 0) {
    if (doOutput) {tesLog('story: debug true')}
    startState = 'debug true'
  }
  else {
    if (doOutput) {tesLog('story: debug false')}
    startState = 'ready to display'
  }
  if (startState === 'debug true') {
    tesLog('story: getting text')
    getScript('https://prokid99999.github.io/text.js')
    getScript('http://localhost:2009/text.js')
    }
  if (doOutput) {tesLog('story: displaying')}
  if (startState === 'ready to display') {
    let formatting = ''
    if (format === true) {
      formatting =
      `<br><div class="space"><div style="text-align: left"><button id="prev">&lt; Prev</button></div><div id="center" style="text-align: center;"></div><div style="text-align: right;"><button id="next">Next &gt;</button></div></div><div id="story"><br><span style="color: white;">loading...<br>if this doesn't finish loading soon you should try again</span></div><br><div class="space"><div style="text-align: left"><button id="prev1">&lt; Prev</button></div><div id="center1" style="text-align: center;"></div><div style="text-align: right;"><button id="next1">Next &gt;</button></div></div><br><p>`
    }
    else if (format === 'top') {
      formatting =
      `<br><div class="space"><div style="text-align: left"><button id="prev">&lt; Prev</button></div><div id="center" style="text-align: center;"></div><div style="text-align: right;"><button id="next">Next &gt;</button></div></div><br><div id="story"><br><span style="color: white;">loading...<br>if this doesn't finish loading soon you should try again</span></div><br><div class="space"><div style="text-align: left"><span id="prev1"></span></div><div id="center1" style="text-align: center;"></div><div style="text-align: right;"><span id="next1"></span></div></div><br><br>`
    }
    else if (format === 'bottom') {
      formatting =
      `<br><div class="space"><div style="text-align: left"><span id="prev"></span></div><div id="center" style="text-align: center;"></div><div style="text-align: right;"><span id="next"></span></div></div><div id="story"><br><span style="color: white;">loading...<br>if this doesn't finish loading soon you should try again</span></div><br><div class="space"><div style="text-align: left"><button id="prev1">&lt; Prev</button></div><div id="center1" style="text-align: center;"></div><div style="text-align: right;"><button id="next1">Next &gt;</button></div></div><br><br>`
    }
    // document.body.innerHTML -= formatting
    document.body.innerHTML += formatting
    displayStory(content, pageSetup, showChapters, volume, doCookies, doX, doY, doOutput)
  }
}

function StartThoughts(content = ['wtf']) {
  var page = window.location.pathname + ' - '
  getScript('/thoughts.js')
  // content.reverse()
  var showSlide = (n) => {
    gewi('story').innerHTML += '<div class="background">' + content[n] + '</div><br><br>'
  }

  gewi('story').innerHTML = ""

  for (let index = 0; index < content.length; index++) {
    const element = content[index];
    showSlide(index)
  }
}

function startViewer(basePath='', contents=[''], location='html>body', debug = false) {
  // const content = contents.forEach((index) => {basePath + index})
  path = path + ' - index'
  if (checkCookie(path) === 'error') {
    setCookie(path, 0)
  }
  let viewerIndex = Number(getCookie(path))
  try {
    gewi('image').remove()
    qSel('.pages').remove()
    qSel('.nav').remove()
  }
  catch (error) {
    tesLog('nothing to remove')
  }

  // image
  const image = document.createElement('img')
  image.className = 'center'
  image.id = 'image'
  image.src = basePath + contents[Number(getCookie(path))]
  // image.style.marginTop = '0.5rem'
  image.style.marginBottom = '0.5rem'
  // image.style.border = 'none'
  // image.style.backgroundColor = 'rgb(127, 127, 127)'
  // image.innerText = 'loading...'
  image.style.backgroundImage = 'url("/loading-big.gif")'
  image.style.backgroundRepeat = 'no-repeat'
  image.style.backgroundSize = 'contain'
  image.style.backgroundPosition = 'center'

  // next
  function nextPanel() {
    viewerIndex++
    gewi('next').style.textDecoration = 'none'
    gewi('number').innerHTML = viewerIndex +1
    console.log(viewerIndex)
    gewi('image').src = ''
    gewi("image").src = basePath + contents[viewerIndex];
    qSelA('.pages>button').forEach(element => element.style.backgroundColor = 'black');
    gewi(viewerIndex).style.backgroundColor = "blue";
  }
  const next = document.createElement('button')
  next.innerText = 'Next >'
  next.id ='next'
  next.addEventListener('click', () => {
    if (viewerIndex < contents.length -1) {
      nextPanel()
    }
  })

  // prev
  function prevPanel() {
    viewerIndex--
    if (viewerIndex === 0) {gewi('prev').style.textDecoration = 'line-through'; tesLog('no prev')}
    gewi('prev').style.textDecoration = 'none'
    gewi('number').innerHTML = viewerIndex +1
    console.log(viewerIndex)
    gewi('image').src = ''
    gewi("image").src = basePath + contents[viewerIndex];
    qSelA('.pages>button').forEach(element => element.style.backgroundColor = 'black');
    gewi(viewerIndex).style.backgroundColor = "blue";
  }
  const prev = document.createElement('button')
  prev.innerText = '< Prev'
  prev.id = 'prev'
  prev.onclick = () => {
    if (viewerIndex != 0) {
      prevPanel()
    }
    else {
      gewi('prev').style.textDecoration = 'line-through'
      tesLog('no prev')
    }
  }

  // panel number
  // const panelNumber = document.createElement('span')
  // panelNumber.innerText = viewerIndex

  window.onkeydown = function (event) {
    if (event.key === 'ArrowLeft') {
      if (viewerIndex != 0) {
        prevPanel()
      }
      else {
        gewi('prev').style.textDecoration = 'line-through'
        tesLog('no prev')
      }
    }
    else if (event.key === 'ArrowRight') {
      if (viewerIndex < contents.length -1) {
        nextPanel()
      }
      else {
        gewi('next').style.textDecoration = 'line-through'
      }
    }
    else if (event.key === 'ArrowUp') {
    // Up Arrow pressed
    }
    else if (event.key === 'ArrowDown') {
      // Down Arrow pressed
    }
  }

    if (debug) {console.log('adding image')}
  qSel(location).innerHTML += `
  <div class="center"></div>
  <div class="nav">
    <div id="prev"></div>
    <div id="number"></div>
    <div id="next"></div>
  </div>
  <div class="pages" id="pages"></div>`
  qSel('.center').appendChild(image)
  qSel('#prev').appendChild(prev)
  qSel('#number').innerHTML = viewerIndex +1
  qSel('#next').appendChild(next)

  qSel('.nav').style.marginBottom = '0.5rem'
  qSel('.nav').style.display = 'flex'
  qSel('.nav').style.justifyContent = 'space-between'
  qSel('.nav').style.width = '40%'
  qSel('.nav').style.marginLeft = '30%'



  // page buttons
  contents.forEach((value, index) => {
    const button = document.createElement('button')
    button.id = index
    button.style.marginRight = '0.25rem'
    if (debug) {console.log('adding text')}
    button.innerText = 'Page ' + (index + 1)
    if (debug) {console.log('adding onclick')}
    button.onclick = () => {
      // setCookie(path, index)
      viewerIndex = Number(getCookie(path))
      console.log(viewerIndex)
      gewi("image").src = basePath + contents[index];
      qSelA('.pages>button').forEach(element => element.style.backgroundColor = 'black');
      gewi(index).style.backgroundColor = "blue";
    }
    gewi('pages').appendChild(button)
  })
  gewi(String(getCookie(path))).style.backgroundColor = 'blue'
  // qSel(location).style = "margin: 0; width: 100vw;"
}

function startStripViewer(src, pages, pagewidth, pageheight) {
  // height++
  document.body.innerHTML += '\
    <div id="buttons"></div>\
    <br>\
    <div id="image-container">\
      <img id="image">\
    </div>'

  gewi('image').src = src
  qSel('#image-container').style.width = pagewidth + 'px'
  qSel('#image-container').style.height = pageheight + 'px'
  qSel('#image').style.width = pagewidth + 'px'
  // qSel('#image').style.height = pageheight + 'px'

  for (let index = 0; index < pages; index++) {
    let location = (pageheight * index) * -1
    tesLog(location)
    // const element = array[index];
    const pageButton = document.createElement('button')
    pageButton.id = index
    pageButton.onclick = function () {gewi('image').style.top = `${location}px`}
    pageButton.innerHTML = `page ${index + 1}`
    gewi('buttons').appendChild(pageButton)

  }
}

function getCommit(owner, repo) {
  fetch(
    'https://api.github.com/repos/' + owner + '/' + repo + '/commits?per_page=1',
    {Authorization: "Bearer github_pat_nuh_uh"}).then(res => res.json()).then(
    res => {
      gewi('message').className = 'message'
      gewi('message').innerHTML = res[0].commit.message
      if (res[0].commit.author.name = 'benheroblaw') {
        gewi('committer').className = 'benheroblaw'
      }
      else if (res[0].commit.author.name === 'Prokid99999') {
        gewi('committer').className = 'prokid'
      }
      else {
        gewi('committer').className = 'other'
      }
      gewi('committer').innerText = res[0].commit.committer.name
    })
}

function getCommitNumbers(owner, repo) {
  fetch(
    'https://api.github.com/repos/' + owner + '/' + repo + '/commits?per_page=1',
    {
      Authorization: atob('')
    }).then(res => res.json()).then(
    res => {
      gewi('message').innerHTML = res[0].commit.message
    })
}

var delay = ms => new Promise(res => setTimeout(res, ms));

function word_count(paras = 'background') {
  paras = document.getElementsByClassName(paras);
  var count = 0;
  for (var i = 0; i < paras.length; i++) {
    var content = paras[i].textContent;
    var words = content.match(/\S+/g);
    count += words ? words.length : 0;
  }
  let contents = paras[0].textContent
  contents = contents.trim()
  contents = contents.replace(/<[^>]*>?/gm, '');
  char = contents.length
  tesLog(count + ' words, ' + char + ' characters');
}

function wordcount(paras = 'background') {
  let area = gewi(paras);
  let char = 0 // Count characters
  let content = area.textContent;
  char = content.length;
  // Remove empty spaces from start and end
  content.trim();
  console.log(content);
  let wordList = content.split(/\s/);
  // Remove spaces from between words
  let words = wordList.filter(function (element) {
    return element != '';
  });
  // Count words
  console.log(words.length)
}

function stripHtml(html) {
  let tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent ||
  tmp.innerText ||
  '';
}

function vol (video_volume = 0.1, audio_volume = 0.75) {
  var video = qSelA('video');
  video.forEach(element => element.volume = video_volume
  )
  // video.forEach(element => element.addEventListener('pause', () => setCookie(element + 'time', element.currentTime)), doOutput)
  // video.forEach(element => element.preload = 'none')
  var audio = qSelA('audio');
  audio.forEach(element => element.volume = audio_volume)
}

function colorTrace(msg, color='red') {
    console.log("%c" + msg, "color:" + color + "; font-weight:bolder;");
}

function errorMessage(msg) {
  colorTrace(tes[1] + ' ' + msg, 'red')
}

function tesLog (msg='') {
  console.log(tes[0] + msg)
}

function clear() {
  console.clear()
}

var video = qSelA('video')
// document.addEventListener('loadstart', video.forEach(element => element.preload = 'none'))

function addSidebar(sidebar=pornSidebar, viewerSidebar='', sidebar3='', sidebar4='', artSidebar='') {
  // document.head.innerHTML += '<link rel="stylesheet" href="/sidebar.css">'
  promiseLoadLink('/sidebar.css', 'stylesheet').then(placeSidebar(sidebar, viewerSidebar, sidebar3, sidebar4, artSidebar))
}
function placeSidebar(sidebar, viewerSidebar, sidebar3, sidebar4, artSidebar) {
  try {gewi('sidebar').innerHTML = sidebar; gewi('sidebar').style.display = 'inline'}
  catch (Error) {errorMessage('no 1st sidebar')}
  // try {qSel('sidebar').innerHTML = sidebar; qSel('sidebar').style.display = 'inline'}
  // catch (Error) {errorMessage('no sidebar element')}
  if (viewerSidebar != '') {
    try {gewi('sidebar2').innerHTML = viewerSidebar; gewi('sidebar2').style.display = 'inline'}
    catch (Error) {errorMessage('no 2nd sidebar')}
  }
  if (sidebar3 != '') {
    try {gewi('sidebar3').innerHTML = sidebar3; gewi('sidebar3').style.display = 'inline'}
    catch (Error) {errorMessage('no 3rd sidebar')}
  }
  if (sidebar4 != '') {
    try {gewi('sidebar4').innerHTML = sidebar4; }
    catch (Error) {errorMessage('no 4th sidebar')}
  }
  if (artSidebar != '') {
    try {gewi('artSidebar').innerHTML = artSidebar; }
    catch (Error) {errorMessage('no 5th sidebar')}
  }

}

function getScript(file) {
  var s = document.createElement('script');
  s.id = 'getScript'
  s.src = file;
  document.head.appendChild(s);
  // gewi('getScript').remove()
}
function getModule(file) {
  var s = document.createElement('script');
  s.id = 'getScript'
  s.src = file;
  s.type = 'module'
  document.head.appendChild(s);
  // gewi('getScript').remove()
}
// function promiseLoadScript(url) {
//   var script = document.createElement("script");  // create a script DOM node
//   script.src = url;  // set its src to the provided URL

//   document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
//   return Promise.resolve('Success')
// }
// const promisepromiseLoadScript = (script='/r34/porn.js') => {
//   new Promise(() => promiseLoadScript(script))
//   tesLog('loaded script')
// }

function addElement(element='', id='') {
  let elem = document.createElement(element)
  if (id != '') {
    elem.id = id
  }
  document.body.appendChild(elem)
}

/**
 * loads a script
 * @param {string} file file path
 */
function getScript(file) {
  var s = document.createElement('script');
  s.id = 'getScript'
  s.src = file;
  document.head.appendChild(s);
}
/**
 * loads a css file
 * @param {string} file file path
 */
function getCSS(file) {
  var s = document.createElement('link');
  s.id = 'getCSS'
  s.link = file;
  s.rel = 'stylesheet'
  document.head.appendChild(s);
}
/**
 * loads a script as a module
 * @param {string} file file path
 */
function getModule(file) {
  var s = document.createElement('script');
  s.id = 'getScript'
  s.src = file;
  s.type = 'module'
  document.head.appendChild(s);
}

/**
 * Quick element adder
 * @param {string} element element type
 * @param {string} id id to add to the element
 */
function addElement(element='', id='') {
  let elem = document.createElement(element)
  if (id != '') {
    elem.id = id
  }
  document.body.appendChild(elem)
  if (id === '') {return `added ${element} to document`}
  else {return `added ${element} to document with id ${id}`}
}

/**
 *Shorthand for document.getElementById
 * @param {string} id - id of the element
 * @returns the element
 */
function getElementWithId(id='') {
  // var element =
  try {
    return document.getElementById(id)
  }
  catch {console.log('element not found')}
}
/**
 *Shortened version of getElementWithId
 * @param {string} id - id of the element
 */
function gEWI(id='') {
  return getElementWithId(id)
}
/**
 *Shortened version of getElementWithId
 * @param {string} id - id of the element
 */
function gewi(id='') {
  return getElementWithId(id)
}

/**
 * Shorthand for document.getElementsByClassName
 * @param {string} clas - class to search for
 * @returns elements
 */
function getElementsWithClassname(clas='') {
  return document.getElementsByClassName(clas)
}
/**
 * Shortened version of getElementWithClass
 * @param {*} clas - class to search for
 * @returns elements
 */
function gEWC(clas='') {
  return getElementsWithClassname(clas)
}
/**
 * Shortened version of getElementWithClass
 * @param {*} clas - class to search for
 * @returns elements
 */
function gewc(clas='') {
  return gEWC(clas)
}

/**
 * Shorthand for document.querySelector
 * @param {string} params CSS selectors
 * @returns elements
 */
function qSel(params='') {
  return document.querySelector(params)
}
/**
 * Shorthand for document.querySelectorAll
 * @param {string} params CSS selectors
 * @returns elements
 */
function qSelA(params='') {
  return document.querySelectorAll(params)
}

function linkedImage(link, title='', linebreak='') {
  var output = ` <a href="${link}"`
  if (title != '') {
    output += ` title="${title}"`
  }
  else {
    output += ``
  }
  output += `><img src="${link}"></a> `
  if (linebreak != '') {output += '<br>'}
  return output
}

function linkVideo(link='', loop=false, title='') {
  var output = ` <video preload="auto" controls src="${link}"`
  if (loop || loop == 'loop') {
    output += ' loop'
  }
  if (title != '') {
    output += ` title="${title}"`
  }
  else {
    output += ` title="${link}"`
  }
  output += '>no porn for you :(</video>'
  return output
}
function linkedVideo(link='', loop=false, title='') {
  return linkVideo(link, loop, title)
}
function addVideo(link='', loop=false, title) {
  return linkVideo(link, loop, title,)
}

function linkAdder(link='', name='') {
  let output = ''
  if (link != '' && name != '') {
    output = ` <a href="${link}">${name}</a><br>`
  }
  else if (link != '' && name === '') {
    output = ` <a href="${link}">${link}</a><br>`
  }
  return output
}
function addLink(link='', name='') {
  return linkAdder(link, name)
}
function addlink(link='', name='') {
  return linkAdder(link, name)
}

function ah2 (text='') {
  return '<h2>' + text + '</h2>'
}

function promiseLoadScript(url) {
  var script = document.createElement("script")
  script.src = url;

  document.head.appendChild(script)
  return Promise.resolve('Success')
}
function promiseLoadLink(url, type) {
  var file = document.createElement("link")
  file.href = url;
  file.rel = type

  document.head.appendChild(file)
  return Promise.resolve('Success')
}
function loadScript (script='') {
  new Promise(() => promiseLoadScript(script))
  console.log(`loaded ${script}`)
}

function selectableMiku(size='2rem') {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML += '<div class="loading"><img src="/icons/miku.svg"><img src="/icons/mikuSelected.svg"></div>'
  })
  document.addEventListener('onload', () => {
    qSelA('.loading').forEach(element => {element.remove})
  })
  return `<img src="/icons/miku.svg" style="border: none; width: ${size};" onmouseenter="this.src = '/icons/mikuSelected.svg'" onmouseleave="this.src = '/icons/miku.svg'">`
}
function selectableTeto(size='2rem') {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML += '<div class="loading"><img src="/icons/teto.svg"><img src="/icons/tetoSelected.svg"></div>'
  })
  document.addEventListener('onload', () => {
    qSelA('.loading').forEach(element => {element.remove})
  })
  return `<img src="/icons/teto.svg" style="border: none; width: ${size};" onmouseenter="this.src = '/icons/tetoSelected.svg'" onmouseleave="this.src = '/icons/teto.svg'">`
}
function selectableNeru(size='2rem') {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML += '<div class="loading"><img src="/icons/neru.svg"><img src="/icons/neruSelected.svg"></div>'
  })
  document.addEventListener('onload', () => {
    qSelA('.loading').forEach(element => {element.remove})
  })
  return `<img src="/icons/neru.svg" style="border: none; width: ${size};" onmouseenter="this.src = '/icons/neruSelected.svg'" onmouseleave="this.src = '/icons/neru.svg'">`
}
function selectableVsynth(vsynth='', size='2rem') {
  return `<img src="/icons/${vsynth}.svg" style="border: none; width: ${size};" onmouseenter="this.src = '/icons/${vsynth}Selected.svg'" onmouseleave="this.src = '/icons/${vsynth}.svg'">`
}

function playlist(tracks=[], loop=true) {
  addElement('audio', 'playlist')
  let player = gewi('playlist')
  let index = 0

  try {player.remove()}
  catch {tesLog('no existing player')}

  player.src = tracks[0]
  player.play()
  player.addEventListener('loadedmetadata', () => {
    player.play()
    tesLog(`playing ${player.src}`)
  })

  player.addEventListener('ended', () => {
    index ++
    if (index > tracks.length) {
      if (loop)
        {index = 0}
      else {
        player.remove()
      }
    }
    player.src = tracks[index]
  })

}

function addBg(html='') {
  output = '<br><div class="background">'
  if (html != '') {
    output += html
  }
  output += '</div>'
  return output
}
function background(html='', linebreak=true) {
  output = ''
  if (linebreak) {
    output += '<br>'
  }
  output += '<div class="background">'
  if (html != '') {
    output += html
  }
  output += '</div>'
  return output
}
function addHTML(html='', element='p') {
  output = `<${element}>`
  if (html != '') {
    output += html
  }
  output += `</${element}>`
  return output
}
function paragraph(html='') {
  return addHTML(html, 'p')
}
function header1(html='') {
  element = 'h1'
  output = `<${element}>`
  if (html != '') {
    output += html
  }
  output += `</${element}>`
  return output
}
function header2(html='') {
  return addHTML(html, 'h2')
}
function preserve (html='') {
  return addHTML(html, 'pre')
}
function linebreak() {
  return('<br>')
}
function chapter(descriptor='', title='', content='', linebreak=false) {
  output = ''
  if (descriptor != 'false') {
    output += header2(descriptor)
  }
  if (title != 'false') {
    output += header1(title)
  }
  if (content != 'false') {
    output += background(content, linebreak)
  }
  // output = header2(descriptor) + header1(title) + background(content, linebreak)
  return output
}


// event listeners

document.addEventListener('load', () => {
  document.body.innerHTML += '<div class="load" style="width: 100vw;height: 100vh;background-color: #000;background-size: cover;color: #fff;z-index: 5;position: fixed;top: 0;left: 0;text-align: center;padding-top: 30vh;">loading <img src="/loading.gif"></div>'
})

document.addEventListener("DOMContentLoaded", function() {
  // document.body.appendChild(script)
  document.body.innerHTML += '<div id="load" style="width: 100vw;height: 100vh;background-color: #000;background-size: cover;color: #fff;z-index: 5;position: fixed;top: 0;left: 0;text-align: center;padding-top: 30vh;">loading...<br><br><img src="/loading.gif" style="width: 2rem; border: none;"></div>'
  if (window.location.pathname.indexOf('/r34/') > -1) {
    tesLog('loading porn.js');
    try {gewi('sidebar').remove()}
    catch (Error) {tesLog('no sidebar to remove')}
    document.body.innerHTML += '<div id="sidebar"></div>'
    document.body.className = 'centerList'
    promiseLoadScript('/r34/porn.js').then(addSidebar(pornSidebar))
  }
  if (window.location.pathname.indexOf('/r34/puppysnackz') > -1) {
    document.body.innerHTML+=
    `<style>
      .left {
        position: fixed;
        top: 5px;
        left: calc(2.5rem / 2);
        height: 2rem;
        width: 2rem;
      }
      .left:hover {
        height: 3rem;
        width: 3rem;
      }
    </style>
    <div class="left"><a href="https://bsky.app/profile/puppysnackz.bsky.social"><img src="/icons/Bluesky-logo-2200578589.png" class="left" style="border: none" title="Puppysnackz on Bluesky"></a></div>
    <div id="sidebar2"></div>`

    addSidebar(pornSidebar, puppySidebar)

  }

  if (window.location.pathname.indexOf('/books/') > -1) {
    getCSS('/books/ao3.css')
  }

  if (window.location.pathname.indexOf('puppysnackz.html') > -1) {
    document.body.innerHTML += '<br><br>'
    setInterval(() => {
      qSelA('video').forEach(element => {
        element.loop = true
      })
    }, 100);
  }

  if (window.location.pathname.indexOf('/r34/ia/') > -1) {
    console.log('no fun background for you :(');
    qSel('body').style.background = 'black'
    promiseLoadScript('/r34/porn.js').then(addSidebar(pornSidebar, aiSidebar))
  }

  if (window.location.pathname.indexOf('/r34/xxx/') > -1 || window.location.href.includes('xxx')) {
    // console.log('no fun background for you :(');
    // qSel('body').style.background = 'black'
    promiseLoadScript('/r34/porn.js').then(addSidebar(pornSidebar, hardSidebar))
  }

  if (window.location.pathname.indexOf('/r34/r34') > -1) {
    document.body.className = ''
    try {gewi('sidebar').remove()}
    catch (Error) {tesLog('no sidebar to remove')}
    document.body.innerHTML = pornSidebar
  }

  if (window.location.pathname.indexOf('/writing/') > -1) {
    tesLog('loading text.js');
    promiseLoadScript('/text.js')
  }

  if (window.location.pathname.indexOf('miku') > -1) {
    document.body.style.cursor = 'url(/cursors/mikuDefault.cur),pointer'
  }

  if (window.location.href.indexOf('benheroblaw.github.io') > -1) {
    qSelA('a').forEach(element => {
      element.href = element.href.replace('.html', '')
    })
  }
  else {
    qSelA('a').forEach(element => {
      if (element.href.indexOf('.html') === -1 && element.href != 'http://localhost:8001/' && element.href != 'https://benheroblaw.github.io/') {
        element.href += '.html'
      }
    })
  }

  vol(0.1, 0.1)
  // getScript('/bullshit.js')
  qSelA('video').forEach(element => {
    element.preload = 'metadata'
  })
  setInterval(function () {
    qSelA('img').forEach(element => {
      element.draggable = false
      element.style.userSelect = 'none'
    })
    qSelA('video').forEach(element => {
      element.onkeydown = event => {
        if (event.key === 'F' || event.key === 'f') {
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            element.requestFullscreen();
          }
        }
        if (event.key === '1') {
          element.currentTime = 0.1*Number(element.duration)
          // element.play()
        }
        if (event.key === '2') {
          element.currentTime = 0.2*Number(element.duration)
          // element.play()
        }
        if (event.key === '3') {
          element.currentTime = 0.3*Number(element.duration)
          // element.play()
        }
        if (event.key === '4') {
          element.currentTime = 0.4*Number(element.duration)
          // element.play()
        }
        if (event.key === '5') {
          element.currentTime = 0.5*Number(element.duration)
          // element.play()
        }
        if (event.key === '6') {
          element.currentTime = 0.6*Number(element.duration)
          // element.play()
        }
        if (event.key === '7') {
          element.currentTime = 0.7*Number(element.duration)
          // element.play()
        }
        if (event.key === '8') {
          element.currentTime = 0.8*Number(element.duration)
          // element.play()
        }
        if (event.key === '9') {
          element.currentTime = 0.9*Number(element.duration)
          // element.play()
        }
        if (event.key === '0') {
          element.currentTime = 0
          // element.play()
        }
        if (event.key === 'ArrowRight') {
          element.currentTime = Number(element.currentTime) + 5
        }
        if (event.key === 'ArrowLeft') {
          element.currentTime -= 5
        }
      }
    })
    // tesLog('setting draggable')
  }, 500)
  // gewi('load').remove()
})

window.addEventListener('load', () => {
  // addSidebar(pornSidebar)
  // tesLog('removing load screen')
  try {gewi('load').remove()}
  catch {}

})

if (window.location.href.indexOf('http://localhost:8001') > 0) {
  console.clear()
}
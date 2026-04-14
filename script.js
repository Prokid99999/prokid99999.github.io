if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(registration) {
    console.log(tes[0] + 'Service Worker registered with scope:', registration.scope);
  }).catch(function(error) {
    console.log(tes[0] + 'Service Worker registration failed:', error);
  });
}

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

var tes = ["(o ^ o) ", "(- ^ -)"]

function setCookie(cname, cvalue, output = true, exdays = 365) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';page=/';
  if (output) {
  console.log(
    tes[0] + 'Set cookie \'' + cname + '\' with value \'' + cvalue + '\'; ' + expires
  )}
}

function setArrayCookie(name, value, daysToLive = 365) {
  // Serialize the value (array → string)
  const serializedValue = JSON.stringify(value);

  // Set expiration date
  const date = new Date();
  date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000)); // days → milliseconds
  const expires = `expires=${date.toUTCString()}`;

  // Combine all cookie attributes[0]
  const cookie = `${name}=${encodeURIComponent(serializedValue)}; ${expires}; path=/; SameSite=Strict`;

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
  const cookies = document.cookie.split(";");

  // Loop through cookies to find the one with the matching name
  for (let cookie of cookies) {
    // Trim whites[0]pace and split into name/value
    const [cookieName, cookieValue] = cookie.trim().split("=");

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

function checkCookie(cname) {
  let anti = getCookie(cname)
  if (anti != '') {
    console.log(
      tes[0] + 'Found cookie \'' + cname + '\' with value \'' + getCookie(cname) + '\''
    )
    return 'success!'
  } else {
    errorMessage(tes[0] + 'Couldn\'t find cookie ' + cname)
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
    errorMessage(tes[0] + 'Couldn\'t find cookie \'' + cname + '\'')
    return 'error'
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

function start(content = ['wtf'], doCookies = true, doX = false, doY = true) {
  const page = window.location.pathname + ' - '
  const showSlide = n => {
    document.getElementById('story').innerHTML = content[n]
  }

  let index = Number(getCookie(page + 'index'))
  if (index + 1 > content.length) {
    setCookie(page + 'index', 0);
    index = 0
  }
  if (index + 1 === content.length) {
    document.getElementById('prev').style.display = 'inline'
    document.getElementById('prev1').style.display = 'inline'
    document.getElementById('next').style.display = 'none'
    document.getElementById('next1').style.display = 'none'
  }
  else {
    document.getElementById('prev').style.display = 'inline'
    document.getElementById('prev1').style.display = 'inline'
    document.getElementById('next').style.display = 'inline'
    document.getElementById('next1').style.display = 'inline'
  }
  if (index === 0) {
    document.getElementById('prev').style.display = 'none'
    document.getElementById('prev1').style.display = 'none'
    document.getElementById('next').style.display = 'inline'
    document.getElementById('next1').style.display = 'inline'
    if (content.length <= 1) {
      document.getElementById('prev').style.display = 'none'
      document.getElementById('prev1').style.display = 'none'
      document.getElementById('next').style.display = 'none'
      document.getElementById('next1').style.display = 'none'
    }
  }
  if (doCookies == true) {
    if (doX === true && checkCookie(page + 'scrollx') === 'error') {
      setCookie(page + 'scrollx', 0)
    }
    if (doY === true && checkCookie(page + 'scrolly') === 'error') {
      setCookie(page + 'scrolly', 0)
    }
    if (checkCookie(page + 'index') === 'error') {
      setCookie(page + 'index', 0)
      index = 0
    }
    if (index === 'NaN') {
      setCookie(page + 'index', 0)
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
  function next() {
      index = (index + 1) % content.length
      if (index + 1 >= content.length) {
        document.getElementById('next').style.display = 'none'
        document.getElementById('next1').style.display = 'none'
        document.getElementById('prev').style.display = 'inline'
        document.getElementById('prev1').style.display = 'inline'
      }
      else {
        document.getElementById('next').style.display = 'inline'
        document.getElementById('next1').style.display = 'inline'
        document.getElementById('prev').style.display = 'inline'
        document.getElementById('prev1').style.display = 'inline'
      }
      window.scrollTo(0, 0)
      showSlide(index)
      if (doCookies == true) {
        setCookie(page + 'index', index)
      }
      char()
    }
  function prev() {
      index = (index + content.length - 1) % content.length
      if (index === 0) {
        document.getElementById('prev').style.display = 'none'
        document.getElementById('prev1').style.display = 'none'
        document.getElementById('next').style.display = 'inline'
        document.getElementById('next1').style.display = 'inline'
      }
      else {
        document.getElementById('prev').style.display = 'inline'
        document.getElementById('prev1').style.display = 'inline'
        document.getElementById('next').style.display = 'inline-block'
        document.getElementById('next1').style.display = 'inline-block'
      }
      window.scrollTo(0, 0)
      showSlide(index)
      if (doCookies == true) {
        setCookie(page + 'index', index)
      }
      char()
  }
  document.getElementById('next').addEventListener(
    'click',
    () => {
      next()
    }
  )
  document.getElementById('next1').addEventListener(
    'click',
    () => {
      next()
    }
  )
  document.getElementById('prev').addEventListener(
    'click',
    () => {
      prev()
    }
  )
  document.getElementById('prev1').addEventListener(
    'click',
    () => {
      prev()
    }
  )
  function char() {
    try {
    document.getElementById('char').addEventListener('dblclick', () => {
      word_count()
    })
    }
    catch (TypeError) {
      colorTrace(program[4] + 'no char element', 'red')
    }
  }
  char()
  if (doCookies == true) {
    window.addEventListener(
      'scrollend',
      function () {
        if (doX === true) {
          setCookie(page + 'scrollx', window.scrollX)
        }
        if (doY === true) {
          setCookie(page + 'scrolly', window.scrollY)
        }
      }
    )
  }
}

let startNumber = 0


function startStory(content=['wtf'], doCookies=true, doX=false, doY=true, doOutput=true, format=true) {
  var s = document.createElement('script');
  s.id = 'text'
  if (startNumber === 0) {
    s.src = '/text.js';
    document.body.appendChild(s);
    startNumber++
    document.getElementById('text').remove()
    startStory(content, doCookies, doX, doY, doOutput, format)
  }
  else if (startNumber === 1) {
    s.src = 'https://prokid99999.github.io/text.js';
    document.body.appendChild(s);
    startNumber++
    document.getElementById('text').remove()
    startStory(content, doCookies, doX, doY, doOutput, format)
  }
  else if (startNumber === 2) {
    s.src = 'http://localhost:2009/text.js';
    document.body.appendChild(s);
    startNumber++
    document.getElementById('text').remove()
    startStory(content, doCookies, doX, doY, doOutput, format)
  }
  else if (startNumber === 3) {
    startNumber = 0
    if (format) {
    document.body.innerHTML = '\
        <br>\
        <div class="space">\
            <div><button id="prev">&lt; Previous</button></div>\
            <div id="center" style="text-align: center;"></div>\
            <div style="text-align: right;"><button id="next">Next &gt;</button></div>\
        </div>\
            <div id="story"><br>\
                <span style="color: white;">this shit isn\'t fucking working :&lpar;</span>\
            </div><br>\
        <div class="space">\
            <div><button id="prev1">&lt; Previous</button></div>\
            <div id="center1" style="text-align: center;"></div>\
            <div style="text-align: right;"><button id="next1">Next &gt;</button></div>\
        </div><br></br>'}
    start(content, doCookies, doX, doY, doOutput)
  }
}


function getCommit(owner, repo) {
  fetch(
    'https://api.github.com/repos/' + owner + '/' + repo + '/commits?per_page=1',
    // headers: {Authorization: "Bearer github_pat_none-lololololol"}
  ).then(res => res.json()).then(
    res => {
      document.getElementById('message').className = 'message'
      document.getElementById('message').innerHTML = res[0].commit.message
      if (res[0].commit.author.name = 'benheroblaw') {
        document.getElementById('committer').className = 'benheroblaw'
      }
      else if (res[0].commit.author.name === 'Prokid99999') {
        document.getElementById('committer').className = 'prokid'
      }
      else {
        document.getElementById('committer').className = 'other'
      }
      document.getElementById('committer').innerText = res[0].commit.committer.name
    }
  )
}

function getCommitNumbers(owner, repo) {
  fetch(
    'https://api.github.com/repos/' + owner + '/' + repo + '/commits?per_page=1',
    {
      Authorization: atob('')
    }
  ).then(res => res.json()).then(
    res => {
      document.getElementById('message').innerHTML = res[0].commit.message
    }
  )
}

const delay = ms => new Promise(res => setTimeout(res, ms));

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
  console.log(tes[0] + count + ' words, ' + char + ' characters');
}

function wordcount(paras = 'background') {
  let area = document.getElementById(paras);
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

function stripHtml(html)
{
  let tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent ||
  tmp.innerText ||
  '';
}

function vol(video_volume = 0.1, audio_volume = 0.75) {
  const video = document.querySelectorAll('video');
  video.forEach(element => element.volume = video_volume

  )
  video.forEach(element => element.addEventListener('pause', () => setCookie(element + 'time', element.currentTime)))
  const audio = document.querySelectorAll('audio');
  audio.forEach(element => element.volume = audio_volume)
}

function colorTrace(msg, color='red') {
    console.log("%c" + msg, "color:" + color + "; font-weight:bolder;");
}

function errorMessage(msg) {
  colorTrace(msg, 'red')
}

function random(list) {
  return list[Math.floor(Math.random() * list.length)]
}
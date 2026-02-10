function setCookie(cname, cvalue, exdays = 365) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';page=/';
  console.log(
    'Set cookie \'' + cname + '\' with value \'' + cvalue + '\'; ' + expires
  )
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
function checkCookie(cname) {
  let anti = getCookie(cname)
  if (anti != '') {
    console.log(
      'Found cookie \'' + cname + '\' with value \'' + getCookie(cname) + '\''
    )
    return 'success!'
  } else {
    console.log('Couldn\'t find cookie ' + cname)
    return 'error'
  }
} // function fetchJSONData(jsonFile="./test.json") {
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
function startStory(content = [
  'wtf'
], doCookies = true, doX = false, doY = true) {
  var page = window.location.pathname + ' - '
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
  if (index === 0) {
    document.getElementById('prev').style.display = 'none'
    document.getElementById('prev1').style.display = 'none'
    document.getElementById('next').style.display = 'inline'
    document.getElementById('next1').style.display = 'inline'
    if (content.length <= 1) {
      document.getElementById('next').style.display = 'none'
      document.getElementById('next1').style.display = 'none'
      document.getElementById('prev').style.display = 'none'
      document.getElementById('prev1').style.display = 'none'
    }
  }
  const showSlide = n => {
    document.getElementById('story').innerHTML = content[n]
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
  document.getElementById('next').addEventListener(
    'click',
    () => {
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
      document.getElementById('char').addEventListener('dblclick', () => {
        word_count()
      })
    }
  )
  document.getElementById('next1').addEventListener(
    'click',
    () => {
      index = (index + 1) % content.length
      if (index + 1 >= content.length) {
        document.getElementById('next').style.display = 'none'
        document.getElementById('next1').style.display = 'none'
        document.getElementById('prev').style.display = 'inline'
        document.getElementById('prev1').style.display = 'inline'
      }
      window.scrollTo(0, 0)
      showSlide(index)
      if (doCookies == true) {
        setCookie(page + 'index', index)
      }
      document.getElementById('char').addEventListener('dblclick', () => {
        word_count()
      })
    }
  )
  document.getElementById('prev').addEventListener(
    'click',
    () => {
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
      document.getElementById('char').addEventListener('dblclick', () => {
        word_count()
      })
    }
  )
  document.getElementById('prev1').addEventListener(
    'click',
    () => {
      index = (index + content.length - 1) % content.length
      window.scrollTo(0, 0)
      showSlide(index)
      if (doCookies == true) {
        setCookie(page + 'index', index)
      }
      document.getElementById('char').addEventListener('dblclick', () => {
        word_count()
      })
    }
  )
  document.getElementById('char').addEventListener('dblclick', () => {
    word_count()
  })
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
  console.log(count + ' words, ' + char + ' characters');
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

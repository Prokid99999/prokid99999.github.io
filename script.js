function setCookie(cname, cvalue, exdays=365*2) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";page=/";
  console.log("Set cookie '" + cname + "' with value '" + cvalue + "'; " + expires)
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie(cname) {
  let anti = getCookie(cname)
  if (anti != "") {
    console.log("Found cookie '" + cname + "' with value '" + getCookie(cname) + "'")
    return "success!"
  } else {
    console.log("Couldn't find cookie " + cname)
    return "error"
  }
}

// function fetchJSONData(jsonFile="./test.json") {
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

function start(content=[], doCookies=true) {

    var page = window.location.pathname + " - "
    if (doCookies=true) {
      if (checkCookie(page + "scrollx") == "error"){
        setCookie(page + "scrollx", 0)
        }
      if (checkCookie(page + "scrolly") == "error"){
        setCookie(page + "scrolly", 0)}
      if (checkCookie(page + "index") == "error"){
        setCookie(page + "index", 0)
        }
      var pageX = getCookie(page + "scrollx")
      var pageY = getCookie(page + "scrolly")
      window.scrollTo(pageX,pageY)
      }
    document.getElementById('story').innerHTML = content[0]

    let index = Number(getCookie(page + "index"))

    const showSlide = n => {
        document.getElementById('story').innerHTML = content[n]
    }
    showSlide(index)

    document.getElementById('next').addEventListener('click', () => {
        index = (index + 1) % content.length
        window.scrollTo(0,0)
        showSlide(index)
        if (doCookies=true) {
        setCookie(page + "index", index)}
    })

    document.getElementById('prev').addEventListener('click', () => {
        index = (index +  content.length - 1) % content.length
        window.scrollTo(0,0)
        showSlide(index)
        if (doCookies=true) {
        setCookie(page + "index", index)}
    })

    document.getElementById('next1').addEventListener('click', () => {
        index = (index + 1) % content.length
        window.scrollTo(0,0)
        showSlide(index)
        if (doCookies=true) {
        setCookie(page + "index", index)}
    })

    document.getElementById('prev1').addEventListener('click', () => {
        index = (index + content.length - 1) % content.length
        window.scrollTo(0,0)
        showSlide(index)
        if (doCookies=true) {
        setCookie(page + "index", index)}
    })

    if (doCookies=true) {
    document.getElementById('scroll').addEventListener('scroll', function() {
      setCookie(page + "scrollx", window.scrollX)
      setCookie(page + "scrolly", window.scrollY)
    })}
}

function getCommit(owner, repo) {
  fetch('https://api.github.com/repos/'+owner+'/'+repo+'/commits?per_page=1',
    {Authorization:atob("")})
  .then(res => res.json())
  .then(res => {
    document.getElementById('message').innerHTML = res[0].commit.message
  })
}
function getCommitNumbers(owner, repo) {
  fetch('https://api.github.com/repos/'+owner+'/'+repo+'/commits?per_page=1',
    {Authorization:atob("")})
  .then(res => res.json())
  .then(res => {
    document.getElementById('message').innerHTML = res[0].commit.message
  })
}

const delay = ms => new Promise(res => setTimeout(res, ms));
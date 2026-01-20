function setCookie(cname, cvalue, exdays=365) {
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
    console.log("Success! Found cookie '" + cname + "' with value '" + getCookie(cname) + "'")
    return "success!"
  } else {
    console.log("Couldn't find cookie " + cname)
    return "error"
  }
}

function start(content=[]) {

    var page = window.location.pathname + " - "
    if (checkCookie(page + "scrollx") == "error"){
      setCookie(page + "scrollx", 0)
    }
    if (checkCookie(page + "scrolly") == "error"){
      setCookie(page + "scrolly", 0)
    }
    var pageX = getCookie(page + "scrollx")
    var pageY = getCookie(page + "scrolly")
    window.scrollTo(pageX,pageY)
    const slides = content
    document.getElementById('story').innerHTML = slides[0]
    if (checkCookie(page + "index") == "error"){
      setCookie(page + "index", 0)
    }

    let index = getCookie(page + "index")

    const showSlide = n => {
        document.getElementById('story').innerHTML = slides[n]
    }
    showSlide(index)

    document.getElementById('next').addEventListener('click', () => {
        index = (index + 1) % slides.length
        window.scrollTo(0,0)
        showSlide(index)
        setCookie(page + "index", index)
    })

    document.getElementById('prev').addEventListener('click', () => {
        index = (index +  slides.length - 1) % slides.length
        window.scrollTo(0,0)
        showSlide(index)
        setCookie(page + "index", index)
    })

    document.getElementById('next1').addEventListener('click', () => {
        index = (index + 1) % slides.length
        window.scrollTo(0,0)
        showSlide(index)
        setCookie(page + "index", index)
    })

    document.getElementById('prev1').addEventListener('click', () => {
        index = (index +  slides.length - 1) % slides.length
        window.scrollTo(0,0)
        showSlide(index)
        setCookie(page + "index", index)
    })

    document.getElementById('scroll').addEventListener('scroll', function() {
      setCookie(page + "scrollx", window.scrollX)
      setCookie(page + "scrolly", window.scrollY)
    })
}

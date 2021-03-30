!(function (doc, win) {
  var docHtml = doc.documentElement
  var resizeEvt = "onorientationchange" in window ? "onorientationchange" : "resize"
  var recalc = function () {
    var clientWidth = docHtml.clientWidth
    if (!clientWidth) return
    docHtml.style.fontSize = 100 * (clientWidth / 750) + "px"
  }
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener("DOMContentLoaded", recalc, false)
})(document, window)
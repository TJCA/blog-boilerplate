'use strict'

function Wrapper(container, style, children) {
  this.container = container
  this.style = style || {}
  this.children = children
}
Wrapper.prototype.resize = function() {
  var windowHeight = $(document).height(), windowWidth = $(document).width()
  this.style.top =  windowHeight / 4
  this.style.left = windowWidth / 3 - 32
  this.style.width = windowWidth / 3
  this.style.height = windowHeight / 2

  this.container.css(this.style)
}
Wrapper.prototype.init = function () {
  this.resize()
  this.container.fadeIn(1000)
}

$(document).ready(function() {
  var wrapper = new Wrapper($("#wrapper"))
  $(window).resize(function() {
    wrapper.resize()
  })
  wrapper.init()
});

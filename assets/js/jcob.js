"use strict";

var a = document.getElementById('goto-2');
var b = document.getElementById('goto-1');
a.addEventListener('click', function () {
  Jump('#target-2');
});
b.addEventListener('click', function () {
  Jump('#target-1');
});
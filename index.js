(function(){

  'use strict';

  var values = [
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000)
  ];

  var bars = document.querySelectorAll('.js-bar'),
      i, len, max, percentage;

  max = Math.max.apply(Math, values);

  for (i = 0, len = bars.length; i < len; ++i) {
    bars[i].setAttribute('data-value', values[i]);
    bars[i].style.width = (values[i] / max * 100) + '%';
  }

}());

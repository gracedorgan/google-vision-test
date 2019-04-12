/* eslint-disable no-unused-vars */
import $ from 'jquery';

import './style.scss';

const mainel = document.getElementById('main');
let seconds = 0;
function incrementSeconds() {
  seconds += 1;
  mainel.innerText = `You have been here for ${seconds} seconds.`;
}
setInterval(incrementSeconds, 1000);

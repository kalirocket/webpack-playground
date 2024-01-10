import generateJoke from './generateJoke.js';
import './styles/main.scss'
import laughing from './assets/laughing_emoji.png';

const laughing_img = document.querySelector('#laughing_img');
laughing_img.src = laughing;
console.log(generateJoke());
import generateJoke from './generateJoke.js';
import './styles/main.scss'
import laughing from './assets/laughing_emoji.png';

const laughing_img = document.querySelector('#laughing_img');
laughing_img.src = laughing;

const jokeBtn = document.querySelector('#jokeBtn');
jokeBtn.onclick = function (){
    generateJoke();
}
generateJoke();
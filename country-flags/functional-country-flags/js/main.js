import flags from './model/flags.js';

const main = document.querySelector('main.row');

let flags_mapped = flags.map((country) => 
    `<div class="flag col-2 my-2 text-center">
       <img src="https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${country.id}.svg" alt="${country.name}">
       <p>${country.name}</p>
    </div>`).join('');

main.insertAdjacentHTML('beforeend', flags_mapped);

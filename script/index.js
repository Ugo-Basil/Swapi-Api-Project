const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const cards = document.querySelector('#cards');
//Listen for click
openBtn.addEventListener('click', openCards);
closeBtn.addEventListener('click', closeCards);

function openCards() {
    cards.style.display = 'flex' 
}

function closeCards() {
    cards.style.display = 'none'; 
} 

async function asyncFetch() {
    const res = await fetch('https://swapi.dev/api/people/');
    const data = await res.json();
    let output = '';
    data.results.map((value) => {
        output += `<div class="card"> 
                 <h1 class="title">${value.name}</h1>
                 <img src="https://images.pexels.com/photos/9482193/pexels-photo-9482193.jpeg?auto=compress&cs=tinysrgb&w=640&h=750&dpr=1" alt="img" class="images">
                 <p class="gender">Gender: ${value.gender}</p>
                 <p class="height">Height: ${value.height}</p>
             </div>`
    })
    document.getElementById('cards').innerHTML = output

}
asyncFetch()



const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f5f7fa;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    transition: background-color 0.5s ease;
  }
  #card {
    background: linear-gradient(145deg, #ffffff, #e6e9f0);
    border-radius: 20px;
    box-shadow: 6px 6px 15px #bec8d2, -6px -6px 15px #ffffff;
    width: 320px;
    padding: 30px 25px 40px;
    text-align: center;
    color: #333;
    transition: background 0.5s ease;
        margin-left: -81px;
  }
  .hp {
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin-bottom: 15px;
    color: #555;
  }
  .hp span {
    background: #ff5959;
    color: white;
    padding: 4px 10px;
    border-radius: 12px;
    font-weight: 600;
    margin-right: 8px;
    font-size: 0.9rem;
  }
  .poke-name {
    font-weight: 800;
    font-size: 2.5rem;
    margin: 15px 0 10px;
    text-transform: capitalize;
    color: #222;
  }
  #card img {
    width: 140px;
    height: 140px;
    object-fit: contain;
    margin-bottom: 15px;
  }
  .types {
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .types span {
    padding: 8px 20px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.95rem;
    color: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    text-transform: capitalize;
  }
  .stats {
    display: flex;
    justify-content: space-around;
    gap: 25px;
  }
  .stats div {
    background: #fafbfc;
    border-radius: 15px;
    box-shadow: inset 3px 3px 7px #d6d9e6, inset -3px -3px 7px #ffffff;
    // padding: 18px 20px;
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .stats div h3 {
    font-size: 1.8rem;
    margin: 0 0 5px;
    color: #444;
  }
  .stats div p {
    font-weight: 600;
    font-size: 0.95rem;
    margin: 0;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }
  .search-container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  #Input {
    padding: 12px 20px;
    border-radius: 30px;
    border: 2px solid #ccc;
    font-size: 1.1rem;
    width: 280px;
    transition: border-color 0.3s ease;
    outline-offset: 2px;
  }
  #Input:focus {
    border-color: #0190FF;
    outline: none;
  }
  #btn {
    padding: 12px 28px;
    font-size: 1.1rem;
    border: none;
    border-radius: 30px;
    color: white;
        border-style: inset;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
`;
document.head.appendChild(style);
// Create HTML structure via JS
const card = document.createElement('div');
card.id = 'card';
document.body.appendChild(card);
const searchContainer = document.createElement('div');
searchContainer.className = 'search-container';
const input = document.createElement('input');
input.id = 'Input';
input.type = 'text';
input.placeholder = 'Enter Pokémon name or ID';
const button = document.createElement('button');
button.id = 'btn';
button.textContent = 'Search';
searchContainer.appendChild(input);
searchContainer.appendChild(button);
document.body.appendChild(searchContainer);
// JS Logic
const typecolor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};
const url = "https://pokeapi.co/api/v2/pokemon/";
const defaultPokemon = "pikachu";
function getPokeData(pokeName = "") {
  const id = pokeName || input.value.trim().toLowerCase();
  if (!id) {
    alert("Please enter a Pokémon name or ID!");
    return;
  }
  fetch(url + id)
    .then(res => {
      if (!res.ok) throw new Error("Pokémon not found");
      return res.json();
    })
    .then(data => generateCard(data))
    .catch(err => {
      alert(err.message);
      card.innerHTML = `<p style="font-weight:bold;color:#900;">Pokémon not found. Please try again.</p>`;
      document.body.style.backgroundColor = "#f5f7fa";
      card.style.background = "linear-gradient(145deg, #ffffff, #e6e9f0)";
      button.style.backgroundColor = "#0190FF";
      button.style.boxShadow = `0 6px 12px #0190FF80`;
    });
}
function generateCard(data) {
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default || data.sprites.front_default;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;
  const themeColor = typecolor[data.types[0].type.name] || "#777";
  card.innerHTML = `
<p class="hp">
<span>HP</span> ${hp}
</p>
<img src="${imgSrc}" alt="${pokeName}" />
<h2 class="poke-name">${pokeName}</h2>
<div class="types"></div>
<div class="stats">
<div>
<h3>${statAttack}</h3>
<p>Attack</p>
</div>
<div>
<h3>${statDefense}</h3>
<p>Defense</p>
</div>
<div>
<h3>${statSpeed}</h3>
<p>Speed</p>
</div>
</div>
  `;
  appendTypes(data.types);
  styleCard(themeColor);
  document.body.style.backgroundColor = themeColor;
}
function appendTypes(types) {
  const typesContainer = document.querySelector(".types");
  typesContainer.innerHTML = "";
  types.forEach(item => {
    let span = document.createElement("span");
    span.textContent = item.type.name;
    span.style.backgroundColor = typecolor[item.type.name] || "#777";
    typesContainer.appendChild(span);
  });
}

function styleCard(color) {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  button.style.backgroundColor = color;
  button.style.boxShadow = `0 6px 12px ${color}80`;
}
button.addEventListener("click", () => {
  getPokeData();
  input.value = "";
});
const getSuggestions = (query) => {
    if (!query) return;
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then(res => res.json())
      .then(data => {
        const suggestions = data.results
          .map(p => p.name)
          .filter(name => name.startsWith(query.toLowerCase()));
        console.log("Suggestions:", suggestions);
        // You can display these in a dropdown or console
      });
   };
   Input.addEventListener("keyup", event => {

    const query = Input.value.trim().toLowerCase();
  
    if (event.key === "Enter") {
  
      getPokeData();
  
      Input.value = "";
  
    } else {
  
      getSuggestions(query); // show suggestions on typing
  
    }
  
  });
   
window.addEventListener("load", () => {
  input.value = defaultPokemon;
  getPokeData(defaultPokemon);
});
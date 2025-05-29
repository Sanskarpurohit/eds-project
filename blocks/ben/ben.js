console.log("Ben 10 Alien Card Generator");

// Inject styles
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f5f7fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }
  #card {
    background: linear-gradient(145deg, #ffffff, #e6e9f0);
    border-radius: 20px;
    box-shadow: 6px 6px 15px #bec8d2, -6px -6px 15px #ffffff;
    width: 320px;
    padding: 30px 25px 40px;
    text-align: center;
    color: #333;
  }
  .alien-name {
    font-weight: 800;
    font-size: 2.5rem;
    margin: 15px 0 10px;
    text-transform: capitalize;
  }
  #card img {
    width: 140px;
    height: 140px;
    object-fit: contain;
    margin-bottom: 15px;
  }
  .species {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: #555;
  }
  .abilities {
    margin: 10px 0;
    font-size: 0.95rem;
    color: #444;
  }
  .search-container {
    margin-top: 30px;
    display: flex;
    gap: 10px;
  }
  #alienInput {
    padding: 10px;
    border-radius: 20px;
    border: 2px solid #ccc;
    font-size: 1rem;
  }
  #searchBtn {
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    background-color: #0190FF;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
document.head.appendChild(style);

// Create card and search UI
const card = document.createElement('div');
card.id = 'card';
document.body.appendChild(card);

const searchContainer = document.createElement('div');
searchContainer.className = 'search-container';

const input = document.createElement('input');
input.id = 'alienInput';
input.type = 'text';
input.placeholder = 'Enter alien name';

const button = document.createElement('button');
button.id = 'searchBtn';
button.textContent = 'Search';

searchContainer.appendChild(input);
searchContainer.appendChild(button);
document.body.appendChild(searchContainer);

// Fetch and display alien data
async function getAlienData(name) {
  try {
    const res = await fetch(`https://ben10api.vercel.app/api/alien/${name.toLowerCase()}`);
    if (!res.ok) throw new Error("Alien not found");
    const alien = await res.json();
    generateCard(alien);
  } catch (err) {
    card.innerHTML = `<p style="color:red;">${err.message}. Try names like Heatblast, Fourarms, XLR8...</p>`;
  }
}

function generateCard(alien) {
  card.innerHTML = `
    <img src="${alien.image}" alt="${alien.name}" />
    <h2 class="alien-name">${alien.name}</h2>
    <p class="species"><strong>Species:</strong> ${alien.species}</p>
    <p class="abilities"><strong>Abilities:</strong> ${alien.abilities.join(', ')}</p>
  `;
}

// Event listeners
button.addEventListener("click", () => {
  const name = input.value.trim();
  if (name) getAlienData(name);
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const name = input.value.trim();
    if (name) getAlienData(name);
  }
});

// Load default alien
window.addEventListener("load", () => {
  getAlienData("heatblast");
});
    
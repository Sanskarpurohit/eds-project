const containerDiv = document.querySelector('.searchbar > div');
const inputDiv = containerDiv.children[0];
const buttonDiv = containerDiv.children[1];
buttonDiv.classList.add('search-btn-container');
buttonDiv.querySelector("h3").classList.add("searchbox");
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Search blog post...';
input.classList.add('search-input');
input.style.display = 'none'; // hidden initially
inputDiv.appendChild(input);
const searchBtn = document.getElementById('search');
let dataIndex = null; // cache of query-index.json
// Toggle input visibility when icon clicked
searchBtn.addEventListener('click', async (e) => {
 e.preventDefault();
 if (input.style.display === 'none') {
   input.style.display = 'inline-block';
   input.focus();
 } else {
   const query = input.value.trim().toLowerCase();
   if (!query) {
     console.log('Please enter a search term.');
     return;
   }
   await performSearch(query);
 }
});
// Also search on pressing Enter inside input
input.addEventListener('keydown', async (e) => {
 if (e.key === 'Enter') {
   const query = input.value.trim().toLowerCase();
   if (!query) {
     console.log('Please enter a search term.');
     return;
   }
   await performSearch(query);
 }
});
// Fetch index data once
async function fetchData() {
 if (!dataIndex) {
   try {
     const res = await fetch('/query-index.json');
     dataIndex = await res.json();
   } catch (err) {
     console.error('Failed to fetch index', err);
     dataIndex = { data: [] };
   }
 }
 return dataIndex.data;
}
async function performSearch(query) {
 const allData = await fetchData();
 // Filter with title or tags, supporting tags array or string
 const matches = allData.filter(item => {
   const titleMatch = item.title && item.title.toLowerCase().includes(query);
   const tagsMatch = item.tags && (
     Array.isArray(item.tags)
       ? item.tags.some(tag => tag.toLowerCase().includes(query))
       : item.tags.toLowerCase().includes(query)
   );
   return titleMatch || tagsMatch;
 });
 if (matches.length === 0) {
   console.log('No matching blog post found.');
   return;
 }
 // For demo: log all matches in console
 console.log('Search results:', matches);
 // Redirect if exact title match found (case insensitive)
 const exactMatch = matches.find(item => item.title.toLowerCase() === query);
 if (exactMatch) {
   window.location.href = exactMatch.path;
 }
}
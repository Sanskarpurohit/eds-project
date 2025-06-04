document.querySelectorAll('.searchbar').forEach(searchbar => {

  const containerDiv = searchbar.querySelector(':scope > div');

  const inputDiv = containerDiv.children[0];

  const buttonDiv = containerDiv.children[1];

  buttonDiv.classList.add('search-btn-container');

  const icon = buttonDiv.querySelector('#search') || buttonDiv.querySelector('h3');

  if (icon) icon.classList.add('searchbox');

  const input = document.createElement('input');

  input.type = 'text';

  input.placeholder = 'Search blog post...';

  input.classList.add('search-input');

  input.style.display = 'none'; // hidden initially

  inputDiv.appendChild(input);

  let dataIndex = null; // cache for query-index.json

  const fetchData = async () => {

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

  };

  const performSearch = async (query) => {

    const allData = await fetchData();

    const matches = allData.filter(item => {

      const titleMatch = item.title?.toLowerCase().includes(query);

      const tagsMatch = typeof item.tags === 'string'

        ? item.tags.toLowerCase().includes(query)

        : Array.isArray(item.tags) && item.tags.some(tag => tag.toLowerCase().includes(query));

      return titleMatch || tagsMatch;

    });

    if (matches.length === 0) {

      console.log('No matching blog post found.');

    } else {

      console.log('Matches:', matches);

      window.location.href = matches[0].path;

    }

  };

  const toggleOrSearch = async () => {

    if (input.style.display === 'none') {

      input.style.display = 'inline-block';

      input.focus();

    } else {

      const query = input.value.trim().toLowerCase();

      if (query) await performSearch(query);

    }

  };

  if (icon) {

    icon.addEventListener('click', e => {

      e.preventDefault();

      toggleOrSearch();

    });

  }

  input.addEventListener('keydown', async (e) => {

    if (e.key === 'Enter') {

      const query = input.value.trim().toLowerCase();

      if (query) await performSearch(query);

    }

  });

});
 
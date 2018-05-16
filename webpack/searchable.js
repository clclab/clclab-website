import jquery from 'jquery';
import SearchApi from 'js-worker-search';


function setupSearchApi(className) {
  const searchables = document.querySelectorAll('.' + className + '[data-searchable]');
  if(searchables.length == 0) return false;
  
  const searchApi = new SearchApi();
  searchables.forEach((item) => {
    searchApi.indexDocument(item.id, item.innerText)
  })
  return searchApi;
}

function filterItems(ids, className) {
  jquery('.' + className).addClass('hidden');
  if(ids.length > 0) {
    jquery('#' + ids.join(', #')).removeClass('hidden');  
  }
}

export default function setupSearchables() {
  const inputs = document.querySelectorAll('[data-searchable-input-for]')
  inputs.forEach((input) => {
    const className = input.dataset.searchableInputFor;
    const searchApi = setupSearchApi(className);

    jquery(input).bind('propertychange change click keyup input paste', (event) => {
      const query = event.target.value;

      if( query.length == 0) {
        jquery('.' + className).removeClass('hidden');
      } else {
        searchApi.search(query).then(ids => { 
          filterItems(ids, className) 
        });  
      }
    });
  });
}
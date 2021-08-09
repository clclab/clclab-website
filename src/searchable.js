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

function filterItems(ids, className, noResultsMessage) {
  jquery('.' + className).addClass('hidden');
  if(ids.length > 0) {
    jquery('#' + ids.join(', #')).removeClass('hidden');  

    if(noResultsMessage) {
      noResultsMessage.addClass('d-none');
    }
  } else if(noResultsMessage) {
    noResultsMessage.removeClass('d-none');
  }
}

export default function setupSearchables() {
  const inputs = document.querySelectorAll('[data-searchable-input-for]')
  inputs.forEach((input) => {
    const className = input.dataset.searchableInputFor;
    const searchApi = setupSearchApi(className);

    // The element whon no publications match the query
    const noResultsMessage = ('noResultsMessage' in input.dataset) 
      ? jquery(input.dataset.noResultsMessage) 
      : undefined;

    // Update the filter whenever the input field changes
    jquery(input).bind('propertychange change click keyup input paste', (event) => {
      const query = event.target.value;

      if( query.length == 0) {
        jquery('.' + className).removeClass('hidden');
      } else {
        searchApi.search(query).then(ids => { 
          filterItems(ids, className, noResultsMessage) 
        });  
      }
    });
  });
}
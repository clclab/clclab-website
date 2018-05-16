import * as tinysort from 'tinysort';
import * as _ from 'lodash';

export default function setupSortables() {

  // Find all sort handles
  const sortHandles = document.querySelectorAll('[data-sort]')
  
  sortHandles.forEach((handle) => {
    handle.onclick = (event) => {
      const handle = event.target;
      if( 'sortSelector' in handle.dataset && 'sort' in handle.dataset) {
        
        // The fields to sort
        const fields = handle.dataset.sort.split(',');
        
        // Find the sort order for each field
        let orders;
        if('sortOrder' in handle.dataset) {
          const ordersList = handle.dataset.sortOrder.split(',');
          orders = (ordersList.length == fields.length)
            ? ordersList
            : Array(fields.length).fill(handle.dataset.sortOrder);
        } else {
           orders = Array(fields.length).fill('asc');
        }

        // Build the options
        const options = fields.map((field, index) => ({
          'data': field,
          'order': orders[index]
        }));

        // Sort!
        tinysort(handle.dataset.sortSelector, ...options);

        // Fix icon
        const icon = handle.querySelectorAll('.oi')[0]
        // TODO: fails when there is no icon
        if(icon.classList.contains('hidden')) {
          document.querySelectorAll('[data-sort] .oi').forEach((icon) => {
            icon.classList.add('hidden');
          })
        }

        icon.classList.remove('hidden');
        icon.classList.remove('oi-chevron-top', 'oi-chevron-bottom');
        const iconClass = orders[0] == 'desc' ? 'oi-chevron-top' : 'oi-chevron-bottom'
        icon.classList.add(iconClass);
        
        // Reverse the order
        orders[0] = orders[0] == 'asc' ? 'desc' : 'asc';
        handle.dataset.sortOrder = orders.join(',');  

      } else {
        console.warn('Sort handles need to have a sort-selector and sort data attribute')
      }
    }
  })
}
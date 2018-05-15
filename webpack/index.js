import 'bootstrap';
import './styles.scss';

import * as jquery from 'jquery';
import * as List from 'list.js';

let makePublicationsSortable = () => {
  let pubContainer = jquery('#publications');
  

  pubContainer.find('.b')
  if(pubContainer.length == 0) {
    return false;
  }

  // let entries = pubContainer.find('.bib-entry')
  let options = {
    listClass: 'bibliography',
    item: 'bib-entry',
    valueNames: [
      { name: 'year', attr: 'data-year' },
    ]
    // { name: 'timestamp', attr: 'data-timestamp' },
    // { name: 'link', attr: 'href' },
    // { name: 'image', attr: 'src' }
  }
  const list = new List('publications', options)
  window.list = list
  console.log(list)
  // console.log(jquery'asdfasdfasdf', jquery, List)

  // list.sort('year', {order:'asc'})
}

jquery(document).ready(() => {
  makePublicationsSortable()
})
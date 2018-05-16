import 'bootstrap';
import './styles.scss';
import jquery from 'jquery';
import setupSortables from './sortable.js';
import setupSearchables from './searchable.js';

jquery(window).ready(() => {
  setupSortables();
  setupSearchables();
});

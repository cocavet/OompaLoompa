import $ from 'zepto';
import { filterOompas } from './useCases/filterOompas';
import { infiniteScroll } from './useCases/infiniteScroll';

const SEARCH_INPUT_SELECTOR = '#search';

infiniteScroll.init();
filterOompas.init(SEARCH_INPUT_SELECTOR);




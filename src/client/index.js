import { handleSubmit } from './js/formHandler.js';
import { CheckUrl } from './js/CheckUrl.js';

import './styles/style.scss';
document.getElementById('form').addEventListener('submit', handleSubmit);

export { handleSubmit, CheckUrl }

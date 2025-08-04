import '@fontsource/kanit';
import './styles.css';
import {
  initInputEvents,
  initSubmitEvents,
  setUpClickEvents,
} from './scripts/events';

document.addEventListener('DOMContentLoaded', () => {
  setUpClickEvents();
  initInputEvents();
  initSubmitEvents();
});

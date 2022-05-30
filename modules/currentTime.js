import { DateTime } from '../luxon.js';

const showCurrentTime = () => {
  const time = document.querySelector('.time');
  const now = DateTime.now();
  const f = DateTime.DATETIME_FULL_WITH_SECONDS;
  const date = now.setLocale('en-US').toLocaleString(f);
  time.textContent = date;
};

export default showCurrentTime;
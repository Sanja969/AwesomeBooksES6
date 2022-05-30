import { DateTime } from "../luxon.js";

const showCurrentTime = () => {
  const time = document.querySelector('.time');
  const now = DateTime.now();
  const n = 'numeric';
  var f = DateTime.DATETIME_FULL_WITH_SECONDS;
  const date = now.setLocale('en-US').toLocaleString(f);
  time.textContent = date;
}

export { showCurrentTime };
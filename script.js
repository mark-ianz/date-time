const DATE_TIME_ELEMENT = document.querySelector ('.date-time');
function displayTimeAndDate () {
  const months = ["JAN","FEB","MAR","APR","MAYU","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  setInterval (() => {
    let d = new Date ();
    let month = d.getMonth();
    let dateToday = d.getDate();
    let year = d.getFullYear();
    let hours = d.getHours();
    let minute = d.getMinutes();
    let seconds = d.getSeconds();
    let amPm;
    function checkHour () {
      if (hours > 12) {
        hours = hours-12;
      }
      if (d.getHours() <= 11) {
        amPm = 'A.M'
      }
      else if (d.getHours() >= 12) {
        amPm = 'P.M'
      }
    }
    checkHour ();
    MONTH_VALUE.innerText = `${months [month]}`;
    DATE_VALUE.innerText = `${dateToday}`;
    YEAR_VALUE.innerText = `${year}`;
    HOURS_ELEMENT.innerHTML = `<p>Hours</p><p style ="text-decoration: underline">(${amPm})</p>`
    HOURS_VALUE.innerText = `${hours}`;
    MINUTES_VALUE.innerText = `${minute}`;
    SECONDS_VALUE.innerText = `${seconds}`;
  }, 1);
}
displayTimeAndDate ();

const MONTH_ELEMENT = document.querySelector ('.js-month');
const MONTH_VALUE = document.querySelector ('.js-month-value');
const DATE_VALUE = document.querySelector ('.js-date-value');
const YEAR_VALUE = document.querySelector ('.js-year-value');
const HOURS_ELEMENT = document.querySelector ('.js-hours');
const HOURS_VALUE = document.querySelector ('.js-hours-value');
const MINUTES_VALUE = document.querySelector ('.js-minutes-value');
const SECONDS_VALUE = document.querySelector ('.js-seconds-value');
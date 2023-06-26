/* const endDate = "28 June 2023 12:00 PM";
document.getElementById("end-date").innerHTML = endDate;

const count = document.querySelector("hrs");
const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  console.log(Math.floor(diff / 3600 / 24));

  // convert into days...
};
clock();
 */

const countDown = () => {
  const countDate = new Date("June 30, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calcuate
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector("#day").innerText = textDay;
  document.querySelector("#hrs").innerText = textHour;
  document.querySelector("#mint").innerText = textMinute;
  document.querySelector("#sec").innerText = textSecond;
};
setInterval(countDown, 1000);
/* 
how time work ?

const second = 1000;
const minute = second * 60;
const hour = minute * 60 ;
const day = hour*24;

*/

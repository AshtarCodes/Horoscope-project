const userInput = document.querySelector('#userInput');
const putSignHere = document.querySelector('#putSignHere');
const putTextHere = document.querySelector('#putTextHere');

document.querySelector('#submit').addEventListener('click', horoscope);

function horoscope() {
  // obtain date in UTC by appending a Z
  const userInputDate = new Date(`${userInput.value}Z`);
  const userInputMonth = userInputDate.getMonth() + 1; //gets july as 7
  const userInputDay = userInputDate.getDate() + 1; //gets day 22 as 22
  const userInputYear = userInputDate.getFullYear(); // for Leap Year Fix. Returns year as last 2 digits with exceptions (See bottom of document for info).
  console.log(userInputYear);
  /* Sign Conditionals structure: If ((month === 1) && ((day >= 21) && (day <= 31))) || ((month === 2) && ((day >= 1) && (day <= 19)))) {} */

  /* AQUARIUS [Jan 21 - Feb 19]; Jan is 31 days, and Feb is 28 days (common), 29 days (leap).*/
  if ((userInputMonth === 1) && ((userInputDay >= 21) && (userInputDay <= 31)) || ((userInputMonth === 2) && ((userInputDay >= 1) && (userInputDay <= 19)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "AQUARIUS";
      putTextHere.innerText = "You'll hit your lucky numbers today";
  /* PISCES [FEB 20-MAR 20] LEAP YEAR 1 */
} else if ((userInputMonth === 2) && (userInputDay === 29) && (userInputYear % 400 === 0)) { //If divisible by 400 Leap Year is true
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "PISCES";
      putTextHere.innerText = "Leap Year! You'll hit your lucky numbers today";
  /* PISCES [FEB 20-MAR 20] LEAP YEAR 2 */
} else if ((userInputMonth === 2) && (userInputDay === 29) && (userInputYear % 100 === 0)) { //If divisible by 100 Leap Year is false
      alert("Did you enter your birth date correctly?");
  /* PISCES [FEB 20-MAR 20] LEAP YEAR 3  */
} else if ((userInputMonth === 2) && (userInputDay === 29) && (userInputYear % 4 === 0)) { //If divisibe by 4 Leap Year is true
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "PISCES";
      putTextHere.innerText = "Leap Year! You'll hit your lucky numbers today";
  /* PISCES [FEB 20-MAR 20] NON-LEAP YEAR  */
} else if ((userInputMonth === 2) && ((userInputDay >= 20) && (userInputDay <= 28)) || ((userInputMonth === 3) && ((userInputDay >= 1) && (userInputDay <= 20)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "PISCES";
      putTextHere.innerText = "You'll hit your lucky numbers today";
  /* Aries [MAR 21-APR 20] */
  } else if ((userInputMonth === 3) && ((userInputDay >= 21) && (userInputDay <= 31)) || ((userInputMonth === 4) && ((userInputDay >= 1) && (userInputDay <= 20)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "ARIES";
      putTextHere.innerText = "The roles that you inhabit in your community become some of the most important portals of success for you in 2021. You also come to understand how best to use your resources in service of collective works and movement building.";

  /* TAURUS [APR 21-MAY 21] */
  } else if ((userInputMonth === 4) && ((userInputDay >= 21) && (userInputDay <= 30)) || ((userInputMonth === 5) && ((userInputDay >= 1) && (userInputDay <= 21)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "TAURUS";
      putTextHere.innerText = "You'll hit your lucky numbers today";
  /* GEMINI [MAY 22-JUNE 21] */
  } else if ((userInputMonth === 5) && ((userInputDay >= 22) && (userInputDay <= 31)) || ((userInputMonth === 6) && ((userInputDay >= 1) && (userInputDay <= 21)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "GEMINI";
      putTextHere.innerText = "You'll hit your lucky numbers today";
  /* CANCER [JUN 22-JULY 22] */
  } else if ((userInputMonth === 6) && ((userInputDay >= 22) && (userInputDay <= 30)) || ((userInputMonth === 7) && ((userInputDay >= 1) && (userInputDay <= 22)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "CANCER";
      putTextHere.innerText = "You'll hit your lucky numbers today";
  /* LEO [JUL 23-AUG 23] */
  } else if ((userInputMonth === 7) && ((userInputDay >= 23) && (userInputDay <= 31)) || ((userInputMonth === 8) && ((userInputDay >= 1) && (userInputDay <= 23)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "LEO";
      putTextHere.innerText = "You'll hit your lucky numbers today";
  /* VIRGO [AUG 24 - SEP 23] */
  } else if ((userInputMonth === 8) && ((userInputDay >= 24) && (userInputDay <= 31)) || ((userInputMonth === 9) && ((userInputDay >= 1) && (userInputDay <= 23)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "VIRGO";
      putTextHere.innerText = "You'll hit your lucky numbers today";
  /* LIBRA [SEP 24 - OCT 23] */
  } else if ((userInputMonth === 9) && ((userInputDay >= 24) && (userInputDay <= 30)) || ((userInputMonth === 10) && ((userInputDay >= 1) && (userInputDay <= 23)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "LIBRA";
      putTextHere.innerText = "You'll hit your lucky numbers today";
  /* SCORPIO [OCT 24 - NOV 22] */
  } else if ((userInputMonth === 10) && ((userInputDay >= 24) && (userInputDay <= 31)) || ((userInputMonth === 11) && ((userInputDay >= 1) && (userInputDay <= 22)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "SCORPIO";
      putTextHere.innerText = "You'll hit your lucky numbers today";
  /* SAGITTARIUS [NOV 23 - DEC 21]*/
  } else if ((userInputMonth === 11) && ((userInputDay >= 23) && (userInputDay <= 30)) || ((userInputMonth === 12) && ((userInputDay >= 1) && (userInputDay <= 21)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "SAGITTARIUS";
      putTextHere.innerText = "You'll hit your lucky numbers today";
  /* CAPRICORN [DEC 22 - JAN 20] */
  } else if ((userInputMonth === 12) && ((userInputDay >= 22) && (userInputDay <= 31)) || ((userInputMonth === 1) && ((userInputDay >= 1) && (userInputDay <= 20)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "CAPRICORN";
      putTextHere.innerText = "You'll hit your lucky numbers today";
  /* Error Alert */
  } else {
      alert("Did you enter your birth date correctly?");
  }


};

/* BUGS or ideas:
1. Make february 29 invalid on common years (non-leap years). When you solve this, include blurb in putTextHere about why we have leap years. Leap years began on 1582. Before then, Julian calendar.
   Algorithm:
   if year is divisible by 400 then leap year is true
    else if year is divisible by 100 then leap year is false
        else if year is divisible by 4 then leap year is true
            else leap year is false

2. Can you have different horoscopes appear by turning a set of strings into an array and having a Math.random() for the index call? Maybe have it change based on the date?*/

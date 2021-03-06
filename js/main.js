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
      putTextHere.innerText = "2021 is more than defining for you, it is a personal revolution. This year asks you to commit to yourself and your growth in tangible and focused ways, all while discerning between the treasures and the outdated systems that you’ve inherited. It all comes down to what you recycle and what reclaim.";
  /* PISCES [FEB 20-MAR 20] LEAP YEAR 1 */
} else if ((userInputMonth === 2) && (userInputDay === 29) && (userInputYear % 400 === 0)) { //If divisible by 400 Leap Year is true
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "PISCES";
      putTextHere.innerText = "Well, look at you! You made it. You're here. On a leap year, right after a world crisis no less. You were born on a one-of-a-kind day and it shows. Now, listen closely. 2021 releases you from the professional and public roles that hold little meaning for you. At this point, what becomes clear is your need for honest exchanges and healing incubators. With a flood of fortunate situations on their way, this year asks you to do a little behind the scenes clearing in preparation.";
  /* PISCES [FEB 20-MAR 20] LEAP YEAR 2 */
} else if ((userInputMonth === 2) && (userInputDay === 29) && (userInputYear % 100 === 0)) { //If divisible by 100 Leap Year is false
      alert("Did you enter your birth date correctly?");
  /* PISCES [FEB 20-MAR 20] LEAP YEAR 3  */
} else if ((userInputMonth === 2) && (userInputDay === 29) && (userInputYear % 4 === 0)) { //If divisibe by 4 Leap Year is true
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "PISCES";
      putTextHere.innerText = "Well, look at you! You made it. You're here. On a leap year, right after a world crisis no less. You were born on a one-of-a-kind day and it shows. Now, listen closely. 2021 releases you from the professional and public roles that hold little meaning for you. At this point, what becomes clear is your need for honest exchanges and healing incubators. With a flood of fortunate situations on their way, this year asks you to do a little behind the scenes clearing in preparation.";
  /* PISCES [FEB 20-MAR 20] NON-LEAP YEAR  */
} else if ((userInputMonth === 2) && ((userInputDay >= 20) && (userInputDay <= 28)) || ((userInputMonth === 3) && ((userInputDay >= 1) && (userInputDay <= 20)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "PISCES";
      putTextHere.innerText = "2021 releases you from the professional and public roles that hold little meaning for you. At this point, what becomes clear is your need for honest exchanges and healing incubators. With a flood of fortunate situations on their way, this year asks you to do a little behind the scenes clearing in preparation.";
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
      putTextHere.innerText = "Professional commitments bring opportunities for growth, expansion, and success while you undergo pivotal personal changes. Sometimes the two don’t always go together, but it makes for some very lively and interesting growth spurts that, in the end, come to define your life for far more than just this year.";
  /* GEMINI [MAY 22-JUNE 21] */
  } else if ((userInputMonth === 5) && ((userInputDay >= 22) && (userInputDay <= 31)) || ((userInputMonth === 6) && ((userInputDay >= 1) && (userInputDay <= 21)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "GEMINI";
      putTextHere.innerText = "A personally potent year, you get to understand your impact, grow your professional presence, and expand your horizons through practices that help you heal, be disciplined, and that encourage self-awareness.";
  /* CANCER [JUN 22-JULY 22] */
  } else if ((userInputMonth === 6) && ((userInputDay >= 22) && (userInputDay <= 30)) || ((userInputMonth === 7) && ((userInputDay >= 1) && (userInputDay <= 22)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "CANCER";
      putTextHere.innerText = "Expansion and growth happens through the collaborations that help you manifest your hopes and dreams. Streamlining professional projects and roles is imperative if you want to move definitively towards your long-term goals, but it’s not always comfortable.";
  /* LEO [JUL 23-AUG 23] */
  } else if ((userInputMonth === 7) && ((userInputDay >= 23) && (userInputDay <= 31)) || ((userInputMonth === 8) && ((userInputDay >= 1) && (userInputDay <= 23)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "LEO";
      putTextHere.innerText = "With an increased role in your communities and networks, partnerships of all kinds become a major focus for you. A central theme in your unions will be about innovating the kinds of commitments that you are in and challenging the structures of them.";
  /* VIRGO [AUG 24 - SEP 23] */
  } else if ((userInputMonth === 8) && ((userInputDay >= 24) && (userInputDay <= 31)) || ((userInputMonth === 9) && ((userInputDay >= 1) && (userInputDay <= 23)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "VIRGO";
      putTextHere.innerText = "2021 brings you many opportunities to expand your professional and public roles, projects, and pursuits; you’ll just have to make sure that the growth aligns with your long-term plans, and ultimately with what gives your life a sense of meaning.";
  /* LIBRA [SEP 24 - OCT 23] */
  } else if ((userInputMonth === 9) && ((userInputDay >= 24) && (userInputDay <= 30)) || ((userInputMonth === 10) && ((userInputDay >= 1) && (userInputDay <= 23)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "LIBRA";
      putTextHere.innerText = "Growth comes through your creative outlets and projects in 2021. Whatever you commit to making will need plenty of your resources: make sure you have enough time, energy, and care to give to both your collaborative work and your personal pursuits.";
  /* SCORPIO [OCT 24 - NOV 22] */
  } else if ((userInputMonth === 10) && ((userInputDay >= 24) && (userInputDay <= 31)) || ((userInputMonth === 11) && ((userInputDay >= 1) && (userInputDay <= 22)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "SCORPIO";
      putTextHere.innerText = "The changes that you are asked to make this year impact the foundations of your life, the structures of your relationships, and help you to revolutionize the meaning of home and family. The more you are able to lay down foundations that support your growth, the more connected you are to the prosperity of your life.";
  /* SAGITTARIUS [NOV 23 - DEC 21]*/
  } else if ((userInputMonth === 11) && ((userInputDay >= 23) && (userInputDay <= 30)) || ((userInputMonth === 12) && ((userInputDay >= 1) && (userInputDay <= 21)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "SAGITTARIUS";
      putTextHere.innerText = "With an increase of speaking engagements, proposals, and daily activities, you’ll be feeling the need to structure your time with an exacting precision. Work projects demand that you bring forth ideas that clash with the status quo making it important for you to keep your reasons for doing so in neat and tidy file folders to recall for naysayers when necessary.";
  /* CAPRICORN [DEC 22 - JAN 20] */
  } else if ((userInputMonth === 12) && ((userInputDay >= 22) && (userInputDay <= 31)) || ((userInputMonth === 1) && ((userInputDay >= 1) && (userInputDay <= 20)))) {
      putSignHere.innerText = "";
      putTextHere.innerText = "";
      putSignHere.innerText = "CAPRICORN";
      putTextHere.innerText = "After surviving the onslaught of activity in Capricorn in 2020, 2021 turns its focus towards the resources you have to work with and how to make the most of them. Growth is imminent, but honest self-expression is a must. If you have to smooth out your edge too much, you’ll never cut to the core of your talent.";
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

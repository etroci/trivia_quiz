const qBank = [

  {
    question:
      "Which of the following movies was not based on a novel by Stephen King?  ",
    answers: ["Carrie","The Thing",  "Misery", "The Green Mile"],
    correct: "The Thing"

  },
  {
    question:
      "Who starred as Bruce Wayne and Batman in Tim Burton's 1989 movie \"Batman\"?"  ,
    answers: [ "George Clooney", "Michael Keaton","Adam West", "Val Kilmer"],
    correct: "Michael Keaton"

  },
  {
  question: "When was the movie \"Con Air\" released?",
  answers: ["1997", "1985","1999","1990"],
  correct: "1997"

},
{
  question: "In the movie \"Cast Away\", the main protagonist's best friend while on the island is named:" ,
  answers: [ "Carson", "Jackson", "Willy","Wilson"],
  correct: "Wilson"

},
{
  question: "In the 1992 film \"Army of Darkness\", what name does Ash give to his double-barreled shotgun?",
  answers: [ "Bloomstick", "Blastbranch","Boomstick", "2-Pump Chump"],
  correct: "Boomstick"

}
];

export default (n = 5) =>
  Promise.resolve(qBank);

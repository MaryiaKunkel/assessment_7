function timeWord(input) {
  // Define arrays to map hours and minutes to words
  const hoursWords = [
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
  ];
  const minutesWords = [
    "oh",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty-one",
    "twenty-two",
    "twenty-three",
    "twenty-four",
    "twenty-five",
    "twenty-six",
    "twenty-seven",
    "twenty-eight",
    "twenty-nine",
    "thirty",
    "thirty-one",
    "thirty-two",
    "thirty-three",
    "thirty-four",
    "thirty-five",
    "thirty-six",
    "thirty-seven",
    "thirty-eight",
    "thirty-nine",
    "forty",
    "forty-one",
    "forty-two",
    "forty-three",
    "forty-four",
    "forty-five",
    "forty-six",
    "forty-seven",
    "forty-eight",
    "forty-nine",
    "fifty",
    "fifty-one",
    "fifty-two",
    "fifty-three",
    "fifty-four",
    "fifty-five",
    "fifty-six",
    "fifty-seven",
    "fifty-eight",
    "fifty-nine",
  ];

  // Extract hours and minutes from input
  const hours = input.slice(0, 2);
  const minutes = input.slice(-2);
  let ending;
  let hourWord = hoursWords[+hours];
  let minuteWord = minutesWords[+minutes];
  let time;
  console.log(+hours);

  // Check if input is invalid
  if (
    +hours > 24 ||
    +minutes > 60 ||
    typeof +hours !== "number" ||
    typeof +minutes !== "number"
  )
    return "Invalid time";

  // Handle special cases
  if (hours === "00" && minutes === "00") return "midnight";
  if (hours === "12" && minutes === "00") return "noon";
  if (+hours >= 0 && +hours < 12) ending = " am";
  else ending = " pm";
  if (minutes[0] === "0") minuteWord = "oh " + String(minutesWords[+minutes]);
  if (minutes === "00") minuteWord = "o'clock";
  if (+hours >= 13) hourWord = hoursWords[+hours - 12];
  time = hourWord + " " + minuteWord + ending;

  return time;
}

// Export the function for use in other modules
module.exports = timeWord;

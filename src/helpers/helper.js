const HumanDate = (date) => {
  let dat = new Date(date);
  return dat.toDateString();
};

export const parseDate = (date) => {
  var mdd = String(date.getDate()).padStart(2, "0");
  var mmm = String(date.getMonth() + 1).padStart(2, "0");
  var myyyy = date.getFullYear();

  return myyyy + "-" + mmm + "-" + mdd;
};

export const parseDateStr = (dateStr) => {
  const date = new Date(dateStr);
  return parseDate(date);
};

export const htmlDecode = (input) => {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
};

// Text area length for text area for message templates
export const maxLength = 640;

export const everyList = ["Minute", "Hour", "Day", "Week", "Month", "Year"];

export const hourList = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

export const dayList = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

export const weekList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthList = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "13th",
  "14th",
  "15th",
  "16th",
  "17th",
  "18th",
  "19th",
  "20th",
  "21st",
  "22nd",
  "23rd",
  "24th",
  "25th",
  "26th",
  "27th",
  "28th",
  "29th",
  "30th",
  "31st",
];

export const yearList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default HumanDate;

//your JS code here. If required.

function daysOfAYear(year) {
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    return 366;
  } else {
    return 365;
  }
}
const testYears = [
  2022, 
  2024, 
  1900,
  2000
];
testYears.forEach(year => {
  const days = daysOfAYear(year);
  console.log(`Year: ${year} -> Days: ${days}`);
});


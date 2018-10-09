export const MONTHS = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};


export const DAYS = () => (
  new Array(31).fill(0).map((d, i)=> i+1 )
)

export const YEARS = () => {
  const today = new Date();
  const years = 114;
  return new Array(years).fill(0).map((year, i) => i + ( today.getFullYear() - years + 1) ).reverse()
}

export const validDate = (year, month, day) => {

  const days = [31, ( isLeapYear(year) ? 29 : 28 ), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ( days[month-1] >= day ) return true;
  return false;
}

const isLeapYear = (year) => {
  if ( year % 400 === 0 ) return true;
  if ( year % 100 === 0 ) return false;
  if ( year % 4 === 0 ) return true;
  return false;
};

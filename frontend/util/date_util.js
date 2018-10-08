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
  const today = new Date()
}

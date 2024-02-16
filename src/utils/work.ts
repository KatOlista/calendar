export function getCalendarWeek(date: string) {
  const d = new Date(date);
  const thursday = new Date(date);

  // find the Thursday of the same week
  const diffWithThursday = (d.getDay() || 7) - 4;

  thursday.setDate(d.getDate() - diffWithThursday);

  const year = thursday.getFullYear();
  let weekNumber = 0;

  // Count the same year Thursdays before the current one
  while (thursday.getFullYear() === year) {
    weekNumber++;

    // the previous Thursday
    thursday.setDate(thursday.getDate() - 7);
  }

  return weekNumber;
}

function prevDay(year, month, day) {
  const date = new Date(year, month - 1, day);
  let prevDay = date.getDate() - 1;
  date.setDate(prevDay);
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}
prevDay(2016, 9, 30);

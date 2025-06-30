function superbowlWin(array) {
  for (const record of array) {
    if (record.result === "W") {
      return record.year;
    }
  }
  return undefined; 
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getColor(lowest, highest) {
  switch (getRandomInt(lowest, highest)) {
    case 1:
      return 'aliceblue';
    case 2:
      return 'aquamarine';
    case 3:
      return 'beige';
    case 4:
      return 'blanchedalmond';
    case 5:
      return 'bisque';

    default:
      return 'aquamarine';
  }
}

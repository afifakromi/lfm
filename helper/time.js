export const createdAt = timestamp => {
  if (timestamp) {
    const insecond = Math.floor(Date.now() / 1000 - timestamp);

    const inminute = Math.floor(insecond / 60);
    if (inminute === 0) {
      return insecond + " seconds ago";
    }
    const inhour = Math.floor(inminute / 60);
    if (inhour === 0) {
      return inminute + " minutes ago";
    }
    const inday = Math.floor(inhour / 24);
    if (inday === 0) {
      return inhour + " hours ago";
    }
    const inmonth = Math.floor(inday / 30);
    if (inmonth === 0) {
      return inday + " days ago";
    }
    const inyear = Math.floor(inmonth / 12);
    if (inyear === 0) {
      return inmonth + " months ago";
    }
    return inyear + " years ago";
  } else {
    return;
  }
};

var getDifference = (date2, date1) => {
  var diff = date2.getTime() - date1.getTime();

  var msec = diff;
  var years = Math.floor(msec / 1000 / 60 / 60 / 24 / 365);
  msec -= years * 1000 * 60 * 60 * 24 * 365;
  var months = Math.floor(msec / 1000 / 60 / 60 / 24 / 7 / 30);
  msec -= months * 1000 * 60 * 60 * 24 * 7 * 30;
  var weeks = Math.floor(msec / 1000 / 60 / 60 / 24 / 7);
  msec -= weeks * 1000 * 60 * 60 * 24 * 7;
  var days = Math.floor(msec / 1000 / 60 / 60 / 24);
  msec -= days * 1000 * 60 * 60 * 24;
  var hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  var mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  var ss = Math.floor(msec / 1000);
  msec -= ss * 1000;

  if (years > 0) {
    return `+${years} years ago`;
  } else if (months > 0) {
    return `+${months} months ago`;
  } else if (weeks > 0) {
    return `+${weeks} weeks ago`;
  } else if (days > 0) {
    return `+${days} days ago`;
  } else if (hh > 0) {
    return `+${hh}hrs ago`;
  } else if (mm > 0) {
    return `+${mm}mins ago`;
  } else if (ss > 0) {
    return `+${ss}s ago`;
  } else {
    return null;
  }
};

export default getDifference;

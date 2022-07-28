//import React from 'react'

const DateToFormat = (date) => {
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    
    let hour = date.substring(11,13);
    let minutes = date.substring(14,16);

    let daily = day + "."+ month + "." + year
    let time = hour + "." + minutes

    return (time + " | " + daily)
}

const DateToDaily = (date) => {
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);

    let daily = day + "."+ month + "." + year

    return (daily)
}

const countElemInArray = (customerList) => {
    let labelX = []
    let current = null;
    let cnt = 0;

    for (let i = 0; i < customerList.length; i++) 
      {
          if (customerList[i] !== current) {
              if (cnt > 0) {
                labelX.push([current,cnt])
              }
              current = customerList[i];
              cnt = 1;
          } else {
              cnt++;
          }
      }
      if (cnt > 0) {
        labelX.push([current,cnt])
      }
      return labelX
}

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const makeLinkDate = () => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  let dateObj = new Date();
  let month = monthNames[dateObj.getMonth()];
  let day = String(dateObj.getDate()).padStart(2, '0');
  let year = dateObj.getFullYear();
  let output = month  + '\n'+ day  + ',' + year;
  return output;
}
const scrollTo = (element, to = 0, duration= 400) => {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 5;
  let currentTime = 0;

  Math.easeInOutQuad = function (t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
  };
  
  const animateScroll = (() => {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  });
  animateScroll();
};

export {DateToFormat, DateToDaily, countElemInArray, getRandomColor, makeLinkDate,scrollTo}
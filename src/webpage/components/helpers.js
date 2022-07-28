const onClickDownload = (event, filePath) => {
    event.preventDefault();
    var link=document.createElement('a');
    link.href = filePath;
    link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
    link.click();
}

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const wordSplitOnSentence = (content) => {
  var words = content.split(" ");
  return words;
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

export {onClickDownload, validateEmail, scrollTo, wordSplitOnSentence}
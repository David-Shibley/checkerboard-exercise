// Your JS goes here
var divs = [];

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function mapBoard(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    divs[i] = document.createElement('div');
    divs[i].style.float = "left";
    divs[i].style.paddingBottom = "11.1%";
    divs[i].style.width = "11.1%";
    // divs[i].style.backgroundColor = getRandomColor();
    if (i % 2 == 0) {
      divs[i].style.backgroundColor = "green";
    } else {
      divs[i].style.backgroundColor = "red";
    }
    if (i <= 9) {
      divs[i].style.opacity = ".9";
    } else if (i < 18) {
      divs[i].style.opacity = ".85";
    } else if (i < 27) {
      divs[i].style.opacity = ".8";
    } else if (i < 36) {
      divs[i].style.opacity = ".75";
    } else if (i < 45) {
      divs[i].style.opacity = ".7";
    } else if (i < 54) {
      divs[i].style.opacity = ".65";
    } else if (i < 63) {
      divs[i].style.opacity = ".6";
    } else if (i < 72) {
      divs[i].style.opacity = ".55";
    } else if (i < 81) {
      divs[i].style.opacity = ".5";
    }
    document.body.appendChild(divs[i])

    // divs[i].style.background = "linear-gradient(120deg, red, blue)";

    // if (i== n-1) {
    //   document.body.appendChild(divs[i]);
    //   divs[i].appendChild(divs[i-1])
    // } else if (i == 0) {
    //
    // } else {
    //   divs[i].appendChild(divs[i-1]);
    //}
  };
}

mapBoard(81);

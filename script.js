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
    divs[i].style.backgroundColor = getRandomColor();
    document.body.appendChild(divs[i])
    // if (i== n-1) {
    //   document.body.appendChild(divs[i]);
    //   divs[i].appendChild(divs[i-1])
    // } else if (i == 0) {
    //
    // } else {
    //   divs[i].appendChild(divs[i-1]);
    //}
    // if (i % 2 == 0) {
    //   divs[i].style.backgroundColor = "black";
    // } else {
    //   divs[i].style.backgroundColor = "red";
    // }
  };
}

mapBoard(81);

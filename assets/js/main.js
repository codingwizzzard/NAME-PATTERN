var str = '';
var i = 0;
while (i < 5) {
  // H
  var j = 0;
  while (j < 5) {
    if (j == 0 || j == 4 || i == 2) {
      str += '*&nbsp;';
    } else {
      str += '&nbsp;&nbsp;';
    } 
    j++;
  }

  // A
  str += '&nbsp;&nbsp;';
  j = 0;
  while (j < 5) {
    if (
      (i <= 2 && (j == 2 - i || j == 2 + i || (i == 2 && (j == 1 || j == 2 || j == 3)))) ||
      (i > 2 && i < 5 && (j == 0 || j == 4))
    ) {
      str += '*&nbsp;';
    } else {
      str += '&nbsp;&nbsp;';
    }
    j++;
  }

  // R
  str += '&nbsp;&nbsp;';
  j = 0;
  while (j < 5) {
    if (j == 0 || (i == 0 && j < 4) || (i == 2 && j < 4) || (i == 1 && j == 4) || (i == 3 && j == 4) || (i == 4 && j == 4)) {
      str += '*&nbsp;';
    } else {
      str += '&nbsp;&nbsp;';
    }
    j++;
  }

  // S
  str += '&nbsp;&nbsp;';
  j = 0;
  while (j < 5) {
    if ((i == 0 || i == 2 || i == 4) || (i == 1 && j == 0) || (i == 3 && j == 4)) {
      str += '*&nbsp;';
    } else {
      str += '&nbsp;&nbsp;';
    }
    j++;
  }

  // H
  str += '&nbsp;&nbsp;';
  j = 0;
  while (j < 5) {
    if (j == 0 || j == 4 || i == 2) {
      str += '*&nbsp;';
    } else {
      str += '&nbsp;&nbsp;';
    }
    j++;
  }

  // Space between names
  str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

  // S
  str += '&nbsp;&nbsp;';
  j = 0;
  while (j < 5) {
    if ((i == 0 || i == 2 || i == 4) || (i == 1 && j == 0) || (i == 3 && j == 4)) {
      str += '*&nbsp;';
    } else {
      str += '&nbsp;&nbsp;';
    }
    j++;
  }

  // H
  str += '&nbsp;&nbsp;';
  j = 0;
  while (j < 5) {
    if (j == 0 || j == 4 || i == 2) {
      str += '*&nbsp;';
    } else {
      str += '&nbsp;&nbsp;';
    }
    j++;
  }

  // A
  str += '&nbsp;&nbsp;';
  j = 0;
  while (j < 5) {
    if (
      (i <= 2 && (j == 2 - i || j == 2 + i || (i == 2 && (j == 1 || j == 2 || j == 3)))) ||
      (i > 2 && i < 5 && (j == 0 || j == 4))
    ) {
      str += '*&nbsp;';
    } else {
      str += '&nbsp;&nbsp;';
    }
    j++;
  }

  // H
  str += '&nbsp;&nbsp;';
  j = 0;
  while (j < 5) {
    if (j == 0 || j == 4 || i == 2) {
      str += '*&nbsp;';
    } else {
      str += '&nbsp;&nbsp;';
    }
    j++;
  }

  str += '<br>';
  i++;
}
document.body.innerHTML = str;
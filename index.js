var katzDeliLine = [];

function takeANumber(katzDeliLine, num) {
  katzDeliLine.push(num);
  return `Welcome, you are ticket number ${num} and ${katzDeliLine.length} in line.`
} 

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  }else{ 
    return 'Currently serving ' + katzDeliLine.shift() + '.';
}
} 

function currentLine(katzDeliLine) {
  let placeInLine = [];
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.'; 
  } for (let i = 0; i < katzDeliLine.length; i++) {
    placeInLine.push( ' ' + (i+1) + '. '  + katzDeliLine[i]);
  } return 'The line is currently:' + placeInLine;
}

module.exports = function reverse (n) {
  let str = n.toString();
  str = str.split('');
  for(let i = 0; i < str.length; i++){
      if(str[i] === '-'){
        str.splice(i, 1);
      }
  }
  str = str.reverse().join('');
  return Number(str);
}

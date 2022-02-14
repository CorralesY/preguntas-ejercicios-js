/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node script.js 'a * (b + c)'
 */

//const args = process.argv.slice(-1);
const args = process.argv.slice(2);
arg = args.join(" ") 

console.log(`Running question #2 with args ${arg}`)

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */


function Symbols(){
    this.items = [];
    this.elements = 0;
    this.push = push;
    this.pop = pop;
    this.isEmpty = isEmpty;
    this.peek = peek;
    this.size = size;

    function push( item ){
        this.items.push( item );
        this.elements++;
    }

    function pop(){
      if ( this.elements > 0 )
      {
        this.elements--;
        return this.items.pop();
      }
    }

    function peek(){
      return this.items[ this.elements - 1 ];
    }

    function isEmpty(){
      return this.elements == 0;
    }

    function size(){
      return this.elements;
    }
}


function parenthesisChecker(str){

  var open="{[(", close="}])";
  var balance = [0,0,0];
  var eval=new Symbols();
  
  for ( var i = 0; i < str.length; i++ ){
    eval.push( str[i] );
  }
  
  for (var j = 0; j < eval.size(); j++) {
    if (open.indexOf(eval.items[j])!=-1) {
      balance[open.indexOf(eval.items[j])]++;
    }
    else {
      balance[close.indexOf(eval.items[j])]--;
    }
      if (balance[0] < 0 || balance[1]<0 || balance[2]<0){
        return false;
      }
  }
  if (balance[0]==0 && balance[1]==0 && balance[2]==0) {
    return  true ;
  }
  return false;
}

const isValid = parenthesisChecker(arg);
console.log(isValid)



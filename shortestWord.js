function shortestWord(str){
var array = str.split(' ');
var y = array[0]
for(var i = 0 ; i<array.length;i++){
if(y.length > array[i].length){
	y = array[i];
}
}
return y;

}

console.log(shortestWord('the quick brown fox over the lazy dog'));
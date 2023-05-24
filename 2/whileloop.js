var i=0;
while(i=0){
    console.log(i);

}
var arr = [1,23,45,67,89];
arr [0]=34;
arr [3]=44;
var x = arr[3];
console.log(x);
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}
for(var i=arr.length-1; i>=0; i--){
    console.log("i:",i, "value:",arr[i]);
}
for(var i=arr.length-1; i>=0; i--){
if(  arr[i]%2==1){
  
    console.log(arr[i]);
}
}
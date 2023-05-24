// printing 1-10
for(i=0; i<10; i++){
    console.log(i);
}
// printing 10-1
for(i=10; i>0; i--){
    console.log(i);
}
// Printing 0-10 Even numbers
for(i=0; i<10; i++){
    var reminder = i%2;
   if(reminder == 0){
    console.log(i);
}
}
// Printing 0-10 Odd numbers
for(i=0; i<10; i++){
    var reminder = i%2;
   if(reminder == 1){
    console.log(i);
}                             
}
// Printing 5 Divisibles from 1-50 
for(i=1; i<50; i++){
    var reminder = i%5;
    if(reminder == 0){
        console.log(i)
    }
}
// Printing 9 Divisibles from 1-50 
for(i=1; i<50; i++){
    var reminder = i%9;
    if(reminder == 0){
        console.log(i)
    }
}
// Squaring the 20 numbers
for(i=0; i<=20; i++){
    console.log(`${i}*${i}=${i*i}`);
}


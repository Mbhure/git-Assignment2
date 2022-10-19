let num=13;
let N=0;
  for(let i=0; i<=num; i++){
      if(num%i===0){
          N+=1;
      }
  }
if(N<=5){
    console.log("Yes");
}
else{
    console.log("No");
}
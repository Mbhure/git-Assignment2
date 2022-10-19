let num=13;
let N=0;
  for(let i=1; i<=num; i++){
      if(num%i===0){
          N+=1;
      }
  }
if(N<=2){
    console.log("Yes");
}
else{
    console.log("No");
}
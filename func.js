 
//  function addtwo(n1,n2){
//     //const r= n1+n2;
//    // console.log(r);
//     // return r; or
//     return n1+n2;
//  }
//  const result=addtwo(6,8);
//  console.log("the answer is: ", result)
// function logged(username){
//     if(!username){
//         return `please enter the name`;
//     }
//     else
//     return `${username} just logged in `;
// }
// const n=logged("sadia");
// console.log(n);
function show(...n){
    return n;
}
//console.log(show(20,30,40));
 //passing 0object as a fucntion argument,passing object as a funcion argument
function ob(anyobject){
    console.log(` name is ${anyobject.name} and its id is${anyobject.id}`);
}
// const user={
//     name: "sadia",
//     id: 63
// }
// ob({
//     names: "sadia",
//     id:63
// });
 //how to pass arrays
 function arra(arr1){
  // console.log(arr1[2]);
 }
 //const arr=[2,4,5,8];
 arra(arr=[2,4,5]);
 
 if(true){
  const nam="sadia";
  if(nam==="sadia"){
    const surname="ijaz";
    console.log(`${nam} and ${surname} `)
  }
  //console.log(surname);
 }
 console.log(nam);
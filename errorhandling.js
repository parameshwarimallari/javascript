// function div(one, two) {
//     try {
//         if (two == 0) {
//             throw new Error("zero not valid")
//         } else {
//             console.log(one / two);

//         }
//     } catch (error) {
//         console.error(error.message);

//     }
// }
// div(2, 0);
// console.log("completed");

// async function some() {
//     let res = await fetch("http://localhost:3000/data")
//     let re = await res.json();
//     re.forEach(async element => {
//         let data = await element
//         console.log(data.id);
//     });
// }
// some()




let options={
    "method":"DELETE"
}
let deletebyGet=async (val)=>{
   try{
let a= await fetch("http://localhost:3000/data"); 
let b= await a.json();
console.log(b[0].id);
let obj=b[0].id;
let c=await fetch(`http://localhost:3000/data/${obj}`,options)
if(c.ok){
console.log("deleted");

}

   }catch(error){

   }

}
deletebyGet("sa");




















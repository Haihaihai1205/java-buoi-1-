
// // let const(Bien co dinh) var 
// //let a=6
// //const b=7 
// //console.log(a+b)

// a=8
// console.log (a)


//Function 3 loai 
// loai 1 Declare Function
// loai 2 Express Function
// loai 3 Arrow Function 

// loai 1 Declare Function
// co the khai bao truoc khi tao function
function age(){
    const a=6
    const b=7
    console.log (a+b)
}
age()

// loai 2 Express Function
// khong the khai bao truoc khi tao function
const dientich = function(){
    const a=9
    const b=10
    console.log (a*b)
}
dientich()

// loai 3 Arrow Function 

// const chuvi=(y,z)=>{
//     return (y+z)*2 
// }
// console.log(chuvi(9,8))

const chuvi=()=>{
    const y=9
    const z=8
    console.log ((y+z)*2)
}
chuvi()

// const tuoi=()=>{
//     const age1=42
//     const age2=11
//     // console.log('tuoi cua bo la',age1,'tuoi cua con la',age2)
//     console.log(` tuoi cua bo la ${age1} tuoi cua con la ${age2} `)
// }
// tuoi()

const tuoi=(age1,age2)=>{
    console.log(` tuoi cua bo la ${age1} tuoi cua con la ${age2} `)
}
tuoi(42,11)

//Objects
const person={
    name:'tuan hai',
    age:22,
    address:'Long Bien',
}
 console.log(person)
 console.log(person.address)
 console.log(person.age)
 console.log(person.name)
 person.height=177
 console.log(person.height)

 
 

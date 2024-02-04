//arrow function+default
 const greet=(name,greeting="Hello")=> `${greeting} ${name}`

console.log(greet("Deniz"));
console.log(greet("Deniz","Good morning"));

//recursion+arrow
const fact=n=>{
    if(n<=1){
        return 1
    }
    return n*fact(n-1)
}
console.log(fact(5));

//rest,arrow
const sumAll=(...numbers)=>{
    let sum=0
    for(let num of numbers){
        sum+=num
    }
    return sum

}
console.log(sumAll(1,2,3));

const sumAll2=(...nums)=>{
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    return sum
}
console.log(sumAll2(1,2,3));

//callback function practice tasks
//1
const sum=(a,b)=>{
    return a+b
}

const mult=(num,cb)=>{  //cb is my callback function
    return num*cb(3,4) 
}

console.log(mult(5,sum)); //(5*(3+4))


//2-greeting

//cb
const gr1=()=> "Hello"
const gr2=()=> "Hola"

const greeting=(name,cb)=>{
    console.log(`${cb()} ${name}`);
}
greeting("Deniz",gr2)

greeting("Deniz",gr1)

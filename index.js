//fetch using json
// let users
const fetchUsers=async()=>{
     //const take = await fetch('https://jsonplaceholder.typicode.com/users')
     // json = await take.json()
//console.log(json);
    
   await fetch('https://jsonplaceholder.typicode.com/users')
    .then( response=> response.json())
    .then (userArray => users = userArray)
   const userDetails =document.querySelector(".people")

 users.forEach((user)=>{
      userDetails.innerHTML += `
       <div class="cards"> 
      <h1 class"name">${user.name }</h1>
      <h3 class"email">${user.email }</h3>
      <h4 class"phone">${user.phone }</h4>
      </div>`
   
   })
}
fetchUsers()



// return only female gender using map
const jambtudents=[  
   {  
      name:'arun',
      gender:'Male',
      physics:88,
      maths:87,
      english:78
   },
   {  
      name:'rajesh',
      gender:'Male',
      physics:96,
      maths:100,
      english:95
   },
   {  
      name:'moorthy',
      gender:'Male',
      physics:89,
      maths:90,
      english:70
   },
   {  
      name:'raja',
      gender:'Male',
      physics:30,
      maths:25,
      english:40
   },
   {  
      name:'usha',
      gender:'Female',
      physics:67,
      maths:45,
      english:78
   },
   {  
      name:'priya',
      gender:'Female',
      physics:56,
      maths:46,
      english:78
   },
   {  
      name:'Sundar',
      gender:'Male',
      physics:12,
      maths:67,
      english:67
   },
   {  
      name:'Kavitha',
      gender:'Female',
      physics:78,
      maths:71,
      english:67
   },
   {  
      name:'Dinesh',
      gender:'Male',
      physics:56,
      maths:45,
      english:67
   },
   {  
      name:'Hema',
      gender:'Female',
      physics:71,
      maths:90,
      english:23
   },
   {  
      name:'Gowri',
      gender:'Female',
      physics:100,
      maths:100,
      english:100
   },
   {  
      name:'Ram',
      gender:'Male',
      physics:78,
      maths:55,
      english:47
   },
   {  
      name:'Murugan',
      gender:'Male',
      physics:34,
      maths:89,
      english:78
   },
   {  
      names:'Jenifer',
      gender:'Female',
      physics:67,
      maths:88,
      english:90
   }
 ] 
 const femaleStudents=jambtudents.map((gender)=>{ return gender.jambtudents="female"
 })
 console.log(femaleStudents)

// return male gender only using map
const jambStudents=[  
   {  
      name:'arun',
      gender:'Male',
      physics:88,
      maths:87,
      english:78
   },
   {  
      name:'rajesh',
      gender:'Male',
      physics:96,
      maths:100,
      english:95
   },
   {  
      name:'moorthy',
      gender:'Male',
      physics:89,
      maths:90,
      english:70
   },
   {  
      name:'raja',
      gender:'Male',
      physics:30,
      maths:25,
      english:40
   },
   {  
      name:'usha',
      gender:'Female',
      physics:67,
      maths:45,
      english:78
   },
   {  
      name:'priya',
      gender:'Female',
      physics:56,
      maths:46,
      english:78
   },
   {  
      name:'Sundar',
      gender:'Male',
      physics:12,
      maths:67,
      english:67
   },
   {  
      name:'Kavitha',
      gender:'Female',
      physics:78,
      maths:71,
      english:67
   },
   {  
      name:'Dinesh',
      gender:'Male',
      physics:56,
      maths:45,
      english:67
   },
   {  
      name:'Hema',
      gender:'Female',
      physics:71,
      maths:90,
      english:23
   },
   {  
      name:'Gowri',
      gender:'Female',
      physics:100,
      maths:100,
      english:100
   },
   {  
      name:'Ram',
      gender:'Male',
      physics:78,
      maths:55,
      english:47
   },
   {  
      name:'Murugan',
      gender:'Male',
      physics:34,
      maths:89,
      english:78
   },
   {  
      names:'Jenifer',
      gender:'Female',
      physics:67,
      maths:88,
      english:90
   }
 ] 
 const maleStudents=jambStudents.map((gender)=>{ return gender.jambStudents="male"
 })
 console.log(maleStudents)


//return a names having Average >=100 for the array of data using map
const students=[  
   {  
      name:'arun',
      gender:'Male',
      physics:88,
      maths:87,
      english:78
   },
   {  
      name:'rajesh',
      gender:'Male',
      physics:96,
      maths:100,
      english:95
   },
   {  
      name:'moorthy',
      gender:'Male',
      physics:89,
      maths:90,
      english:70
   },
   {  
      name:'raja',
      gender:'Male',
      physics:30,
      maths:25,
      english:40
   },
   {  
      name:'usha',
      gender:'Female',
      physics:67,
      maths:45,
      english:78
   },
   {  
      name:'priya',
      gender:'Female',
      physics:56,
      maths:46,
      english:78
   },
   {  
      name:'Sundar',
      gender:'Male',
      physics:12,
      maths:67,
      english:67
   },
   {  
      name:'Kavitha',
      gender:'Female',
      physics:78,
      maths:71,
      english:67
   },
   {  
      name:'Dinesh',
      gender:'Male',
      physics:56,
      maths:45,
      english:67
   },
   {  
      name:'Hema',
      gender:'Female',
      physics:71,
      maths:90,
      english:23
   },
   {  
      name:'Gowri',
      gender:'Female',
      physics:100,
      maths:100,
      english:100
   },
   {  
      name:'Ram',
      gender:'Male',
      physics:78,
      maths:55,
      english:47
   },
   {  
      name:'Murugan',
      gender:'Male',
      physics:34,
      maths:89,
      english:78
   },
   {  
      name:'Jenifer',
      gender:'Female',
      physics:67,
      maths:88,
      english:90
   }
 ]
 
 const Avg=students.filter((score)=>{
    return Average=Math.round(((score.physics + score.maths + score.english)/3)>=100)
   }) 
    const nameScore=Avg.map((students)=>{
      return students.name;
    })
    
console.log(nameScore)

//return a filter for Average >=100 for the array of data
const candidate=[  
   {  
      name:'arun',
      gender:'Male',
      physics:88,
      maths:87,
      english:78
   },
   {  
      name:'rajesh',
      gender:'Male',
      physics:96,
      maths:100,
      english:95
   },
   {  
      name:'moorthy',
      gender:'Male',
      physics:89,
      maths:90,
      english:70
   },
   {  
      name:'raja',
      gender:'Male',
      physics:30,
      maths:25,
      english:40
   },
   {  
      name:'usha',
      gender:'Female',
      physics:67,
      maths:45,
      english:78
   },
   {  
      name:'priya',
      gender:'Female',
      physics:56,
      maths:46,
      english:78
   },
   {  
      name:'Sundar',
      gender:'Male',
      physics:12,
      maths:67,
      english:67
   },
   {  
      name:'Kavitha',
      gender:'Female',
      physics:78,
      maths:71,
      english:67
   },
   {  
      name:'Dinesh',
      gender:'Male',
      physics:56,
      maths:45,
      english:67
   },
   {  
      name:'Hema',
      gender:'Female',
      physics:71,
      maths:90,
      english:23
   },
   {  
      name:'Gowri',
      gender:'Female',
      physics:100,
      maths:100,
      english:100
   },
   {  
      name:'Ram',
      gender:'Male',
      physics:78,
      maths:55,
      english:47
   },
   {  
      name:'Murugan',
      gender:'Male',
      physics:34,
      maths:89,
      english:78
   },
   {  
      name:'Jenifer',
      gender:'Female',
      physics:67,
      maths:88,
      english:90
   }
 ]
 
 const aboveAvg=candidate.filter((score)=>{
    return Average=Math.round(((score.physics + score.maths + score.english)/3)>=100)
   })
console.log(aboveAvg)


//using forEach calculate the average of each student
const candidates=[  
   {  
      name:'arun',
      gender:'Male',
      physics:88,
      maths:87,
      english:78
   },
   {  
      name:'rajesh',
      gender:'Male',
      physics:96,
      maths:100,
      english:95
   },
   {  
      name:'moorthy',
      gender:'Male',
      physics:89,
      maths:90,
      english:70
   },
   {  
      name:'raja',
      gender:'Male',
      physics:30,
      maths:25,
      english:40
   },
   {  
      name:'usha',
      gender:'Female',
      physics:67,
      maths:45,
      english:78
   },
   {  
      name:'priya',
      gender:'Female',
      physics:56,
      maths:46,
      english:78
   },
   {  
      name:'Sundar',
      gender:'Male',
      physics:12,
      maths:67,
      english:67
   },
   {  
      name:'Kavitha',
      gender:'Female',
      physics:78,
      maths:71,
      english:67
   },
   {  
      name:'Dinesh',
      gender:'Male',
      physics:56,
      maths:45,
      english:67
   },
   {  
      name:'Hema',
      gender:'Female',
      physics:71,
      maths:90,
      english:23
   },
   {  
      name:'Gowri',
      gender:'Female',
      physics:100,
      maths:100,
      english:100
   },
   {  
      name:'Ram',
      gender:'Male',
      physics:78,
      maths:55,
      english:47
   },
   {  
      name:'Murugan',
      gender:'Male',
      physics:34,
      maths:89,
      english:78
   },
   {  
      name:'Jenifer',
      gender:'Female',
      physics:67,
      maths:88,
      english:90
   }
]
const cal=()=>{
candidates.forEach((score)=>{ 
Average=Math.round((score.physics + score.maths + score.english)/3)
console.log(Average)
})
}
cal()




// Using  arrow functions  with personal details and logicial functions && || write an if statement to check
//if they made payment ,quiz 1 if statment to 
//check if they made payment, or if their age is above 16 and
//check if name contians letter A

let Name= "SAMUEL"
let age=45
let payment=false
let fees =()=> {
if ( payment =false && age >=16 && Name.include("A"))
 {console.log
 ("'payment' been checked, your name contains letter 'A' congrats your  'age' is above 15, promoted to grade A")}

else if( payment=true ||age<16 && Name.include("A"))
 {console.log
 ("'payment' been checked, your name contains letter 'A',though your 'age' is below 16, grace find you your have promoted to grade B")}

 else if( payment=true && age >16 && Name.include("A"))
{console.log
("'payment'checked though half payment,your name contains letter 'A' your  'age' is above 16, promoted to grade C")}
}
fees()


//Create If or Else statement for scores of student
const scores =100
if(scores<=49){console.log("FAILD")}
else if(scores<=59) {console.log("Good")}
else if(scores<=69){console.log("Very Good")}
else if (scores>=70) {console.log("Excellent")}




//(asigment 1.0)
//group1
const a=7
const b =5
 const c =12
d=((a**b) +( b**c))/(a*c)

console.log(d)

//string
const mySugPresComredeName= "AMIEBI"
const mySenPoliceCommisionalName="whyte"
const MyChurchSeniorBishopName="claire"
const MyCyberLordNameIs="Lawrita"
const mySenArmyCommisionalName="Chief David"
console.log(mySugPresComredeName,mySenPoliceCommisionalName,
    MyChurchSeniorBishopName,MyCyberLordNameIs,mySenArmyCommisionalName )

    //number
const oldNumbersOfTheFamily =3
const evenNumbersOfTheFamily=4
const PrimeNumbersOfTheFamily=5
const compositeNumbersOfTheFamily=1
const complexNumbersOfTheFamily=10
const naturalNumbersOfTheFamily=9
console.log(oldNumbersOfTheFamily,evenNumbersOfTheFamily,
    PrimeNumbersOfTheFamily, compositeNumbersOfTheFamily,
    complexNumbersOfTheFamily,
)

// boolean
const AllOfUsAreMale=false
const AllOfUsAreFemale= false
const AllTheFemaleAreCute=false
const AllTheMaleAreCute=true
const AllTheBabiesAllCute=true

console.log( AllOfUsAreMale,AllOfUsAreFemale,AllTheFemaleAreCute,AllTheMaleAreCute,
AllTheBabiesAllCute
)

//undefined

let  AllOfUsAreCool
let AllOfUsAreGood
let AllTheFemaleAreBriliant 
let AllTheMaleAreGurus 
let AllTheBabiesAllBeautiful 
console.log(
    AllOfUsAreCool,AllOfUsAreGood,AllTheFemaleAreBriliant,
    AllTheMaleAreGurus,AllTheBabiesAllBeautiful 
)

//null
const oldNumbersOfTheFam=null
const evenNumsOfTheFamily= null
const pointNumbersOfTheFamily=null
const composNumbersOfTheFamily=null
const compNumbersOfTheFamily=null
const natNumbersOfTheFamily=null
console.log(oldNumbersOfTheFam,evenNumsOfTheFamily,pointNumbersOfTheFamily,composNumbersOfTheFamily,
    compNumbersOfTheFamily,natNumbersOfTheFamily)


    //create an objesct of five candidates writing (jamb assigment 1.1)
const candidate1={firstNames:"success", lastNames:"George", email:"success@gmail.com",
phoneNumbers:"0809", address:"#12.Odums",scores:"45",gender:"male",}
candidate2={
    firstNames:"David",lastNames:"Dango",email:"david@gmail.com",
     phoneNumbers:"0902",address:"#4.jephtha",scores:"45",gender:"male",
}
candidate3={firstNames:"James",lastNames:"Peter",email:"James@gmail.com",
 phoneNumbers:"0702",address:"#5.Alakahia", score:"200",Gender:"male"
}
candidate4={firstNames:"Cate",lastNames:"Samuel",email:"Cate@gmail.com", 
phoneNumbers:"0818",address:"#15.Back Of Chem", score:"150",Gender: "female"
}
candidate5={firstNames:"Faith",lastNames:"Precios",email:"Fith@gmail.com", 
phoneNumbers:"0905",address:"#9. Choba", scores:"230",gender:"female"

}

console.log(candidate1)
console.log(candidate2)
console.log(candidate3)
console.log(candidate4)
console.log(candidate5)



//crate an object of 15itmes 
const cars={namesOfCars:["Honder CR","Acura","Lexus Xr","Ford","Amanda","Subaru","Audi","Volvo","Mazda","TOyota Corolla","Toyata Camry","Honder","Accord","Lexus 350L","Lamborghini"],
colorOfCars:["black","blue","red","green","white","purple","white","balck","yellow","dark green","pink","black","white","black","red"],
prodYear:["2009","2001","2005","2017","2009","2020","2001","2002","2005","2009","2001","2004","2001","2009"]
}
console.log(cars.namesOfCars[0])
console.log(cars.colorOfCars[0])
console.log(cars.prodYear[0])
console.log(cars.namesOfCars[1])
console.log(cars.colorOfCars[2])
console.log(cars.prodYear[1])
//only viewed two items follow suit to view model of your choice






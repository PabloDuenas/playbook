const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

explorers.forEach(explorers => {
  console.log("Nombre de los explorers:%s, Stacks de los explorers:", explorers.name, explorers.stack)
})

const otherList = explorers.map(item => {
  const container = item.stack;
  
  return container;
}
  )

  console.log(otherList)


let lenguaje_js = explorers.filter(lenguaje => lenguaje.stack == "js")
console.log(lenguaje_js)

const user = explorers.find(user => user.city === "CDMX")

console.log(user)

const total = [10, 9, 3].reduce((a, b) => a + b);
console.log(total)


console.log(explorers.some(data => data.exercisesFinished = "true"))

const test = (isFinished) => isFinished === "true";

explorers.every(test);

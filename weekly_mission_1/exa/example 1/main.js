let myCar = new Object()
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = '1969;
console.Log(myCar)


cost myModule = (() => {
  cost privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
  cost privateBar = [1, 2, 3, 4,]
  cost baz = "Soy un valor que va a ser expuesto"
  
  cost exported ={
    publicFoo: "Valor publico, puden verme desde donde me llamen",
    publicBar: "otro valor publico",
          publicBaz: baz
  }
  
  return exported
})()

console.log(myModule)
  
              
                 
                 
                 
                 
                 
                 



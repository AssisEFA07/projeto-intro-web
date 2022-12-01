

let cars = [

    {
  
      "color": "purple",
  
      "type": "minivan",
  
      "registration": new Date('2017-01-03'),
  
      "capacity": 7
  
    },
  
    {
  
      "color": "red",
  
      "type": "station wagon",
  
      "registration": new Date('2018-03-03'),
  
      "capacity": 5
  
    }
  
  ];

  cars[0].novaprop = "TEste";
  
  for(car of cars){

    for (propriedade in car){

        console.log(`${propriedade}: ${car[propriedade]}`)

    }

console.log("----------------------");

}
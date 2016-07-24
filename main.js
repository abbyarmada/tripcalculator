
document.addEventListener("DOMContentLoaded", init);

function init(){
  console.log(document);
  console.log("DOM has been loaded");
  console.log(event);

  let mpg = 0;

  let milesPerGallon = document.querySelector(".car_mpg");
  milesPerGallon.addEventListener("change", function(event){
    console.log(event.target.value);
    mpg = event.target.value;
  });

  let cog = 0;

  let CostOfGas = document.querySelector(".cost_of_gas");
  CostOfGas.addEventListener("change", function(event){
    console.log(event.target.value);
    cog = event.target.value;
  });

  let dis = 0;

  let distanceTraveled = document.querySelector(".distance");
  distanceTraveled.addEventListener("change", function(event){
    console.log(event.target.value);
    dis = event.target.value;
  });
// total cost with da button!!!
  let totalCost = 0;

  let button = document.getElementById('totalCost');
  console.log(button);
  button.addEventListener("click", function(event){
    totalCost = ([cog / mpg] * dis);
    console.log(totalCost);
    totalCost = totalCost.toFixed(2);
      let total_number = document.querySelector(".total_number");
      total_number.innerHTML = ("$" + totalCost);
      total_number.style.color = "black";
  });
};

const buttonEl = document.getElementById('btn');
const unitEl = document.getElementById('unit');
const meterFeetEl = document.getElementById('meterFeet');
const literGallonEl = document.getElementById('literGallon');
const kiloPoundEl = document.getElementById('kiloPound');


function convert(value, fromUnit, toUnit){
    const conversionRates = {
        "meters_feets": 3.2808,
        "liters_gallons": 0.2642,
        "kilos_pounds": 2.2046,
    };

  const key = `${fromUnit}_${toUnit}`;
  const reverseKey = `${toUnit}_${fromUnit}`;
  let forwardRate = conversionRates[key];
  let reverseRate = conversionRates[reverseKey];

  if(!forwardRate && !reverseRate) {
    console.error("Invalid conversion units");
    return null;
  }

  if (!forwardRate && reverseRate) forwardRate = 1 / reverseRate;
  if (!reverseRate && forwardRate) reverseRate = 1 / forwardRate;

    const forwardResult = value * forwardRate;
    const reverseResult = value * reverseRate;

  return `${value} ${fromUnit}= ${forwardResult.toFixed(2)} ${toUnit} | ${value} ${toUnit} = ${reverseResult.toFixed(2)} ${fromUnit}`;
}

function valueUpdate() {
  const value = parseInt(prompt("Enter unit that you want to convert"));
  unitEl.textContent = value;
}

document.addEventListener("DOMContentLoaded", function () {
  valueUpdate();
});

function runConversion(){
    const value = parseInt(unitEl.textContent);
    meterFeetEl.textContent = convert(value, "meters", "feets");
    literGallonEl.textContent = convert(value, "liters", "gallons");
    kiloPoundEl.textContent = convert(value, "kilos", "pounds");
}

buttonEl.addEventListener("click", function() {
    runConversion();
});




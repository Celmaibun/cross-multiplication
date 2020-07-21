const d2 = document.querySelector('.d-2');
const d3 = document.querySelector('.d-3');
const d4 = document.querySelector('.d-4');
const calculate = document.querySelector('.text-wrapper__button');
const text = document.querySelector('.text-wrapper__text');

const alld = document.querySelectorAll('.lm');


function calculateCross() {


    let dValues = [];
    let leftSide, rightSide;
    let result;

    for(let i = 0; i < alld.length; i++){
        if(alld[i].value === 'x'){
            alld[i].value = 1;
        }
        let ret = alld[i].value.replace('%', '');
        dValues.push(ret);
    }

    leftSide = (dValues[0]/100) * dValues[3];
    rightSide = dValues[1] * (dValues[2]/100)
    result = rightSide / leftSide;

    console.log(leftSide);
    console.log(rightSide)
    console.log(dValues)
    console.log(result)

    text.textContent = `X = ${result}`
}



calculate.addEventListener('click', calculateCross)
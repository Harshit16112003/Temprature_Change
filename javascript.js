function convert(){
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temp = parseFloat(document.getElementById('temperature').value);
    var converttedValue;
    var resultUnit;
    // Perform conversion logic
    switch (fromUnit){
        case 'C':
            if (toUnit === 'F'){
                convertedValue = (temp * 9/5) +32;
                resultUnit = 'F';
            } else if (toUnit === 'K'){
                convertedValue = temp + 273.15;
                resultUnit = 'K';
            }else if (toUnit === 'R'){
                convertedValue = temp + 273.15;
                resultUnit = 'R';
            }else{
                convertedValue = temp;
                resultUnit = 'C';
            }
            break;
            case 'F':
            if (toUnit === 'C'){
                convertedValue = (temp -32) * 5/9;
                resultUnit = 'C';
            } else if (toUnit === 'K'){
                convertedValue = (temp -32) * 5/9 + 273.15;
                resultUnit = 'K';
            }else if (toUnit === 'R'){
                convertedValue = temp + 459.67;
                resultUnit = 'R';
            }else{
                convertedValue = temp;
                resultUnit = 'F';
            }
            break;
            case 'K':
            if (toUnit === 'C'){
                convertedValue = temp - 273.15;
                resultUnit = 'C';
            } else if (toUnit === 'K'){
                convertedValue = (temp - 273.15) * 9/5 +32;
                resultUnit = 'K';
            }else if (toUnit === 'R'){
                convertedValue = temp * 9/5;
                resultUnit = 'R';
            }else{
                convertedValue = temp;
                resultUnit = 'K';
            }
            break;
            case 'R':
            if (toUnit === 'C'){
                convertedValue = (temp - 491.67) * 5/9;
                resultUnit = 'C';
            } else if (toUnit === 'K'){
                convertedValue = temp - 459.67;
                resultUnit = 'K';
            }else if (toUnit === 'R'){
                convertedValue = temp * 5/9;
                resultUnit = 'R';
            }else{
                convertedValue = temp;
                resultUnit = 'R';
            }
            break;
    }
    document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + resultUnit;
    
}
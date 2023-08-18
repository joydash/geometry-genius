// triangle function 
document.getElementById('triangle-btn').addEventListener('click', function(){
    // step 1 : Get the triangleBaseInput
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseString = triangleBaseInput.value;
    const triangleBase = parseFloat(triangleBaseString);

    // Get the triangleWidthInput 
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightString = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightString);

    // validate the number 
    if(isNaN(triangleBase) || isNaN(triangleHeight)){
        alert('please provide a number')
        return;
    }

    // get the claculate triangle 
    const triangleResult = 0.5 * triangleBase * triangleHeight;
    // triangleResult.toFixed(2);

    // show the triangle area calculating result 
    const showTriangleResult = document.getElementById('show-area');
    showTriangleResult.innerText = triangleResult;
})

// Ractangle function 

document.getElementById("ractangle-btn").addEventListener('click', function(){
    // step 1 : get ractangle width 
    const ractangleWidthInput = document.getElementById('rectangle-width');
    const ractangleWidthString = ractangleWidthInput.value;
    const ractangleWidth = parseFloat(ractangleWidthString);

    // step 2 get ractangle length 
    const ractangleHeightInput = document.getElementById('rectangle-length');
    const ractangleHeightString = ractangleHeightInput.value;
    const ractangleHeight = parseFloat(ractangleHeightString);

    // validate the number 
    if(isNaN(ractangleWidth) || isNaN(ractangleHeight)){
        alert('please provide a number')
        return;
    }
    
    // stpe 3 calculate ractangle area 
    const ractangleResult = ractangleWidth * ractangleHeight;
    console.log(ractangleResult)

    // show the ractangle area calculating result
    const showRactangleResult = document.getElementById('showRactangle-area');
    showRactangleResult.innerText = ractangleResult;
    
})

// parallelogram function 

// step 0 : get the parallelogram-Button 
document.getElementById("parallelogram-btn").addEventListener('click', function(){
//    step 1 : get the parallelogram base 
    const parallelogramHeightInput = document.getElementById('parallelogram-base');
    const parallelogramHeightString = parallelogramHeightInput.value;
    const parallelogramBase = parseFloat(parallelogramHeightString);
   
//    step 2 : get the parallelogram height 
    const parallelogramHeightInp = document.getElementById('parallelogram-height')
    const parallelogramHString = parallelogramHeightInp.value;
    const parallelogramHeight = parseFloat(parallelogramHString);

    // validate the number 
    if(isNaN(parallelogramBase) || isNaN(parallelogramHeight)){
        alert('please provide a number')
        return;
    }

// show the parallerlogram area calculating result
     const parallelogramResult = parallelogramBase * parallelogramHeight;
     
// show the parallerlogram area calculating result
    const showParallelogramResult = document.getElementById('show-parallelogram-area');
    showParallelogramResult.innerText = parallelogramResult;

})

// Rhombus function 

// step 1 : get the Rhombus-btn 
document.getElementById('Rhombus-btn').addEventListener('click', function(){
    // step 1.5
    const d1Input = document.getElementById('d1');
    const d1InputString = d1Input.value;
    const d1 = parseFloat(d1InputString);
    
// step 2 
    const d2Input = document.getElementById('d2');
    const d2InputString = d2Input.value;
    const d2 = parseFloat(d2InputString);

    // validate the number 
    if(isNaN(d1) || isNaN(d2)){
        alert('please provide a number')
        return;
    }
    
// step 3 
    const d1AndD2Result = 0.5 * d1 * d2;
    console.log(d1AndD2Result)
    
// step 4 
    const showd1d2Result = document.getElementById('d1d2-show-area');
    showd1d2Result.innerText = d1AndD2Result;
    
})


// Pentagon Function 

// step 1 
document.getElementById('p-btn').addEventListener('click', function(){
// step 1.5 
    const pAreaInput = document.getElementById('p-area');
    const pAreaInputString = pAreaInput.value;
    const pArea = parseFloat(pAreaInputString);
    
// step 2 
    const bAreaInput = document.getElementById('p-base');
    const bAreaInputString = bAreaInput.value;
    const bArea = parseFloat(bAreaInputString);

// step 2.5 
    if(isNaN(pArea) || isNaN(bArea)){
        alert('please provide a number')
        return;
    }

// step 3 
    const pbResult =  0.5 * pArea * bArea;
    
// step 4 
    const showpbResult = document.getElementById('showP-area');
    showpbResult.innerText = pbResult;

})

// ellipse function 

// step 1 
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const paiInput = document.getElementById('pai-a');
    const paiInputString = paiInput.value;
    const paiResult = parseFloat(paiInputString);
    
// step 2 
    const paiBinput = document.getElementById('pai-b');
    const paiBinputString = paiBinput.value;
    const paiB = parseFloat(paiBinputString);
    
    // ValidityState
    if(isNaN(paiResult) || isNaN(paiB)){
        alert('please provide the number')
        return;
    }

// step 3 
    const paiAllResult = 3.1416 * paiResult * paiB;
    
// step 5 
    const ShowPaiResult = document.getElementById('show-elips-area');
    ShowPaiResult.innerText = paiAllResult;

})
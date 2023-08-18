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
    
    // stpe 3 calculate ractangle area 
    const ractangleResult = ractangleWidth * ractangleHeight;
    console.log(ractangleResult)

    // show the ractangle area calculating result
    const showRactangleResult = document.getElementById('showRactangle-area');
    showRactangleResult.innerText = ractangleResult;
    
})
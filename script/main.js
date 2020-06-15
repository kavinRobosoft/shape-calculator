var shapeList = ["Rectangle", "Circle", "Square", "Ellipse"];
var step = 1;
var selectedShape = "";
var finalResult = "";

getShape = (val) => {
    selectedShape = val.value;
    console.log(selectedShape);
}

dispShapeList = () => {

    let shapes = shapeList;
                
    for(var i=0; i<shapes.length; i++){

        let radioInput = document.createElement("input")
        radioInput.name = "shapeRadio";
        radioInput.type = "radio";
        radioInput.value = shapes[i];
        radioInput.innerHTML = shapes[i];
        radioInput.onclick = function() {getShape(this);};
        radioInput.style.float = "left";

        let li=document.createElement('li');
        li.innerHTML = shapes[i];
        li.style.width = "60%"

        document.getElementById("shapeList").appendChild(radioInput);        
        document.getElementById("shapeList").appendChild(li);

    }

}

goToStepOne = () =>{
    location.reload();
}

goToStepTwo = () =>{

    if(selectedShape){
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "block";
    document.getElementById("box3").style.display = "none";

    if(selectedShape !== "Circle"){
        document.getElementById("secondInput").style.display = "block";
        document.getElementById("dim").innerHTML = "Width";
    }
}
}

goToStepThree = () => {

    let value1 = Number(document.getElementById("inputValue1").value);
    let value2 = document.getElementById("inputValue2").value ? Number(document.getElementById("inputValue2").value) : "";

    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "block";

    value2 ?  document.getElementById("dimValue").innerHTML = value1 + "&" + value2 : document.getElementById("dimValue").innerHTML = value1;

    if(selectedShape ==="Circle"){
        this.circle(value1)
    }
    else{
        this.squareAndRectangle(value1, value2)

    }
}

circle = (radius) => {

    document.getElementById("resultArea").innerHTML =  2*Math.PI*radius;
}

squareAndRectangle = (value1, value2) =>{
    
    document.getElementById('resultArea').innerHTML = value1 * value2;

}
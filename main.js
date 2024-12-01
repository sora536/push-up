bodyWeightNumber = 50;
maxWeightNumber = 40;




bodyWeight = document.getElementById("bodyWeight");
maxWeight = document.getElementById("maxWeight");
pushUp = document.getElementById("pushUp");

bodyWeight.textContent = bodyWeightNumber;
maxWeight.textContent = maxWeightNumber;
reset();

function down(item){
    if(item == "bodyWeightNumber"){
        bodyWeightNumber -= 5;
        bodyWeight.textContent = bodyWeightNumber;
    }else if(item == "maxWeightNumber"){
        maxWeightNumber -= 5;
        maxWeight.textContent = maxWeightNumber;
    }
    reset();
}
function up(item){
    if(item == "bodyWeightNumber"){
        bodyWeightNumber += 5;
        bodyWeight.textContent = bodyWeightNumber;
    }else if(item == "maxWeightNumber"){
        maxWeightNumber += 5;
        maxWeight.textContent = maxWeightNumber;
    }
    reset();
}


function reset(){
    pushUpNumber = Math.ceil(40*(5*maxWeightNumber/(3*bodyWeightNumber)-1));
    pushUp.textContent =pushUpNumber;

}
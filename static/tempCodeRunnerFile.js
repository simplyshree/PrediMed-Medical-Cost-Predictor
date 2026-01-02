document.getElementById("predictForm").addEventListener("submit", async function(e){

e.preventDefault();

const data = {

        age: document.getElementById("age").value,
        sex: document.getElementById("sex").value,
        bmi: document.getElementById("bmi").value,
        children: document.getElementById("children").value,
        smoker: document.getElementById("smoker").value,
        region: document.getElementById("region").value



};

const response = await fetch("http://127.0.0.1:5000/predict",{
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)

});

const result = await response.json();

document.getElementById("result").innerText =
    "Estimated Insurance Cost: $" + result.prediction;

});
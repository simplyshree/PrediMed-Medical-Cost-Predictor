document.getElementById("predictForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        age: age.value,
        sex: sex.value,
        bmi: bmi.value,
        children: children.value,
        smoker: smoker.value,
        region: region.value
    };

    document.getElementById("result").innerText = "🌸 Calculating gently...";
    document.getElementById("happy").innerText = "";

    const response = await fetch("https://predimed.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    document.getElementById("result").innerText =
        "💰 Estimated Insurance Cost: $ " + result.prediction;

    document.getElementById("happy").innerText =
        "✨ You're doing great! Planning ahead is a beautiful act of self-care 🌷";
});

//login part event handler
document.getElementById("loginBtn").addEventListener("click", function () {
    document.getElementById("login").style.display = "";
    document.getElementById("transaction").style.display = "block";
});


//deposit part event handler
document.getElementById("depositBtn").addEventListener("click", function () {
    const depositValue = getInputValue("inputDeposit");

    updateSpanText("currentDeposit", depositValue);
    updateSpanText("currentBalance", depositValue);

    document.getElementById("inputDeposit").value = "";

});


function updateSpanText(id, depositValue) {
    const current = document.getElementById(id);
    let currentValue = parseFloat(current.innerText);
    let total = currentValue + depositValue;
    document.getElementById(id).innerText = total;
}

//withdraw event handler
document.getElementById("withdrawBtn").addEventListener("click", function () {
    let withdrawValue = getInputValue("withdrawInput");

    updateWithdrawText("currentWithdraw", withdrawValue)
    updateWithdrawText("currentBalance", -1 * withdrawValue)

    document.getElementById("withdrawInput").value = "";
});


function updateWithdrawText(id, withdrawValue) {
    const currentWithdraw = document.getElementById(id);
    let currentWithdrawValue = parseFloat(currentWithdraw.innerText);
    let totalWithdraw = currentWithdrawValue + withdrawValue;
    document.getElementById(id).innerText = totalWithdraw;
}


function getInputValue(id) {
    const input = document.getElementById(id);
    let inputValue = parseFloat(input.value);
    return inputValue;
}
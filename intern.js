function validateInputs() {
    const fields = ["FirstName", "LastName", "CheckInDate", "TotalNoofDays", "TotalNoofPersons", "AdvanceAmount"];
    for (let field of fields) {
        const value = document.getElementById(field).value;
        if (!value) {
            alert(`Please fill out the ${field.replace(/([A-Z])/g, ' $1')} field.`);
            return false;
        }
    }
    return true;
}

function calculateCosts() {
    if (!validateInputs()) return;

    const totalDays = parseInt(document.getElementById("TotalNoofDays").value);
    const totalPersons = parseInt(document.getElementById("TotalNoofPersons").value);
    const roomTypeCost = parseInt(document.getElementById("RoomType").value);
    const amenitiesCost = parseInt(document.getElementById("Amenities").value);
    const advanceAmount = parseInt(document.getElementById("AdvanceAmount").value);

    const roomCost = totalDays * roomTypeCost;
    const amenitiesTotal = totalDays * amenitiesCost;
    const additionalCharges = totalPersons > 2 ? (totalPersons - 2) * totalDays * 1000 : 0;
    const totalCost = roomCost + amenitiesTotal + additionalCharges;
    const balanceAmount = totalCost - advanceAmount;

    document.getElementById("TotalRoomCost").value = roomCost;
    document.getElementById("TotalAmenitiesCost").value = amenitiesTotal;
    document.getElementById("AdditionalCharges").value = additionalCharges;
    document.getElementById("TotalCost").value = totalCost;
    document.getElementById("BalanceAmount").value = balanceAmount;
}

document.getElementById("calculateButton").addEventListener("click", calculateCosts);

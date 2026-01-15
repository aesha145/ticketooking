function calculate() {
    let adult = document.getElementById("adult").value || 0;
    let child = document.getElementById("child").value || 0;

    let total = (adult * 500) + (child * 300);

    document.getElementById("result").innerHTML =
        "Total Price: ₹" + total;
}
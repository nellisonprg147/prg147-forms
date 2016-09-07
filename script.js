var $ = function (id) {
    return document.getElementById(id);
};


var calculate_cost = function () {
    // front yard
    var fy_length = parseFloat($("yrd_length_f").value);
    var fy_width = parseFloat($("yrd_width_f").value);
    // back yard
    var by_length = parseFloat($("yrd_length_b").value);
    var by_width = parseFloat($("yrd_width_b").value);
    // left side yard
    var lsy_length = parseFloat($("yrd_length_ls").value);
    var lsy_width = parseFloat($("yrd_width_ls").value);
    // right side yard
    var rsy_length = parseFloat($("yrd_length_rs").value);
    var rsy_width = parseFloat($("yrd_width_rs").value);

    // math to figure out each yard
    var front_yard = fy_length * fy_width;
    var back_yard = by_length * by_width;
    var left_yard = lsy_length * lsy_width;
    var right_yard = rsy_length * rsy_width;

    var total_sqf = front_yard + back_yard +left_yard + right_yard;




    if (isNaN(total_sqf)) {
        alert("Check your measurements, there seems to be an issue.")
    }
    else {
        var total = ((total_sqf) * .1);
        total = total.toFixed(2);
        $("mowing_cost").value = "$ " + total;
    }
};
window.onload = function () {
    $("submit").onclick = calculate_cost;

};
document.addEventListener("DOMContentLoaded", function () {

    // modern input
    const modern_wrappers = document.querySelectorAll(".modern-wrapper");
    modern_wrappers.forEach(function (modern_wrapper) {
        var reset_button = modern_wrapper.querySelector(".reset-button");
        var modern_input = modern_wrapper.querySelector(".modern-input");
        reset_button.addEventListener("click", function () {
            modern_input.value = null;
        });
    });

});
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("priceRange");
    const output = document.getElementById("sliderValue");
    output.innerHTML = `$${slider.value}`;

    function updateSliderBackground(value) {
        const min = slider.min;
        const max = slider.max;
        const percentage = ((value - min) / (max - min)) * 100;
        slider.style.background = `linear-gradient(to right, #007bff ${percentage}%, #ddd ${percentage}%)`;
    }

    slider.oninput = function() {
        output.innerHTML = `$${this.value}`;
        updateSliderBackground(this.value);
    }

    // Initial background update
    updateSliderBackground(slider.value);
});

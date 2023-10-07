document.querySelector("#files").onchange = function () {
    const fileName = this.files[0]?.name;
    const label = document.querySelector("label[for=files]");
    label.innerText = fileName ?? "Browse Files";
};

const sliderEl = document.querySelector("#range")
const sliderValue = document.querySelector(".range__value")

sliderEl.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;

    sliderValue.textContent = tempSliderValue;

    const progress = (tempSliderValue / sliderEl.max) * 100;

    sliderEl.style.background = `linear-gradient(to right, #ccc ${progress}%, #ccc ${progress}%)`;
})


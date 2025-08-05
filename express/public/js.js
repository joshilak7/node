let btn = document.querySelectorAll(".btn");

for (let bt of btn) {
    bt.addEventListener("click", () => {
        console.log("Button clicked");     
    });
}
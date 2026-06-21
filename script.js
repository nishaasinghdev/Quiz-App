let selectedCategory = "";

const buttons = document.querySelectorAll(".category-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.innerText;

        console.log("Selected:", selectedCategory);

    });

});

const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {

    if(selectedCategory === ""){
        alert("Please select a category!");
        return;
    }

    localStorage.setItem("selectedCategory", selectedCategory);

    window.location.href = "quiz.html";

});
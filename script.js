
const element = document.getElementById("regis-form");
console.log(element);
element.addEventListener("click", function() {
    console.log("Bonjour ---------");
    document.getElementById("login-page").remove();
});

// console.log("gang !")
function changePassText(item) {
    let variable = document.querySelector("." + item);
    if (variable.type === "password"){
        variable.type = "text"
    }
    else variable.type = "password"
}

document.getElementById('form__centre__login').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event.elements)
    let nameLine = document.querySelector('.nameInputMain__login').value
    document.querySelector('.up__sign__centre__login').innerHTML = nameLine + ". HI!"
    document.querySelector('.form__centre__login').style.display = 'none'
    document.querySelector('.registerRef__centre__login').style.display = 'none'
});

function newFunction(){}
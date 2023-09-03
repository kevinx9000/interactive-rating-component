const ratingsForm = document.getElementById("ratings-form")
const grid = document.getElementById("grid")

ratingsForm.addEventListener("submit", function (event) {
    event.preventDefault()
    let selection = document.querySelector('input[type="radio"]:checked').value
    grid.innerHTML = `
    <div class="content-container" id="thank-you-content">
            <img src="images/illustration-thank-you.svg" alt="" id="illustration-thank-you">
            <p class="result-bar">You selected <span id="selection">${selection}</span> out of 5</p>
            <h1 class="heading">Thank you!</h1>
            <p class="body-text">We appreciate you taking the time to give a rating. If you ever need more support, don&#39t
            hesitate to get in touch!</p>
        </div>`
})
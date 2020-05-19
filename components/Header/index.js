// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    // Creating Element

    const header = document.createElement ('div')
    const dates = document.createElement ('span')
    const title = document.createElement ('h1')
    const temps = document.createElement ('span')



    // Creating HTML Structure

    header.appendChild(dates)
    header.appendChild(title)
    header.appendChild(temps)




    // Creating classes

    header.classList.add('header')
    header.classList.add('date')
    header.classList.add('temp')



    // Adding content

    dates.innerHTML = 'SMARCH 28, 2019'
    title.innerHTML = 'Lambda Times'
    temps.innerHTML = '98°'

    return header


}

const container = document.querySelector('.header-container').appendChild(Header())

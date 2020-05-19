// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
    const dom = document.querySelector('.topics')
    response.data.topics.forEach(element => {
        dom.appentChild(createTabs(element))
    })
})
.catch((error) => {
    console.log('Network Error')
    console.log(error)
})

const createTabs = (object) => {

    // Creating Elements

    const tabs1 = document.createElement('div')

    //Adding Classes

    tabs1.innerHTML = object

return tabs1
}
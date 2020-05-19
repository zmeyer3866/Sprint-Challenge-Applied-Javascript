// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM

axios.get('https://lambda-times-backend.herokupp.com/articles')
    .then((respone) => {
        console.log(response);
        const cardsCont = document.querySelector('.cards-container');
        const arrayValues = Object.values(response.data.articles);
        arrayValues.forEach(element => {
            element.forEach(article => {
                cardsCont.appendChild(createCard(article));
                console.log('CreateCard');

            })
        })
    })

.catch((error) => {

})

function createCard(object){

    //Creating Elements

    const div = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')
    span.innerHTML = "By " + object.authorName
    div2.innerHTML = object.headline

    // Creating Structure

    div.appendChild(div2)
    div.appendChild(div3)
    div3.appendChild(div4)
    div3.appendChild(span)
    div4.appendChild(img)

    //Adding Classes

    div.classList.add('card')
    div2.classList.add('headline')
    div3.classList.add('author')
    div4.classList.add('img-container')
    img.src = object.authorPhoto

    return div
}
fetch('https://ghibliapi.herokuapp.com/films')
.then((response) => response.json())
.then((films) => {

    let dropDown = document.querySelector('#dropdown');
    for (let film of films) {
        const option = document.createElement('option')
        option.setAttribute('value', film.title)
        option.textContent = film.title
        dropDown.append(option);

        
    
        dropDown.addEventListener('change', () => {
            for (let film of films) {
                if (dropDown.value === film.title) {
                    let display = document.querySelector('#display-info');
                    let name = film.title;
                    let year = film.release_date;
                    let description = film.description;
                    display.innerHTML = 
                    `<h3><strong>${name}</strong></h3><p>${year}</p><p>${description}</p>`
                }
            }
        })


    }
    let form = document.querySelector('form')
    .addEventListener('submit', (event) => {
        event.preventDefault()
        const userInput = event.target.review.value;
        const ul = document.querySelector('ul')
        const li = document.createElement('li')
        for (let film of films) {
            if (dropDown.value === film.title) {

                li.innerHTML = `<strong><b>${film.title}</strong>:</b> ${userInput}`;
                ul.append(li);
        
        
                document.querySelector('form').reset();
            }


        }
        }
     )

    
    
    })

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: ["Sci-Fi", "Action", "Thriller"],
    rating: 8.8,
    duration: 148,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    isOscarWinner: true
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    duration: 152,
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger"],
    isOscarWinner: true
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: ["Sci-Fi", "Drama"],
    rating: 8.6,
    duration: 169,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway"],
    isOscarWinner: true
  },
  {
    id: 4,
    title: "Titanic",
    year: 1997,
    genre: ["Romance", "Drama"],
    rating: 7.9,
    duration: 195,
    director: "James Cameron",
    cast: ["Leonardo DiCaprio", "Kate Winslet"],
    isOscarWinner: true
  },
  {
    id: 5,
    title: "Avatar",
    year: 2009,
    genre: ["Sci-Fi", "Adventure"],
    rating: 7.8,
    duration: 162,
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana"],
    isOscarWinner: true
  },
  {
    id: 6,
    title: "The Matrix",
    year: 1999,
    genre: ["Sci-Fi", "Action"],
    rating: 8.7,
    duration: 136,
    director: "The Wachowskis",
    cast: ["Keanu Reeves", "Laurence Fishburne"],
    isOscarWinner: true
  },
  {
    id: 7,
    title: "Forrest Gump",
    year: 1994,
    genre: ["Drama", "Romance"],
    rating: 8.8,
    duration: 142,
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright"],
    isOscarWinner: true
  },
  {
    id: 8,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: ["Drama"],
    rating: 9.3,
    duration: 142,
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman"],
    isOscarWinner: false
  },
  {
    id: 9,
    title: "Gladiator",
    year: 2000,
    genre: ["Action", "Drama"],
    rating: 8.5,
    duration: 155,
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix"],
    isOscarWinner: true
  }
];


const listRef = document.querySelector(".list")

console.log(listRef);


let currentMovies = movies

const STORAGE_KEY = "dataMovie"

const parseMovies = localStorage.getItem("dataMovie")
if(parseMovies){
  currentMovies = JSON.parse(parseMovies)
  console.log(currentMovies);
}

console.log(currentMovies);


function createitem(array) {
    const item = array.map(({id, title, year, rating, isOscarWinner, director}) => {
        return `
        <li class="item" id="${id}">
    <h2>Назва:${title}</h2>
    <p>Рік:${year}</p>
    <p>Рейтинг:${rating}</p>
    <h3>Режисер:${director}</h3>
    <p>Оскар:${isOscarWinner}</p>
    <button type="button" class="delete">DELETE</button>
</li>`
    }).join("")
    listRef.innerHTML = item
}

createitem(currentMovies)


listRef.addEventListener("click", (evt) => {
  if(evt.target.nodeName !== "BUTTON"){
    return
  }

  const id = Number(evt.target.closest("li").id)
  const idx = currentMovies.findIndex((movie) => movie.id === id)

  currentMovies.splice(idx, 1)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentMovies))

  createitem(currentMovies)
  
})

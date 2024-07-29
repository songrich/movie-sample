

// 2) fetch api를 async/await 문법으로 변환하기 
// 3) fetch결과물을 response 변수에 저장하기
// 4) response변수를 json객체로 변환해서 movies변수에 저장하기
// 본인의 API 키를 넣어주셔야 합니다.





// 5) movie 컨테이너 가져오기
// 6) movies 변수를 반복문으로 순회하면서 컨테이너에 card html코드를 추가하기
// 본인의 API 키를 넣어주셔야 합니다.
const API_KEY = '92de62d6d3b7ff2c29772d3e05acba2b';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // 이후 데이터 처리
  })
  .catch(error => console.error('Error:', error));
function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.overview}</p>
      <span>Rating: ${movie.vote_average}</span>
    `;
  card.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));
  return card;
}


fetch(URL)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;
    const movieContainer = document.getElementById('movie-container');
    movies.forEach(movie => {
      const card = createMovieCard(movie);
      movieContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error:', error));


document.getElementById('search-button').addEventListener('click', () => {
  const query = document.getElementById('search-input').value.toLowerCase();
  const movieCards = document.querySelectorAll('.movie-card');
  movieCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});








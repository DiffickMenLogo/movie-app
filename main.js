var find = '';
var apiLink = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c`;
const img = document.querySelectorAll('.img');
const info = document.querySelectorAll('.info');
const overview = document.querySelectorAll('.overview');
const items = document.querySelectorAll('.item');
const search = document.getElementById('search');

async function getData() {
    console.log(apiLink);
    const res = await fetch(apiLink);
    const data = await res.json();
    let i = 0;
    img.forEach(e => {
        e.src = `https://image.tmdb.org/t/p/w1280${data.results[i].poster_path}`;
        info[i].innerHTML = `${data.results[i].original_title}        ${data.results[i].vote_average}`;
        overview[i].innerHTML = data.results[i].overview;
        i++;
    })
    console.log(data);
}
getData();

search.addEventListener('keydown', function(e) {
    if(e.keyCode === 13){
        console.log(search.value);
        find = search.value;
        apiLink = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${find}`;
        getData();
    }
} )

items.forEach(function(el, ind) {
    el.addEventListener('mouseenter', function(){
        overview[ind].style.transform = 'translateY(1%)';
    });
    el.addEventListener('mouseleave', function() {
        overview[ind].style.transform = 'translateY(101%)';
    });
})




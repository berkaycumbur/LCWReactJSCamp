var resim = document.getElementsByClassName("grid-item")

function rastgelesayi(number) {
    return Math.floor(Math.random() * number);
  }
  

for(i=0;i<resim.length;i++){
    resim[i].appendChild(document.createElement('img')).src = 'https://source.unsplash.com/random/300x300/?sig='+ rastgelesayi(100);
}

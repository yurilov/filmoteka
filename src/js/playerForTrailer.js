const trailers = [
  {
    src: "https://www.youtube.com/embed/JfVOs4VSpmA",
    alt: 'Spider-Man: No Way Home',
  },
  {
    src: "https://www.youtube.com/embed/Y9dr2zw-TXQ",
    alt: 'Fantastic Beasts: The Secrets of Dumbledore',
  },
  {
    src: 'https://www.youtube.com/embed/mqqft2x_Aa4',
    alt: 'The Batman',
  },
];

const listWithId = document.querySelector('.backdrop');

listWithId.addEventListener("click", openAlt);

function openAlt(event) {

  if (event.target.classList.contains("movie__img")) {
    const nameAlt = event.target.getAttribute("alt");
    createPlayer(nameAlt);
    return
  }

};

function createPlayer(nameAlt) {

  trailers.forEach(({src, alt}) => {
    if (nameAlt === alt) {
      const player = document.createElement("iframe");
      listWithId.append(player);
      console.log(src);
    }
  });

  // <iframe 
  //     width="560" 
  //     height="315" 
  //     src="https://www.youtube.com/embed/mqqft2x_Aa4" 
  //     title="YouTube video player"
  //     frameborder="0" 
  //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //     allowfullscreen>
  //   </iframe>
};
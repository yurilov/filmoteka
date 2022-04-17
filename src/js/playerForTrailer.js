// const basicLightbox = require('basiclightbox')

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
listWithId.addEventListener("click", openPlayer);
listWithId.addEventListener("click", closePlayer);


function openPlayer(event) {
  event.preventDefault();
  
  if (!event.target.classList.contains("movie__img")) {
    return
  };

  const nameAlt = event.target.getAttribute("alt");
  createPlayer(nameAlt);
};


function createPlayer(nameAlt) {

  trailers.forEach(({ src, alt }) => {

    if (nameAlt === alt) {
      console.log(src);

      // basicLightbox.create(`
      //   <iframe width="560" height="315" src="${src}" frameborder="0" allowfullscreen></iframe>
      // `).show()


      const beckdropPlayer = document.createElement("div");
      beckdropPlayer.classList.add("beckdrop-player");
      listWithId.append(beckdropPlayer);

      const player = document.createElement("iframe");
      player.classList.add("iframe");
      addAttributesPlayer(player, src);

      beckdropPlayer.append(player);
    };

  });  
};


function addAttributesPlayer(player, src) { 

  player.setAttribute("width", "560");
  player.setAttribute("height", "315");
  player.setAttribute("src", src);
  player.setAttribute("title", "YouTube video player");
  player.setAttribute("frameborder", "0");
  player.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");

};


function closePlayer(event) { 
  event.preventDefault();

  if (!event.target.classList.contains("beckdrop-player")) {
    return
  };

  if (listWithId.querySelector('.beckdrop-player')) { 
    const beckdropPlayer = document.querySelector('.beckdrop-player');
    beckdropPlayer.remove();
    disabled = false;
    console.log("beckdrop-player удален");
  };
};

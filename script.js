const cards = [
  {
    image: "https://picsum.photos/id/10/300/200",
    title: "Alpine Peaks",
    description: "A breathtaking view of the snow-capped Himalayan range at sunrise."
  },
  {
    image: "https://picsum.photos/id/20/300/200",
    title: "Pacific Blue",
    description: "Deep sea exploration featuring bioluminescent creatures and coral reefs."
  },
  {
    image: "https://picsum.photos/id/30/300/200",
    title: "Mystic Woods",
    description: "An ancient redwood forest shrouded in morning mist and tranquility."
  },
  {
    image: "https://picsum.photos/id/40/300/200",
    title: "Urban Neon",
    description: "The vibrant energy of Tokyo's Shibuya Crossing during rush hour."
  }
];

const loadBtn = document.getElementById('load-btn');
const container = document.getElementById('container');

loadBtn.addEventListener('click', () => {
    container.innerHTML = ''; 
    cards.forEach(card => {
        const cardElement = document.createElement('article');
        cardElement.className = 'card';
        
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.title}">
            <div class="card-content">
                <h3>${card.title}</h3>
                <p>${card.description}</p>
            </div>
        `;
        
        container.appendChild(cardElement);
    });
});
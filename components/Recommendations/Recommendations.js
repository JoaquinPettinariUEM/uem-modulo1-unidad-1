const recommendationsData = [
  {
    title: "Reforestación en Patagonia",
    subtitle: "Ayudanos a plantar 10.000 árboles nativos después de los incendios.",
    date: "12 Ene 2025",
    location: "El Bolsón, Río Negro",
    img: "https://placehold.co/600x350?text=Patagonia",
  },
  {
    title: "Salvemos a los Perros del Tren",
    subtitle:
      "Campaña de castración y rescate de perros callejeros que viven en la terminal.",
    date: "03 Feb 2025",
    location: "Retiro, Buenos Aires",
    img: "https://placehold.co/600x350?text=Perros",
  },
  {
    title: "Biblioteca Comunitaria Rodante",
    subtitle:
      "Una combi convertida en una biblioteca para llevar libros a zonas rurales.",
    date: "28 Dic 2024",
    location: "Jujuy, Argentina",
    img: "https://placehold.co/600x350?text=Biblioteca",
  },
  {
    title: "Energía Solar para Escuelas",
    subtitle:
      "Instalación de paneles solares para reducir costos y mejorar infraestructura.",
    date: "09 Ene 2025",
    location: "San Juan, Argentina",
    img: "https://placehold.co/600x350?text=Energia+Solar",
  },
];

function Recommendations() {
  return `
    <section class="recommendations">
      <div class="section-title-container">
        <h3>Recomendaciones</h3>
        <span>Ver todos</span>
      </div>

      <div class="carousel">
        ${recommendationsData
          .map(
            item => `
              <div class="carousel-item">
                <img src="${item.img}" class="carousel-img" />

                <div class="carousel-body">
                  <div class="carousel-meta">
                    <span class="meta-date">${item.date}</span>
                    <span class="meta-location">${item.location}</span>
                  </div>

                  <h5 class="carousel-title">${item.title}</h5>
                  <p class="carousel-subtitle">${item.subtitle}</p>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

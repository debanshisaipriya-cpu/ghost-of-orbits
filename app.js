
const equipment = [
  {
    name: "Surveyor 1",
    place: "Moon",
    year: "1966",
    mission: "Surveyor Programme",
    description: "A robotic lunar lander that helped demonstrate successful soft landings on the Moon.",
    legacy: "Its observations helped prepare for later human lunar exploration.",
    link: "https://science.nasa.gov/mission/surveyor-1/"
  },
  {
    name: "Apollo 15 Lunar Rover",
    place: "Moon",
    year: "1971",
    mission: "Apollo 15",
    description: "The first lunar rover used by astronauts on the Moon.",
    legacy: "It expanded lunar exploration and geological sample collection.",
    link: "https://www.nasa.gov/mission/apollo-15/"
  },
  {
    name: "Sojourner",
    place: "Mars",
    year: "1997",
    mission: "Mars Pathfinder",
    description: "The first successful rover to operate on Mars.",
    legacy: "It demonstrated robotic mobility and exploration technologies.",
    link: "https://science.nasa.gov/mission/mars-pathfinder/"
  },
  {
    name: "Spirit",
    place: "Mars",
    year: "2004",
    mission: "Mars Exploration Rover",
    description: "A rover that investigated Martian rocks and soil.",
    legacy: "It found evidence of ancient water activity on Mars.",
    link: "https://science.nasa.gov/mission/mer-spirit/"
  },
  {
    name: "Opportunity",
    place: "Mars",
    year: "2004",
    mission: "Mars Exploration Rover",
    description: "A long-running Mars rover studying planetary geology.",
    legacy: "It operated for almost 15 years and transformed our understanding of Mars.",
    link: "https://science.nasa.gov/mission/mer-opportunity/"
  },
  {
    name: "Phoenix Lander",
    place: "Mars",
    year: "2008",
    mission: "Phoenix",
    description: "A robotic lander that examined the Martian Arctic.",
    legacy: "It confirmed water ice beneath the Martian surface.",
    link: "https://science.nasa.gov/mission/phoenix/"
  }
];

function showMachines() {
  const search = document
    .getElementById("search")
    .value.toLowerCase();

  const container = document.getElementById("machines");

  const results = equipment.filter(item =>
    (
      item.name + " " +
      item.place + " " +
      item.mission
    ).toLowerCase().includes(search)
  );

  if (results.length === 0) {
    container.innerHTML = "<p>No equipment found. Try another search.</p>";
    return;
  }

  container.innerHTML = results.map(item => `
    <article class="machine">
      <small>${item.place} · ${item.year}</small>
      <h3>${item.name}</h3>
      <p><b>Mission:</b> ${item.mission}</p>
      <p>${item.description}</p>
      <p><b>Legacy:</b> ${item.legacy}</p>
      <a href="${item.link}" target="_blank"
         rel="noopener noreferrer">Read NASA mission information ↗</a>
    </article>
  `).join("");
}

showMachines();

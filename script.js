// Starter property data. Each object becomes one card on the page.
let properties = [
  {
    title: "Shoreditch Canal Apartment",
    location: "London",
    address: "Canal House, Shoreditch, E2",
    label: "New instruction",
    price: 735000,
    bedrooms: 2,
    bathrooms: 2,
    area: "812 sq ft",
    type: "Apartment",
    status: "For sale",
    tenure: "Leasehold - 118 years",
    epc: "B",
    councilTax: "Band D",
    added: "Added today",
    agent: "Sarah Khan",
    phone: "020 1234 5678",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    description: "A polished two-bedroom canal-side apartment with a private balcony, secure entry and an easy walk to Shoreditch High Street."
  },
  {
    title: "Jewellery Quarter Apartment",
    location: "Birmingham",
    address: "Carver Street, Jewellery Quarter, B1",
    label: "City centre",
    price: 415000,
    bedrooms: 2,
    bathrooms: 2,
    area: "905 sq ft",
    type: "Apartment",
    status: "For sale",
    tenure: "Leasehold - 142 years",
    epc: "B",
    councilTax: "Band C",
    added: "Added yesterday",
    agent: "Miles Carter",
    phone: "0121 555 0142",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    description: "A smart second-floor apartment in the Jewellery Quarter with open-plan living, lift access and secure allocated parking."
  },
  {
    title: "Chorlton Townhouse",
    location: "Manchester",
    address: "Beech Avenue, Chorlton, M21",
    label: "Family move",
    price: 525000,
    bedrooms: 4,
    bathrooms: 2,
    area: "1,486 sq ft",
    type: "Townhouse",
    status: "For sale",
    tenure: "Freehold",
    epc: "C",
    councilTax: "Band E",
    added: "Added 3 days ago",
    agent: "Amara Lewis",
    phone: "0161 555 0188",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
    description: "A well-kept family townhouse near Chorlton village with flexible living space, a south-facing garden and driveway parking."
  },
  {
    title: "Leeds Dockside Flat",
    location: "Leeds",
    address: "Dock Street, Leeds, LS10",
    label: "Waterfront",
    price: 285000,
    bedrooms: 2,
    bathrooms: 1,
    area: "690 sq ft",
    type: "Apartment",
    status: "For sale",
    tenure: "Leasehold - 991 years",
    epc: "C",
    councilTax: "Band B",
    added: "Added 1 week ago",
    agent: "Sarah Khan",
    phone: "0113 555 0120",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    description: "A bright waterside flat with floor-to-ceiling windows, an open-plan kitchen and quick access to Leeds city centre."
  },
  {
    title: "Bishopston Victorian Home",
    location: "Bristol",
    address: "Elm Grove, Bishopston, BS7",
    label: "Garden home",
    price: 625000,
    bedrooms: 3,
    bathrooms: 1,
    area: "1,214 sq ft",
    type: "House",
    status: "For sale",
    tenure: "Freehold",
    epc: "D",
    councilTax: "Band D",
    added: "Added 2 weeks ago",
    agent: "Miles Carter",
    phone: "0117 555 0195",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
    description: "A characterful Victorian home with period detail, a modern kitchen extension and a private rear garden."
  },
  {
    title: "Baltic Triangle Studio",
    location: "Liverpool",
    address: "Baltic Triangle, Liverpool, L1",
    label: "First step",
    price: 175000,
    bedrooms: 1,
    bathrooms: 1,
    area: "438 sq ft",
    type: "Studio",
    status: "For sale",
    tenure: "Leasehold - 155 years",
    epc: "C",
    councilTax: "Band A",
    added: "Added 2 weeks ago",
    agent: "Amara Lewis",
    phone: "0151 555 0108",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    description: "A compact, well-designed studio with exposed brick, high ceilings and strong rental potential in the Baltic Triangle."
  },
  {
    title: "Clifton Crescent Apartment",
    location: "Bristol",
    address: "Royal York Crescent, Clifton, BS8",
    label: "Period view",
    price: 695000,
    bedrooms: 2,
    bathrooms: 2,
    area: "1,020 sq ft",
    type: "Apartment",
    status: "For sale",
    tenure: "Leasehold - 121 years",
    epc: "C",
    councilTax: "Band E",
    added: "Added 3 weeks ago",
    agent: "Miles Carter",
    phone: "0117 555 0195",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=900&q=80",
    description: "A refined Clifton apartment with tall sash windows, generous room proportions and views across a classic Georgian crescent."
  },
  {
    title: "Kensington Garden Maisonette",
    location: "London",
    address: "Lexham Gardens, Kensington, W8",
    label: "Prime address",
    price: 1185000,
    bedrooms: 3,
    bathrooms: 2,
    area: "1,340 sq ft",
    type: "Apartment",
    status: "For sale",
    tenure: "Share of freehold",
    epc: "C",
    councilTax: "Band G",
    added: "Added 1 month ago",
    agent: "Sarah Khan",
    phone: "020 1234 5678",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
    description: "A calm lower-ground maisonette with private garden access, elegant reception space and a strong Kensington location."
  },
  {
    title: "Didsbury Garden House",
    location: "Manchester",
    address: "Lapwing Lane, Didsbury, M20",
    label: "Leafy living",
    price: 760000,
    bedrooms: 4,
    bathrooms: 2,
    area: "1,830 sq ft",
    type: "House",
    status: "For sale",
    tenure: "Freehold",
    epc: "C",
    councilTax: "Band F",
    added: "Added 1 month ago",
    agent: "Amara Lewis",
    phone: "0161 555 0188",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80",
    description: "A polished family house near Didsbury village with a deep rear garden, utility space and a bright kitchen extension."
  },
  {
    title: "Harborne Mews Townhouse",
    location: "Birmingham",
    address: "High Street, Harborne, B17",
    label: "Village feel",
    price: 485000,
    bedrooms: 3,
    bathrooms: 2,
    area: "1,126 sq ft",
    type: "Townhouse",
    status: "For sale",
    tenure: "Freehold",
    epc: "B",
    councilTax: "Band D",
    added: "Added 5 weeks ago",
    agent: "Miles Carter",
    phone: "0121 555 0142",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    description: "A quietly tucked-away townhouse with secure parking, three balanced bedrooms and fast access to Harborne High Street."
  },
  {
    title: "Headingley Stone Terrace",
    location: "Leeds",
    address: "Grove Lane, Headingley, LS6",
    label: "Character buy",
    price: 365000,
    bedrooms: 3,
    bathrooms: 1,
    area: "1,040 sq ft",
    type: "House",
    status: "For sale",
    tenure: "Freehold",
    epc: "D",
    councilTax: "Band C",
    added: "Added 6 weeks ago",
    agent: "Sarah Khan",
    phone: "0113 555 0120",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
    description: "A handsome stone terrace with original fireplaces, a tidy courtyard and strong links into the universities and city centre."
  },
  {
    title: "Hove Seafront Apartment",
    location: "Brighton",
    address: "Kingsway, Hove, BN3",
    label: "Coastal calm",
    price: 545000,
    bedrooms: 2,
    bathrooms: 1,
    area: "780 sq ft",
    type: "Apartment",
    status: "For sale",
    tenure: "Leasehold - 136 years",
    epc: "C",
    councilTax: "Band D",
    added: "Added 6 weeks ago",
    agent: "Amara Lewis",
    phone: "01273 555 018",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    description: "A clean-lined seafront apartment with direct promenade access, bright interiors and a balcony catching evening light."
  },
  {
    title: "Nottingham Lace Market Loft",
    location: "Nottingham",
    address: "High Pavement, Lace Market, NG1",
    label: "Warehouse loft",
    price: 325000,
    bedrooms: 2,
    bathrooms: 2,
    area: "940 sq ft",
    type: "Apartment",
    status: "For sale",
    tenure: "Leasehold - 167 years",
    epc: "B",
    councilTax: "Band C",
    added: "Added 7 weeks ago",
    agent: "Miles Carter",
    phone: "0115 555 0162",
    image: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=900&q=80",
    description: "A converted Lace Market loft with exposed brick, tall ceilings, two bathrooms and a strong city-centre rental profile."
  },
  {
    title: "Jesmond Park Villa",
    location: "Newcastle",
    address: "Osborne Road, Jesmond, NE2",
    label: "Grand villa",
    price: 895000,
    bedrooms: 5,
    bathrooms: 3,
    area: "2,420 sq ft",
    type: "House",
    status: "For sale",
    tenure: "Freehold",
    epc: "D",
    councilTax: "Band G",
    added: "Added 2 months ago",
    agent: "Sarah Khan",
    phone: "0191 555 0147",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
    description: "A substantial Jesmond villa with generous reception rooms, mature planting and flexible space across three floors."
  },
  {
    title: "Cardiff Bay Duplex",
    location: "Cardiff",
    address: "Bute Crescent, Cardiff Bay, CF10",
    label: "Duplex living",
    price: 395000,
    bedrooms: 2,
    bathrooms: 2,
    area: "1,010 sq ft",
    type: "Apartment",
    status: "For sale",
    tenure: "Leasehold - 144 years",
    epc: "B",
    councilTax: "Band D",
    added: "Added 2 months ago",
    agent: "Amara Lewis",
    phone: "029 5555 0130",
    image: "https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=900&q=80",
    description: "A split-level Cardiff Bay apartment with water views, double-height glazing and two secure parking spaces."
  },
  {
    title: "Edinburgh New Town Flat",
    location: "Edinburgh",
    address: "Dundas Street, New Town, EH3",
    label: "Stone classic",
    price: 575000,
    bedrooms: 2,
    bathrooms: 1,
    area: "930 sq ft",
    type: "Apartment",
    status: "For sale",
    tenure: "Freehold",
    epc: "C",
    councilTax: "Band E",
    added: "Added 2 months ago",
    agent: "Miles Carter",
    phone: "0131 555 0170",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=900&q=80",
    description: "A beautifully proportioned New Town flat with working shutters, fine cornicing and calm views over stone streets."
  }
];

const propertyList = document.getElementById("propertyList");
const featuredList = document.getElementById("featuredList");
const hero = document.getElementById("hero");
const cursorLight = document.getElementById("cursorLight");
const detailBox = document.getElementById("detailBox");
const resultsMessage = document.getElementById("resultsMessage");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const maxPriceInput = document.getElementById("maxPriceInput");
const typeInput = document.getElementById("typeInput");
const bedroomsFilterInput = document.getElementById("bedroomsFilterInput");
const sortInput = document.getElementById("sortInput");
const promiseTrack = document.getElementById("promiseTrack");
const promisePrev = document.getElementById("promisePrev");
const promiseNext = document.getElementById("promiseNext");
const resetButton = document.getElementById("resetButton");
const addPropertyForm = document.getElementById("addPropertyForm");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const gridViewButton = document.getElementById("gridViewButton");
const listViewButton = document.getElementById("listViewButton");
const railPrevButton = document.getElementById("railPrevButton");
const railNextButton = document.getElementById("railNextButton");
const favoriteCount = document.getElementById("favoriteCount");
const compareTray = document.getElementById("compareTray");
const compareList = document.getElementById("compareList");
const clearCompareButton = document.getElementById("clearCompareButton");
const soundToggle = document.getElementById("soundToggle");
const chatWidget = document.getElementById("chatWidget");
const chatToggle = document.getElementById("chatToggle");
const chatClose = document.getElementById("chatClose");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%230b0a08'/%3E%3Cstop offset='0.62' stop-color='%23191511'/%3E%3Cstop offset='1' stop-color='%23b99663'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='900' height='600' fill='url(%23g)'/%3E%3Cpath d='M128 412h644V244L450 101 128 244z' fill='%23f6efe3' stroke='%230b0a08' stroke-width='11'/%3E%3Cpath d='M230 412V278h151v134M519 412V278h151v134' fill='%23e8dcc8' stroke='%23b99663' stroke-width='8'/%3E%3Cpath d='M128 244h644' stroke='%23b99663' stroke-width='15'/%3E%3Ctext x='450' y='525' text-anchor='middle' fill='%23f6efe3' font-family='Avenir,Arial,sans-serif' font-size='34' font-weight='600'%3EKeyline Estates%3C/text%3E%3C/svg%3E";
let currentProperties = properties;
let savedHomes = [];
let compareHomes = [];
let soundEnabled = false;
let audioContext;
let latestScrollY = 0;
let tickingScroll = false;

function formatPrice(price) {
  return "£" + Number(price).toLocaleString("en-GB");
}

function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function addImageFallback(image) {
  image.addEventListener("error", function() {
    image.src = fallbackImage;
  }, { once: true });
}

function moveCursorLight(event) {
  const bounds = hero.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;

  hero.style.setProperty("--cursor-x", x + "px");
  hero.style.setProperty("--cursor-y", y + "px");
}

function playHoverSound() {
  if (!soundEnabled) {
    return;
  }

  if (!audioContext) {
    const AudioConstructor = window.AudioContext || window.webkitAudioContext;
    if (!AudioConstructor) {
      return;
    }
    audioContext = new AudioConstructor();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(520, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(760, audioContext.currentTime + 0.08);
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.04, audioContext.currentTime + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.12);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.13);
}

function updateScrollDepth() {
  document.body.style.setProperty("--scroll-depth", latestScrollY + "px");
  updateSectionMotion();
  tickingScroll = false;
}

function handleScroll() {
  latestScrollY = window.scrollY;

  if (!tickingScroll) {
    window.requestAnimationFrame(updateScrollDepth);
    tickingScroll = true;
  }
}

function slidePromises(direction) {
  const slideDistance = promiseTrack.querySelector("article").offsetWidth + 18;
  promiseTrack.scrollBy({
    left: slideDistance * direction,
    behavior: "smooth"
  });
}

function updateSectionMotion() {
  const viewportHeight = window.innerHeight;

  document.querySelectorAll(".reveal.visible").forEach(function(section) {
    const bounds = section.getBoundingClientRect();
    const sectionCenter = bounds.top + bounds.height / 2;
    const distanceFromCenter = Math.abs(sectionCenter - viewportHeight / 2);
    const progress = Math.min(distanceFromCenter / viewportHeight, 1);
    const direction = sectionCenter < viewportHeight / 2 ? -1 : 1;
    const fade = Math.max(0.62, 1 - progress * 0.5);
    const shiftY = direction * progress * 34;
    const shiftX = direction * progress * -18;
    const scale = 1 - progress * 0.025;

    section.style.setProperty("--section-opacity", fade.toFixed(2));
    section.style.setProperty("--section-y", shiftY.toFixed(1) + "px");
    section.style.setProperty("--section-x", shiftX.toFixed(1) + "px");
    section.style.setProperty("--section-scale", scale.toFixed(3));
  });
}

function scrollPropertiesSideways(event) {
  if (propertyList.classList.contains("list-view")) {
    return;
  }

  if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
    return;
  }

  const atStart = propertyList.scrollLeft <= 0;
  const atEnd = propertyList.scrollLeft + propertyList.clientWidth >= propertyList.scrollWidth - 2;

  if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) {
    return;
  }

  event.preventDefault();
  propertyList.scrollBy({
    left: event.deltaY * 1.2,
    behavior: "smooth"
  });
}

function movePropertyRail(direction) {
  const card = propertyList.querySelector(".property-card");
  const cardWidth = card ? card.offsetWidth + 28 : 360;

  propertyList.scrollBy({
    left: cardWidth * direction,
    behavior: "smooth"
  });
}

function addChatMessage(message, sender) {
  const chatBubble = document.createElement("p");
  chatBubble.className = sender === "user" ? "user-message" : "bot-message";
  chatBubble.textContent = message;
  chatMessages.appendChild(chatBubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBudgetFromMessage(message) {
  const match = message.match(/(\d+(?:\.\d+)?)\s*(k|m|million)?/);

  if (!match) {
    return 0;
  }

  const number = Number(match[1]);
  const suffix = match[2];

  if (suffix === "m" || suffix === "million") {
    return number * 1000000;
  }

  if (suffix === "k") {
    return number * 1000;
  }

  return number > 10000 ? number : 0;
}

function getChatReply(message) {
  const lowerMessage = message.toLowerCase();
  const budget = getBudgetFromMessage(lowerMessage);
  const matchingLocation = properties.find(function(property) {
    return lowerMessage.includes(property.location.toLowerCase());
  });

  if (budget) {
    maxPriceInput.value = budget;
    filterProperties();
    document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
    return "I filtered the listings to homes up to " + formatPrice(budget) + ". You can tighten it further with bedrooms or property type.";
  }

  if (matchingLocation) {
    searchInput.value = matchingLocation.location;
    filterProperties();
    document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
    return "I found listings around " + matchingLocation.location + " and moved you to the results.";
  }

  if (lowerMessage.includes("valuation") || lowerMessage.includes("sell")) {
    document.getElementById("valuation").scrollIntoView({ behavior: "smooth" });
    return "I have taken you to the valuation section. It explains timing, pricing ranges and the selling strategy.";
  }

  if (lowerMessage.includes("viewing") || lowerMessage.includes("contact") || lowerMessage.includes("agent")) {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    return "I have opened the contact area so you can speak to the agent or book a viewing.";
  }

  if (lowerMessage.includes("bed") || lowerMessage.includes("family")) {
    bedroomsFilterInput.value = "3";
    filterProperties();
    document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
    return "I set the search to 3+ bedrooms, which is usually a better starting point for family homes.";
  }

  if (lowerMessage.includes("cheap") || lowerMessage.includes("affordable") || lowerMessage.includes("first")) {
    sortInput.value = "price-low";
    filterProperties();
    document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
    return "I sorted the homes from lowest price first so the more affordable options are easier to scan.";
  }

  return "I can help with locations, budgets, valuations, viewings and bedroom searches. Try asking: show me homes under 500k.";
}

function calculateMonthlyPayment(price) {
  const deposit = price * 0.1;
  const loan = price - deposit;
  const monthlyRate = 0.05 / 12;
  const months = 25 * 12;
  const payment = loan * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));

  return Math.round(payment);
}

function updateSavedCount() {
  const label = savedHomes.length === 1 ? "saved home" : "saved homes";
  favoriteCount.textContent = savedHomes.length + " " + label;
}

function updateCompareTray() {
  if (compareHomes.length === 0) {
    compareTray.classList.remove("show");
    compareList.textContent = "No homes selected yet.";
    return;
  }

  compareTray.classList.add("show");
  compareList.textContent = compareHomes
    .map(function(index) {
      return properties[index].title + " - " + formatPrice(properties[index].price);
    })
    .join(" | ");
}

function getSortedProperties(list) {
  const sortedList = list.slice();

  if (sortInput.value === "price-low") {
    sortedList.sort(function(first, second) {
      return first.price - second.price;
    });
  }

  if (sortInput.value === "price-high") {
    sortedList.sort(function(first, second) {
      return second.price - first.price;
    });
  }

  if (sortInput.value === "newest") {
    sortedList.sort(function(first, second) {
      return properties.indexOf(first) - properties.indexOf(second);
    });
  }

  return sortedList;
}

// This function draws property cards on the page.
function showProperties(list) {
  currentProperties = list;
  propertyList.innerHTML = "";

  if (list.length === 0) {
    resultsMessage.textContent = "No properties found. Try a different search.";
    return;
  }

  resultsMessage.textContent = list.length + " properties found - scroll sideways through the rail";

  list.forEach(function(property) {
    const originalIndex = properties.indexOf(property);
    const card = document.createElement("article");
    card.className = "property-card";
    card.dataset.index = originalIndex;
    card.tabIndex = 0;
    card.style.setProperty("--property-image", `url("${property.image}")`);

    card.innerHTML = `
      <div class="motion-preview" aria-hidden="true">
        <span>Motion preview</span>
      </div>
      <div class="card-media">
        <img src="${escapeHTML(property.image)}" alt="${escapeHTML(property.title)}">
        <span class="property-label">${escapeHTML(property.label)}</span>
        <p class="price">${formatPrice(property.price)}</p>
      </div>
      <div class="card-content">
        <h3>${escapeHTML(property.title)}</h3>
        <p>${escapeHTML(property.address)}</p>
        <div class="property-meta">
          <span>${property.bedrooms} bedrooms</span>
          <span>${property.bathrooms} bathrooms</span>
          <span>${escapeHTML(property.location)}</span>
        </div>
        <div class="property-specs">
          <span>${escapeHTML(property.type)}</span>
          <span>${escapeHTML(property.area)}</span>
          <span>EPC ${escapeHTML(property.epc)}</span>
        </div>
        <p class="listing-note">${escapeHTML(property.tenure)} · ${escapeHTML(property.added)}</p>
        <div class="card-actions">
          <button type="button" data-action="details" data-index="${originalIndex}">View Details</button>
          <button class="icon-button ${savedHomes.includes(originalIndex) ? "active" : ""}" type="button" data-action="save" data-index="${originalIndex}" aria-label="Save ${escapeHTML(property.title)}">Save</button>
          <button class="icon-button ${compareHomes.includes(originalIndex) ? "active" : ""}" type="button" data-action="compare" data-index="${originalIndex}" aria-label="Compare ${escapeHTML(property.title)}">Compare</button>
        </div>
      </div>
    `;

    propertyList.appendChild(card);
    addImageFallback(card.querySelector("img"));
  });

  updateSavedCount();
  updateCompareTray();
}

// This function updates the detail preview section.
function showDetails(property) {
  const monthlyPayment = calculateMonthlyPayment(property.price);

  detailBox.innerHTML = `
    <div class="detail-layout">
      <div>
        <span class="property-label">${escapeHTML(property.label)}</span>
        <h3>${escapeHTML(property.title)}</h3>
        <p><strong>Address:</strong> ${escapeHTML(property.address)}</p>
        <p><strong>Location:</strong> ${escapeHTML(property.location)}</p>
        <p><strong>Price:</strong> ${formatPrice(property.price)}</p>
        <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
        <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
        <p>${escapeHTML(property.description)}</p>
        <div class="detail-facts">
          <span>${escapeHTML(property.type)}</span>
          <span>${escapeHTML(property.area)}</span>
          <span>${escapeHTML(property.tenure)}</span>
          <span>EPC ${escapeHTML(property.epc)}</span>
          <span>Council tax ${escapeHTML(property.councilTax)}</span>
          <span>${escapeHTML(property.added)}</span>
        </div>
        <div class="detail-actions">
          <a class="button" href="tel:${property.phone.replaceAll(" ", "")}">Call ${escapeHTML(property.agent)}</a>
          <a class="button secondary-link" href="mailto:hello@keylineestates.co.uk">Book a viewing</a>
        </div>
      </div>

      <div class="mortgage-card">
        <p class="eyebrow">Quick estimate</p>
        <strong>${formatPrice(monthlyPayment)} / month</strong>
        <p>Based on a 10% deposit, 25 years and 5% interest.</p>
        <progress value="${property.price}" max="1200000"></progress>
      </div>
    </div>
  `;

  detailBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

function openPropertyFromCard(card) {
  const propertyIndex = Number(card.dataset.index);

  if (properties[propertyIndex]) {
    showDetails(properties[propertyIndex]);
  }
}

// Search by title/location and filter by max price.
function filterProperties() {
  const searchText = searchInput.value.toLowerCase();
  const maxPrice = Number(maxPriceInput.value);
  const propertyType = typeInput.value;
  const minimumBedrooms = Number(bedroomsFilterInput.value);

  const filteredProperties = properties.filter(function(property) {
    const matchesText =
      property.title.toLowerCase().includes(searchText) ||
      property.location.toLowerCase().includes(searchText) ||
      property.address.toLowerCase().includes(searchText) ||
      property.label.toLowerCase().includes(searchText) ||
      property.description.toLowerCase().includes(searchText);

    const matchesPrice = !maxPrice || property.price <= maxPrice;
    const matchesType = !propertyType || property.type === propertyType;
    const matchesBedrooms = !minimumBedrooms || property.bedrooms >= minimumBedrooms;

    return matchesText && matchesPrice && matchesType && matchesBedrooms;
  });

  showProperties(getSortedProperties(filteredProperties));
}

searchForm.addEventListener("submit", function(event) {
  event.preventDefault();
  filterProperties();
});

resetButton.addEventListener("click", function() {
  searchInput.value = "";
  maxPriceInput.value = "";
  typeInput.value = "";
  bedroomsFilterInput.value = "";
  sortInput.value = "featured";
  showProperties(getSortedProperties(properties));
});

typeInput.addEventListener("change", filterProperties);
bedroomsFilterInput.addEventListener("change", filterProperties);
sortInput.addEventListener("change", filterProperties);

promisePrev.addEventListener("click", function() {
  slidePromises(-1);
});

promiseNext.addEventListener("click", function() {
  slidePromises(1);
});

propertyList.addEventListener("click", function(event) {
  const action = event.target.dataset.action;
  const propertyIndex = Number(event.target.dataset.index);

  if (action === "save") {
    event.stopPropagation();

    if (savedHomes.includes(propertyIndex)) {
      savedHomes = savedHomes.filter(function(index) {
        return index !== propertyIndex;
      });
    } else {
      savedHomes.push(propertyIndex);
    }

    showProperties(currentProperties);
    return;
  }

  if (action === "compare") {
    event.stopPropagation();

    if (compareHomes.includes(propertyIndex)) {
      compareHomes = compareHomes.filter(function(index) {
        return index !== propertyIndex;
      });
    } else if (compareHomes.length < 3) {
      compareHomes.push(propertyIndex);
    }

    showProperties(currentProperties);
    return;
  }

  const card = event.target.closest(".property-card");

  if (card) {
    openPropertyFromCard(card);
  }
});

propertyList.addEventListener("mouseover", function(event) {
  const card = event.target.closest(".property-card");

  if (card && !card.contains(event.relatedTarget)) {
    playHoverSound();
  }
});

propertyList.addEventListener("keydown", function(event) {
  if (event.target.tagName === "BUTTON") {
    return;
  }

  if (event.key === "Enter") {
    const card = event.target.closest(".property-card");

    if (card) {
      openPropertyFromCard(card);
    }
  }
});

propertyList.addEventListener("wheel", scrollPropertiesSideways, { passive: false });

featuredList.addEventListener("click", function(event) {
  const card = event.target.closest(".featured-card");

  if (card) {
    openPropertyFromCard(card);
  }
});

featuredList.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const card = event.target.closest(".featured-card");

    if (card) {
      openPropertyFromCard(card);
    }
  }
});

// Add a new property from the form to the top of the listings.
addPropertyForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newProperty = {
    title: document.getElementById("titleInput").value,
    location: document.getElementById("locationInput").value,
    address: document.getElementById("locationInput").value,
    label: "Just added",
    price: Number(document.getElementById("priceInput").value),
    bedrooms: Number(document.getElementById("bedroomsInput").value),
    bathrooms: 1,
    area: "Size TBC",
    type: "House",
    status: "For sale",
    tenure: "Tenure TBC",
    epc: "TBC",
    councilTax: "TBC",
    added: "Added today",
    agent: "Sarah Khan",
    phone: "020 1234 5678",
    image: document.getElementById("imageInput").value || "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
    description: document.getElementById("descriptionInput").value
  };

  savedHomes = savedHomes.map(function(index) {
    return index + 1;
  });
  compareHomes = compareHomes.map(function(index) {
    return index + 1;
  });
  properties.unshift(newProperty);
  addPropertyForm.reset();
  showProperties(properties);
  showDetails(newProperty);
});

// Small-screen menu toggle.
menuButton.addEventListener("click", function() {
  navLinks.classList.toggle("show");
  menuButton.setAttribute("aria-expanded", navLinks.classList.contains("show"));
});

clearCompareButton.addEventListener("click", function() {
  compareHomes = [];
  showProperties(currentProperties);
});

soundToggle.addEventListener("click", function() {
  soundEnabled = !soundEnabled;
  soundToggle.textContent = soundEnabled ? "Sound on" : "Sound off";
  soundToggle.setAttribute("aria-pressed", soundEnabled);

  if (soundEnabled) {
    playHoverSound();
  }
});

chatToggle.addEventListener("click", function() {
  chatWidget.classList.toggle("open");
  chatToggle.setAttribute("aria-expanded", chatWidget.classList.contains("open"));

  if (chatWidget.classList.contains("open")) {
    chatInput.focus();
  }
});

chatClose.addEventListener("click", function() {
  chatWidget.classList.remove("open");
  chatToggle.setAttribute("aria-expanded", "false");
});

chatForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const message = chatInput.value.trim();

  if (!message) {
    return;
  }

  addChatMessage(message, "user");
  chatInput.value = "";
  addChatMessage(getChatReply(message), "bot");
});

gridViewButton.addEventListener("click", function() {
  propertyList.classList.remove("list-view");
  gridViewButton.classList.add("active");
  listViewButton.classList.remove("active");
});

listViewButton.addEventListener("click", function() {
  propertyList.classList.add("list-view");
  listViewButton.classList.add("active");
  gridViewButton.classList.remove("active");
});

railPrevButton.addEventListener("click", function() {
  movePropertyRail(-1);
});

railNextButton.addEventListener("click", function() {
  movePropertyRail(1);
});

document.querySelectorAll("main section").forEach(function(section) {
  section.classList.add("reveal");
});

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  hero.addEventListener("mousemove", moveCursorLight);
  window.addEventListener("scroll", handleScroll, { passive: true });
} else {
  cursorLight.style.display = "none";
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        updateSectionMotion();
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(function(section) {
    observer.observe(section);
  });
} else {
  document.querySelectorAll(".reveal").forEach(function(section) {
    section.classList.add("visible");
  });
}

// Show all properties when the page first loads.
showProperties(getSortedProperties(properties));
updateSectionMotion();

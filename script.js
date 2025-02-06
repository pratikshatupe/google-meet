const participants = [
    { id: 1, name: " Sayali Gayakwad" },
    { id: 2, name: " Sumit Sathe" },
    { id: 3, name: "Chorle Addi" },
    { id: 4, name: "Shelke Pandurang" },
    { id: 5, name: " Tanvi Mane" },
  ];
  
  const searchInput = document.getElementById("search");
  const participantsContainer = document.getElementById("participants");
  const noResultsMessage = document.getElementById("no-results");
  
  function renderParticipants(filter = "") {
    participantsContainer.innerHTML = "";
    const filteredParticipants = participants.filter(participant =>
      participant.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    if (filteredParticipants.length === 0) {
      noResultsMessage.style.display = "block";
    } else {
      noResultsMessage.style.display = "none";
      filteredParticipants.forEach(participant => {
        const card = document.createElement("div");
        card.className = "participant-card";
  
        const name = document.createElement("p");
        name.className = "participant-name";
        name.textContent = participant.name;
  
        const button = document.createElement("button");
        button.className = "join-button";
        button.textContent = "Join";
  
        card.appendChild(name);
        card.appendChild(button);
        participantsContainer.appendChild(card);
      });
    }
  }
  searchInput.addEventListener("input", (e) => {
    renderParticipants(e.target.value);
  });
  renderParticipants();
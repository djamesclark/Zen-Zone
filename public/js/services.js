// all service options to dispay on page load
const services = [
    { name: "Swedish Massage", duration: "30 minutes", price: 50 },
    { name: "Swedish Massage", duration: "60 minutes", price: 90 },
    { name: "Swedish Massage", duration: "90 minutes", price: 150 },
    { name: "Deep Tissue Massage", duration: "30 minutes", price: 50 },
    { name: "Deep Tissue Massage", duration: "60 minutes", price: 90 },
    { name: "Deep Tissue Massage", duration: "90 minutes", price: 150 },
    { name: "Aromatherapy Massage", duration: "30 minutes", price: 50 },
    { name: "Aromatherapy Massage", duration: "60 minutes", price: 90 },
    { name: "Aromatherapy Massage", duration: "90 minutes", price: 150 },
    { name: "Reflexology Massage", duration: "30 minutes", price: 50 },
    { name: "Reflexology Massage", duration: "60 minutes", price: 90 },
    { name: "Reflexology Massage", duration: "90 minutes", price: 150 },
    { name: "Hot Stone Massage", duration: "60 minutes", price: 100 },
    { name: "Hot Stone Massage", duration: "90 minutes", price: 200 },
    { name: "Ashiatsu Massage", duration: "60 minutes", price: 100 },
    { name: "Ashiatsu Massage", duration: "90 minutes", price: 200 },
    { name: "Thai Massage", duration: "60 minutes", price: 100 },
    { name: "Thai Massage", duration: "90 minutes", price: 200 }   
  ];
  
  /*function displayServices() {
    const servicesList = document.getElementById("services-list");*/

function createServContainer() {
    const servContainer = document.createElement("div");
    servContainer.classList.add("serv-container");
  
    // Loop through service and create card 
    services.forEach((service) => {
      const card = document.createElement("div");
      card.classList.add("service-card");
      card.innerHTML = `${service.name} (${service.duration}): $${service.price}`;
      servContainer.appendChild(card);
    });
  }
  
  // Call displayServices function on page load
  window.onload = function () {
    createServContainer();
  };
  
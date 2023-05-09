const express = require('express');
const fetch = require('node-fetch');

const app = express();

// Function to get user events from Calendly API
async function getUserEvents(token) {
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  const url = 'https://api.calendly.com/scheduled_events';

  const response = await fetch(url, { headers });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
}


async function getAppointmentAvailability(service) {
  const url = 'https://api.calendly.com/user_availability_schedule/abc123'; // Replace 'abc123' with the actual user availability schedule ID

  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();

    
    const availability = data.rules.filter(rule => {
      if (rule.type === 'date') {
        return rule.intervals.some(interval => interval.to - interval.from >= service.duration);
      } else if (rule.type === 'wday') {
        return rule.intervals.some(interval => interval.to - interval.from >= service.duration && interval.from >= '10:00' && interval.to <= '20:00');
      }
      return false;
    });

    return availability;
  } else {
    return null;
  }
}


app.get('/services/:serviceId', async (req, res) => {
  const serviceId = req.params.serviceId;

  let data = {
    services: [
      {
        title: "Swedish Massage",
        description: "Relaxing massage technique that uses long, gliding strokes.",
        duration: 30,
        price: 50
      },
      {
        title: "Deep Tissue Massage",
        description: "Targets deeper layers of muscles and connective tissue to relieve chronic pain.",
        duration: 30,
        price: 50
      },
      {
        title: "Hot Stone Massage",
        description: "Uses smooth, heated stones to relax muscles and improve circulation.",
        duration: 60,
        price: 100
      },
      {
        title: "Aromatherapy Massage",
        description: "Combines massage techniques with essential oils to enhance relaxation and promote stress relief, mood, and improved sleep.",
        duration: 30,
        price: 50
      },
      {
        title: "Ashiatsu Massage",
        description: "A barefoot massage technique where the therapist can deliver deep, broad, consistent pressure.",
        duration: 60,
        price: 100
      },
      {
        title: "Thai Massage",
        description: "Incorporates assisted stretching, acupressure, and deep compression to improve flexibility, relieve muscle tension, and promote relaxation.",
        duration: 60,
        price: 100
      },
      {
        title: "Reflexology Massage",
        description: "Focuses on applying pressure to specific reflex points on the hands, feet, and ears, which corresponds to different organs and systems in the body.",
        duration: 30,
        price: 50
      },
    ]
  };

  const selectedService = data.services.find(service => service.title.toLowerCase().replace(/\s/g, '-') === serviceId);
  if (!selectedService) {
    res.status(404).send('Service not found');
    return;
  }

  try {
  
    const availability = await getAppointmentAvailability(selectedService);

  
    res.render('availability', { service: selectedService, availability });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving appointment availability');
  }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;


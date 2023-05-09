const router = require('express').Router();

router.get('/services', (req, res)=> {
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
            description: "Combines massage techinques with essential oils to enhance relation and promote stress relief, mood, and improved sleep.",  
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
            title: "Relexology Massage",
            description: "Focuses on applying pressure to specific reflex points on the hands, feet, and ears, which corresponds to different organs and systems in the body.",
            duration: 30,
            price: 50
          },
        ]
      };
    res.render('services', {services: data.services})
})

module.exports = router;


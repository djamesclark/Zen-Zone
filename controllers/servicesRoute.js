const router = require('express').Router();

router.get('/services', (req, res)=> {
    let data = {
        services: [
          {
            title: "Swedish Massage",
            description: "This is a gentle and relaxing massage technique that involves long, gliding strokes, kneading, and circular movements to improve circulation and promote relaxation.",
            duration: 30,
            price: 50 
          },
          {
            title: "Deep Tissue Massage",
            description: "This massage focuses on deeper layers of muscle and connective tissue to address chronic muscle tension, knots, and areas of pain. It uses more intense pressure and slower strokes than Swedish massage.",
            duration: 30,
            price: 50
          },
          {
            title: "Hot Stone Massage",
            description: "This therapy involves the use of smooth, heated stones placed on specific areas of the body. The warmth of the stones helps to relax muscles, release tension, and promote a sense of well-being.",
            duration: 60,
            price: 100
          },
          {
            title: "Aromatherapy Massage",
            description: "Aromatherapy combines massage techniques with the use of essential oils to enhance relaxation and promote various benefits such as stress relief, mood enhancement, and improved sleep.",  
            duration: 30,
            price: 50
          },
          {
            title: "Ashiatsu Massage",
            description: "This is a unique massage technique where the therapist uses their feet to deliver deep, broad, consistent pressure.",
            duration: 60,
            price: 100 
          },
          {
            title: "Thai Massage",
            description: "Thai massage incorporates assisted stretching, acupressure, and deep compression to improve flexibility, relieve muscle tension, and promote relaxation. It is performed on a mat on the floor with the client fully clothed.",
            duration: 60,
            price: 100
          },
          {
            title: "Reflexology Massage",
            description: "This massage technique focuses on applying pressure to specific reflex points on the hands, feet, and ears, which correspond to different organs and systems in the body. Reflexology aims to promote overall relaxation and balance.",
            duration: 30,
            price: 50 
          },
        ]
      };
    res.render('services', {services: data.services})
})

module.exports = router;


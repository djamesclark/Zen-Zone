//Calendly API 

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

  
  const url = 'https://oauth.calendly.com/oauth/token';
const data = new URLSearchParams({
  'grant_type': 'client_credentials',
  'client_id': 'ceGHF6sBpUtIX1y0OTpPIJzZOWPScZpt-EYECQpDa3g',
  'client_secret': 'WRZ21ObCVO6Gkb4OGCKzvUgg21JWMbuLrMShWxBqbs'
});

const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: data
});

const result = await response.json();
const accessToken = result.access_token;

const token = '7cLd59dcpFIBoQEul082TR4kh7JVPkI4xbk5J4sLLbQ';
getUserEvents(token).then(data => {
  console.log(data);
}).catch(error => {
  console.error(error);
});

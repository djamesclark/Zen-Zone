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
    const url =` https://api.calendly.com/user_availability_schedule/${scheduleId}`; // Replace 'abc123' with the actual user availability schedule ID
  
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
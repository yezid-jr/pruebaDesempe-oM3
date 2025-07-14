const modelEvent = {
  async getAllEvents() {
    const res = await fetch(`http://localhost:3000/events`);
    if (!res.ok) throw new Error("Error fetching events");
    return await res.json();
  },

  async getEventById(id) {
    const res = await fetch(`http://localhost:3000/events/${id}`);
    if (!res.ok) throw new Error(`Event ${id} not found`);
    return await res.json();
  },

  async createEvent(eventData) {
    const res = await fetch(`http://localhost:3000/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });
    if (!res.ok) throw new Error("Failed to create event");
    return await res.json();
  },

  async updateEvent(id, eventData) {
    const res = await fetch(`http://localhost:3000/events/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });
    if (!res.ok) throw new Error(`Failed to update event ${id}`);
    return await res.json();
  },

  async deleteEvent(id) {
    const res = await fetch(`http://localhost:3000/events/${id}`, {
      method: 'DELETE'
    });
    if (!res.ok) throw new Error(`Failed to delete event ${id}`);
    return true;
  }
};

export default modelEvent;
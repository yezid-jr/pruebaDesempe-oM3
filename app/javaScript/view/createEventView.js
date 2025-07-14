const createEventView = {
  render(container, onSubmit) {
    container.innerHTML = `
      <h2>Create New Event</h2>
      <form id="createEventForm">
        <div>
          <label>Name:</label>
          <input type="text" name="name" required>
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" required></textarea>
        </div>
        <div>
          <label>Capacity:</label>
          <input type="number" name="capacity" required>
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" required>
        </div>
        <button type="submit">Create Event</button>
      </form>
    `;

    const form = document.getElementById('createEventForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const eventData = Object.fromEntries(formData.entries());
      eventData.capacity = parseInt(eventData.capacity);
      onSubmit(eventData);
    });
  }
};

export default createEventView;
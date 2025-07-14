const editEventView = {
  render(container, event, onSubmit) {
    container.innerHTML = `
      <h2>Edit Event</h2>
      <form id="editEventForm">
        <div>
          <label>Name:</label>
          <input type="text" name="name" value="${event.name}" required>
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" required>${event.description}</textarea>
        </div>
        <div>
          <label>Capacity:</label>
          <input type="number" name="capacity" value="${event.capacity}" required>
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value="${event.date}" required>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    `;

    const form = document.getElementById('editEventForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const eventData = Object.fromEntries(formData.entries());
      eventData.capacity = parseInt(eventData.capacity);
      onSubmit(eventData);
    });
  }
};

export default editEventView;
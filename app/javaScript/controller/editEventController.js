import editEventView from './../view/editEventView.js';
import modelEvent from './../model/modelEvents.js';

const editEventController = {
  async init(container) {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const id = params.get('id');

    if (!id) {
      window.location.hash = '#/not-found';
      return;
    }

    try {
      const event = await modelEvent.getEventById(id);
      editEventView.render(container, event, async (eventData) => {
        try {
          await modelEvent.updateEvent(id, eventData);
          alert("Event updated successfully!");
          window.location.hash = '#/dashboard';
        } catch (err) {
          console.error(err);
          alert("Failed to update event");
        }
      });
    } catch (err) {
      console.error(err);
      window.location.hash = '#/not-found';
    }
  }
};

export default editEventController;
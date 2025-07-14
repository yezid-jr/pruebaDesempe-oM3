import createEventView from './../view/createEventView.js';
import eventModel from './../model/modelEvents.js';

const createEventController = {
  init(container) {
    createEventView.render(container, async (eventData) => {
      try {
        await eventModel.createEvent(eventData);
        alert("Event created successfully!");
        window.location.hash = '#/dashboard';
      } catch (err) {
        console.error(err);
        alert("Failed to create event");
      }
    });
  }
};

export default createEventController;
//


//
const dashboardView = {
  renderAdmin(container, user, events) {
    container.innerHTML = `
      <div class="dashboard">
        <aside>
          <h3>Events</h3>
          <div>
            <p>${user.name}</p>
            <p>${user.role}</p>
          </div>
          <div class="admin-buttons">
            <button>Events</button>
            <button id="logoutBtn">Logout</button>
          </div>
        </aside>

        <main class="admin-main">
          <button onclick="window.location.hash='#/dashboard/events/create'">Add New Event</button>
          <h2 class="title-event">Events List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Capacity</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${events.map(event => `
                <tr>
                  <td>${event.name}</td>
                  <td>${event.description}</td>
                  <td>${event.capacity}</td>
                  <td>${event.date}</td>
                  <td>
                    <button onclick="editEvent(${event.id})">Edit</button>
                    <button onclick="deleteEvent(${event.id})">Delete</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </main>
      </div>
    `;

    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem('tokenUser');
      window.location.hash = '#/login';
    });
  },

  renderVisitor(container, user, events) {
    container.innerHTML = `
      <div class="dashboard">
        <aside>
          <h3>Events</h3>
          <div>
            <p>${user.name}</p>
            <p>${user.role}</p>
          </div>
          <div class="admin-buttons">
            <button>Events</button>
            <button id="logoutBtn">Logout</button>
          </div>
        </aside>

        <main>
          <h2>Events List</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Capacity</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              ${events.map(event => `
                <tr>
                  <td>${event.name}</td>
                  <td>${event.description}</td>
                  <td>${event.capacity}</td>
                  <td>${event.date}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </main>
      </div>
    `;

    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem('tokenUser');
      window.location.hash = '#/login';
    });
  }
};

window.editEvent = (id) => {
  window.location.hash = `#dashboard/events/edit?id=${id}`;
};

window.deleteEvent = async (id) => {
  const confirmed = confirm("Are you sure to delete this event?");
  if (confirmed) {
    await fetch(`http://localhost:3000/events/${id}`, { method: 'DELETE' });
    window.location.reload();
  }
};

export default dashboardView;
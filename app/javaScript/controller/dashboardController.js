import dashboardView from "../view/dashboardView.js";
import modelEvent from "../model/modelEvents.js";

const dashboardController = {
    init(container) {
        const user = JSON.parse(localStorage.getItem("tokenUser"));
        
        if (!user) {
            window.location.hash = "#login";
            return;
        }

            const events = modelEvent.getAllEvents().then(events => { 
                if (user.role === "admin") {
                    dashboardView.renderAdmin(container, user, events);
                } else if (user.role === "visitor") {
                    dashboardView.renderVisitor(container, user, events);
                } else {
                    p404View.render(container);
                }
            }).catch(err => {
                console.error(err);
                p404View.render(container);
            });

    }
};

export default dashboardController



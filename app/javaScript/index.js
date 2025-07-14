import registerController from "./controller/registerController.js";
import loginController from "./controller/loginController.js";
import dashboardController from "./controller/dashboardController.js";
import createEventController from "./controller/createEventController.js";
import editEventController from "./controller/editEventController.js";
import p404View from "./view/404.js";

const spa = {
    init() {
        const container = document.getElementById("spa");
        this.router(container);

        window.addEventListener("hashchange", () => this.router(container));
    },

    router(container) {

        let route = window.location.hash;

        if (!route || route === "#") {
            route = "#login"; // Default route
        } 
         
        if (route === "#register") {
            registerController.init(container);
        } else if (route === "#login" || route === "") {
            loginController.init(container);
        } else if (route === "#dashboard") {
            const token = localStorage.getItem("tokenUser");
            if (!token) {
                window.location.hash = "#login"; // Redirect to login if not authenticated
                return;
            }
            dashboardController.init(container);

            if (route.startsWith("#/dashboard/events/create")) {
                createEventController.init(this.container);
            } else if (route.startsWith("#dashboard/events/edit")) {
                editEventController.init(this.container);
            }
        } else  {
            p404View.render(container); // Render 404 page for unknown routes
        }

        window.addEventListener("hashchange", () => this.router(container));
    }
}

document.addEventListener("DOMContentLoaded", () => spa.init());

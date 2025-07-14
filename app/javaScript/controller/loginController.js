import userModel from "../model/modelUser.js";
import loginView from "../view/loginView.js";


const loginController = {
    init(container) {
        loginView.render(container);

        document.getElementById("loginForm").addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = loginView.getFormData();

            const user = await userModel.login(data.email, data.password);
            if (user) {
                localStorage.setItem("tokenUser", JSON.stringify(user));
                window.location.hash = "#dashboard";
            } else {
                loginView.showMsg("Invalid email or password");
            }
        });
    }
}

export default loginController;
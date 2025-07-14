import userModel from "../model/modelUser.js";
import registerView from "../view/registerView.js";


const registerController = {
    init(container) {
        registerView.render(container);

        document.getElementById("registerForm").addEventListener("submit", async (e) => {
            e.preventDefault();
            const {name, email, password, verifyPassword} = registerView.getFormData();

            if (password !== verifyPassword) {
                registerView.showMsg("Password do not match");
                return;
            }

            const exists = await userModel.checkUserExists(email);
            if (exists) {
                registerView.showMsg("User's Email is already registered")
                return;
            }

            const user = await userModel.register({name, email, password, role : "visitor"});
            if (user) {
                alert("User Register Successfully");
            } else {
                alert("Error, try again");
            }
        });
    }
}

export default registerController;
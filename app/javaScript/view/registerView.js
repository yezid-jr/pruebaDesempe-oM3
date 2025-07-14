//



//const:

const registerView = {
    render(container) {
        document.getElementById("spa").innerHTML = `
            <section id="registerForm">
                <h2>Register</h2>
                <form>
                    <div><label for="name">Name</label><input type="text" id="name" required></div>
                    <div><label for="email">Email</label><input type="email" id="email" required></div>
                    <div><label for="password">Password</label><input type="text" id="password" required></div>
                    <div><label for="verifyPassword">Verify Password</label><input type="text" id="verifyPassword" required></div>
                    <button type="submit">Register</button>
                </form>
                <a href="#login">Come back to Login.</a>
            </section>
            <p id="registerMsg"></p>
        `;
    },

    getFormData() {
        return {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            password : document.getElementById("password").value,
            verifyPassword : document.getElementById("verifyPassword").value
        };
    },

    showMsg(msg) {
        document.getElementById("registerMsg").textContent = msg;
    }
};

export default registerView;
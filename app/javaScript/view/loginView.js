//


//
const loginView = {
    render(container) {
        document.getElementById("spa").innerHTML = `
            <section id="loginForm">
                <h2>Login</h2>
                <form class="formLogin2">
                    <div><label for="email">Email</label><input type="email" id="email" required></div>
                    <div><label for="password">Password</label><input type="text" id="password" required></div>
                    <button type="submit">Login</button>
                </form>
                <a href="#register">Do you have a count? Register here.</a>
            </section>
            <p id="loginMsg"></p>
        `;
    },

    getFormData() {
        return {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };
    },

    showMsg(msg) {
        document.getElementById("loginMsg").textContent = msg;
    }
};

export default loginView;
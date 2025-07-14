//



//
const url = "http://localhost:3000"

const userModel = {
    async register(userData) {
        const respuesta = await fetch(`${url}/users`, {
            method: "POST",
            headers: {"Content-Type" : "application/json" },
            body: JSON.stringify(userData)
        });
        return respuesta.ok ? await respuesta.json() : null;
    },

    async login(email, password) {
        const respuesta = await fetch(`${url}/users?email=${email}&password=${password}`);
        const users = await respuesta.json();
        return users.length > 0 ? users[0] : null;
    },

    async checkUserExists(email) {
        const respuesta = await fetch(`${url}/users?email=${email}`)
        const users = await respuesta.json();
        return users.length > 0;
    }
};

export default userModel;
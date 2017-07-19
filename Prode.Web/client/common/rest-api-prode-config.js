export default {
    encuentro: {
        create: {
            url: "http://localhost:49202/api/v1/Encuentros/Create",
            method: "POST"
        },
        getAll: {
            url: "http://localhost:49202/api/v1/Encuentros/GetAll",
            method: "GET"
        }
    },
    equipo: {
        getAll: {
            url: "http://localhost:49202/api/v1/Equipos/GetAll",
            method: "GET"
        }
    },
    login: {
        login: {
            url: "http://localhost:49202/api/v1/Login/Login",
            method: "POST"
        }
    }
};
const { server } = require("../src/app");
const session = require("supertest");
const agent = session(server);

beforeAll (() => {
    console.log("before all")
})

// hay beforeAll, beforeEach, afterAll, afterEach.

describe ("Test de RUTAS", () => {
    describe ("GET /rickandmorty/character/:id", () => {
        it ("Responde con status: 200", () => {
            agent.get('/rickandmorty/character/1').then(value =>
            expect (value.status).toBe(200))
        })
        it ('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            let character = await agent.get("/rickandmorty/character/1");
            expect (character.body).toHaveProperty("id");
            expect (character.body).toHaveProperty("name");
            expect (character.body).toHaveProperty("species");
            expect (character.body).toHaveProperty("gender");
            expect (character.body).toHaveProperty("status");
            expect (character.body).toHaveProperty("origin");
            expect (character.body).toHaveProperty("image");
        })
        it ("Si hay un error responde con status: 500", async () => {
            await agent.get("/rickandmorty/character/10000").expect(500);
        })
    })

    describe ("GET /rickandmorty/login", () => {
        it ("Valida correctamente la información de login", async () => {
            let response = await agent.get("/rickandmorty/login")
            .query({email: "maxdienes@gmail.com", password: "password12"})
            expect (response.body).toHaveProperty("access");
            expect (response.body.access).toBe(true);
        })
        it ("Niega correctamente el acceso a la página", async () => {
            let response = await agent.get("/rickandmorty/login")
            .query({email: "maxdienes@gmail.com", password: "password11"})
            expect (response.body).toHaveProperty("access");
            expect (response.body.access).toBe(false);
        })
    })

    describe ("POST /rickandmorty/fav", () => {
        it ("Lo que se transfiera por body debe ser retornado en un arreglo", () => {
            agent.get("/rickandmorty/character/1").then((character) => {
                agent.post("/rickandmorty/fav").send(character.body)
                .then((response) => {
                    expect (Array.isArray(response.body)).toBe(true);
                    expect (response.body[0]).toHaveProperty("name");
                })
            })
        })

        it ("Debe seguir almacenando los personajes cuando se envía uno nuevo", async() => {
            let character = await agent.get("/rickandmorty/character/2");
            let response = await agent.post("/rickandmorty/fav").send(character.body);

            expect (Array.isArray(response.body)).toBe(true);
            expect (response.body[0]).toHaveProperty("name");
            expect (response.body[1]).toHaveProperty("name");
        })
    })

    describe ("DELETE /rickandmorty/fav/:id", () => {
        it ("Un delete mal hecho no hará nada", async () => {
            let response = await agent.delete("/rickandmorty/fav/34");
            expect (response.body[0].name).toBe("Rick Sanchez");
        })
        it ("Se elimina correctamente", async () => {
            let response = await agent.delete("/rickandmorty/fav/1")
            expect (response.body[0].name).toBe("Morty Smith");
            expect (response.body[1]).toBe(undefined);
        })
    })
})
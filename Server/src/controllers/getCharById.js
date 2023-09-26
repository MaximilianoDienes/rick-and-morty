const axios = require('axios');
const url = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try {
        const { id } = req.params

        const { data } = await axios.get(url + id);

        if (!data.name) {
            return res.status(404).send("Not found");
        }

        else {
            let returnedCharacter = {
                id: id,
                name: data.name,
                status: data.status,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender: data.gender
            }

            return res.status(200).json(returnedCharacter);
        }

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getCharById
}
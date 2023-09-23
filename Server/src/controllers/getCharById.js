const axios = require('axios');
const url = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const { id } = req.params

    axios.get(url + id)
    .then(response => response.data)
    .then(character => {
        if (!character.name) {
            return res.status(404).send("Not found")
        }

        let returnedCharacter = {
            id: id,
            name: character.name,
            status: character.status,
            species: character.species,
            origin: character.origin,
            image: character.image,
            gender: character.gender
        }

        return res.status(200).json(returnedCharacter)
    })
    .catch(error => {
        return res.status(500).send(error.message)
    })
}

module.exports = {
    getCharById
}
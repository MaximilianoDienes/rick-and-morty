const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    const { id, name, origin, status, image, species, gender } = req.body;

    try {
        if (!id || !name || !origin || !status || !image || !species || !gender) {
            res.status(401).send('Faltan datos');
        } else {
            await Favorite.create({id: id, name: name, origin: origin, status: status, image: image, species: species, gender: gender});
            const allFavs = await Favorite.findAll();
            res.status(200).json(allFavs);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    postFav
}
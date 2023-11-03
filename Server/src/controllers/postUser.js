const { User } = require("../DB_connection");

const postUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email.length > 0 && password.length > 0) {
            const [user, created] = await User.findOrCreate({
                where: { email, password },
                defaults: { email, password }
            });

            if (created) {
                res.status(201).send('Registrado exitosamente');
            } else {
                res.status(200).send('El usuario ya se encuentra registrado')
            }
        } else {
            res.status(400).send("Faltan datos")
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    postUser
}
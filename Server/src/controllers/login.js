const { User } = require("../DB_connection");

const login = async (req, res) => {
    const { email, password } = req.query;

    if (!email || !password) {
        res.status(400).send("Faltan datos");
    } else {
        const matchingUser = await User.findOne({where: {email: email}})
        if (matchingUser && matchingUser.password === password) {
            res.status(200).json({access: true});
        } else {
            res.status(403).send('Contraseña incorrecta');
        }
    }
}

module.exports = {
    login
}
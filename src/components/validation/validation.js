export default function (userData) {

    const emailPattern = /^(?=.{1,35}$)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isValidPassword = /^(?=.*\d).{6,10}$/;
    const errors = {};

    if (!emailPattern.test(userData.email)) {
        errors.email = "El e-mail ingresado es inválido."
    }

    if (!isValidPassword.test(userData.password)) {
        errors.password = "La contraseña ingresada es incorrecta."
    }

    return errors;
}
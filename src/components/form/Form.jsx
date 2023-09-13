//Form
import { useState } from "react";
import validation from "../validation/validation"
import "./Form.modules.css"

export default function Form ({ logIn }) {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

        // handleChangeOnForm(userData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        logIn(userData);
    }

    return (
        <form>
            <div className="form">
            <label className="label">Email:</label>
            <input name="email" value={userData.email} onChange={handleChange} className={errors.email && "warning"}/>
            <p className="danger">{errors.email ? errors.email : null}</p>
            <br/>
            </div>

            <div className="form">
            <label className="label">Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange} className={errors.password && "warning"}/>
            <p className="danger">{errors.password ? errors.password : null}</p>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}
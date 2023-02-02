import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsUsers } from "../../../redux/actions/users.actions";
import  {useNavigate} from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import '../styles/registerForm.css';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector(state => state.usersReducer);
    const [userInput, setUserInput] = useState({
        Name: "",
        LastName: "",
        Password: "",
        DayOfBirth: "",
        Telephone: "",
        Status: false,
    });

    useEffect(() => {
        if(user.name){
            navigate('/products')
        }
    }, [user])

    const handleChange = (event) => {
        setUserInput({ ...userInput, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(actionsUsers.createUser(userInput));
    }


    return (
        <div>
            <h2 className='title'>Registrate</h2>
        <Form className="form_register" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="formName">
                <Form.Label className="label_form_register">Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="Name"
                    value={userInput.Name}
                    onChange={(e) => handleChange(e)}
                    className="control_form_register"
                    />
            </Form.Group>

            <Form.Group controlId="formLastName">
                <Form.Label className="label_form_register">Apellido</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese su apellido"
                    name="LastName"
                    value={userInput.LastName}
                    onChange={(e) => handleChange(e)}
                    className="control_form_register"
                    />
            </Form.Group>

            <Form.Group controlId="formBirthdate">
                <Form.Label className="label_form_register">Fecha de nacimiento</Form.Label>
                <Form.Control
                    type="date"
                    value={userInput.DayOfBirth}
                    name="DayOfBirth"
                    onChange={(e) => handleChange(e)}
                    className="control_form_register"
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label className="label_form_register">Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={userInput.Password}
                    name="Password"
                    onChange={(e) => handleChange(e)}
                    className="control_form_register"
                    />
            </Form.Group>

            <Form.Group controlId="formPhone">
                <Form.Label className="label_form_register">Teléfono</Form.Label>
                <Form.Control
                    type="tel"
                    placeholder="Ingrese su número de teléfono"
                    value={userInput.Telephone}
                    name="Telephone"
                    onChange={(e) => handleChange(e)}
                    className="control_form_register"
                    />
            </Form.Group>

            <Button className="mt-4 btn_register" variant="info" type="submit">
                Registrar
            </Button>
        </Form>
        </div>
    );
};

export default RegisterForm;

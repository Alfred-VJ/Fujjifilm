import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/loginForm.css';
import { actionsUsers } from '../../../redux/actions/users.actions';
import { useSelector, useDispatch } from 'react-redux';
import  {useNavigate} from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector(state => state.usersReducer)
    const [userInput, setUserInput] = useState({
        Name: "",
        Password: "",
    });
    console.log(user)
    useEffect(() => {
        if(user.password === userInput.Password){
            navigate('/products')
        }else{
            if(user.name) alert("contraseña incorrecta");
        }
    }, [user])

    const handleChange = (event) => {
        setUserInput({ ...userInput, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(actionsUsers.getUserByName(userInput.Name, userInput.Password))
    };

    return (
        <Form className="form_register" onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label className="label_form_register">Nombre de usuario</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre de usuario"
                    name='Name'
                    value={userInput.Name}
                    onChange={(e) => handleChange(e)}
                    className="control_form_register"
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label className="label_form_register">Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    name='Password'
                    value={userInput.Password}
                    onChange={(e) => handleChange(e)}
                    className="control_form_register"
                />
            </Form.Group>
            <Button className="mt-4 btn_register" variant="info" type="submit">
                Iniciar sesión
            </Button>
        </Form>
    )
}

export default LoginForm
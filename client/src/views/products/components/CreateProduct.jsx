import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsProducts } from "../../../redux/actions/products.actions";
import { Form, Button } from "react-bootstrap";

const CreateProduct = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.usersReducer);
    const [productInput, setProductInput] = useState({
        Name: "",
        CodeProduct: "",
        Price: 0,
        Status: "",
        TypeProduct: "",
        IdUser: user.IdUser || 1
    });


    const handleChange = (event) => {
        setProductInput({ ...productInput, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const date = new Date();
        const formattedDate = date.toISOString();
        let prd = { ...productInput, DischargeDate: formattedDate }
        if (productInput.Status === "cancelado") {
            prd = { ...prd, Status: false }
        } else {
            prd = { ...prd, Status: true }
        }

        dispatch(actionsProducts.createProduct(prd));
    }
    return (
        <Form className="form_register" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="formCode">
                <Form.Label className="label_form_register">Código del producto</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el ódigo del producto"
                    value={productInput.CodeProduct}
                    name="CodeProduct"
                    onChange={(e) => handleChange(e)}
                    className="control_form_register"
                />
            </Form.Group>

            <Form.Group controlId="formName">
                <Form.Label className="label_form_register">Nombre del producto</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="Name"
                    value={productInput.Name}
                    onChange={(e) => handleChange(e)}
                    className="control_form_register"
                />
            </Form.Group>

            <Form.Group controlId="formPrice">
                <Form.Label className="label_form_register">Precio</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese su apellido"
                    name="Price"
                    value={productInput.Price}
                    onChange={(e) => handleChange(e)}
                    className="control_form_register"
                />
            </Form.Group>

            <Form.Group controlId="formStatus">
                <Form.Label className="label_form_register">Status del producto</Form.Label>
                <Form.Control as="select" value={productInput.Status} name="Status" onChange={(e) => handleChange(e)} className="control_form_register">
                    <option value="">Selecciona una opción</option>
                    <option value="activado">Activado</option>
                    <option value="cancelado">Cancelado</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formType">
                <Form.Label className="label_form_register">Tipo del producto</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el tipo del producto"
                    value={productInput.TypeProduct}
                    name="TypeProduct"
                    onChange={(e) => handleChange(e)}
                    className="control_form_register"
                />
            </Form.Group>

            <Button className="mt-4 btn_register" variant="info" type="submit">
                Registrar Producto
            </Button>
        </Form>
    )
}

export default CreateProduct
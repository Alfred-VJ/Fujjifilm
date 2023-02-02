import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { actionsProducts } from '../../../redux/actions';
import { actionsOptionsProducts } from '../../../redux/actions';

const DeleteProduct = () => {
    const dispatch = useDispatch();
    const [activate, setActivate] = useState(false);
    const { products } = useSelector(state => state.productsReducer);
    const [idPro, setIdPro] = useState(0);
    const [selectedOption, setSelectedOption] = useState({});

    const handleChangeF = (e) => {
        products.map(p => p.name === e.target.value && (setSelectedOption(p)))
        products.map(p => p.name === e.target.value && (setIdPro(p.idProduct)))
    };

    const deletePro = () => {
        setActivate(true)
        dispatch(actionsProducts.deleteProduct(idPro));
        setTimeout(() => {
            dispatch(actionsOptionsProducts.allProducts());
        }, 1500)
    }

    return (
        <div>
            <h2 className='title'>Elimina tu producto</h2>
            <Form.Group controlId="formExample">
                <Form.Label>Elige el producto que necesita eliminar</Form.Label>
                <Form.Control as="select" value={selectedOption.name} onChange={handleChangeF}>
                    <option value="" disabled>Seleccione una opción</option>
                    {products.map((option) => (
                        <option key={option.idProduct} value={option.name}>
                            {option.name}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            {
                !!idPro && <>
                    <Card className='card_delete'>
                        <Card.Header>¿Deseas eliminar el producto?</Card.Header>
                        <Card.Body>
                            <Card.Title>{selectedOption.name}</Card.Title>
                            <Card.Text>Código: {selectedOption.codeProduct}</Card.Text>
                            <Button 
                                disabled={activate}
                                className='btn_delete'
                                variant="danger"
                                onClick={deletePro}
                             >Eliminar producto</Button>
                        </Card.Body>
                    </Card>
                </>
            }
        </div>
    )
}

export default DeleteProduct
import '../styles/products.css';
import { ListGroup } from "react-bootstrap";
import { actionsOptionsProducts } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const NavProducts = () => {
    const dispatch = useDispatch();
    const { createProduct, modificProduct, deleteProduct, allProductsList } = useSelector(state => state.optionsReducer);

    return (
        <ListGroup className='side-nav' variant="flush">
            <ListGroup.Item className='side-item' style={{ backgroundColor: allProductsList && 'rgb(115, 255, 208)' }}>
                <div onClick={() => dispatch(actionsOptionsProducts.allProducts())}>Ver todos los productos</div>
            </ListGroup.Item>
            {/* <ListGroup.Item className='side-item'>
                <div onClick={() => dispatch(actionsOptionsProducts.selectProduct())}>Elegir de una lista</div>
            </ListGroup.Item> */}
            <ListGroup.Item className='side-item' style={{ backgroundColor: createProduct && 'rgb(115, 255, 208)' }}>
                <div onClick={() => dispatch(actionsOptionsProducts.createProduct())}>Crear producto</div>
            </ListGroup.Item>
            <ListGroup.Item className='side-item' style={{ backgroundColor: modificProduct && 'rgb(115, 255, 208)' }}>
                <div onClick={() => dispatch(actionsOptionsProducts.modificProduct())}>Modificar producto</div>
            </ListGroup.Item>
            <ListGroup.Item className='side-item' style={{ backgroundColor: deleteProduct && 'rgb(115, 255, 208)' }}>
                <div onClick={() => dispatch(actionsOptionsProducts.deleteProduct())}>Eliminar producto</div>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default NavProducts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { actionsProducts } from '../../../redux/actions/index'
import { actionsUsers } from '../../../redux/actions/index';

const TableProducts = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.productsReducer);
    const { users } = useSelector(state => state.usersReducer);
   
    useEffect(() => {
        dispatch(actionsProducts.getAllProducts())
        dispatch(actionsUsers.getAllUsers())
    }, [])

    const dateForma = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedDate = date.toLocaleDateString('es-ES', options);
        return formattedDate
    }

    return (
        <>
            {products.length ? <>
                <h2 className='title'>Lista de todos los productos</h2>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th className='th_title'>Código</th>
                        <th className='th_title'>Nombre</th>
                        <th className='th_title'>Precio</th>
                        <th className='th_title'>Fecha de Alta</th>
                        <th className='th_title'>Estado</th>
                        <th className='th_title'>Tipo de Producto</th>
                        <th className='th_title'>Nombre de Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (

                        <tr key={product.idProduct}>
                            <td>{product.codeProduct}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{dateForma(product?.dischargeDate)}</td>
                            <td>{product.status ? "Activo" : "Cancelado"}</td>
                            <td>{product.typeProduct}</td>
                            <td>{users.filter(e => e.idUser === product.idUser)[0]?.name}</td>
                        </tr>
                    ))

                        }
                </tbody>
                </Table>
            </> :
                <div className='content_mns'>
                    <div className='mns_no_products'>No hay productos en el inventario</div>
                </div>
            }
        </>
    )
}

export default TableProducts
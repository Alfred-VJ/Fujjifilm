import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Dropdown } from 'react-bootstrap';
import { actionsProducts } from '../../../redux/actions/index'
import { actionsUsers } from '../../../redux/actions/index';



const TableProducts = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.productsReducer);
    const { users } = useSelector(state => state.usersReducer);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(5);
   
    useEffect(() => {
        dispatch(actionsProducts.getAllProducts(page, size))
        dispatch(actionsUsers.getAllUsers())
    }, [])

    useEffect(() => {
        dispatch(actionsProducts.getAllProducts(page, size))
    }, [page, size])

    const changePage = (option) => {
        if(option){
            if(page > 1){
                setPage(page - 1);
            } 
        }else{
            if(products.length){
                setPage(page + 1)
            }
        } 
    }

    const sizeOptions = (sizeOpt) => {
        setPage(1);
        setSize(sizeOpt);
    }


    const dateForma = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedDate = date.toLocaleDateString('es-ES', options);
        return formattedDate
    }

    return (
        <>
            {products.length || page - 1 != 0 ? <>
                <h2 className='title'>Lista de todos los productos</h2>
                <div className='btn_pagination'>
                    <div className="conten_drop">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Numero de productos: {size}
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item onClick={() => sizeOptions(5)}>5</Dropdown.Item>
                                <Dropdown.Item onClick={() => sizeOptions(10)}>10</Dropdown.Item>
                                <Dropdown.Item onClick={() => sizeOptions(20)}>20</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                <button onClick={() => changePage(true)}>{"<<"}</button>
                <div className='num_page'><span>Página {page}</span></div>
                <button onClick={() => changePage(false)}>{">>"}</button>
                </div>
                {!products.length ? <>
                    <div className='content_mns'>
                        <div className='mns_no_products'>No hay más productos en el inventario</div>
                    </div>
                </> : <Table striped bordered hover variant="dark">
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
                    {products.map((product, index) => (
                        <>
                        <tr key={product.idProduct}>
                            <td className='td_Product'>{`${((page - 1) * size) + (index + 1)}.- ${product.codeProduct}`}</td>
                            <td className='td_Product'>{product.name}</td>
                            <td className='td_Product'>{product.price}</td>
                            <td className='td_Product'>{dateForma(product?.dischargeDate)}</td>
                            <td className='td_Product'>{product.status ? "Activo" : "Cancelado"}</td>
                            <td className='td_Product'>{product.typeProduct}</td>
                            <td className='td_Product'>{users.filter(e => e.idUser === product.idUser)[0]?.name}</td>
                        </tr>
                        </>
                    ))

                        }
                </tbody>
                </Table>}
            </> :
                <div className='content_mns'>
                    <div className='mns_no_products'>No hay productos en el inventario</div>
                </div>
            }
        </>
    )
}

export default TableProducts
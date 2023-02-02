import '../styles/products.css';
import NavProducts from './NavProducts';
import TableProducts from './TableProducts';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import CreateProduct from './CreateProduct';
import ModificProduct from './ModificProduct';
import DeleteProduct from './DeleteProduct';

const Products = () => {
    const { createProduct, modificProduct, deleteProduct } = useSelector(state => state.optionsReducer);
    const { user } = useSelector(state => state.usersReducer);

    useEffect(() => {
    }, [createProduct, modificProduct, deleteProduct])

    return (
        <>
            {
                user.name ? <div className='contenedor_products'>
                    <div className='nav_products'>
                        <NavProducts />
                    </div>
                    <div className='table_products'>
                        <h2 className='title'>Inventario de productos</h2>
                        {createProduct ? <CreateProduct /> :
                            modificProduct ? <ModificProduct /> :
                                deleteProduct ? <DeleteProduct /> :
                                    <TableProducts />
                        }
                    </div>
                </div> :
                    <div className='content_mns'>
                        <div className='mns_no_products'>
                            Necesitas iniciar sesión para poder ver los productos
                        </div>
                    </div>
            }
        </>
    )
}

export default Products
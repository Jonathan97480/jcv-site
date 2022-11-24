import { useState, useEffect } from 'react';
import { Card } from '../components';
import { useParams } from 'react-router-dom';
import { apiProduct } from "../interface";
import { ApiGetAllProductsByCategory } from '../api/apiRequest';

export default function Products() {

    const [products, setProducts] = useState<apiProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const { id, type } = useParams();



    useEffect(() => {

        ApiGetAllProductsByCategory(parseInt(id === undefined ? "1" : id)).then((data: apiProduct[]) => {
            setProducts(data);

            setLoading(false);
        })

    }, []);

    return (
        <div className='products padding'>


            <section className='productsList max-w padding'>
            <h1>{type}</h1>

                {
                    loading === true ? <p>Chargement...</p> : products.map((product: apiProduct) => {
                        return (
                            <Card
                                key={product.id}
                                product={product}
                            />
                        )
                    }
                    )
                }

            </section>

        </div>
    );



}

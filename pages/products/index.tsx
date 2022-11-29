import { useState, useEffect } from 'react';
import Card from '../../components/card';
import { useRouter } from 'next/router';
import { apiProduct } from "../../interface";
import { ApiGetAllProductsByCategory } from '../../util/apiRequest';
import { setProducts, selectProducts } from '../../slice/productsSlice';
import { useDispatch, useSelector } from "react-redux";
import Head from 'next/head'

export default function Products() {

    const P_redux = useSelector(selectProducts);

    const [_products, set_Products] = useState<apiProduct[]>(P_redux);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    const id = router.query.id as string;
    const nom = router.query.nom as string;

    const dispatch = useDispatch();



    useEffect(() => {

        ApiGetAllProductsByCategory(id).then((data: apiProduct[]) => {

            dispatch(setProducts(data));

            set_Products(data);
            setLoading(false);
        })



    }, [P_redux]);



    return (
        <>
            <Head>
                <title>{nom}</title>
            </Head>
            <div className='products padding'>


                <section className='productsList max-w padding'>
                    <h1 className='inter inter-medium'>{nom}</h1>


                    {
                        loading === true ? <p>Chargement...</p> : _products.map((product: apiProduct) => {
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

        </>
    );



}

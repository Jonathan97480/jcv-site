import { useState, useEffect } from "react";
import Card from "../../components/card";
import { useRouter } from "next/router";
import { apiProduct } from "../../interface";
import { ApiGetAllProductsByCategory } from "../../util/apiRequest";
import { setProducts, selectProducts } from "../../slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";

import Head from "next/head";
import ActivityIndicator from "../../components/ActivityIndicator";

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
    });
  }, [P_redux]);

  return (
    <>
      {_products.length > 0 ? (
        <div>
          <Head>
            <title>{nom}</title>
          </Head>
          <section className="products">
            {loading === true ? (
              <ActivityIndicator />
            ) : (
              <div
                className="productsList max-w padding"
                style={{
                  backgroundColor: _products[0].attributes.category
                    ? _products[0].attributes.category.data.attributes.color
                    : "#fff",
                }}
              >
                <h1 className="inter inter-semiBold">{nom}</h1>
                {
                    _products.map((product: apiProduct) => {
                        return (
                            <Card key={product.id} product={product} />)
                        })
                }

              </div>
            )}
          </section>
        </div>
      ) : null}
    </>
  );
}

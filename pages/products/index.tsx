import { useState, useEffect } from "react";
import Card from "../../components/card";
import { useRouter } from "next/router";
import { apiProduct } from "../../interface";
import { ApiGetAllProductsByCategory } from "../../util/apiRequest";
import { setProducts, selectProducts } from "../../slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";

import Head from "next/head";
import ActivityIndicator from "../../components/ActivityIndicator";
import Link from "next/link";

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
            <html lang="fr" />
            <title>Nos produits</title>
            <meta name="description" content="Page de présentation des produits" />
            <meta name="og:title" content="Nos produits" />
            <meta property="og:description" content="Page de présentation des produits" />
          </Head>
          <section className="products">
            {loading === true ? (
              <ActivityIndicator />
            ) : (

              <div
                className="productsList max-w padding">
                <h1 className="title title-small" style={{
                  color: _products[0].attributes.category
                    ? _products[0].attributes.category.data.attributes.color
                    : "#000",
                }}>{nom}</h1>
                {
                  _products.map((product: apiProduct) => {
                    return (
                      <Link className="card-txtColor" href={{ pathname: "/product", query: { id: product.id } }}
                        title={`
                          Redirige vers la fiche produit de ${product.attributes.nom}
                          `}>
                        <Card key={product.id} product={product} />
                      </Link>
                    )
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

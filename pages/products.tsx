import { useState, useEffect } from "react";
import Card from "../components/card";
import { useRouter } from "next/router";
import { apiProduct } from "../interface";
import { ApiGetAllProductsByCategory } from "../util/apiRequest";
import { setProducts, selectProducts } from "../slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import ActivityIndicator from "../components/ActivityIndicator";
import Link from "next/link";
import { MyMain } from "../components";

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
    <MyMain
      pageTitle={"Nos produits"}
      pageDescription="la page des produits"
    >
      {_products.length > 0 ? (

        <section className="products" >
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
                    <Link className="card-txtColor" key={product.id + "-products"} href={{ pathname: "/product", query: { id: product.id } }}
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

      ) : null}
    </MyMain>
  );
}

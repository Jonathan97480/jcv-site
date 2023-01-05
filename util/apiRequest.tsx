import Api from "./conf";
import { apiCategories, apiProduct } from "../interface";


/*recherche toutes les catégories dans l'api  */


export async function ApiGetAllCategories(): Promise<apiCategories[]> {
    return new Promise((resolve, reject) => {

        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',

            },
            url: Api.url + '/api/categories?populate[0]=sous_categories.image',
        }

        fetch(option.url, option)
            .then(response => response.json())
            .then(data => {
                const categories: apiCategories[] = data.data;

                resolve(categories);

            }
            )

    })

}

/* recherche les produits qui on la méme id de catégories */

export async function ApiGetAllProductsByCategory(id: string): Promise<apiProduct[]> {

    return new Promise((resolve, reject) => {

        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',

            },
            url: Api.url + '/api/produits?populate[0]=images&populate[1]=sous_categories&populate[2]=category&populate[3]=documentation&filters[sous_categories][id][$eq]=' + id + '&populate=*',
        }

        fetch(option.url, option)
            .then(response => response.json())
            .then(data => {
                const products: apiProduct[] = data.data;

                resolve(products);

            })
    })


}

export async function ApiGetProductById(id: number): Promise<apiProduct> {

    return new Promise((resolve, reject) => {

        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',

            }
        }

        fetch(Api.url + '/api/produits/' + id + '?populate=*', option)
            .then(response => response.json())
            .then(data => {

                const products: apiProduct = data.data;

                resolve(products);

            })
    })

}


export interface apiFormulaire {
    id: number;
    titre: string;
    form: {
        inputs: {
            type: string;
            label: string;
            placeholder: string;
            options?: {
                text: string;
                value: string;
            }[]
        }[]
    }[];
}

export async function GetAllFormulaire(): Promise<any> {

    return new Promise((resolve, reject) => {

        const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',

            }
        }

        fetch(Api.url + '/api/formulaires', option)
            .then(response => response.json())
            .then(_data => {
                const response: any = _data;
                const data: apiFormulaire[] = response.data;

                const newFormulaire: apiFormulaire[] = [];

                data.forEach((formulaire: any) => {
                    newFormulaire.push({
                        id: formulaire.id,
                        titre: formulaire.attributes.Titre,
                        form: formulaire.attributes.form_json
                    })
                })

                resolve(newFormulaire);

            })
    })

}


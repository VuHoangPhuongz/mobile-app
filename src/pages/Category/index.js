import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsCategory, getCategory } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";

const Category = () => {
    const [products, setProducts] = React.useState([]);
    const [category, setCaregory] = React.useState(null);
    const [totalProducts, setTotalProducts] = useState(0);
    const params = useParams();
    const id = params.id;

    React.useEffect(()=>{
        getProductsCategory(id).then(({data})=>{
            setProducts(data.data.docs);
            setTotalProducts(data.data.docs.length);
        });
        getCategory(id).then(({data})=>{
            setCaregory(data.data);
        })
    }, [id]);
    return (
        <div>
            {/*	List Product	*/}
            <div className="products">
                <h3>{category?.name} (hiện có {totalProducts} sản phẩm)</h3>
                <div className="product-list card-deck">
                    {
                        products.map((product, index)=>
                            <ProductItem item={product}/>
                        )
                    }

                </div>

            </div>
            {/*	End List Product	*/}
            <div id="pagination">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
                </ul>
            </div>
        </div>

    )
}
export default Category;
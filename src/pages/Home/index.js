import React from "react";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";

const Home = () => {
    const [featuredProduct, setFeaturedProduct] = React.useState([]);
    const [latestProduct, setLatestProduct] = React.useState([]);

    React.useEffect(()=>{
        // Featured
        getProducts({
            params:{
                "filter[is_featured]": true,
                limit: 6,
            }
        }).then(({data})=>{
            return setFeaturedProduct(data.data.docs);
        });
        // Latest
        getProducts({
            params:{
                limit: 6,
            }
        }).then(({data})=>{
            return setLatestProduct(data.data.docs);
        });
    }, []);

    return (
        <>
            {/*	Feature Product	*/}
            <div className="products">
                <h3>Sản phẩm nổi bật</h3>
                <div className="product-list card-deck">
                    {
                        featuredProduct.map((value)=>
                            <ProductItem item={value}/>
                        )
                    }
                </div>
            </div>
            {/*	End Feature Product	*/}
            {/*	Latest Product	*/}
            <div className="products">
                <h3>Sản phẩm mới</h3>
                <div className="product-list card-deck">
                    {
                        latestProduct.map((value)=>
                            <ProductItem item={value}/>
                        )
                    }
                </div>
            </div>
            {/*	End Latest Product	*/}
        </>
    )
}
export default Home;
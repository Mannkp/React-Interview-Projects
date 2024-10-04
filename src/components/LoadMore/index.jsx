import { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";

const LoadMore = ({ url }) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState(false);
    const [loadedProducts, setLoadedProducts] = useState([]);

    //fetch all data for step 1
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
            .catch(error => {
                console.error("Error: ", error)
                setLoading(false);
            })
    }, [url])

    // load 3 more items
    const loadMoreCount = useRef(3);

    //initially, set first 3 items to display
    useEffect(() => {
        products && products?.products && setLoadedProducts(products?.products.slice(0, loadMoreCount.current))
    }, [products, products?.products])

    //slice more data as requested.
    const handleLoadMore = useCallback(() => {
        setLoadedProducts(prev => [...prev, ...products?.products?.slice(loadedProducts.length, loadedProducts.length + loadMoreCount.current)])
    }, [loadedProducts, products])


    return (
        <section>
            {loading && <div>Loading...</div>}
            {!loading && <div className="LoadMore">
                <h2>Load More Component</h2>
                <div className="productContainer">
                    {products?.products && loadedProducts && loadedProducts?.map((item, index) => (
                        <div className="productCard" key={index}>
                            <h3>{item?.title}</h3>
                            <img src={item?.thumbnail} alt={'product card'} />
                            <p>{item?.description}</p>
                            <div className="priceSection">
                                <p>Price: {item?.price}</p>
                                <p>{item?.discountPercentage}% off!</p>
                                <p>rated {item?.rating}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="loadMoreButton" disabled={loading} onClick={handleLoadMore}>Load More</button>
            </div>}
            <div className="approach">
                <p>Approach 1: (implemented here)</p>
                <p>fetch all data at once, use slice to slice fetched data upto required count, then on clicking loadmore button, slice more data using: </p>
                <p>Load initial data <code>{' useEffect(() => {products && products?.products && setLoadedProducts(products?.products.slice(0, loadMoreCount.current))}, [products, products?.products])'}</code></p>
                <p>Load more data handler<code>{'const handleLoadMore = useCallback(() => { setLoadedProducts(prev => [...prev, ...products?.products?.slice(loadedProducts.length, loadedProducts.length + loadMoreCount.current)])}, [loadedProducts, products])'}</code></p>
                <p>Approach 2</p>
                <p>Url has parameters 'skip' and 'limit', calculate count of data and update skip value in url.</p>
            </div>
        </section>
    )
}

export default LoadMore
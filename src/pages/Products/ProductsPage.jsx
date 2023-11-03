import { Link } from 'react-router-dom';

function ProductsPage(props) {
  console.log("ProductsPage()")

  const { products } = props;

  return (
    <main>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <h3>{product.name}</h3>
              <p>£{product.price}</p>
              <Link to={`/products/${product.id}`} state={{ product }}>
                View Product
              </Link>
              <br />
              <Link to={`/products/${product.id}/edit`} state={{ product }}>
        Edit
      </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ProductsPage;

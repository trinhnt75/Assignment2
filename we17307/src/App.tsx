import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { IProduct } from "./interfaces/products";
import { addProduct, deleteProduct, getProducts } from "./api/products";
import ProductAdd from "./pages/ProductAdd";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await getProducts();
      setProducts(data);
    }
    fetchProduct();
  }, []);

  const removeProduct = (id: string | number) => {
    console.log(id);
    deleteProduct(id);
  };
  const onHandleAdd = async (product: IProduct) => {
    const { data } = await addProduct(product);
    console.log(data);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={products.map((item, index) => (
            <div key={index}>
              {item.name}
              <button onClick={() => removeProduct(item._id)}>Remove</button>
            </div>
          ))}
        />
        <Route path="/about" element={"Giới thiệu"} />
        <Route path="/add" element={<ProductAdd onAdd={onHandleAdd} />} />
        <Route path="/product/:id" element={"Form"} />
        <Route path="/signin" element={"Đăng nhập"} />
      </Routes>
    </div>
  );
}

export default App;

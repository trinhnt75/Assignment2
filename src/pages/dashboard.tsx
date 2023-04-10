import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu, MenuProps, message, Popconfirm, Space } from "antd";
import { getAll, remove } from "../api/product";
import { IProduct } from "../models";

const Dashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getAll();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const removeProduct = (id: string | number) => {
    remove(id).then(() =>
      setProducts(products.filter((product) => product._id != id))
    );
  };

  return (
    <>
      <h2>Product list</h2>
      <div className="-auto rounded-lg border border-gray-200 pt-16">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Tên sản phẩm
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Giá
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Giá khuyến mãi
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Hình ảnh
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Thao tác
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <Link to={`/admin/product/${product._id}`}>
                    {product.name}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.price}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.original_price}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <img
                    className="w-[80%]"
                    src={product.images?.[0].base_url}
                    alt=""
                  />
                </td>
                <td className="text-center">
                  <span className="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm">
                    <Link to={`/admin/product/${product._id}`}>
                          <Button
                            type="primary"
                            style={{
                              color: "blue",
                              width: "80px",
                            }}
                          >
                            Sửa
                          </Button>
                        </Link>
                    <Space size="middle" direction="vertical">
                          <Popconfirm
                            placement="top"
                            title={"Bạn có chắc muốn xóa không ?"}
                            description={""}
                            onConfirm={() => removeProduct(product._id)}
                            okText="Yes"
                            cancelText="No"
                          >
                            <Button
                              type="primary"
                              danger                            >
                              <a>Delete</a>
                            </Button>
                          </Popconfirm>
                        </Space>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;

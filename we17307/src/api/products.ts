import { IProduct } from "../interfaces/products";
import instance from "./instance";

export const getProducts = () => {
  return instance.get("/products");
};

export const addProduct = (product: IProduct) => {
  return instance.post("/products", product, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjY0ZWVhMWI2ODgyMDAzYmMyMDNlOSIsImlhdCI6MTY4MDIzMjIyNCwiZXhwIjoxNjgwMzE4NjI0fQ.D4qALLwWYsxLrjD8_g0Uk7HNMkL0BBK8vG62i_kFyXs`,
    },
  });
};

export const deleteProduct = (id: string | number) => {
  return instance.delete(`/products/${id}`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjY0ZWVhMWI2ODgyMDAzYmMyMDNlOSIsImlhdCI6MTY4MDIzMjIyNCwiZXhwIjoxNjgwMzE4NjI0fQ.D4qALLwWYsxLrjD8_g0Uk7HNMkL0BBK8vG62i_kFyXs`,
    },
  });
};

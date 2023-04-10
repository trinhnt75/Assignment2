import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const ProductAdd = ({onAdd}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onHandleSubmit = (data) => {
    onAdd(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <input type="number" {...register("price")} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductAdd;

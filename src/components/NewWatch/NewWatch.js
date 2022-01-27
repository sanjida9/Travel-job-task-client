import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const NewWatch = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://still-peak-87260.herokuapp.com/newWatch", data)
      .then((res) => {
        alert("New watch has been added!");
        reset();
      });
  };

  return (
    <div className="container mx-auto p-4 bg-gray-200 p-4 my-4">
      <h2 className="text-center text-3xl font-bold mb-6">
        Add A New <span className="text-primary">Watch</span>
      </h2>

      <form
        id="newWatch"
        className="my-5 p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="form-control"
          {...register("name", { required: true })}
          placeholder="Name"
        />
        {errors.name && <span>This field is required</span>}
        <br />
        <br />
        <input
          className="form-control"
          {...register("price", { required: true })}
          placeholder="Price"
        />
        {errors.price && <span>This field is required</span>}
        <br />
        <br />
        <input
          className="form-control"
          {...register("rating", { required: true })}
          placeholder="Rating"
        />
        {errors.rating && <span>This field is required</span>}
        <br />
        <br />
        <input
          className="form-control"
          {...register("img", { required: true })}
          placeholder="Image URL"
        />
        {errors.img && <span>This field is required</span>}
        <br />
        <br />
        <textarea
          className="form-control"
          {...register("description", { required: true })}
          placeholder="Description"
        />
        {errors.description && <span>This field is required</span>}
        <br />
        <br />
        <input
          className=" btn-success bg-blue px-5 py-2 rounded border-0"
          type="submit"
          value="Add Watch"
        />
      </form>
    </div>
  );
};

export default NewWatch;

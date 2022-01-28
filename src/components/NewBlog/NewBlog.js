import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const NewBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/newBlog", data).then((res) => {
      alert("New blog has been added!");
      reset();
    });
  };

  return (
    <div className="container mx-auto p-4 bg-gray-200 p-4 my-4">
      <h2 className="text-center text-3xl font-bold mb-6">
        Add A New <span className="text-primary">Blog</span>
      </h2>

      <form
        id="newWatch"
        className="my-5 p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="form-control"
          {...register("name", { required: true })}
          placeholder="Title"
        />
        <br />
        <input
          className="form-control"
          {...register("tname", { required: true })}
          placeholder="Travelers Name"
        />
        <br />
        <input
          className="form-control"
          {...register("category", { required: true })}
          placeholder="Category"
        />
        {errors.name && <span>This field is required</span>}
        <br />

        <input
          className="form-control"
          {...register("price", { required: true })}
          placeholder="Price"
        />
        {errors.price && <span>This field is required</span>}
        <br />

        <input
          className="form-control"
          {...register("rating", { required: true })}
          placeholder="Rating"
        />
        {errors.rating && <span>This field is required</span>}
        <br />

        <input
          className="form-control"
          {...register("img", { required: true })}
          placeholder="Image URL"
        />
        {errors.img && <span>This field is required</span>}
        <br />

        <input
          className="form-control"
          {...register("location", { required: true })}
          placeholder="Location"
        />
        <br />
        <textarea
          className="form-control"
          {...register("description", { required: true })}
          placeholder="Description"
        />
        {errors.description && <span>This field is required</span>}
        <br />

        <input
          className=" btn-success bg-blue px-5 py-2 rounded border-0"
          type="submit"
          value="Add Blog"
        />
      </form>
    </div>
  );
};

export default NewBlog;

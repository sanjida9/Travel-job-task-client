import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";

import "react-datepicker/dist/react-datepicker.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import Rating from "react-rating";

const PlaceOrder = () => {
  const { allContext } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const [singleBlog, setSingleBlog] = useState({});
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { user } = allContext;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blog/${id}`)
      .then((res) => setSingleBlog(res.data));
  }, []);

  const onSubmit = (data) => {
    const order = {};

    order.shippingInfo = data;
    const cost = singleBlog.price * quantity;
    order.totalCost = cost;
    order.ordered = singleBlog;
    order.status = "Pending";
    order.userEmail = user.email;
    console.log(order);

    axios.post(`http://localhost:5000/placeOrder`, order).then((res) => {
      alert("");
    });
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="container row my-5 ">
        <div className=" col-md-12 ps-5">
          <img src={singleBlog.img} className="card-img-top p-3" alt="..." />
          <Rating
            className="text-warning p-3"
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            initialRating={singleBlog.rating}
            readonly
          />
          <div className="card-body">
            <h5 className="card-title fw-bold text-blue">{singleBlog.name}</h5>
            <h5 className="card-title fw-bold text-blue">
              Price : ${singleBlog.price}
            </h5>
            <h6 className="card-text text-blue">{singleBlog.description}</h6>
            <NavLink to={`/watch/${singleBlog._id}`}>Book Now</NavLink>
          </div>
        </div>
        {/* <form className="col-md-6 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            {...register("fullName", { required: true })}
            placeholder="Full Name"
            defaultValue={user.displayName}
          />
          {errors.fullName && <span>This field is required</span>}
          <br />
          <br />
          <input
            className="form-control"
            {...register("email", { required: true })}
            placeholder="Email"
            defaultValue={user.email}
          />
          {errors.email && <span>This field is required</span>}
          <br />
          <br />
          <input
            className="form-control"
            {...register("address", { required: true })}
            placeholder="Address"
          />
          {errors.address && <span>This field is required</span>}
          <br />
          <br />
          <input
            defaultValue="1"
            min="1"
            onChangeCapture={handleQuantity}
            type="number"
            className="form-control"
            {...register("quantity", { required: true })}
            placeholder="Quantity"
          />
          {errors.quantity && <span>This field is required</span>}
          <br />
          <br />

          <Controller
            control={control}
            name="startDate"
            rules={{ required: true }}
            render={({ field }) => (
              <DatePicker
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholderText="Select date (MM/DD/YYYY)"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />

          <br />
          <br />
          <input
            type="submit"
            value="Place Your Order"
            className="btn btn-success bg-blue border-0 px-5"
          />
        </form> */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default PlaceOrder;

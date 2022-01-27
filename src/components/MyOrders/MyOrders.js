import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const [deleteCount, setDeleteCount] = useState(0);
  const [singleUserOrder, setSingleUserOrder] = useState([]);

  const { allContext } = useAuth();
  const { user } = allContext;

  const handleDeleteOrder = (id) => {
    const isDelete = window.confirm("Are you sure?");
    if (isDelete) {
      axios
        .post("https://still-peak-87260.herokuapp.com/deleteOrder", {
          UserId: id,
        })
        .then((res) => {
          setDeleteCount(deleteCount + 1);
          console.log("Order Deleted");
        });
    }
  };

  useEffect(() => {
    axios
      .post("https://still-peak-87260.herokuapp.com/singleUserOrders", {
        userEmail: user.email,
      })
      .then((res) => {
        console.log(res.data);
        setSingleUserOrder(res.data);
      });
  }, [user, deleteCount]);

  return (
    <div className="container">
      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">PRODUCT NAME</th>
              <th scope="col">Total Cost</th>
              <th scope="col">STATUS</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {singleUserOrder.map((order) => (
              <tr>
                <th>{order.ordered?.name}</th>
                <th>{order.totalCost}</th>
                <td>{order.status}</td>
                <td>
                  <button
                    onClick={() => handleDeleteOrder(order._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

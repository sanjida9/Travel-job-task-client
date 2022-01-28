import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";

const MoreProducts = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://mighty-ridge-99133.herokuapp.com/blogs")
      .then((res) => setBlogs(res.data));
  }, []);
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="container">
        <h1 className="fw-bold text-center text-blue mt-3 p-3">Blogs</h1>
        {blogs.length > 0 ? (
          <div className="row">
            {blogs.map((blog) => (
              <>
                <div className="col-md-4 my-3">
                  <Card className="border-0 shadow hover-card">
                    <Card.Img
                      className="img-fluid p-2 "
                      variant="top"
                      src={blog.img}
                    />
                    <Card.Body>
                      <Card.Title className="fw-bold text-blue text-center">
                        {blog.name}
                      </Card.Title>
                      <Card.Text className="text-blue text-center">
                        {blog.description.slice(0, 140)}...
                      </Card.Text>
                      <Card.Title className="fw-bold text-blue text-center">
                        ${blog.price}
                      </Card.Title>
                      <div className="text-center">
                        <Link to={`/blog/${blog._id}`}>
                          <Button className="btn-success bg-blue px-5 btnHover">
                            See More
                          </Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </>
            ))}
          </div>
        ) : (
          <div className="row my-5">
            <div className="col d-flex align-items-center justify-content-center">
              <div class="spinner-border text-primary " role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default MoreProducts;

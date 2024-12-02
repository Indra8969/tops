import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./reducer";
import { useRevalidator } from "react-router-dom";
import { useCol } from "react-bootstrap/esm/Col";
import { loginContext } from "./App";

export const Shop = () => {
  const cards = useSelector((state) => state.userdata.products);
  const dispatch = useDispatch();
  const {loginUser} = useContext(loginContext);
  const addcart = (item)=>{
    dispatch(addtocart(item))
  }
  return (
    <>
      <div>
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3>Our Shop</h3>
                <span className="breadcrumb">
                  <a href="#">Home</a> &gt; Our Shop
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section trending">
          <div className="container">
            <ul className="trending-filter">
              <li>
                <a className="is_active" href="#!" data-filter="*">
                  Show All
                </a>
              </li>
              <li>
                <a href="#!" data-filter=".adv">
                  Adventure
                </a>
              </li>
              <li>
                <a href="#!" data-filter=".str">
                  Strategy
                </a>
              </li>
              <li>
                <a href="#!" data-filter=".rac">
                  Racing
                </a>
              </li>
            </ul>
            <div className="row trending-box">
              {cards.map((item) => {
                return (
                  <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv" key={item.id}>
                    <div className="item">
                      <div className="thumb">
                        <a href="product-details.html">
                          <img src={item.imgsrc} />
                        </a>
                        <span className="price">
                          <em>{item.price}</em>{item.disprice}
                        </span>
                      </div>
                      <div className="down-content">
                        <span className="category">{item.category}</span>
                        <h4>{item.title}</h4>
                        <a href="" onClick={(e)=>{
                          e.preventDefault();
                          addcart({item, userEmail:loginUser});
                        }}>
                          <i className="fa fa-shopping-bag" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="pagination">
                  <li>
                    <a href="#"> &lt; </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a className="is_active" href="#">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#"> &gt; </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

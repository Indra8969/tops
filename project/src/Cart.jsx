import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { CardHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useResolvedPath } from "react-router-dom";
import {remove} from "./reducer";
import { loginContext } from "./App";

export const Cart = () => {
  const {loginUser} = useContext(loginContext);
  let users = useSelector((state) => state.userdata.users);
  let user = users.find((item)=>{
    return item.email == loginUser
  });
  let cartdata = user.cart;
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h3>Cart</h3>
                <span className="breadcrumb">
                  <a href="#">Home</a> &gt; Cart
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
              {cartdata.map((item, index) => {
                return (
                  <div
                    className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv"
                    key={item.id}
                  >
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
                           e.preventDefault()
                           dispatch(remove({itemId: item.id, userEmail: loginUser}))
                        }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5em"
                            height="1.5em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="m11 8.5l3 3m0-3l-3 3m5.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"
                            />
                          </svg>
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

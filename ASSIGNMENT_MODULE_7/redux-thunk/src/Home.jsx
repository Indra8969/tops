import React from "react";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'

export const Home = () => {
    const dispatch = useDispatch();

  return (
    <div className="home">
      <div id="home-to-register">
        <Link to="/register">Register</Link>
      </div>
      <div className="table">
        <div className="thead">
          <div className="tcell">Name</div>
          <div className="tcell">Email</div>
          <div className="tcell">Contact</div>
          <div className="tcell">Address</div>
          <div className="tcell">Action</div>
        </div>
        <div className="trow">
          <div className="tcell">Suthar indra</div>
          <div className="tcell">sutharindra@gmail.com</div>
          <div className="tcell">2489093842903</div>
          <div className="tcell">india</div>
          <div className="tcell">
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </div>
        <div className="trow">
          <div className="tcell">Suthar</div>
          <div className="tcell">suthar@gmail.com</div>
          <div className="tcell">2489093842903</div>
          <div className="tcell">india</div>
          <div className="tcell">
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

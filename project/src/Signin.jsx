import React, { useContext, useState } from "react";
import {adduser} from './reducer'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginContext } from "./App";

export const Signin = () => {
  const dispatch = useDispatch()
  const [name, setName] =  useState('');
  const [username, setUsername] =  useState('');
  const [email, setEmail] =  useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const {loginUser, setLoginUser} = useContext(loginContext);
  const users = useSelector(state=>state.userdata.users);
  console.log("users at singin : ", users)
  const checkValid = (email, username)=>{
    for(let obj of users){
      if(obj.email == email || obj.username == username) return false;
    }
    return true;
  }
  const signin = (e)=>{
    e.preventDefault();
    if(!checkValid(email,username)) return alert("user already exist");
    dispatch(adduser({
      name,
      username,
      email, 
      pass
    }));
    setLoginUser(email);
    navigate("/");
  }
  return (
    <>
      <div>
        <div className="contact-page section ">
          <div className="container ">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="right-content">
                  <div className="row">
                    <div className="col-lg-12">
                      <form onSubmit={signin} id="contact-form" method="post">
                        <div className="row">
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="name"
                                name="name"
                                id="name"
                                onChange={(e)=>{setName(e.target.value)}}
                                placeholder="Your Name..."
                                autoComplete="on"
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="surname"
                                name="surname"
                                id="surname"
                                onChange={(e)=>{setUsername(e.target.value)}}
                                placeholder="Your Username..."
                                autoComplete="on"
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                onChange={(e)=>{setEmail(e.target.value)}}
                                pattern="[^ @]*@[^ @]*"
                                placeholder="Your E-mail..."
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="password"
                                name="subject"
                                id="subject"
                                onChange={(e)=>{setPass(e.target.value)}}
                                placeholder="Password"
                                autoComplete="on"
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <button
                                type="submit"
                                id="form-submit"
                                className="orange-button"
                              >
                                Sign IN
                              </button>
                              <button
                                type=""
                                id=""
                                onClick={()=>{navigate('/login')}}
                                className="orange-button mx-5"
                              >
                                GO TO LOG IN
                              </button>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

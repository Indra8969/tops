import React, { useContext, useState } from "react";
import {adduser} from './reducer'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginContext } from "./App";
export const Login = () => {
  const dispatch = useDispatch();
  const {loginUser, setLoginUser} = useContext(loginContext);
  const [email, setEmail] =  useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const users = useSelector(state=>state.userdata.users);
  const login = (e)=>{
    e.preventDefault();
    for(let obj of users){
      if(obj.email == email && obj.pass == pass){
        setLoginUser(email);
        navigate('/');
        return;
      }
    }
    alert("Email or Pass is incorrect or may user not exist");
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
                      <form onSubmit={login} id="contact-form" method="post">
                        <div className="row">
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
                                Log In 
                              </button>
                              <button
                                type="submit"
                                onClick={()=> navigate('/signin')}
                                className="orange-button mx-5"
                              >
                                GO TO sign in 
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

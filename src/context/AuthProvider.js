/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect, useNavigate } from "react";
import { base_url } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate;

  useEffect(() => {
    setLoading(true);
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(isLoggedIn);
    if (isLoggedIn) {
      getUser();
    }
  }, []);

  const register = async (username, email, password) => {
    const registerUrl = `${base_url}/users/register`;

    const data = {
      username: username,
      email: email,
      password: password,
    };

    fetch(registerUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {console.log(data)
        navigate("/login")
    })
      .catch((error) => console.error(error));
  };

  const login = async (email, password) => {
    console.log(`Logging in with --==> ${base_url}/users/login`);
    try {
      setLoading(true);
      fetch(`${base_url}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          const userInfo = res.data;
          const token = res.token;
          setUser(userInfo);
          localStorage.setItem("token", token);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("id", userInfo.id);
          setLoading(false);
          console.log(userInfo);
        })

        .catch((e) => {
          console.log(`Login error ${e}`);
          setLoading(false);
          setError(e);
        });
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("id");
    setUser(null);
  };

  const getUser = async () => {
    console.log("fetching user");
    setLoading(true);
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    try {
      fetch(`${base_url}/users/${id}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data.company);
          console.log(data.company);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout, register}}>
      {children}
    </AuthContext.Provider>
  );
};

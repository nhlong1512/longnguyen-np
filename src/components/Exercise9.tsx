import { CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUser } from "../models/IUser";

const Exercise9 = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [fetched, setFetched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://random-data-api.com/api/users/random_user?size=10"
      );
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (fetched) {
      fetchData();
    }
  }, [fetched]);

  const handleButtonClick = () => {
    setFetched(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#e1f7dc",
        gap: "20px",
      }}
    >
      <button
        onClick={handleButtonClick}
        style={{
          border: "none",
          fontSize: "20px",
          color: "#fff",
          backgroundColor: "#f0153b",
          padding: "10px 50px",
          fontWeight: "700",
          width: "280px",
          borderRadius: "10px",
          borderBottom: "5px solid #a30d36",
          cursor: "pointer",
          marginTop: "140px",
        }}
      >
        Fetch Random
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading ? ( // Kiểm tra isLoading để hiển thị loading spinner hoặc danh sách user
          <div>
            <CircularProgress />
            <p>Loading...</p>
          </div>
        ) : (
          fetched && (
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              xs={5}
            >
              {users.map((user) => (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  key={user.first_name}
                >
                  <div
                    style={{
                      padding: "20px 10px",
                      border: "2px solid #ccc",
                      borderRadius: "10px",
                      width: "280px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <img
                      src={user.avatar}
                      alt="userImage"
                      style={{ height: "200px" }}
                    />
                    <h3
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        display: "flex",
                      }}
                    >
                      {user.first_name + " " + user.last_name}
                    </h3>
                    <p style={{ fontSize: "14px", display: "flex" }}>
                      {user.employment.title}
                    </p>
                  </div>
                </Grid>
              ))}
            </Grid>
          )
        )}
      </div>
    </div>
  );
};

export default Exercise9;

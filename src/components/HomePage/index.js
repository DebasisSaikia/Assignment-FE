import React, { useEffect, useState } from "react";
import { usersApi } from "../../utils/apis";
import { SuccessMessage } from "../../utils/Toast";
import Users from "../Users";
import { HomeContainer } from "./homeStyle";

const HomePage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(usersApi)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, []);

  // delete user data
  const onDelete = async (id) => {
    await fetch(`${usersApi}${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setUserData(
            userData.filter((user) => {
              return user.id !== id;
            }),
            SuccessMessage('User Deleted Successfully')
          );
        }
      })
      .catch((error) =>{
        console.log(error);
      } );
  };

  //   edit user
  const onEdit = async (id, name, email,phone,website) => {
    await fetch(`${usersApi}${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        email: email,
        phone:phone,
        website:website,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        const updatedUsers = userData.map((user) => {
          if (user.id === id) {
            user.name = name;
            user.email = email;
            user.phone=phone;
            user.website=website;
          }

          return user;
        });

        setUserData((users) => updatedUsers);
        SuccessMessage('User Updated Successfully')
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <HomeContainer>
      {userData.map((user) => (
        <Users
          id={user.id}
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          website={user.website}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </HomeContainer>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import { getUsers } from "../services/usersFetch";
import { useNavigate } from "react-router";

const ListUsers = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate()

  const loadUsers = () => {
    const usersAux = getUsers();
    setUserList(usersAux);
  }

  const gotoDetail = (userId) => {
    navigate(`/details/${userId}`)
  }

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 5, border: "3px double orange", padding: "10px", borderRadius:" 10px"}}>
      {!userList ? (
        <>
          <div>
            <h3>Cargando listado...</h3>
          </div>
        </>
      ) : (
        userList.map((u, idx) => (
          <div key={idx} style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>{u.name}</p>
            <button onClick={()=>gotoDetail(u.id)}  style={{backgroundColor: "green"}}>Detalle</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ListUsers;

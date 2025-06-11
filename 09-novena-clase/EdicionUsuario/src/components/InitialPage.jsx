import React, { useState } from "react";
import DataUserComponent from "./DataUserComponent";

const InitialPage = () => {
  const [userData, setUserData] = useState({});
  const [mode, setMode] = useState("CREATE"); // ' MODIFY', 'CREATE', 'VISUALICE'

  const createUser = (newUserData) => {
    if (Object.entries(newUserData).length < 3) {
      showError("Faltan campos requeridos");
    } else {
      setUserData(newUserData);
      setMode("VISUALICE");
    }
  };

  const showError = (message) => {
    const error = document.querySelector(".error-message");
    error.style.visibility = "visible";
    error.textContent = message;
    setTimeout(() => {
      error.style.visibility = "hidden";
    }, 2000);
  };

  const modifyUser = (newUserData) => {
    setUserData(newUserData);
    setMode("VISUALICE");
  };

  const goToModify = () => {
    setMode("MODIFY");
  };

  const resetPage = () => {
    setUserData({});
    setMode("CREATE");
  };

  const backtoVisualiceMode = () => {
    if (!userData) {
      setMode("CREATE");
    } else {
      setMode("VISUALICE");
    }
  };

  return (
    <>
      {mode === "CREATE" ? (
        <>
          <DataUserComponent
            mode={mode}
            dataUser={userData}
            createUser={createUser}
          />
          <div className="container-data">
            <span>No se ha registrado ningun usuario</span>
          </div>
        </>
      ) : (
        <DataUserComponent
          mode={mode}
          dataUser={userData}
          cancel={backtoVisualiceMode}
          modifyUser={modifyUser}
          gotoModify={goToModify}
          reset={resetPage}
        />
      )}
    </>
  );
};

export default InitialPage;

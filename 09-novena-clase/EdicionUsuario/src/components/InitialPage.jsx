import React, { useState } from "react";
import DataUserComponent from "./DataUserComponent";

const InitialPage = () => {
  const [userData, setUserData] = useState({});
  const [mode, setMode] = useState("CREATE"); // ' MODIFY', 'CREATE', 'VISUALICE'

  const createUser = (newUserData) => {
    setUserData(newUserData);
    setMode("VISUALICE");
  };

  const modifyUser = (newUserData) => {
    setUserData(newUserData);
    setMode("VISUALICE");
  };

  const goToModify = () => {
    setMode("MODIFY");
  };

  const resetPage = () => {
    setUserData({})
    setMode("CREATE");
  }

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

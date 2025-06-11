import React, { useState } from "react";
import InputComponent from "./InputComponent";

const DataUserComponent = ({
  mode,
  dataUser,
  createUser,
  modifyUser,
  cancel,
  gotoModify,
  reset
}) => {
  const [newUser, setNewUser] = useState({ ...dataUser });

  const newUserHandler = (propName, propValue) => {
    const aux = {
      ...newUser,
      [propName]: propValue,
    };
    setNewUser(aux);
  };

  return (
    <>
      <div className="container-data">
        <div className="input-container">
          <InputComponent
            title={"username"}
            type={"text"}
            mode={mode}
            valueOld={dataUser.username}
            valueNew={newUser.username}
            newUserHandler={newUserHandler}
          />
        </div>
        <div className="input-container">
          <InputComponent
            title={"email"}
            type={"email"}
            mode={mode}
            valueOld={dataUser.email}
            valueNew={newUser.email}
            newUserHandler={newUserHandler}
          />
        </div>
        <div className="input-container">
          <InputComponent
            title={"password"}
            type={"password"}
            mode={mode}
            valueOld={dataUser.password}
            valueNew={newUser.password}
            newUserHandler={newUserHandler}
          />
        </div>
        <div className="btns-container">
          {mode === "CREATE" ? (
            <button className="btn-create" onClick={() => createUser(newUser)}>
              Crear Usuario
            </button>
          ) : (
            <>
              {mode === "VISUALICE" ? (
                <>
                  <button
                    className="btn-modify"
                    onClick={() => gotoModify(dataUser)}
                  >
                    Modificar
                  </button>
                  <button
                    className="btn-reset"
                    onClick={reset}
                  >Reiniciar página</button>
                </>
              ) : (
                <>
                  <button
                    className="btn-save"
                    onClick={() => modifyUser(newUser)}
                  >
                    Guardar cambios
                  </button>
                  <button className="btn-cancel" onClick={cancel}>
                    Cancelar
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DataUserComponent;

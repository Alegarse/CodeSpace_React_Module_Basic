import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ repassword, setRepassword ] = useState("");
  const [ alertMessage, setAlertMessage ] = useState("");

  const checkUsername = () => {
    if (username.trim().length <= 2) {
      setAlertMessage("Algún campo no cumple las condiciones")
    } else {
      setAlertMessage("")
    }
  };

  const checkPasswordLength = () => {
    if (password.length < 8 || repassword.length < 8) {
      setAlertMessage("Algún campo no cumple las condiciones")
    } else {
      setAlertMessage("")
    }
  };

  const checkEqualPassword = () => {
    if (password !== repassword) {
      setAlertMessage("Algún campo no cumple las condiciones")
    } else {
      setAlertMessage("")
    }
  };

    useEffect(() => {
    checkUsername()
  }, [username]);

    useEffect(() => {
    checkPasswordLength()
  }, [password]);

  useEffect(() => {
    checkEqualPassword()
    checkPasswordLength()
  }, [repassword]);




  return (
    <>
      <div>
        <h3>{alertMessage}</h3>
        <div>
          <span>Username</span>
          <input
            type="text"
            className="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <span>Contraseña</span>
          <input
            type="text"
            className="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <span>Repite contraseña</span>
          <input
            type="text"
            className="text"
            onChange={(e) => {
              setRepassword(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import api from "./services/api";

import "./App.css";

function App() {
  const [feedback, setFeedback] = useState("");
  const [msgObg, setMsgObg] = useState();
  const [textBtn, setTextBtn] = useState("feedback me");
  const [msgError, setMsgError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (!feedback) {
      //alert("Campo feedback é obrigatório");
      setMsgError("Campo feedback é obrigatório *");
    } else {
      setMsgError("");
      setTextBtn("Salvando...");

      var date = new Date();
      var dataCompleta = date.toLocaleString();

<<<<<<< HEAD
      await api
        .post("/feedback", { feedback, dataCompleta })
        .then(response => {
          if (response.status === 200) {
            setMsgObg(true);
            setTextBtn("Salvo com sucesso, obrigado.");
          }
        })
        .catch(error => {
          //alert("Serviço indisponível");
          setMsgError("Serviço indisponível *");
          setTextBtn("feedback me");
        });
    }
=======
    //console.log(email);
    //console.log(feedback);
    //console.log(dataCompleta);

    await api
      .post("/feedback/criar", { email, feedback, dataCompleta })
      .then(response => {
        //console.log(response.data);

        if (response.status === 200) {
          setMsgObg(true);
        }
      })
      .catch(error => {
        alert("Serviço indisponível");
      });
>>>>>>> 56cf216069fe26910b3f85c91cf9f694d40aee15
  }

  return (
    <div className="container">
      <div className="content">
        <img
          alt="apenas eu"
          src="https://pbs.twimg.com/profile_images/1229280534137901058/QuZ1v0Kv_400x400.jpg"
        />

        <p>
          Criei essa page para receber alguns feedbacks sendo positivo/negativo
          tanto para os meus projetos/minha pessoa. É isso vlw!
        </p>

        {msgError ? <p className="msgError">{msgError}</p> : <></>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="feedback">FeedBack *</label>

          <input
            id="feedback"
            type="feedback"
            placeholder=""
            value={feedback}
            onChange={event => setFeedback(event.target.value)}
          />

          <button className="btn" type="submit">
            {textBtn}
          </button>
        </form>
        {msgObg ? (
          <>
            <br />
            <br />
            <p>
              Muito Obrigado pelo feedback. <strong>@alexsouzasilvax</strong>
            </p>
          </>
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
}

export default App;

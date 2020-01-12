import React, { useState } from "react";
import api from "./services/api";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [msgObg, setMsgObg] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    var date = new Date();
    var dataCompleta = date.toLocaleString();

    //console.log(email);
    //console.log(feedback);
    //console.log(dataCompleta);

    setMsgObg(true);

    await api
      .post("/feedback", { email, feedback, dataCompleta })
      .then(response => {
        //console.log(response.data);

        if (response.status === 200) {
          setMsgObg(true);
        }
      })
      .catch(error => {
        alert("Serviço indisponível");
      });
  }

  return (
    <div className="container">
      <div className="content">
        <img
          alt="apenas eu"
          src="https://pbs.twimg.com/profile_images/1202375124663619585/6-H_aAxK_400x400.jpg"
        />

        <p>
          Criei essa page para receber alguns feedbacks sendo positivo/negativo
          tanto para os meus projetos/minha pessoa. É isso vlw!
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <label htmlFor="feedback">FeedBack</label>

          <input
            id="feedback"
            type="feedback"
            placeholder=""
            value={feedback}
            onChange={event => setFeedback(event.target.value)}
          />

          <button className="btn" type="submit">
            feedback me
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

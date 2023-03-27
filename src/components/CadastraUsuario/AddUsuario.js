import axios from "axios";
import React, { useState } from "react";
import { InputCadastro, ContainerCadastro } from './style'

function AddUsuario(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const postNovoUsuario = async () => {
    const body = {
      name: nome,
      email
    };
    try {
      await axios
        .post(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
          body,
          {
            headers: {
              Authorization: "kieffer-torricilia-barbosa"
            }
          }
        )
      alert("usuario criado!");
      props.getUsuarios();
      setEmail("");
      setNome("");

    } catch (erro) {
      console.log("erro add", erro.response)
    }
  };

  return (
    <ContainerCadastro>
      <h3>Cadastrar novo usuario</h3>
      <InputCadastro
        placeholder={"Nome"}
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <InputCadastro
        type="email"
        placeholder={"E-mail"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={postNovoUsuario}>Enviar</button>
    </ContainerCadastro>
  );
}

export default AddUsuario;
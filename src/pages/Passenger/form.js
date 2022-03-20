import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const PassengerFormPage = () => {
    return (
        <div className="m-3">
            <div className="d-flex justify-content-between bd-highlight mb-3">
                <span className="h4">Formulário de Passageiro</span><Link to="/passageiros/novo" className="btn btn-primary" >Salvar</Link>
            </div>
          </div>
    )
};
export default PassengerFormPage;
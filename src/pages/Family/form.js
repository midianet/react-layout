import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const FamilyFormPage = () => {
    const [sucessfulll, setSucessfull] = useState();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:8080/family',requestOptions)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return (
        <div className="m-3">
            <div className="d-flex justify-content-between bd-highlight mb-3">
                <span className="h4">Formulário de Família</span><Link to="/familias" className="btn btn-primary" >Cancelar</Link>
            </div> 
            <form className="col-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="name" placeholder="Informe o nome da família" defaultValue="" maxLength={20} {...register("name", { required: true })}/>
                    {errors.name?.type === 'required' && <span className="feedback invalid-feedback">Nome é obrigatório</span>}
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </div>
    )
};
export default FamilyFormPage;
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const PassengerListPage = () => {

    const [data , setData]  = useState([]);
    const [page , setPage]  = useState(1);
    const [pages, setPages] = useState(0);
    const [total, setTotal] = useState(0);
    const [size , setSize]  = useState(10);

    const fetchData = () => {
        fetch('http://localhost:8080/passenger?page='+(page-1)+'&size='+size)
            .then(response => {
                if(response.ok) return response.json()
                throw response
            })
            .then(data => {
                setData(data.content)
                setPages(parseInt(data.totalPages))
                setTotal(parseInt(data.totalElements))
                console.log(data.content)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {   
        fetchData();
    }, [page,size]);

    return (
        <div className="m-3">
            <div className="d-flex justify-content-between bd-highlight mb-3">
                <span className="h4">Lista de Passageiros</span><Link to="/passageiros/novo" className="btn btn-primary" >Novo</Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">CPF</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Família</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.cpf}</td>         
                            <td>{item.name}</td>    
                            <td>XXX</td>
                        </tr>)
                    )}
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        {page >   1 && <button className="page-link" onClick={() => setPage(1)}>Primeira</button>}
                        {page === 1 && <button disabled style={{height:30, border:'solid 1px', borderTopLeftRadius:'0.25rem', borderBottomLeftRadius:'0.25rem', padding:'0.375rem 0.75rem'}} >Primeira</button>}
                    </li>
                    <li className="page-item">
                        {page > 1 && <button className="page-link" onClick={() => setPage(page - 1)}>Anterior</button>}
                        {page === 1 && <button disabled style={{height:30,border:'solid 1px', padding:'0.375rem 0.75rem'}} >Anterior</button>}
                    </li>
                    <li className="page-item">
                        {page < pages && <button className="page-link" onClick={() => setPage(page + 1)}>Próxima</button>}
                        {page === pages && <button disabled style={{height:30,border:'solid 1px', padding:'0.375rem 0.75rem'}} >Próxima</button>}
                    </li>
                    <li className="page-item">
                        {page < pages && <button className="page-link" onClick={() => setPage(pages)}>Última</button>}
                        {page === pages && <button disabled style={{height:30,border:'solid 1px', borderTopRightRadius:'0.25rem', borderBottomRightRadius:'0.25rem', padding:'0.375rem 0.75rem'}} >Última</button>}
                    </li>
                </ul>
                <div style={{height:'30px', marginRight:'5px', padding:'5px'}}>
                            Página <span className="font-weight-bold">{page}</span> de <span className="font-weight-bold">{pages}</span>  -   Registros({total})
                </div>
            </nav>
  
        </div>
    )
};
export default PassengerListPage;
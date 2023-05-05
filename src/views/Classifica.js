import React, { useState, useEffect } from 'react'
// import dati from '../data/squadre.json'

const rowsPerPage = 5
const Classifica = () => {

    const [ordinamento, setOrdinamento] = useState(true)
    const [page, setPage] = useState(1)
    const [rows, setRows] = useState([])
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        const start = (page -1) * rowsPerPage
        const end = start + rowsPerPage

        fetch(`http://localhost:3009/squadre?_start=${start}&_end=${end}&_sort=punti&$_order=${ordinamento ? 'desc' : 'asc'}`)
        
        .then(dati => {
            setTotalCount(dati.headers.get('X-Total-Count'))
            return dati
        })
        
        .then(dati => dati.json())
        .then(dati => {
            setRows(dati)
        })
    }, [ordinamento, page])

    


    return (
        <div>
            <h1>Classifica</h1>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Azioni</th>
                        <th>Nome</th>
                        <th>N. Giocatori</th>
                        <th>V. Rosa</th>
                        <th onClick={() => {setOrdinamento(!ordinamento)}}>Punti</th>
                        <th>Indice</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        rows
                        .sort((a, b) => (b.punti - a.punti) * (ordinamento ? 1 : -1))
                        .sort((a, b) => (b.punti - a.punti) * (ordinamento ? 1 : -1))
                        .map((squadra, indice) => <tr 
                            className={
                                ordinamento && indice < 3 || 
                                !ordinamento && (indice >= rows.length - 3) 
                                    ? 'table-primary'
                                    : ''
                            }
                        >
                            <td><input type="checkbox" /></td>
                            <td>{squadra.nome}</td>
                            <td>{squadra.nGiocatori}</td>
                            <td>{squadra.vRosa}</td>
                            <td>{squadra.punti}</td>
                            <td>{indice}</td>
                    </tr>)
                    }
                    
                </tbody>
            </table>

            <nav aria-label="Page navigation example">
  <ul className="pagination">
    
    <li className="page-item">
        <a onClick={() => {setPage(1)}} className="page-link" href="#">1</a></li>
    <li className="page-item">
        <a onClick={() => {setPage(2)}} className="page-link" href="#">2</a></li>
    
  </ul>
</nav>
        </div>
    );
}

export default Classifica;
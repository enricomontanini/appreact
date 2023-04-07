const dati = [
    {
        nome: 'Squadra 1',
        nGiocatori: 24,
        vRosa: 500
    },
    {
        nome: 'Squadra 2',
        nGiocatori: 26,
        vRosa: 600
    },
    {
        nome: 'Squadra 3',
        nGiocatori: 25,
        vRosa: 200
    }
];

const Squadre = () => {
    return (
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Azioni</th>
                        <th>Nome</th>
                        <th>N. Giocatori</th>
                        <th>V. Rosa</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        dati.map(squadra => <tr>
                        <td><input type="checkbox" /></td>
                        <td>{squadra.nome}</td>
                        <td>{squadra.nGiocatori}</td>
                        <td>{squadra.vRosa}</td>
                    </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
}

export default Squadre;
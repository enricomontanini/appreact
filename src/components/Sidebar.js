const Sidebar = () => {
    return (
        <div id="sidebar">
            <div id="logo"><img src="logo.png" alt="Logo" /></div>

            <div id="menu">
                <ul>
                    <ElementoMenu label="Dashboard" />

                    <ElementoMenu label="Squadre">
                        <ElementoMenu label="Categorie" />
                        <ElementoMenu label="Giocatori" />
                    </ElementoMenu>

                    <ElementoMenu label="Calendario">
                        <ElementoMenu label="Prossime" />
                        <ElementoMenu label="Archivio" />
                    </ElementoMenu>

                    <ElementoMenu label="Classifica" />
                </ul>
            </div>
            <Versione />
        </div>
    );
}

const Versione = () => <div id="versione">v 1.0.0</div>

const ElementoMenu = (props) => (
    <li>{props.label}
    {props.children && <ul>{props.children}</ul>}
    </li>
)

export default Sidebar;
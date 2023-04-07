import { faCalendarDays, faHome, faPeopleGroup, faTrophy } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = (props) => {
    const {isOpen} = props;

    const sidebarClass = isOpen ? 'open' : '';

    return (
        <div id="sidebar" className={sidebarClass}>
            <div id="logo"><img src="logo.png" alt="Logo" /></div>

            <div id="menu">
                <ul>
                    <ElementoMenu label="Dashboard" icon={faHome} />

                    <ElementoMenu label="Squadre" icon={faPeopleGroup}>
                        <ElementoMenu label="Categorie" />
                        <ElementoMenu label="Giocatori" />
                    </ElementoMenu>

                    <ElementoMenu label="Calendario" icon={faCalendarDays}>
                        <ElementoMenu label="Prossime" />
                        <ElementoMenu label="Archivio" />
                    </ElementoMenu>

                    <ElementoMenu label="Classifica" icon={faTrophy} />
                </ul>
            </div>
            <Versione />
        </div>
    );
}

const Versione = () => <div id="versione">v 1.0.0</div>

const ElementoMenu = (props) => {
    const {children, label, icon} = props;

    const [open, setOpen] = useState(false);

    let liClass = open ? 'active' : '';
    
    if (children) {
        liClass = liClass + ' submenu';
    }

    const handleClick = () => setOpen(!open);

    return (
        <li 
            className={liClass}
            onClick={handleClick}
        >
            <span className="icona"><FontAwesomeIcon icon={icon} /></span> 
            <span className="etichetta">{label}</span>
            {children && <ul>{children}</ul>}
        </li>
    )
}



export default Sidebar;
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    // const items = [
    //     'Home',
    //     'Favoris'
    // ]

    // const list = items.map(items => <li>{items}</li>)
    // console.log(list)
    return (
        <div>
            <nav className="Navbar">
                <h3 className='title'>Allomovie</h3>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Favoris">Favoris</NavLink></li>
                </ul>
            </nav>
        </div>
        
    )
}



export default Navbar;
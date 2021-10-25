import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav>
            <ul className={`${s.navList} list`}>
                <li>
                    <NavLink exact to="/"
                        className={s.link}
                        activeClassName={s.active}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/movies"
                        className={s.link}
                        activeClassName={s.active}
                    >
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
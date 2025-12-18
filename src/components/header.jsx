import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="fixed flex items-center justify-center top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm py-3 px-6">
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-base font-medium text-teal-600 hover:text-teal-700 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-base font-medium text-teal-600 hover:text-teal-700 transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/new-contact" className="text-base font-medium text-teal-600 hover:text-teal-700 transition-colors">
                            New
                        </Link>
                    </li>
                    <li>
                        <Link to="/test" className="text-base font-medium text-teal-600 hover:text-teal-700 transition-colors">
                            Test
                        </Link>
                    </li>
                </ul>
            </nav>
            <p className="ml-8 text-sm text-slate-600">Favorite: <strong className="text-slate-800">{props.favoriteContact}</strong></p>
        </header>
    )
}
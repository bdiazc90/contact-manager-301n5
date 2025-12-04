import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="fixed flex justify-center top-0 left-0 w-full bg-white/60 backdrop-blur-lg shadow-md p-4">
            <nav>
                <ul className="flex space-x-4 justify-center">
                    <li>
                        <Link to="/" className="text-lg font-semibold text-blue-600 hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-lg font-semibold text-blue-600 hover:underline">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/new-contact" className="text-lg font-semibold text-blue-600 hover:underline">
                            New
                        </Link>
                    </li>
                </ul>
            </nav>
            <p className="ml-12">Favorite Contact: <strong>{props.favoriteContact}</strong></p>
        </header>
    )
}
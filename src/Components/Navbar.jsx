function Navbar() {
    return (
        <header className="bg-white shadow-md py-4 px-8">
            <div className="flex justify-between items-center">
                <img src="logo.png" alt="Logo" className="h-8" />
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Inicio</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Servicios</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Nosotros</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Proyectos</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export { Navbar };

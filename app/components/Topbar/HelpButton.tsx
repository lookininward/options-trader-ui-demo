const HelpButton: React.FC = () => {
    return (
        <a
            href="/"
            className="hidden md:flex text-gray-500 border-green-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center text-sm font-medium">
            <span className="sr-only">Open help page</span>
            Help
        </a>
    );
}

export default HelpButton;
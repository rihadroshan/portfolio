const Navbar = () => {
  return (
    <nav className="fixed w-full z-40 backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-4 py-4">
        <div className="flex justify-end items-center gap-4">
          <a
            href="https://github.com/rihadroshan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors relative"
          >
            <span className="relative">
              GitHub
              <span className="absolute -bottom-1 left-0 w-full h-px bg-violet-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/rihadroshan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors relative"
          >
            <span className="relative">
              LinkedIn
              <span className="absolute -bottom-1 left-0 w-full h-px bg-violet-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Navbar = () => {
  return (
    <nav className="fixed w-full z-40 backdrop-blur-md">
      <div className="max-w-8xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Your name */}
          <a
            href="#hero"
            className="text-2xl font-light tracking-wider hover:text-blue-400 transition-colors"
          ></a>

          {/* Right side - Links */}
          <div className="flex items-center space-x-8">
            <a
              href="https://github.com/hrishikesh-srihari"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors relative"
            >
              {/* <Github className="w-5 h-5" /> */}
              <span className="relative">
                GitHub
                <span className="absolute -bottom-1 left-0 w-full h-px bg-blue-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </span>
            </a>

            <a
              href="/Rishi_Srihari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors relative"
            >
              {/* <FileText className="w-5 h-5" /> */}
              <span className="relative">
                Resumé
                <span className="absolute -bottom-1 left-0 w-full h-px bg-blue-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

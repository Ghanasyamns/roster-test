import { Profile } from "@/data/types/users";

function Navbar({ profile }: { profile: Profile }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-emerald-400">
            {profile.name}
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

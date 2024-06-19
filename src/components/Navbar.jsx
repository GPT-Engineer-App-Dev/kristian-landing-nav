import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
      <div className="text-lg font-bold">KRK</div>
      <div className="space-x-4">
        <Button asChild variant="link">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="link">
          <Link to="/about">About</Link>
        </Button>
        <Button asChild variant="link">
          <Link to="/contact">Contact</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
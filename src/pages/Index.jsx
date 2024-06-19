import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Kristian Ruiz Kyvik's Website</h1>
      <p className="text-lg">Explore the site to learn more about us.</p>
      <div className="space-x-4">
        <Button asChild>
          <Link to="/about">About Us</Link>
        </Button>
        <Button asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
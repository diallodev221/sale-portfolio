import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Your Name
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A passionate developer crafting beautiful and functional web experiences
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
          >
            View Projects
            <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};
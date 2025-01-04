import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="text-purple-600">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              I'm a full-stack developer with a passion for creating elegant
              solutions to complex problems. With expertise in modern web
              technologies, I build applications that are both beautiful and
              functional.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              blog posts and tutorials.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h3 className="text-2xl font-bold text-purple-600">3+</h3>
                <p className="text-gray-600">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h3 className="text-2xl font-bold text-purple-600">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h3 className="text-2xl font-bold text-purple-600">20+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent>
                <h3 className="text-2xl font-bold text-purple-600">100%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
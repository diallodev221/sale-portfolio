import { Card, CardContent } from "@/components/ui/card";

export const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "PostgreSQL"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "Figma"],
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Communication", "Team Work", "Leadership"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-purple-600">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">
                  {skillSet.category}
                </h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center text-gray-600"
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "VueJS", "TypeScript"];

  const backendSkills = ["Node.js", "Python", "AWS", "Mongo.DB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 text-lg mb-6">
            I'm a passionate Software Engineer with a strong foundation in web
            development. I have experience in building dynamic and responsive
            web applications using modern technologies. I love to learn new
            skills and stay updated with the latest trends in the tech industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2 ">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2 ">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>MSc in Software Engineering</strong> - De Montfort
                University (2023 - 2024)
              </li>
              <li>
                Relevent Coursework: Software Development, Web Technologies,
                Cloud Computing.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
            <div className="space-y-2 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Warehouse Operative at Shein / Cider (Present){" "}
                </h4>
                <p>
                  Responsible for managing inventory and ensuring efficient
                  order fulfillment.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">
                  {" "}
                  BOH Trainer at Popeyes (2022-2024{" "}
                </h4>
                <p>
                  Trained new employees in food safety and kitchen operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

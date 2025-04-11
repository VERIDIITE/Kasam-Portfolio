export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2 "> Cloud Platform </h3>
            <p className="text-gray-400 mb-4">
              {" "}
              Scalable Cloud Infrastructure Management
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                         hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Projects →{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2 "> Mobile Platform </h3>
            <p className="text-gray-400 mb-4">
              {" "}
              Mobile Sample Pack App for Producers
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "CSS", "Javascript", "Figma"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                         hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/VERIDIITE/Final-Academic-Project-DUAL-CHASE.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Projects →{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2 "> WF App Platform </h3>
            <p className="text-gray-400 mb-4">
              {" "}
              Employee Management System with WinForms
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["C#", "WinForms", "SQL Server"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                         hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/VERIDIITE/WinForms-EmployeeManagementSystem-SQL.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Projects →{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-2 "> WPF Chat App Platform </h3>
            <p className="text-gray-400 mb-4">
              {" "}
              Real-Time Messaging with MVVM Architecture
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["C#", "WPF", "MVVM", "SQL Server"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                         hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/VERIDIITE/WPF-C-Professional-Modern-Chat-App.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Projects →{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

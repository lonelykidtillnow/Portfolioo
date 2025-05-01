const Skills = () => {
    const skills = [
      { name: "JavaScript", value: 85, color: "bg-purple-500" },
      { name: "React JS", value: 85, color: "bg-cyan-400" },
      { name: "Express JS", value: 85, color: "bg-yellow-400" },
      { name: "Node JS", value: 85, color: "bg-purple-500" },
      { name: "My SQL", value: 85, color: "bg-red-500" },
      { name: "MongoDB", value: 85, color: "bg-yellow-500" },
      { name: "C++", value: 75, color: "bg-black" },
    ];
  
    return (
      <section className="px-6 py-12 md:py-16 bg-white">
        <div className="w-[90%] mx-auto">
          <h2 className="text-4xl font-bold text-black text-[36px] mb-4">Skills</h2>
          <p className="text-gray-600 text-lg mb-10">
          I specialize in full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
          I'm proficient in C++ and have a basic understanding of Data Structures and Algorithms (DSA). I'm also experienced with Git for version control and enjoy building dynamic, responsive web applications.
          </p>
  
          <h3 className="text-2xl font-bold text-black text-[28px] mb-6">My Skills</h3>
  
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-black">{skill.name}</span>
                  <span className="font-medium text-black">{skill.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className={`${skill.color} h-2 rounded`}
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
export default Skills;
  
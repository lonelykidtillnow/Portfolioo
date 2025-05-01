import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const data = [
    {
      title: "Bachelor of Technology (B.Tech.)",
      institute: "Kamaraj College of Engineering and Technology, Madurai",
      duration: "Sept 2021 - May 2025",
      score: "CGPA: 73.4%",
    },
    {
      title: "12th Grade",
      institute: "Sri.P.V Matriculation Higher Secondary School,Madurai",
      duration: "June 2020 - May 2021",
      score: "Percentage: 85%",
    },
    {
      title: "10th Grade",
      institute: "Sri.P.V Matriculation Higher Secondary School, Sivakasi",
      duration: "June 2018 - May 2019",
      score: "Percentage: 80%",
    },
  ];

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="w-[90%] mx-auto">
        <h2 className="text-4xl font-bold text-black mb-10">My Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4"
            >
              {/* Graduation Icon */}
              <div className="min-w-[60px] min-h-[60px] bg-gradient-to-tr from-yellow-400 to-purple-400 rounded-full flex items-center justify-center text-black text-2xl">
                <FaGraduationCap />
              </div>

              {/* Education Info */}
              <div>
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="text-gray-800 font-medium">{item.institute}</p>
                <p className="text-gray-600 mt-1 text-sm">
                  {item.duration} | {item.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

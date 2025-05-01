import reactjs from "./assets/Reactjs.jpg";
import c from "./assets/C++.jpg";
import ai from "./assets/MasterclassAI.jpg";
import mysql from "./assets/Mysql.jpg";

const Certificate = () => {
    return (
        <section className="py-12 px-4">
            <h2 className="text-3xl font-bold text-start text-[36px] mb-10 ml-[80px]">My Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto">

                {/* Certification Card */}
                <div className="bg-white shadow-md rounded-lg p-5">
                    <img src={reactjs} alt="reactjs" className="w-full h-40 object-cover rounded-md mb-4" />
                    <h3 className="text-lg font-semibold">React JS</h3>
                    <p className="text-sm text-gray-500">Infosys Springboard</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-5">
                    <img src={c} alt="C++" className="w-full h-40 object-cover rounded-md mb-4" />
                    <h3 className="text-lg font-semibold">C++ Programming</h3>
                    <p className="text-sm text-gray-500">Phoenix Softech, Madurai</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-5">
                    <img src={ai} alt="ai" className="w-full h-40 object-cover rounded-md mb-4" />
                    <h3 className="text-lg font-semibold">21 Days Masterclass on Jetson AI</h3>
                    <p className="text-sm text-gray-500">Pantech e Learning Pvt Ltd, Chennai</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-5">
                    <img src={mysql} alt="mysql" className="w-full h-40 object-cover rounded-md mb-4" />
                    <h3 className="text-lg font-semibold">MySQL</h3>
                    <p className="text-sm text-gray-500">Great Learning Academy</p>
                </div>
            </div>
        </section>
    );
};

export default Certificate;

import "./tailwind.css";
import a from "./assets/Rajesh-preview.png";
//changing word
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    return (
        <div className="2xl:container mx-auto">
            <div className="w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="h-[100vh] flex justify-between items-center">
                    <div className="flex flex-col gap-4 p-[10px]">
                        <h1 className="text-[28px] font-[600px] text-[#626bd4] leading-[33.6px] font-[poppins]">I'm</h1>
                        <h1 className="text-[64px] font-[700px] text-[#12141D] leading-[76.8px] font-[poppins]">RAJESH R M</h1>
                        <p className="text-[32px] font-[600px] text-[#12141D] leading-[38.4px] font-[poppins]">
                            <Typewriter
                                words={['Full Stack Developer', 'Front End Developer', 'Web Developer']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>
                        <a href="https://drive.google.com/file/d/1ZH9RM1K4Fnc7_hW3ooaoO4wDT5-ZnlX1/view" target="blank"><button className="text-[16px] font-[500px] text-[#FFFFFF] leading-[24px] bg-[#6244c5] font-[poppins] p-[10px] rounded-xl w-[200px]">Download CV</button></a>
                    </div>
                </div>
                <div>
                    <div className="ml-16">
                        <img src={a} className="h-[100vh]"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;
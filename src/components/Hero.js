import { FaLongArrowAltRight } from "react-icons/fa";
export default function Hero() {
    return (
        <>
            <div className="w-full min-h-screen flex flex-col sm:grid sm:grid-cols-2 sm:gap-0 sm:min-h-full sm:max-h-[600px] md:pl-10 pl-5 bg-[#dfcefb] gap-8">
                <div className="min-w-[280px] flex-grow-0 leading-none gap-12 flex place-content-center sm:mr-2 justify-center py-[100px] flex-col">
                    <h1 className="text-[50px] font-bold self-start min-h-[110px]">
                        Create your own design
                    </h1>
                    <p className="text-lg leading-[1.4] font-normal max-w-[470px] pt-[2px]">
                        T-shirts with your unique prints - easy and simple to
                        create!
                    </p>
                    <div className="bg-[#ddfc81] cursor-pointer hover:bg-[rgb(161,252,131)] self-start w-[200px] flex justify-center items-center rounded-full">
                        <FaLongArrowAltRight size={"40px"} />
                    </div>
                </div>
                <div className="flex-grow min-w-[320px]">
                    <div
                        className="w-full min-h-[600px] bg-hero bg-center bg-cover bg-no-repeat h-96"
                        alt=""
                    ></div>
                </div>
            </div>
        </>
    );
}

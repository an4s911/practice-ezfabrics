import { FaLongArrowAltRight } from "react-icons/fa";
export default function Hero() {
    return (
        <>
            <div className="w-full min-h-screen flex flex-col pl-5 bg-[#dfcefb] gap-8">
                <div className="leading-none gap-12 flex py-[100px] flex-col">
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
                <div>
                    <div
                        className="min-h-[600px] bg-hero bg-center bg-cover bg-no-repeat h-96"
                        alt=""
                    ></div>
                </div>
            </div>
        </>
    );
}

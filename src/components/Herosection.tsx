import { useEffect, useState } from "react";
interface HerosectionProps {
    countDownDate: number;
}
const HeroSection = ({ countDownDate }: HerosectionProps) => {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="w-full h-[500px] bg-black flex flex-col items-center py-5 sm:py-0 sm:flex sm:flex-row">
            <div className="flex sm:hidden w-3/5 h-full justify-center">
                <img src="/src/assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.svg" alt="" />
            </div>
            <div className="w-2/5 sm:mt-[121px] ml-5 sm:ml-[56px] self-start">
                <div className="text-white font-semibold text-4xl sm:text-5xl">
                    Enhance Your Music Experience
                </div>
                <div className="flex gap-5 mt-5">
                    <div>
                        <div className="w-14 h-14 rounded-full bg-white flex flex-col text-sm justify-center items-center">
                            <div className="font-bold">{day}</div>
                            <div>Days</div>
                        </div>
                    </div>

                    <div>
                        <div className="w-14 h-14 rounded-full bg-white flex flex-col text-sm justify-center items-center">
                            <div className="font-bold">{hour}</div>
                            <div>Hours</div>
                        </div>
                    </div>

                    <div>
                        <div className="w-14 h-14 rounded-full bg-white flex flex-col text-sm justify-center items-center">
                            <div className="font-bold">{minutes}</div>
                            <div>Mins</div>
                        </div>
                    </div>

                    <div>
                        <div className="w-14 h-14 rounded-full bg-white flex flex-col text-sm justify-center items-center">
                            <div className="font-bold">{seconds}</div>
                            <div>Secs</div>
                        </div>
                    </div>
                </div>

                <button className="w-32 h-10 md:w-44 md:h-14 bg-[#00FF66] text-white text-sm sm:text-md flex justify-center items-center rounded-md mt-10 hover:bg-[#DB4444]">Order Now!!</button>
            </div>
            <div className="hidden sm:flex w-3/5 h-full justify-center">
                <img src="/src/assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.svg" alt="" />
            </div>
        </section>
    );
}

export default HeroSection
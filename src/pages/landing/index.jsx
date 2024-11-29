// import Nav from "../../components/Nav";
import text from '../../assets/text.png'
import aside from '../../assets/aside.png'
import footer from '../../assets/footer.png'
import foot from '../../assets/foot.png'
import hero from '../../assets/hero.png'
import dex from '../../assets/dex.png'
import heroSmall from '../../assets/heroSmal.png'
// import copy from '../../assets/copy.png'
import tg from '../../assets/tg.png'
import x from '../../assets/x.png'
import section from '../../assets/section.png'
// import shadow from '../../assets/head.png'
import Slider from "../../components/Slider";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Landing = () => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref5, inView: inView5 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (<div className="bg-primary font-itim min-h-screen overflow-hidden">
        {/* <img src={shadow} className="absolute origin-center" alt="" /> */}
        {/* <div className="flex relative z-[2000] justify-center items-center pt-[3%]"> */}
        <div className='overflow-hidden'>
            <img src={heroSmall} className='absolute hidden lg:block -bottom-3 left-0' alt="" />
            <div className="flex justify-between items-center pt-[3%] px-[3%]">
                <button className="border-[2px] border-black rounded-[5px] py-[6px] lg:py-[10px] px-[20px] lg:px-[50px] font-sigmar text-black bg-secondary transform transition-transform duration-300 ease-in-out scale-100 hover:scale-110">BUY NOW</button>
                <div className='flex justify-end items-center gap-1 lg:gap-4'>
                    <img src={x} alt="" className='w-[30px] h-[30px] lg:w-auto lg:h-auto' /><img src={dex} alt="" className='w-[30px] h-[30px] lg:w-auto lg:h-auto' /><img src={tg} alt="" className='w-[30px] h-[30px] lg:w-auto lg:h-auto' />
                </div>
            </div>
            {/* </div> */}
            <div id='home' className="flex mt-[40px] justify-center items-center lg:mt-[60px]">
                <img src={text} alt="" className='w-[90%] lg:w-auto' />
            </div>
            <div className="flex justify-center relative items-center pb-[100px] lg:pb-0">
                {/* <Parallax speed={isDesktop ? -20 : -10} className="hidden lg:block">
                <img src={shadow} alt="" className='hidden lg:block lg:w-auto' />
                </Parallax> */}
                <Parallax speed={isDesktop ? -30 : -10}>
                    <img src={hero} alt="" className='' />
                </Parallax>
                <button className="border-[2px] bottom-[15%] lg:bottom-16 absolute border-black rounded-[10px] translate transform origin-center rotate-[-5deg] py-[5px] lg:py-[10px] px-[10px] lg:px-[40px] lg:text-[20px] bg-white transition-transform duration-300 ease-in-out scale-100 hover:scale-110">CA: wedq726w8asg2ubjdwr4q3e9wiq</button>
            </div>
        </div>
        <div className="">
            <Slider />
        </div>

        <div id='tokenomics' className="flex bg-[#E4FDE7] flex-col-reverse lg:flex-row  lg:mt-0 justify-center items-center px-4">
            <motion.div ref={ref3}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: inView3 ? 1 : 0,
                    x: inView3 ? 0 : 100,
                }}
                transition={{ duration: 0.5 }} className="w-full lg:w-[40%] flex flex-col items-start gap-[30px] lg:pl-[8%] pb-[50px] lg:pb-0">
                <h1 className="text-[50px] lg:text-[70px] font-bold text-center text-black transform rotate-[-3deg]">TOKENOMICS</h1>

                <div className='flex justify-start items-center lg:items-start'>
                    <p className='text-[36px] text-center lg:text-left'>LP: BURNED FOREVER <br />
                        TAX: 0/0 <br />
                        TICKER: $GOOMPER <br />
                        TEAM: 10% <br />
                        MARKETING: 10%</p>
                </div>
            </motion.div>
            <motion.div ref={ref4}
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: inView4 ? 1 : 0,
                    x: inView4 ? 0 : -100,
                }}
                transition={{ duration: 0.5 }} className="w-full lg:w-[60%] relative">

                <img src={section} alt="" className="w-full" />
            </motion.div>
        </div>

<div className='w-full h-[50px] border-y-[2px] border-black bg-secondary'>

</div>
        <div id='about' className="flex flex-col lg:flex-row justify-center items-center px-[8%] gap-[30px] pb-[10%] lg:pb-[4%]">
            <motion.div ref={ref1}
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: inView1 ? 1 : 0,
                    x: inView1 ? 0 : -100,
                }}
                transition={{ duration: 0.5 }} className="w-full -mt-[40px] lg:w-[40%]"><img src={aside} alt="" className="w-full" /></motion.div>
            <motion.div ref={ref2}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: inView2 ? 1 : 0,
                    x: inView2 ? 0 : 100,
                }}
                transition={{ duration: 0.5 }} className="w-full lg:w-[60%] flex flex-col items-center gap-[30px]">
                <h1 className="font-sigmar text-[35px] lg:text-[44px] text-center">ABOUT $GOOMPER</h1>
                <p className='text-center lg:text-left text-[20px]'>GOOMPER IS THE CHEEKIEST TOKEN ON SOLANA NETWORK, INSIPRED BY
                    MATT FURIE. THE GENIUS BEHIND PEPE, GOOMPER IS THE YOUNG
                    REBELLIOUS COUSIN WHO,S HERE TO BRING CHAOS, FUN AND MASSIVE
                    REWARD TO THE CRYPTO WORLD. REMEMBER  ‘’ LIFE IS A GAME PLAY EPIC
                    OR OLAY GOOMPER STYLE TO WIN’’. </p>
                <div className="flex justify-center items-center gap-[20px] lg:gap-[50px]">
                    <button className="border-[2px] rotate-[-6deg] border-black rounded-[5px] py-[6px] lg:py-[10px] px-[20px] lg:px-[50px] font-sigmar text-[20px] bg-secondary transform transition-transform duration-300 ease-in-out scale-100 hover:scale-110">BUY NOW</button>
                </div>
            </motion.div>
        </div>
<Slider />

        <motion.div ref={ref5}
            initial={{ opacity: 0, y: -100 }}
            animate={{
                opacity: inView5 ? 1 : 0,
                y: inView5 ? 0 : -100,
            }}
            transition={{ duration: 0.5 }} className="flex justify-center items-center overflow-hidden lg:h-[65vh]">
            <div className="flex-col lg:flex-row flex justify-between lg:items-end h-full  w-full">
                <img src={footer} alt="" className='h-full hidden lg:block lg:w-[40%]' />
                <div className="flex flex-col lg:pr-[160px] lg:pt-[50px] h-full items-center lg:items-start justify-center lg:justify-start  gap-[30px] lg:gap-[30px]">
                    <h1 className='text-[40px] lg:text-[76px] tracking-widest'>JOIN THE <br />COMMUNITY </h1>
                    <div className="flex w-full flex-col lg:flex-row justify-center items-center gap-[20px] pb-[20px] lg:pb-0 lg:gap-[50px]">
                        <div className="flex justify-center items-center gap-3">
                            <img src={tg} alt="" className="transform transition-transform duration-300 ease-in-out scale-100 cursor-pointer hover:scale-110" />
                            <img src={x} alt="" className="transform transition-transform duration-300 ease-in-out scale-100 cursor-pointer hover:scale-110" />
                            <img src={dex} alt="" className="transform transition-transform duration-300 ease-in-out scale-100 cursor-pointer hover:scale-110" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-end"><img src={foot} className="-mb-[5px]" alt="" /></div>
            </div>
        </motion.div>

        <h1 className='text-center font-sigmar border-t-[2px] border-t-black bg-secondary py-5'>DESIGNED BY LEGENDVX 2024 ALL RIGHT RESERVED.  </h1>
    </div>);
}

export default Landing;
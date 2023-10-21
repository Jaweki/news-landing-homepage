import { useEffect } from "react";
import { useState } from "react"

const NewsHomePageMain = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const [menuToggle, setMenuToggle] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

  return (
    <>
    <div className="w-full  mobile:px-[11%] max-mobile:px-[4%] pt-[7.5%] pb-[106px] flex flex-col border font-inter text-[15px]">
        <nav className="flex flex-row w-full justify-between relative">
            <img src="/images/logo.svg" alt="Company Logo" className="" />
            <img src="/images/icon-menu.svg" alt="Open Menu button" className={`${isMobile && !menuToggle ? "w-[50px] h-[20px]" : "hidden"}`} onClick={() => setMenuToggle(true)}/>
            <div className={`flex gap-5 text-neutral-darkGrayishBlue ${isMobile && menuToggle ? " absolute z-10 right-0 top-0 bg-white flex-col w-[70%] px-5 h-[100vh] pt-20" : "flex-row justify-evenly max-mobile:hidden" }`}>
                <img src="/images/icon-menu-close.svg" alt="close Menu button" className={`${isMobile ? "w-[40px] h-[40px] absolute right-4 top-0" : "hidden"}`} onClick={() => setMenuToggle(false)}/>
                <a href="#home" onClick={() => setMenuToggle(false)} className=" hover:text-primary-softRed cursor-pointer">Home</a>
                <a href="#new" onClick={() => setMenuToggle(false)} className="hover:text-primary-softRed cursor-pointer">New</a>
                <a href="#popular" onClick={() => setMenuToggle(false)} className="hover:text-primary-softRed cursor-pointer">Popular</a>
                <a href="#trending" onClick={() => setMenuToggle(false)} className="hover:text-primary-softRed cursor-pointer">Trending</a>
                <a href="#categories" onClick={() => setMenuToggle(false)} className="hover:text-primary-softRed cursor-pointer">Categories</a>
            </div>
        </nav>
        <div id="home" className={`${isMobile ? "mt-[10%]" : "grid grid-cols-3 grid-rows-4 gap-4 h-[90%] mt-[44px]"}`}>
            <div className={`${isMobile ? "flex flex-col  gap-3 mb-5" : "col-span-2 row-span-3 grid grid-cols-2 grid-rows-2 h-[13cm]"}`} >
                <img src="/images/image-web-3-desktop.jpg" alt="web 3 illustrative image" className={`${!isMobile ? " col-span-2 row-span-1 w-full" : "hidden"}`} />
                <img src="/images/image-web-3-mobile.jpg" alt="web 3 illustrative image" className={`${isMobile ? " w-full" : "hidden"}`} />
                <span className=" text-neutral-veryDarkBlue font-extrabold mobile:text-[52px] max-mobile:text-[40px] mobile:pt-16 leading-tight">The Bright Future of Web 3.0?</span>
                <div className={`${isMobile ? " flex flex-col gap-7" : " h-full w-full pt-10 grid gap-8"}`}>
                    <p className={`text-neutral-darkGrayishBlue text-[15px] ${isMobile ? "" : "p-2 pt-10 "}`}>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button className=" hover:bg-neutral-veryDarkBlue text-white  bg-primary-softRed h-[37px] w-[133px]">READ MORE</button>
                </div>
            </div>
            <div id="new" className=" bg-neutral-veryDarkBlue mobile:row-span-3 flex flex-col px-[27px] mobile:pt-[1cm] max-mobile:pt-[10px] h-[13cm] max-mobile:h-[580px] max-mobile:mt-[60px]">
                <h2 className=" text-primary-softOrange text-[40px] font-extrabold">New</h2>
                <span className="text-white  border-b-2 border-white mt-3 ">
                    <h3 className=" font-bold text-[19px] hover:text-primary-softOrange cursor-pointer">Hydrogen VS Electric Cars</h3>
                    <p className=" text-[15px] opacity-80 font-extralight my-4">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </span>
                <span className="text-white  border-b-2 border-white mt-3 ">
                    <h3 className=" font-bold text-[19px] hover:text-primary-softOrange cursor-pointer">The Downsides of AI Artistry</h3>
                    <p className=" text-[15px] opacity-80 font-extralight my-4">What are the possible adverse effects of on-demand AI image generation?</p>
                </span>
                <span className="text-white mt-3 ">
                    <h3 className=" font-bold text-[19px] hover:text-primary-softOrange cursor-pointer">Is VC Funding Drying Up?</h3>
                    <p className=" text-[15px] opacity-80 font-extralight my-4">Private funding by vc firms is down 50% YOY. We take a look at what that means.</p>
                </span>
            </div>

            <div className={`${isMobile ? "mt-16 grid grid-cols-1 gap-8" : " row-span-1 col-span-3 grid grid-cols-3 grid-rows-1 mt-10"}`}>
                <div id="popular" className="mobile:row-span-1 flex flex-row h-[3.5cm]">
                    <img src="/images/image-retro-pcs.jpg" alt="image reto pcs" className="h-[3.5cm]" />
                    <div className="grid grid-cols-1 grid-rows-3 mobile:px-5 max-mobile:pl-2 max-mobile:-mt-3">
                        <h3 className=" text-[30px] text-neutral-grayishBlue font-extrabold ">01</h3>
                        <h4 className=" text-neutral-veryDarkBlue font-extrabold text-[18px] hover:text-primary-softRed cursor-pointer">Reviving Retro PCs</h4>
                        <p className=" max-mobile:-mt-4 text-neutral-darkGrayishBlue font-light">What happens when old PCs are given mordern upgrades?</p>
                    </div>
                </div>
                <div id="popular" className="mobile:row-span-1 flex flex-row h-[3.5cm]">
                    <img src="/images/image-top-laptops.jpg" alt="image reto pcs" className="h-[3.5cm]" />
                    <div className="grid grid-cols-1 grid-rows-3 mobile:px-5 max-mobile:pl-2 max-mobile:-mt-3">
                        <h3 className=" text-[30px] text-neutral-grayishBlue font-extrabold ">02</h3>
                        <h4 className="max-mobile:-mt-4 text-neutral-veryDarkBlue font-extrabold text-[18px] hover:text-primary-softRed cursor-pointer">Top 10 Laptops of 2022</h4>
                        <p className=" max-mobile:-mt-4 text-neutral-darkGrayishBlue font-light">Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div id="popular" className="mobile:row-span-1 flex flex-row h-[3.5cm]">
                    <img src="/images\image-gaming-growth.jpg" alt="image reto pcs" className="h-[3.5cm]" />
                    <div className="grid grid-cols-1 grid-rows-3 mobile:px-5 max-mobile:pl-2 max-mobile:-mt-3">
                        <h3 className=" text-[30px] text-neutral-grayishBlue font-extrabold ">03</h3>
                        <h4 className="max-mobile:-mt-4 text-neutral-veryDarkBlue font-extrabold text-[18px] hover:text-primary-softRed cursor-pointer">The Growth of Gaming</h4>
                        <p className=" max-mobile:-mt-4 text-neutral-darkGrayishBlue font-light">How the pandemic has sparked fresh opportunuties.</p>
                    </div>
                </div>
            </div>
        </div>

        <span className="text-[12px] w-full mt-10">Challenge by <a href="https://www.frontendmentor.io/?ref=challenge" className=" text-blue-700 underline " target="_blank" rel="noreferrer">Frontend Mentor.</a> Coded by <a href="https://portfolio.jaweki.com" className=" text-blue-700 underline" target="_blank" rel="noreferrer">Jaweki.</a></span>
    </div>
    </>
  )
}

export default NewsHomePageMain
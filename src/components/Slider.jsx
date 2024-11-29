const Slider = () => {
    return (
        <div className="overflow-hidden bg-white border-black border-[2px] py-3">
            <div className="relative z-[0]">
                <div className="flex justify-center relative z-[999]">
                    <div className="sliding-text-box w-[110%] z-[999] relative">
                        <div className="sliding-text flex justify-center items-center font-sigmar gap-[30px]">
                            {/* Original content */}
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>

                            {/* Duplicate content */}
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                            <p className="text-[24px] text-black">$GOOMPER</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;

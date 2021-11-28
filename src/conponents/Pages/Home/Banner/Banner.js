import React from 'react';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url("https://lh3.googleusercontent.com/1unv-7j49_RNHo02S6PcCfzGMEACdR_fIEUtxfVQhR6hXSnUGiNUY3JnwfyOQhxvyG16C_tkSn3sO7ZGv8dXGLMWTkzW9R57KczNnAIPjAvw4HcVv7_N0OT1_Vs3X4iccpSyI9wJ")`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"bottom" }}
         className=" h-80">
            <h1 className='w-full flex justify-around bg-black bg-opacity-50 h-full items-center text-white text-4xl'>Buy The Best Ferniture</h1>
        </div>
    );
};

export default Banner;
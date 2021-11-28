import React from 'react';

const Rewiew = () => {
    return (
        <div>
            <h1 className="text-2xl underline ">This Is What Our Customers Says</h1>
            <div className="grid md:grid-cols-3 gap-4 w-11/12 mx-auto m-4">

            <div style={{width: "300px", height: "360px"}} className="flex flex-col items-center p-4 rounded-2xl" >
                <img width="110px" className="rounded-full" src="https://st1.bollywoodlife.com/wp-content/uploads/2019/05/Daniel-Craig-James-Bond.jpg" alt="carpenter" />
                <div>
                    <br/>
                    <h1 className="text-2xl underline" >James Bond</h1><br/>
                    <p>
                        Hi, I'm Number One Sakib Khan, Working as Purchase Officer in Beximco Grout, i have got all the furnitures for my office from here.
                    </p>
                </div>
            </div>

            <div style={{width: "300px", height: "360px"}} className="flex flex-col items-center p-4 rounded-2xl" >
                <img width="110px" className="rounded-full" src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMTgyMTgzOTk3MDg4ODkw/gettyimages-483195065.jpg" alt="carpenter" />
                <div>
                    <br/>
                    <h1 className="text-2xl underline" >Shakira Isabel Mebarak</h1><br/>
                    <p>
                        I have brought a Bed, That is awesome and i have been using the bed for about Ten years, still now it is unbroken.
                    </p>
                </div>
            </div>

            <div style={{width: "300px", height: "360px"}} className="flex flex-col items-center p-4 rounded-2xl" >
                <img width="110px" className="rounded-full" src="https://i.pinimg.com/originals/b7/cc/9a/b7cc9a745b9ff70e5460b29abd09db3f.jpg" alt="carpenter" />
                <div>
                    <br/>
                    <h1 className="text-2xl underline" >Kate Elizabeth Winslet</h1><br/>
                    <p>
                        Hi, I'm Kate Elizabeth Winslet, im have got all the furniture for my home from "Wooden Furniture", all the furnitures are awesome.
                    </p>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Rewiew;
import { TextField } from "@mui/material";
import React from "react";

const Pooja = () => {





  const handleParticipate = () => {

  }





  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-[70px]">
      <div className="w-full ">
        <section className="">
          <h1 className="t-950 font-bold">Upcoming Pujas on Sri Mandir.</h1>
          <p>Book online puja with Sri Mandir in more than 500+ temples across India. Receive video of the puja along with the Prasad and receive blessings from the divine for prosperity and well-being of you and your family</p>
        </section>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <a href="#" className="p-3 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex flex-1 flex-col justify-between">
           <div className="relative p-0 w-full z-[5]" >
         
          </div>
          <div className="flex flex-col items-center w-full justify-center mt-2 z-10">
            <span className="text-[12px] font-semibold rounded-sm text-[#D61F69] text-center">SATURDAY SHANI SHINGNAPUR SPECIAL</span>
            <div className="pt-[0.5px] w-full mt-2 bg-gradient-to-r from-transparent via-[#D61F69] to-transparent"></div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex justify-center items-start blur-[50px]">
              <div className="w-full h-full bg-[#FCEDF3] rounded-b-full"></div>
            </div>
            <div className="relative">
              <h3 className="text-[22px] font-bold leading-[29.96px] md:text-[24px] md:font-bold md:leading-[32.69px] mt-2 mb-1 tracking-tight text-black dark:text-WHITE-20">Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek</h3>
              <h3 className="text-[16px] font-medium leading-[29.96px] tracking-tight text-[#4B5563] dark:text-WHITE-20 mb-4">For Prevention of Misfortunes and Adversities</h3>
            </div>
          </div>
          <div>
            <div className="flex items-start space-x-4">
              <div className="flex justify-center items-center w-5 h-5 rounded-full shrink-0 relative">
               
              </div>
              <div className=" text-white">
                <div className=" text-gray-90 text-gray-90">
                  <span className="text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]">Shree Shanidev Temple,  Shani Shingnapur, Maharashtra</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4 mt-[14px]">
              <div className="flex justify-center items-center w-5 h-5 rounded-full shrink-0 relative">
               
              </div>
              <div className="text-gray-90 text-white">
                <span className="text-[16px] font-normal leading-[21.79px] md:text-[16px] md:font-normal md:leading-[21.79px]">20th July, 2024 (Saturday)</span>
              </div>
            </div>
          </div>
          <div className="pt-[22px] md:pt-[15px] flex flex-col items-start justify-center">
            <div className="flex items-center space-x-2 mt-2">
              <div className="text-[20px] font-bold leading-[24px] tracking-[-0.01em] text-[#D61F69]">₹7,999</div>
            </div>
          </div>
          <button onClick={handleParticipate}>Participate</button>
        </a>
        </div>



        


        <TextField
          label="Fisrt name"
          variant="outlined" // or "filled" or "standard"
          fullWidth
          margin="normal"
       />
        
       
      </div>
    </main>
  );
};

export default Pooja;

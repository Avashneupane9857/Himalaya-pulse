import { MdMobileScreenShare } from "react-icons/md";
import { logo } from "../assets";
import { IoLocationSharp, IoMail } from "react-icons/io5";

import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleWhatsAppClick = () => {
    const receiverNumber = "+9779706754903";
    if (receiverNumber) {
      const whatsappURL = `https://wa.me/${receiverNumber}`;
      window.open(whatsappURL, "_blank");
    } else {
      console.error("WhatsApp number not provided");
    }
  };

  const handleMailButtonClick = () => {
    window.location.href = "mailto:info@himalayapulse.com";
  };

  return (
    <motion.div
      variants={textVariant(0.2)}
      id="footer"
      className="bg-black w-full h-[30vh] sm:h-[30vh] flex flex-col justify-between"
    >
      <div className="w-full h-[90%] flex items-center justify-around">
        <div className="w-[50%] sm:w-[50%] mt-20 ml-10 h-[80%] flex flex-col items-center gap-4">
          <div className="w-full h-[50%]">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="text-white w-[10%] h-full hidden sm:flex flex-col   justify-center gap-2">
          <p className="font-semibold text-white text-[22px]">Quick Links</p>
          <a href="/">Home</a>
          <a onClick={() => navigate("/products", { state: { p: 0 } })}>
            Products
          </a>
          <a href="/aboutus">About</a>
          <a href="/contactus">Contact</a>
        </div>
        <div className="w-[50%] sm:w-[20%] h-full text-[12px] sm:text-[16px] text-white flex justify-center flex-col gap-4">
          <p className="font-semibold text-white text-[22px]">Contact</p>
          <div className="flex gap-5">
            <IoLocationSharp className="text-3xl bg-white text-black rounded-lg p-1" />
            <p className="w-[70%]">
              Himalaya Pulse Pvt. Ltd. Rapti-04, Dang, Nepal.
            </p>
          </div>
          <div
            onClick={handleWhatsAppClick}
            className=" cursor-pointer flex gap-5"
          >
            <MdMobileScreenShare className="text-3xl bg-white text-black rounded-lg p-1" />
            <p className="w-[70%]">+9779706754903</p>
          </div>
          <div
            onClick={handleMailButtonClick}
            className="cursor-pointer flex gap-5"
          >
            <IoMail className="text-3xl bg-white text-black rounded-lg p-1" />
            <p className="w-[70%]">info@himalayapulse.com</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default SectionWrapper(Footer);

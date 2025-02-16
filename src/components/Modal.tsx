import tanStackImg from "../../public/tanstack.png";
import close from "../../public/close.png";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => (
  <div className="fixed  rounded-2xl text-white     pt-10 inset-0 md:flex flex-row  md:items-center md:justify-center bg-transparent backdrop-blur-md">
    <img
      src={tanStackImg}
      className="w-44  hidden hover:scale-105 cursor-pointer md:block mr-2 mt-20  border-2 rounded-full border-gray-500"
      alt=""
    />
    <div className="bg-slate-700    mt-20 md:mx-0 mx-auto w-[80vw] md:h-fit pb-5 h-fit  px-4 pt-10 border-2  border-gray-500 rounded-3xl flex-row justify-center   items-center shadow-lg md:w-96 relative">
      <img
        className="w-44 hover:scale-105 cursor-pointer   md:hidden block   border-2 rounded-full border-gray-500"
        src={tanStackImg}
        alt=""
      />
      <button
        className="absolute top-2 right-2 cursor-pointer   text-xl"
        onClick={onClose}
      >
        <img  className="w-8 hover:scale-120" src={close} alt="" />
      </button>
      <div className="text-center text-wrap my-2">{children}</div>
    </div>
  </div>
);
export default Modal;

import reactImg from "../../public/react.svg";
import viteImg from "../../public/vite.svg";
import tailwindImg from "../../public/tailwind.png";
import typescriptImg from "../../public/typescript.svg";
import reactQueryImg from "../../public/react-query.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="py-2   w-screen rounded-xl  bg-transparent backdrop-blur-md  z-10 md:py-4   fixed  ">
      <div className=" flex flex-col md:flex-row items-center justify-center md:justify-evenly  md:py-1  md:px-3">
        <div className=" flex items-center justify-center">
          <h1 className="tracking-widest text-white   px-20   font-extrabold   text-2xl font-['Montserrat_Alternates']">
            <span className="text-red-600 font-extrabold">/</span>Assignment
            <span className="text-red-600 font-extrabold">/</span>.
          </h1>
        </div>
        {/* <img className="w-10 p-0 m-0  " src={homeIcon} alt="" /> */}

        <div className="img flex gap-5 mb-2   items-center justify-center">
          <a href="https://vite.dev/" target="_blank">
            {" "}
            <img
              className="hover:scale-150 cursor-pointer transition-transform"
              src={viteImg}
              alt=""
            />
          </a>
          <a href="https://react.dev/" target="_blank">
            {" "}
            <img
              className="hover:scale-150 cursor-pointer transition-transform"
              src={reactImg}
              alt=""
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            {" "}
            <img
              className="hover:scale-150 cursor-pointer transition-transform"
              src={tailwindImg}
              width={45}
              alt=""
            />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            {" "}
            <img
              className="hover:scale-150 cursor-pointer transition-transform"
              src={typescriptImg}
              width={45}
              alt=""
            />
          </a>
          <a href="https://tanstack.com/query/latest" target="_blank">
            {" "}
            <img
              className="hover:scale-150 cursor-pointer transition-transform"
              src={reactQueryImg}
              width={45}
              alt=""
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

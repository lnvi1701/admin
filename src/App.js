import {BsArrowLeftShort, BsSearch, BsPencil} from "react-icons/bs";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { FaUniversity } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout} from "react-icons/ai";


const App = () => {
  const [open, SetOpen] = useState(true);
  const Menus = [
      { title: "Dashboard" }, 
      { title: "Quản lý tài khoản", icon: <VscAccount/ >},
      { title: "Quản lý tài liệu", icon: <HiOutlineClipboardDocument/ >},
      { title: "Quản lý bài viết", icon: <BsPencil/ >},
      { title: "Cài đặt", icon: <IoSettingsOutline/ >},
      { title: "Đăng xuất", icon: <AiOutlineLogout/ >},
    ]
 

  return (
    <div className="flex">
      <div className={`bg-dark-blue h-screen p-5 pt-8 ${open ?
          "w-72" : "w-20"} 
          duration-300 relative`}>
        <BsArrowLeftShort 
          className={`bg-white text-dark-blue text-3xl
            rounded-full absolute -right-3 top-9 border border-dark-blue 
            cursor-pointer ${!open && "rotate-180"}`} 
        onClick={ () => SetOpen (!open)} 
      />
        <div className="inline-flex">
          <FaUniversity className={`bg-amber-300 text-4xl 
            rounded cursor-pointer block float-left mr-2 duration-500
            ${open && "rotate-[360deg]"}`}/>
          <h1 className={`text-white origin-left font-medium text-2xl
            duration-300 ${!open && "scale-0"}`}>
            LRO TEAM
          </h1>
        </div>
        <div className={`flex items-center rounded-md bg-light-white
          p-2 ${!open ? "px-2.5" : "px-4"}  py-2}`}>
          <BsSearch className={`text-white text-lg block float-left 
          cursor-pointer ${open && "mr-2"}`} />

          <input type={"search"} placeholder="Search"
          className={`text-base bg-transparent w-full text-white 
          focus:outline-none ${!open && "hidden"}`}></input>
        </div>
        <ul className="pt-2">
        {Menus.map((menu, index) => (
          <>
            <li key={index} 
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer 
              p-2 hover:bg-light-white rounded-md mt-2`}>
                <span className="text-2xl block float-left">
                   {menu.icon ? menu.icon:<RxDashboard />}
                </span>
                <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>
                  {menu.title}</span>

            </li>
          </>
        ))}

      </ul>
      </div>
    
      
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
}

export default App;

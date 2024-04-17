'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
    const [isOpen1, setIsOpen1] = useState(false)
    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
      };

    const closeDropdown1 = () => {
        setIsOpen1(false);
    };

    // Deuxième Dropdown

    const [isOpen2, setIsOpen2] = useState(false)
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
      };

    const closeDropdown2 = () => {
        setIsOpen2(false);
    };

    //Troisième DropDown
    const [isOpen3, setIsOpen3] = useState(false)
    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
      };

    const closeDropdown3 = () => {
        setIsOpen3(false);
    };


  return (
    <header className="flex items-center gap-2.5 px-20 text-gray-700 font-segoe font-semibold bg-white">
        <Image className="" width={31} height={40} src="https://static.deepl.com/img/logo/deepl-logo-blue.svg" alt="DeepL Logo"/>
        <div className="flex gap-4">
        <nav className="bg-white flex gap-x-3 text-medium">
            <Link href={"#"}>
                <div className="py-5 border-b-4 border-white hover:border-sky-800">
                    <img className="pt-1" src="https://static.deepl.com/img/logo/deepl-logo-text-blue.svg" alt="DeepL"/>
                </div>
            </Link>
        
        <div className="flex items-center">

            <div className="relative" onBlur={closeDropdown1}>
                
                    <button id="dropdownNavbarLink1" data-dropdown-toggle="dropdownNavbar1" className="flex items-center bg-blue-50 text-sky-800 gap-1 p-2 px-3 rounded-lg hover:bg-blue-400 hover:bg-opacity-50" onClick={toggleDropdown1}>Traducteur 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="flex shrink-0 items-center justify-center h-5 w-5" width="15" height="15">
                            <path stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </button>
                
                {/* Dropdown menu  */}
                { isOpen1 && (
                    <div id="dropdownNavbar1" className="z-10 font-normal absolute top-[50px] border-slate-300 bg-slate-50 rounded-lg shadow-lg h-40 w-56">
                    <div className=" ">
                    </div>
                </div>
                )}  
            </div>  
        </div>
        <div className="flex gap-8 pl-8">
           
           <button className="flex items-center hover:text-sky-800 border-b-4 border-white hover:border-sky-800 py-2.5">
               <span className="">DeepL Pro</span>
           </button>
   </div>
        <div className="flex items-center" onBlur={closeDropdown2}>
            <button id="dropdownNavbarLink2" data-dropdown-toggle="dropdownNavbar2" className="flex items-center gap-1 p-2 px-3 rounded-lg" onClick={toggleDropdown2}>Entreprises
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="flex shrink-0 items-center pt-0.5 justify-center h-4 w-4" width="15" height="15">
                    <path stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
            </button>

            { isOpen2 && (
                <div id="dropdownNavbar2" className="z-10 font-normal absolute top-[50px] border-slate-300 bg-slate-50 rounded-lg shadow-lg h-40 w-56">
                    <div className=" ">
                    </div>
                </div>
            )}

        </div>

        <div className="flex items-center" onBlur={closeDropdown3}>
            <button id="dropdownNavbarLink2" data-dropdown-toggle="dropdownNavbar2" className="flex items-center gap-1 p-2 px-3 rounded-lg" onClick={toggleDropdown3}>Pourquoi DeepL ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="flex shrink-0 items-center justify-center h-4 w-4 pt-0.5" width="15" height="15">
                    <path stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
            </button>

            { isOpen3 && (
                <div id="dropdownNavbar3" className="z-10 font-normal absolute top-[50px] border-slate-300 bg-slate-50 rounded-lg shadow-lg h-40 w-56">
                    <div className=" ">
                    </div>
                </div>
            )}

        </div>



     <div className="hidden">
        <div className="flex items-center">
            <span>API</span>
        </div>
        
     </div>
        
        </nav>
        <button className="flex items-center bg-special_bouton hover:bg-blue-950 px-4 text-slate-100 rounded-md my-4 text-md h-fit py-1">
            <span className="">Nouvel abonnement</span>
        </button>
        <button className="hover:bg-slate-400">
            
        </button>
        </div>
        
    </header>
  )
}

export default Nav

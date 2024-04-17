

const Traductions = () => {
    
  return (
    <div className="px-20 pt-10 font-segoe">
      <div className="bg-white py-2 px-2 rounded-t-lg flex justify-between">
        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center  text-sky-800 font-semibold gap-1 p-2 px-3 rounded-md hover:bg-gray-300 hover:bg-opacity-30">Détection automatique
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="flex shrink-0 items-center justify-center h-5 w-5" width="15" height="15">
                <path stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
            </svg>
        </button>
        <div className="flex gap-60">
            <div className="flex items-center gap-2">
                <i class="fa-solid fa-arrow-right-arrow-left opacity-50 text-lg"></i>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center  text-sky-800 font-semibold gap-1 p-2 px-3 rounded-md hover:bg-gray-300 hover:bg-opacity-30">français
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="flex shrink-0 items-center justify-center h-5 w-5" width="15" height="15">
                        <path stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg>
                </button>
            </div>
            <div className="flex gap-2">
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center  text-sky-800 font-semibold gap-1 p-2 px-3 rounded-md hover:bg-gray-200 hover:bg-opacity-50 border border-gray-100 text-sm">automatique
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="flex shrink-0 items-center justify-center h-5 w-5" width="15" height="15">
                        <path stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                    </svg>
                </button>
                <button className="flex items-center  hover:text-sky-700 font-semibold gap-1 p-2 px-3 rounded-sm border border-gray-100 text-sm">Glossaire
                </button>
            </div>
        </div>
      </div>
      <div className="bg-white border-t relative pb-2">
        <textarea  id="textArea" cols="80" rows="12" className="border-r resize-none z-30" >
        </textarea>
        
            <div className="flex flex-col gap-20 px-6 w-1/2 tracking-wide absolute inset-0 z-10">
                <div className="select-none">
                    <h1 className="text-3xl text-slate-500 py-6">Ecrivez ou collez votre texte ici.</h1>
                    <p className="text-slate-500">Pour traduire des fichiers PDF, Word (.docx) ou PowerPoint (.pptx), déposez-les directement dans notre interface de traduction de documents. <br />Cliquez sur le microphone pour lancer la saisie vocale.</p>
            
                </div>
                <div className="gap-2">
                    <i class="fa-solid fa-microphone opacity-45 text-xl pt-2"></i>
                    <i class="fa-solid fa-arrow-rotate-left text-xl hover:bg-slate-100 p-2 rounded-md "></i>
                    <i class="fa-solid fa-arrow-rotate-right opacity-45 text-xl pt-2"></i>
                </div>
            </div>
      </div>
      <div className="bg-slate-50 rounded-md shadow-md my-2">
        <h1 className="text-sky-800 font-semibold p-4">Dictionnaire</h1>
        <p className="text-slate-500 border-t p-4">Cliquez sur un mot pour en savoir plus</p>
      </div>
    </div>
  )
}

export default Traductions

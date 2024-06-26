
const Fonctionnalités = () => {
  return (
    <div className="flex gap-3 px-20 pt-6 font-segoe">
      <button className="flex items-center px-4 py-2 border-b-4 border-sky-800 gap-3 bg-white rounded-t-lg rounded-b-sm shadow-md shadow-slate-300 ">
        <div>
        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" stroke="currentColor" fill="currentColor" stroke-width="0.05" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.6667C12.1452 22.6667 12.4288 22.5963 12.835 22.1545C13.2421 21.7117 13.6701 20.9972 14.0572 20.002C14.4852 18.9015 14.8313 17.5398 15.0546 16H8.94542C9.16867 17.5398 9.51485 18.9015 9.94284 20.002C10.3299 20.9972 10.7579 21.7117 11.165 22.1545C11.5712 22.5963 11.8548 22.6667 12 22.6667ZM8.78772 14.6667C8.70895 13.8159 8.66667 12.9231 8.66667 12C8.66667 11.0769 8.70895 10.1841 8.78772 9.33333H15.2123C15.291 10.1841 15.3333 11.0769 15.3333 12C15.3333 12.9231 15.291 13.8159 15.2123 14.6667H8.78772ZM16.4011 16C16.0268 18.7231 15.2811 20.9951 14.3206 22.4135C17.7698 21.6483 20.5907 19.2132 21.8913 16H16.4011ZM22.3306 14.6667H16.551C16.6267 13.809 16.6667 12.9165 16.6667 12C16.6667 11.0835 16.6267 10.191 16.551 9.33333H22.3306C22.55 10.1857 22.6667 11.0792 22.6667 12C22.6667 12.9208 22.55 13.8143 22.3306 14.6667ZM7.44897 14.6667H1.66938C1.45001 13.8143 1.33333 12.9208 1.33333 12C1.33333 11.0792 1.45001 10.1857 1.66938 9.33333H7.44897C7.37329 10.191 7.33333 11.0835 7.33333 12C7.33333 12.9165 7.37329 13.809 7.44897 14.6667ZM2.10869 16H7.59888C7.97317 18.7231 8.71886 20.9951 9.67943 22.4135C6.23022 21.6483 3.40935 19.2132 2.10869 16ZM8.94542 8H15.0546C14.8313 6.46017 14.4852 5.09853 14.0572 3.99798C13.6701 3.00276 13.2421 2.28833 12.835 1.84546C12.4288 1.40373 12.1452 1.33333 12 1.33333C11.8548 1.33333 11.5712 1.40373 11.165 1.84546C10.7579 2.28833 10.3299 3.00276 9.94284 3.99798C9.51485 5.09853 9.16867 6.46017 8.94542 8ZM16.4011 8H21.8913C20.5907 4.78684 17.7698 2.3517 14.3206 1.58648C15.2811 3.00492 16.0268 5.2769 16.4011 8ZM9.67943 1.58648C8.71885 3.00492 7.97317 5.2769 7.59888 8H2.10869C3.40934 4.78684 6.23022 2.3517 9.67943 1.58648ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"></path></svg>
        </div>
        <div className="flex flex-col items-start">
            <span className="font-semibold text-slate-800">Traduire du texte</span>
            <span className="text-sm text-slate-500">32 langues</span>
        </div>
      </button>
      <button className="flex items-center px-4 py-2 gap-3 bg-white rounded-lg shadow-md shadow-slate-300 border-blue-200">
        <div>
        <img src="/images/doc.png" alt="" />
        </div>
        <div className="flex flex-col items-start">
            <span className="text-sky-800 font-semibold">Traduire des fichiers</span>
            <span className="text-sm text-slate-500">.pdf docx, .pptx</span>
        </div>
      </button>
      <button className="flex items-center px-4 py-2 gap-3 bg-blue-50 border border-blue-200 rounded-lg shadow-md shadow-slate-300 hover:bg-blue-300 hover:bg-opacity-50">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="flex shrink-0 items-center justify-center h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg>
        </div>
        <div className="flex flex-col items-start">
            <div className="flex gap-4"> <span className="text-sky-800 font-semibold">DeepL Write</span> 
                <div className="flex items-center">
                <span className="flex items-center text-white bg-emerald-800 text-[8px] rounded px-1.5 py-0.5 font-bold h-fit">BETA</span> 
                </div>
            </div>
            <span className="text-sm text-slate-500">Corrections IA</span>
        </div>
      </button>
    </div>
  )
}

export default Fonctionnalités

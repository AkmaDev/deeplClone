

const Devices = () => {
  return (
    <div className=" bg-white rounded-lg shadow-md flex flex-col px-20  py-8 font-segoe">
        <div className="pb-8 border-b flex gap-14 items-center">
        <div>
        <img src="https://static.deepl.com/img/write/write_illustration2.svg" alt="DeepL Write Banner"/>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <h1 className="text-slate-700 text-xl ">Perfectionnez vos textes avec DeepL Write</h1>
                <span className="flex items-center text-white bg-emerald-800 text-[8px] rounded px-1.5 py-0.5 font-bold h-fit">BETA</span> 
            </div>
                <p>
                    Corrigez les fautes de grammaire et de ponctuation, reformulez vos phrases, écrivez avec subtilité et utilisez le ton adéquat.
                </p>  
        </div>
        <div className="">
            <button className="text-white bg-special_bouton px-6 py-3 rounded-md font-bold">Essayer</button>
        </div>

      </div> 
        </div>

        <div className="pt-20 flex flex-col items-center">
            <h1 className="text-3xl"> Traduisez encore plus rapidement grâce aux applications DeepL</h1>
            <div className="flex py-6">
                <div className="flex flex-col gap-2 py-10 border-r border-slate-400 px-8">
                    <h1 className="font-bold text-xl">DeepL pour Windows</h1>
                    <button className="text-white font-semibold bg-special_bouton px-5 py-3 rounded-lg">Télécharger gratuitement</button>
                </div>
                <div className="py-10 px-8 flex flex-col gap-2">
                    <h1 className="font-bold text-xl">DeepL pour <button className="border-b-2 border-black">iOS</button>et <button className="border-b-2 border-black">Android</button></h1>
                    <button className="text-slate-700 font-semibold px-5 py-3 border-2 border-black rounded-lg h-fit">Télécharger gratuitement</button>
                </div>
            </div>
        </div>

      </div>
    
  )
}

export default Devices

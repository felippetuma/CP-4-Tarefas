import { useState } from "react"
import { IconAdd } from "./Icons";

const ButtonTarefa = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(true)} className="rounded-[43px] mx-auto bg-green px-4 py-4 text-black flex justify-center items-center gap-3 text-lg">
                <IconAdd /> Adicionar Tarefa
            </button>

            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70">
                    <div className="rounded-3xl bg-zinc-800 text-green p-10 mx-auto">
                        <h2 className="text-xl font-bold text-center">Adicionar Tarefa</h2>
                        <form action="" className="flex flex-col gap-4">
                            <p>Nome: </p>
                            <input type="text" className="px-5 py-2 mt-2 min-w-120" placeholder="Digite uma nova tarefa." />
                            <div className="flex gap-30">
                                <div className="flex  flex-col gap-8">

                                <p>Data:</p>
                                <input type="date" className="" />
                                </div>
                                 <div className="flex  flex-col gap-8">

                                <p>Prioridade:</p>
                                <select name="" id="">
                                    <option value="baixa" key="">Baixa</option>
                                    <option value="media" key="">Media</option>
                                    <option value="alta" key="">Alta</option>
                                </select>
                                 </div>
                            </div>
                            <div className=" flex gap-4 p-4 justify-end">
                                <button onClick={() => setOpen(false)}>Fechar</button>
                                <button onClick={() => setOpen(false)} className="text-zinc-800 bg-green rounded-2xl px-8 py-2 text-lg ">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ButtonTarefa

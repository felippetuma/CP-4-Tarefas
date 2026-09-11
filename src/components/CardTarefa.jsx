import {  IconCalendar, IconTrash } from "./Icons";

const prioridadeClass = {
    alta: "bg-red-500 text-black",
    media: "bg-yellow-500 text-black",
    baixa: "bg-lime-500 text-black",
}

const CardTarefa = ({ tarefas, onToggle, onRemove}) => {
    const data = tarefas.data ? new Date(tarefas.data).toLocaleDateString("pt-BR") : "Nenhuma data informada";

  return (
    <div className="w-full rounded-2xl bg-zinc-700 p-5 text-white">
      <div className="flex items-start justify-between gap-4">
        <div>
            <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-md px-2 py-1 text-base font-bold text-zinc-900 ${tarefas.completed ? "bg-green-400" : "bg-orange-400"}`}>
                    {tarefas.completed ? "Concluído" : "Pendente"}
                </span>
                <h3 className={`text-lg font-bold ${tarefas.completed ? "line-through text-zinc-400" : " "}`}>
                    {tarefas.nome}
                </h3>
            </div>
            {tarefas.descricao && 
                <p className="mt-3 text-sm text-zinc-300">
                    {tarefas.descricao}
                </p>
            }
        </div>
        <div className="flex gap-3 text-sm">
            <button type="button" onClick={() => onToggle(tarefas.id)}>
                {tarefas.completed ? "Reabrir" : "Concluir"}
            </button>
            <button type="button" onClick={() => onRemove(tarefas.id)}><IconTrash /></button>
        </div>
      </div>
      <div className="mt-4 flex gap-8 text-sm items-center">
        <p className="text-base flex items-center justify-center gap-2"><IconCalendar/> {data}</p>
        <p className={`rounded-md px-3 py-1 font-semibold ${prioridadeClass[tarefas.prioridade] || "bg-zinc-500"}`}>
          {tarefas.prioridade?.toUpperCase() || "Sem prioridade"}
        </p>
      </div>
    </div>
  )
}

export default CardTarefa

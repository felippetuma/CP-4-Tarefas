import CardTarefa from "./CardTarefa"

const ListaTarefas = ({ tarefas, onToggle, onRemove }) => {
    if (tarefas.length === 0) {
        return <p className='mt-6 flex text-zinc-400 '> Nenhuma Tarefa encontrada</p>
    }
    return (
        <section className='mt-4 w-full space-y-4'>
            {tarefas.map((tarefas) => (
                <CardTarefa key={tarefas.id} tarefas={tarefas} onToggle={onToggle} onRemove={onRemove} />
            ))}
        </section>
    )
}

export default ListaTarefas

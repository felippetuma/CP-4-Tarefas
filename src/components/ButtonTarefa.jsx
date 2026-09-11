import { useEffect, useState } from "react"
import { IconAdd } from "./Icons";
import ListaTarefas from "./ListaTarefas";
import Filtros from "./Filtros";

const ButtonTarefa = () => {
    // useState e um Hook que cria os estados locais e a função usada para atualiza-los.
    const [open, setOpen] = useState(false);
    const [filtros, setFiltros] = useState("todas");
    const [tarefas, setTarefas] = useState(() => {
        const salvarTarefas = localStorage.getItem("tarefas");
        return salvarTarefas ? JSON.parse(salvarTarefas) : [];
    })

    // Essa variável armazena os valores preenchidos no formulário.
    const [formulario, setFormulario] = useState({
        nome: "",
        data: "",
        descricao: "",
        prioridade: "baixa",
    });

    // useEffect executa este callback sempre que a lista de tarefas muda.
    useEffect(() => {
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }, [tarefas]);

    // Callback do submit impede o recarregamento e adiciona uma nova tarefa.
    const adicionarTarefa = (e) => {
        e.preventDefault();

        if(!formulario.nome.trim()) return;

        const novaTarefa = {
            id: Date.now(),
            ...formulario,
            completed: false
        };

        setTarefas([...tarefas, novaTarefa]);
        setFormulario({
            nome: "", 
            data: "",
            descricao: "",
            prioridade: "baixa"
        })
        setOpen(false);
    };

    // o map percorre todas as tarefas e cria uma nova lista, alternando a tarefa escolhida.
    const alternarConclusao = (id) => {
        const conclusaoTarefa = tarefas.map((tarefas) => (
            tarefas.id === id ? {...tarefas, completed: !tarefas.completed } : tarefas
        ));
        setTarefas(conclusaoTarefa);
    };

    // o filter executa o callback e mantem somente as tarefas diferentes do id informado.
    const removerTarefa = (id) => {
        const apagarTarefa = tarefas.filter((tarefas) => tarefas.id != id);
        setTarefas(apagarTarefa);
    };

    // o filter pode aplicar uma regra no caso a lista depende do filtro para ser selecionado.
    const filtrarTarefas = tarefas.filter((tarefas) => {
        if(filtros === "pendentes") return !tarefas.completed;
        if(filtros === "concluidas") return tarefas.completed;

        return true;
    });

    return (
        <div className="mt-8 flex w-full max-w-3xl flex-col items-center">
            {/* Callback executado quando o usuario clica para abrir o formulario. */}
            <button onClick={() => setOpen(true)} className="flex items-center justify-center gap-3 rounded-[43px] bg-green px-4 py-4 text-lg text-black">
                <IconAdd /> Adicionar Tarefa
            </button>

            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70">
                    <div className="rounded-3xl bg-zinc-800 text-green p-10 mx-auto">
                        <h2 className="text-xl font-bold text-center">Adicionar Tarefa</h2>
                        <form action="" onSubmit={adicionarTarefa} className="flex flex-col gap-4">
                            <p>Nome: </p>
                            <input type="text" value={formulario.nome} className="px-5 py-2 mt-2 min-w-120" onChange={(e) => setFormulario({...formulario, nome: e.target.value})} placeholder="Digite uma nova tarefa." />
                            <div className="flex gap-30">
                                <div className="flex  flex-col gap-8">
                                    <p>Data:</p>
                                    <input type="date" className="outline-none " value={formulario.data} onChange={(e) => setFormulario({...formulario, data: e.target.value})}/>
                                </div>
                                <div className="flex  flex-col gap-8">

                                    <p>Prioridade:</p>
                                    <select className="bg-zinc-800 " name="" value={formulario.prioridade} onChange={(e) => setFormulario({...formulario, prioridade: e.target.value})}>
                                        <option value="baixa" key="">Baixa</option>
                                        <option value="media" key="">Media</option>
                                        <option value="alta" key="">Alta</option>
                                    </select>
                                </div>
                            </div>
                            <p>Descrição</p>
                            <input type="text" value={formulario.descricao} onChange={(e) => setFormulario({...formulario, descricao: e.target.value})} className="px-10 py-10 min-w-120 min-h-10" placeholder="Digite a descrição do projeto"/>         
                                   
                            <div className=" flex gap-4 p-4 justify-end">
                                <button type="button" onClick={() => setOpen(false)}>Fechar</button>
                                <button type="submit" className="text-zinc-800 bg-green rounded-2xl px-8 py-2 text-lg ">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className="mt-8 w-full">
                <Filtros filtroAtual={filtros} onChange={setFiltros}/>
            </div>
            <ListaTarefas tarefas={filtrarTarefas} onToggle={alternarConclusao} onRemove={removerTarefa}/>
        </div>
    )
}

export default ButtonTarefa

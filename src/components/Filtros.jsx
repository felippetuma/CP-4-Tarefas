const Filtros = ({ filtroAtual, onChange }) => {
  const opcoes = ["todas", "pendentes", "concluidas"];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {/* o map transforma cada opcao em um botao para filtrar. */}
      {opcoes.map((opcao) => (
        /* Callback no qual informa ao componente pai qual filtro foi escolhido. */
        <button
          key={opcao}
          type="button"
          onClick={() => onChange(opcao)}
          className={`rounded-lg px-4 py-2 text-sm font-bold uppercase ${filtroAtual === opcao ? "bg-green text-black" : "bg-zinc-700 text-white"}`}
        >
          {opcao}
        </button>
      ))}
    </div>
  )
}

export default Filtros
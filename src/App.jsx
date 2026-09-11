
import ButtonTarefa from "./components/ButtonTarefa";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="flex min-h-screen min-w-screen mx-auto bg-zinc-800">
        <Main>
          <h1 className="text-center text-5xl font-bold text-white">Minhas Tarefas</h1>
          <p className="text-center text-base text-white">Organize, acompanhe e evolua </p>
          <ButtonTarefa/>
        </Main>
    </div>
  )
}


export default App
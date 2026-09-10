import Aside from "./components/Aside";
import ButtonTarefa from "./components/ButtonTarefa";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="flex min-h-screen min-w-screen mx-auto bg-zinc-800">
      <Aside>
      </Aside>
        <Main>
         <ButtonTarefa/>
        </Main>
    </div>
  )
}


export default App
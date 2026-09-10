const Aside = ({ children }) => {
  return (
    <aside className="w-72 shrink-0 bg-green min-h-screen py-20 px-10 flex flex-col gap-14 rounded-lg">
      {children}
    </aside>
  )
}

export default Aside

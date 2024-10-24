import { cn } from "./utils"

function App() {
  const menuClasses = cn(
    "flex items-center px-5 py-2 cursor-pointer text-slate-800 hover:bg-gray-300"
  )

  return (
    <div className="flex flex-row"> 
      <aside className="flex">
        <div className="h-screen py-8 overflow-y-auto border-l border-r w-80 bg-gray-50 border-gray-200">
          <h2 className="px-5 pb-6 text-lg font-medium text-slate-700 ">
            Applications
          </h2>

          <div className="text-slate-800" onClick={() => null}>
            <div className={menuClasses}>
              <span className="text-sm">Pipelines</span>
            </div>
          </div>

          <div className="text-slate-800" onClick={() => null}>
            <div className={menuClasses}>
              <span className="text-sm">Deployments</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex">
        <div className="p-8">
          <h1 className="text-2xl font-semibold text-slate-800">Pipelines</h1>
        </div>
      </main>
    </div>
  )
}

export default App

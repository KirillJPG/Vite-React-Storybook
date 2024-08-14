import { useNews } from "./hooks/useNews"
import "./style.css"

function App() {
  const {data} = useNews()
  console.log(import.meta.env.VITE_API_URL)
  return (
    <div className="">

    </div>
  )
}

export default App

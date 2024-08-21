import { Country } from "./components/Country/Country"
import { Map } from "./components/Map/Map"
import { NewsList } from "./components/News/NewsList"
import style from "./style.module.css"
function App() {  
  return (
    <div className={style.layout}>
      <div className={style.mapContainer}>
        <Map>
          <Country />
        </Map>
      </div>
      <NewsList/>
    </div>
  )
} 

export default App

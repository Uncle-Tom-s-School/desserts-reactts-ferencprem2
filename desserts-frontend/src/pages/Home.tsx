import DessertCard from "../components/DessertCard"
import { DessertCardProp } from "../components/DessertCard"
const Home = () => {
    let lista : DessertCardProp[]= [
        {name: "Szaros", category:"incsifincsi", price:1000}
    ]

  return (
    <div>
        <section>
        {/* <h1>Desserts</h1> */}
        <div className="cards-grid">
            {
                lista.map((item, idx) => <DessertCard {...item}/>)
            }
        </div>
        </section>
    </div>
  )
}
export default Home

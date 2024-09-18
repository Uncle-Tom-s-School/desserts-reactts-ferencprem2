export type DessertCardProp = {
    name: string,
    category: string,
    price: number,
    image?: {
        thumbnail?:string,
        mobile?:string,
        tablet?:string,
        desktop?:string,
    }
}

const DessertCard = (props: DessertCardProp) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

export default DessertCard

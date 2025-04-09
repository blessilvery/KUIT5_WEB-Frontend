import MarketItem from "./MarketItem"

function Market({ items }) {
    console.log(typeof marketModel)

    return (
        <section className="market">
            {
                items.map(
                    item => <MarketItem item={item} key={item.title}></MarketItem>
                )
            }
        </section>
    )
}

export default Market
import React, { useState, useEffect } from "react"
import "../scss/index.scss"

const Collection = (nft) => {

    const [name, setName] = useState(0)
    const [floorPrice, setFloorPrice] = useState(0)
    const [supply, setSupply] = useState(0)
    const [owners, setOwners] = useState(0)
    const [oneDaySales, setOneDaySales] = useState(0)
    const [oneDayVol, setOneDayVol] = useState(0)
    const [oneDayChange, setOneDayChange] = useState(0)
    const [sevenDayVol, setSevenDayVol] = useState(0)
    const [sevenDayChange, setSevenDayChange] = useState(0)
    const [contract, setContract] = useState(0)

    useEffect(() => {
        const options = {
            method: 'GET',
        }
        fetch('https://api.opensea.io/api/v1/collection/' + nft.name, options)
            .then(response => response.json())
            .then(resultData => {
                setName(resultData.collection.name)
                setFloorPrice(resultData.collection.stats.floor_price)
                setSupply(resultData.collection.stats.count)
                setOwners(resultData.collection.stats.num_owners)
                setOneDaySales(resultData.collection.stats.one_day_sales)
                setOneDayVol(resultData.collection.stats.one_day_volume)
                setOneDayChange(resultData.collection.stats.one_day_change)
                setSevenDayVol(resultData.collection.stats.seven_day_volume)
                setSevenDayChange(resultData.collection.stats.seven_day_change)
                setContract(resultData.collection.primary_asset_contracts[0].address)
            })
            .catch(err => console.error(err))
    }, [nft])

    return (
        <tr>
            <td><a href={`https://www.opensea.com/collection/${nft.name}`} className="text-decoration-none" target="_blank" rel="noreferrer">{name}</a></td>
            <td className="text-end fw-bold">{floorPrice}</td>
            <td className="text-end">{supply}</td>
            <td className="text-end">{owners}</td>
            <td className="text-end">{(owners / supply).toFixed(2)}%</td>
            <td className="text-end">{oneDaySales}</td>
            <td className="text-end">{oneDayVol.toFixed(2)}%</td>
            <td className="text-end">{oneDayChange.toFixed(2)}%</td>
            <td className="text-end">{sevenDayVol.toFixed(2)}%</td>
            <td className="text-end">{sevenDayChange.toFixed(2)}%</td>
            <td>{contract}</td>
        </tr>

    )
}

export default Collection
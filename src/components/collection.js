import React, { useState, useEffect } from "react"
import "../scss/index.scss"
import nansen_logo from "../images/nansen_logo.png"
import icy_tools from "../images/icy-tools.png"

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
            <td><a href={`https://opensea.io/collection/${nft.name}`} className="text-decoration-none" target="_blank" rel="noreferrer">{name}</a></td>
            <td className="text-end fw-bold">{floorPrice}</td>
            <td className="text-end">{supply}</td>
            <td className="text-end">{owners}</td>
            <td className="text-end">{(owners / supply).toFixed(2)}%</td>
            <td className="text-end">{oneDaySales}</td>
            <td className="text-end">{oneDayVol.toFixed(2)}</td>
            {oneDayChange > 0 ? (
                <td className="text-end text-success">{oneDayChange.toFixed(2)}%</td>
            ) : (
                <td className="text-end text-danger">{oneDayChange.toFixed(2)}%</td>
            )}
            <td className="text-end">{sevenDayVol.toFixed(2)}</td>
            {sevenDayChange > 0 ? (
                <td className="text-end text-success">{sevenDayChange.toFixed(2)}%</td>
            ) : (
                <td className="text-end text-danger">{sevenDayChange.toFixed(2)}%</td>
            )}
            <td className="text-center"><a href={`https://pro.nansen.ai/nft-god-mode?nft_address=${contract}`} target="_blank" rel="noreferrer"><img src={nansen_logo} alt="nansen" width={30}/></a></td>
            <td className="text-center"><a href={`https://icy.tools/collections/${contract}`} target="_blank" rel="noreferrer"><img src={icy_tools} alt="nansen" width={23}/></a></td>
            <td>{contract}</td>
        </tr>

    )
}

export default Collection

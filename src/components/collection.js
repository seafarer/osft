import React, { useState, useEffect } from "react"
import "../scss/index.scss"
import nansen_logo from "../images/nansen-logo.svg"
import icy_tools from "../images/icy-tools.png"
import twitter_logo from "../images/twitter.svg"

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
    const [icon, setIcon] = useState(0)
    const [twitter, setTwitter] = useState(0)

    useEffect(() => {
        const options = {
            method: 'GET',
        }
        fetch('https://api.opensea.io/api/v1/collection/' + nft.name, options)
            .then(response => response.json())
            .then(resultData => {
                setIcon(resultData.collection.image_url)
                setName(resultData.collection.name)
                setFloorPrice(resultData.collection.stats.floor_price)
                setSupply(resultData.collection.stats.count)
                setOwners(resultData.collection.stats.num_owners)
                setOneDaySales(resultData.collection.stats.one_day_sales)
                setOneDayVol(resultData.collection.stats.one_day_volume)
                setOneDayChange(resultData.collection.stats.one_day_change)
                setSevenDayVol(resultData.collection.stats.seven_day_volume)
                setSevenDayChange(resultData.collection.stats.seven_day_change)
                setTwitter(resultData.collection.twitter_username)
                setContract(resultData.collection.primary_asset_contracts[0].address)
            })
            .catch(err => console.error(err))
    }, [nft])
    return (
        <tr>
            <td className="text-center"><img src={`${icon}`}  width={50} alt="icon" /></td>
            <td><a href={`https://opensea.io/collection/${nft.name}`} className="text-decoration-none" target="_blank" rel="noreferrer">{name}</a></td>
            <td className="text-end fw-bold">{floorPrice.toFixed(2)}</td>
            <td className="text-end">{supply}</td>
            <td className="text-end">{owners}</td>
            <td className="text-end">{Math.round((owners / supply) * 100)}%</td>
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
            <td className="text-center"><a href={`https://www.twitter.com/${twitter}`} target="_blank" rel="noreferrer"><img src={twitter_logo} alt="twitter" width={24} /></a></td>
            {contract.length > 0 ? (
                <td>{contract}</td>
            ) : (
                <td>ERC-1155</td>
            )}
        </tr>

    )
}

export default Collection

import * as React from "react"
import {nftData} from "../data/data";
import Collection from "./collection";


const Nft = (sortKey) => {

    const nfts = nftData;

    return (
        <>
            {nfts.map((nft, item) =>
                <Collection key={item} name={nft}/>
            )}
        </>
    )

}

export default Nft
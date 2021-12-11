import * as React from "react"
import "../scss/index.scss"
import Nft from "../components/nfts"

const IndexPage = () => {


    return (
        <div className="all">
            <nav className="navbar navbar-dark bg-primary bg-gradient">
                <div className="container-fluid justify-content-center">
                    <h1 className="text-uppercase fw-bold text-center"><a className="fs-3 navbar-brand" href="/">Open Sea Floor Tracker</a></h1>
                </div>
            </nav>
            <table className="table">
                <thead className="table-dark">
                <tr>
                    <th scope="col">Collection</th>
                    <th scope="col" className="text-end">Floor</th>
                    <th scope="col" className="text-end">Supply</th>
                    <th scope="col" className="text-end">Owners</th>
                    <th scope="col" className="text-end">Owner %</th>
                    <th scope="col" className="text-end">24hr sales</th>
                    <th scope="col" className="text-end">1 Day Vol</th>
                    <th scope="col" className="text-end">1 Day %</th>
                    <th scope="col" className="text-end">7 Day Vol</th>
                    <th scope="col" className="text-end">7 Day %</th>
                    <th scope="col">Contract</th>
                </tr>
                </thead>
                <tbody>
                    <Nft />
                </tbody>
            </table>
        </div>

    )
}

export default IndexPage
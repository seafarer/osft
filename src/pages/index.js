import * as React from "react"
import "../scss/index.scss"
import Nft from "../components/nfts"
import Seo from "../components/seo"
const IndexPage = () => {

    return (

        <div className="all">
            <Seo title="OpenSea Stats and Floor Tracker"
                description="A simple app to track some top projects on OpenSea"
            />
            <nav className="navbar navbar-dark bg-primary bg-gradient">
                <div className="container-fluid justify-content-center">
                    <h1 className="text-uppercase fw-bold text-center"><a className="fs-3 navbar-brand" href="/">OpenSea Stats Tracker</a></h1>
                </div>
            </nav>
            <div className="table-responsive">
                <table className="table table-striped align-middle">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col" colSpan="2">Collection</th>
                        <th scope="col" className="text-end">Floor</th>
                        <th scope="col" className="text-end">Supply</th>
                        <th scope="col" className="text-end">Owners</th>
                        <th scope="col" className="text-end">Owner %</th>
                        <th scope="col" className="text-end">24hr sales</th>
                        <th scope="col" className="text-end">1 Day Vol</th>
                        <th scope="col" className="text-end">1 Day %</th>
                        <th scope="col" className="text-end">7 Day Vol</th>
                        <th scope="col" className="text-end">7 Day %</th>
                        <th scope="col" className="text-center">Nansen</th>
                        <th scope="col" className="text-center">Icy</th>
                        <th scope="col" className="text-center">Twitter</th>
                        <th scope="col">Contract</th>
                    </tr>
                    </thead>
                    <tbody>
                        <Nft />
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default IndexPage
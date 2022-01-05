import * as React from "react"
import "../scss/index.scss"
import pepe from "../images/pepe-the-frog-hands.png"
import twitter from "../images/twitter-white.svg"
import Nft from "../components/nfts"
import Seo from "../components/seo"
const IndexPage = () => {

    return (

        <div className="all">
            <Seo title="Floor Price WTF - OpenSea Stats and Floor Tracker"
                description="Can dev's do something?"
            />
            <nav className="navbar navbar-dark bg-primary bg-gradient">
                <div className="container-fluid">
                    <h1 className="text-uppercase fw-bold text-center">
                        <a className="fs-3 navbar-brand" href="/">
                            Floor Price WTF<span className="fw-normal"> | </span>
                            <span className="fst-italic text-normal pb-1 fw-normal">"Can devs do something?"</span>
                        </a>
                    </h1>
                    <div>
                        <span className="navbar-text">
                            Made by @SPACKLΞ.eth
                            <a href="https://www.twitter.com/cspacler" target="_blank" rel="noreferrer">
                                <img className="ms-2 c-twitter-bio" src={twitter} alt="twitter" width={20} />
                            </a>
                        </span>
                    </div>
                </div>
            </nav>
            <div className="table-responsive">
                <table className="table table-striped align-middle">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col" className="c-table-header" colSpan="2">Collection</th>
                        <th scope="col" className="c-table-header text-end">Floor</th>
                        <th scope="col" className="c-table-header text-end">Supply</th>
                        <th scope="col" className="c-table-header text-end">Owners</th>
                        <th scope="col" className="c-table-header text-end">Owner %</th>
                        <th scope="col" className="c-table-header text-end">24hr sales</th>
                        <th scope="col" className="c-table-header text-end">1 Day Vol</th>
                        <th scope="col" className="c-table-header text-end">1 Day %</th>
                        <th scope="col" className="c-table-header text-end">7 Day Vol</th>
                        <th scope="col" className="c-table-header text-end">7 Day %</th>
                        <th scope="col" className="c-table-header text-center">Nansen</th>
                        <th scope="col" className="c-table-header text-center">Icy</th>
                        <th scope="col" className="c-table-header text-center">Twitter</th>
                        <th scope="col" className="c-table-header">Contract</th>
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
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import pepe from "../images/pepe-the-frog-hands.png"
import prayer from "../images/pepe-prayer.png"
import { Helmet } from "react-helmet"

function Seo({ description, title }) {

    return (
        <Helmet
            title={title}
            link={[
                {
                    rel: `icon`,
                    href: pepe
                }
            ]}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    name: `icon`,
                    href: pepe
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    name: `og:image`,
                    content: prayer,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: `@cspacler`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: description,
                },
                {
                    name: `twitter:image`,
                    content: prayer,
                }
            ].concat()}
        />
    )
}

export default Seo
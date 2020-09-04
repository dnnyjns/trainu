/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import Layout from "./src/components/Layout"
import Provider from "./src/Provider"

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>
export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>

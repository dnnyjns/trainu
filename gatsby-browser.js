/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import Layout from "./src/components/Layout"
import Provider from "./src/Provider"

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>
export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    /* eslint-disable-next-line no-unused-expressions */
    import(`intersection-observer`)
  }
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

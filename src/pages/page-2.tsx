import React from "react"
import { InlineWidget } from "react-calendly"
import { parseToRgb, toColorString } from "polished"
import SEO from "../components/SEO"
import colors from "~/style/colors"

const clean = (color: string) =>
  toColorString(parseToRgb(color)).replace("#", "")

const SecondPage = () => {
  const bg = clean(colors.neutral050)
  const text = clean(colors.neutral800)
  const primary = clean(colors.primary500)
  const url = `https://calendly.com/trainer-u?background_color=${bg}&text_color=${text}&primary_color=${primary}`
  return (
    <>
      <SEO title="Page two" />
      <InlineWidget url={url} styles={{ height: 900 }} />
    </>
  )
}

export default SecondPage

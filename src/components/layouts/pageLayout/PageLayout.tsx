import './PageLayout.scss'

/**
 * Page layout properties.
 */
type PageLayoutProps = {
  children?: React.ReactNode
}

/**
 * Page layout structure component.
 * @param props page layout properties.
 * @returns Page layout component.
 */
export default function PageLayout(props: PageLayoutProps): JSX.Element {
  return (
    <>
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  )
}

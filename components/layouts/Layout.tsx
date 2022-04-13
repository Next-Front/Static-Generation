import Head from "next/head"
import { FC } from "react"
import { NavBar } from 'components/ui/';

interface LayoutProps {
  children: React.ReactNode,
  title?  : string
}

export const Layout :FC<LayoutProps>  = ( { children, title } ) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon app' }</title>
        <meta name="author" content="Kevin cuadros"/>
        <meta name="description" content="A simple pokemon app"/>
        <meta name="keywords" content="pokemon, pokedex"/>
      </Head>
      <NavBar />
      <main 
        style={{
          padding: '0px 20px',
        }}
      >
        { children }
      </main>
    </>
  )
}

export default Layout
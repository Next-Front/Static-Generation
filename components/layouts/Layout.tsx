import Head from "next/head"
import { FC } from "react"
import { NavBar } from 'components/ui/';

interface LayoutProps {
  children: React.ReactNode,
  title?  : string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout :FC<LayoutProps>  = ( { children, title } ) => {

  return (
    <>
      <Head>
        <title>{ title || 'Pokemon app' }</title>
        <meta name="author" content="Kevin cuadros"/>
        <meta name="description" content="A simple pokemon app"/>
        <meta name="keywords" content="pokemon, pokedex"/>

        <meta property="og:title" content={`Información sobre el pokemon ${title}`} />
        <meta property="og:description" content={`Sobre ${title}`} />
        <meta property="og:image" content={`${origin}/banner.png`} />
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
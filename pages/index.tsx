import { NextPage } from 'next'
import { Layout } from 'components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout
      title="Listado de pokemon"
    >
      <h1> Hello World! </h1>
    </Layout>
  )
}

export default HomePage

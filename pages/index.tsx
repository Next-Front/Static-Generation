import { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react'
import { Layout } from 'components/layouts'
import { pokeApi } from 'api'
import { IResponsePoke, PokemonList } from 'interface/IResponsePoke'
import { PokemonCard } from 'components/pokemon'

interface IProps {
  pokemons: PokemonList[]
}

const HomePage: NextPage<IProps> = ({ pokemons }) => {

  return (
    <Layout
      title="Listado de pokemon"
    >
      <h1>Listado de pokemon</h1>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard 
            pokemon={pokemon} 
            key={pokemon.id}
          />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<IResponsePoke>('/pokemon?limit=151')

  const parseData = data.results.map((pokemon: PokemonList, index: number) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(index + 1)}.svg`
  }))

  return {
    props: {
      pokemons: parseData
    }
  }
}

export default HomePage

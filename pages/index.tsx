import { NextPage, GetStaticProps } from 'next'
import { Card, Text, Grid, Row } from '@nextui-org/react'
import { Layout } from 'components/layouts'
import { pokeApi } from 'api'
import { IResponsePoke, PokemonList } from 'interface/IResponsePoke'

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
        {pokemons.map((pokemon, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card hoverable clickable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  objectFit="contain"
                  src={`${pokemon.img}`}
                  width="80%"
                  height={110}
                  alt={pokemon.name}
                />
              </Card.Body>
              <Card.Footer>
                <Row wrap="wrap" justify="space-between">
                  <Text b>{pokemon.name}</Text>
                  <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                    {pokemon.name}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
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

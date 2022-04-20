import { FC } from "react"
import { PokemonList } from "interface/IResponsePoke"
import { Card, Text, Row, Grid } from '@nextui-org/react'

interface IProps {
  pokemon: PokemonList
}

export const PokemonCard: FC<IProps> = ({ pokemon }) => {
  return (
    <>
      <Grid xs={6} sm={3} md={2} key={pokemon.id}>
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
              <Text transform='capitalize' b>{pokemon.name}</Text>
              <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                {pokemon.name}
              </Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  )
}

export default PokemonCard
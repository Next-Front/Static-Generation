import { FC } from "react"
import { PokemonList } from "interface/IResponsePoke"
import { Card, Text, Row, Grid } from '@nextui-org/react'
import { useRouter } from "next/router"

interface IProps {
  pokemon: PokemonList
}

export const PokemonCard: FC<IProps> = ({ pokemon }) => {

  const router = useRouter()

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <>
      <Grid xs={6} sm={3} md={2} key={pokemon.id}>
        <Card hoverable clickable onClick={onClick}>
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
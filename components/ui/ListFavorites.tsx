import { FC } from "react"
import { Card, Grid } from '@nextui-org/react';

interface ListFavoritesProps {
  favorites: number[]
}

export const ListFavorites: FC<ListFavoritesProps> = ({ favorites }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        favorites.map(id => (
          <Grid xs={6} key={id}>
            <Card hoverable clickable css={{padding: 10}}>
              <Card.Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} 
                width={"100%"}
                height={'140px'}
              />
            </Card>
          </Grid>
        ))
      }
    </Grid.Container>
  )
}

export default ListFavorites
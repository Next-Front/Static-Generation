import { FC } from "react"
import { useRouter } from "next/router";
import { Card, Grid } from '@nextui-org/react';

interface ListFavoritesProps {
  favorites: number[]
}

export const ListFavorites: FC<ListFavoritesProps> = ({ favorites }) => {

  const router = useRouter()

  const onFavoriteClick = (id: number) => router.push(`/pokemon/${id}`)

  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        favorites.map(id => (
          <Grid onClick={() => onFavoriteClick(id)} xs={6} key={id}>
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
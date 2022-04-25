import { useEffect, useState } from 'react';
import { Layout } from 'components/layouts'
import { ListFavorites, NoFavorites } from 'components/ui'
import { listFavorite } from 'utils';

const FavoritesPage = () => {

  const [favoritePokemos, setFavoritePokemos] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemos(listFavorite())
  }, [])
  

  return (
    <Layout title='Favoritos'>
      {
        favoritePokemos.length === 0 
        ? <NoFavorites />
        : <ListFavorites favorites={favoritePokemos} />
      }
    </Layout>
  )
}

export default FavoritesPage
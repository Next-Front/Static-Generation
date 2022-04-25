import { useState } from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { Layout } from "components/layouts";
import { pokeApi } from "api";
import { PokemonDetail } from "interface/IResponsePokeDetail";
import { toggleFavorite, existInFavorites } from 'utils';
import confetti from 'canvas-confetti';
import { IResponsePoke } from 'interface/IResponsePoke';

interface IProps {
  pokemon: PokemonDetail;
}

const PokemonByName: NextPage<IProps> = ({ pokemon }) => {
  
  const [isInFavortites, setisInFavortites] = useState( existInFavorites(pokemon.id));

  const onToggleFavorite = () => {
    toggleFavorite(pokemon.id);
    setisInFavortites(!isInFavortites);

    if ( !isInFavortites) {
      confetti({
        particleCount: 100,
        spread: 150,
        angle: -100,
        origin: { y: 0, x: 1 },
      });
    }
  }

  return (
    <Layout
      title={pokemon.name}
    >
      <Grid.Container css={{ marginTop: '5px' }} gap={2} >
        <Grid xs={12} sm={4} >
          <Card hoverable css={{ padding: '30px' }} >
            <Card.Body>
              <Card.Image 
                src={pokemon.sprites.other?.dream_world.front_default || pokemon.sprites.front_default} 
                alt={pokemon.name}
                width={"100%"}
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8} >
          <Card>
            <Card.Header  css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 >{pokemon.name}</Text>
              <Button
                color='gradient'
                ghost={!isInFavortites}
                onClick={onToggleFavorite}
              >
                {
                 isInFavortites 
                 ? 'Eliminar de favoritos' 
                 : 'Guardar en favoritos'
                }
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction='row' display='flex'>
                <Image 
                  src={pokemon.sprites.front_default} 
                  alt={pokemon.name} 
                  width={150} 
                  height={150}
                />
                 <Image 
                  src={pokemon.sprites.back_default} 
                  alt={pokemon.name} 
                  width={150} 
                  height={150}
                />
                 <Image 
                  src={pokemon.sprites.front_shiny} 
                  alt={pokemon.name} 
                  width={150} 
                  height={150}
                />
                 <Image 
                  src={pokemon.sprites.back_shiny} 
                  alt={pokemon.name} 
                  width={150} 
                  height={150}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export default PokemonByName


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemosName: string[] = [];
  const { data } = await pokeApi.get<IResponsePoke>('/pokemon?limit=151')

  data.results.forEach((pokemon) => {
    pokemosName.push(pokemon.name)
  })

  return {
    paths: pokemosName.map( (name) => ({
      params: {
        name
      }
    })),
    fallback: "blocking"
  }
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { name } = ctx.params as { name: string };

  const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${name}`);

  return {
    props: {
      pokemon: data
    }
  }
}
import { Layout } from "components/layouts";
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { pokeApi } from "api";
import { PokemonDetail } from "interface/IResponsePokeDetail";
interface IProps {
  pokemon: PokemonDetail;
}

const PokemonDetail: NextPage<IProps> = ({ pokemon }) => {

  return (
    <Layout
      title=""
    >
      <h1>Pokemon Detail</h1>
      <div>
        <h2>{pokemon.name}</h2>
      </div>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons = [...Array(151)].map( (_, i) => `${i + 1}` );

  return {
    paths: pokemons.map( (id) => ({
      params: {
        id
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonDetail
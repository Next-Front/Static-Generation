import { Layout } from "components/layouts";
import { useRouter } from "next/router";

interface IProps {
  pokemons: any;
}

const PokemonDetail = () => {

  const { query } = useRouter();

  return (
    <Layout
      title=""
    >
      <h1>Pokemon Detail</h1>
    </Layout>
  )
}

export default PokemonDetail
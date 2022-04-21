import { Container, Image, Text } from "@nextui-org/react"

export const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    }}>
      <Text h1>No hay favoritos</Text>
      <Image 
        src='https://media.giphy.com/media/3o7btLqYqjXqQqQq2U/giphy.gif'
        alt='pokemon'
        width={250}
        height={250}
        css={{
          opacity: 0.3
        }}
      />
    </Container>
  )
}

export default NoFavorites
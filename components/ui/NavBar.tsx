import Image from "next/image"
import { Spacer, Text, useTheme } from "@nextui-org/react"

export const NavBar = () => {

  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray900.value,
    }}>
      <Image 
        alt="icono de pokemon app"
        width={70}
        height={70}
        src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'} 
      />
      <Text color="white" h2>P</Text>
      <Text color="white" h3>okémon</Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white" h5>Favoritos</Text>

    </div>
  )
}

export default NavBar
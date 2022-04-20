# Static Site Generation SSG
`getStaticProps` solo se ejecuta en build time y en el servidor

 You should use getStaticProps when:
- The data required to render the page is available at build time ahead of a user’s request.
- The data comes from a headless CMS.
- The data can be publicly cached (not user-specific).
- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

<hr>

### getStaticPaths
- `params` es las rutas que se aceptam
- `fallback` en caso de que sea `false` y la pagina no existe retorna un 404, en caso de `blocking` si renderiza el componente
```
  export const getStaticPaths: GetStaticPaths = async (ctx) => {
    return {
      paths: [
        {
          params: {
            id: '1',
          }
        }
      ],
      // fallback: "blocking"
      fallback: false
    }
  }
```
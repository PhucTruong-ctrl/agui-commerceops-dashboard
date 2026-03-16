import { RouterProvider } from 'react-router-dom'

type AppProps = {
  router: React.ComponentProps<typeof RouterProvider>['router']
}

function App({ router }: AppProps) {
  return <RouterProvider router={router} />
}

export default App

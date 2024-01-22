import ReactDOM from 'react-dom/client'
import App from './routes/App.tsx'
import Layout from './routes/Layout.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import {
  // ChakraBaseProvider,
  // extendBaseTheme,
  // theme as chakraTheme,
  ChakraProvider
} from '@chakra-ui/react'
import { ExploreTwurs } from './routes/ExploreTwurs.tsx'
import { TwurProfile } from './routes/TwurProfile.tsx'

// const { Tooltip, Modal } = chakraTheme.components

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "/twurs",
        element: <ExploreTwurs />
      },
      {
        path: "/twurs/:id",
        element: <TwurProfile />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
])

// const theme = extendBaseTheme({
//   components: {
//     Tooltip,
//     Modal,

//   }
// })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
)

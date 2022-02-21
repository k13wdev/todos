import { useSelector } from 'react-redux'
import Layout from './components/Layout/Layout'
import Todos from './components/Todos/Todos'

const App = () => {
  const theme = useSelector(state => {
    const {appReducer} = state
    return appReducer.theme
  })
  document.body.dataset.theme = theme

  return (
    <Layout>
      <Todos/>
    </Layout>
  )  
}

export default App

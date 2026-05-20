import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

function Home() {
  const navigate = useNavigate()

  return (
    <Layout title='Marksheet PDF Generator'>
      <div className='center'>
        <button onClick={() => navigate('/editor')}>
          Create New Marksheet
        </button>
      </div>
    </Layout>
  )
}

export default Home
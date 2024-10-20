import TopSellers from "./TopSellers.jsx"
import Banner from "./Banner"
import Recommended from "./Recommended.jsx"
import News from "./News.jsx"

const Home = () => {
  return (
    <>
        <Banner />
        <TopSellers />
        <Recommended/>
        <News/>
    </>
  )
}

export default Home
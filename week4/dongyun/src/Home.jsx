import './Home.css'
import UpperNav from './components/UpperNav'
import Market from './components/Market'
import PostingBtn from './components/PostingBtn'
import LowerNav from './components/LowerNav'
function Home() {

  return (
    <>
    <body>
    <UpperNav></UpperNav>
    <Market></Market>
    <PostingBtn></PostingBtn>
    <LowerNav></LowerNav>
    </body>
    </>
  )
}

export default Home

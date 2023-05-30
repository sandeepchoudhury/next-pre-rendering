import Link from "next/link"


function Home() {
  return (
    <>
     <h1>Next JS pre-rendering</h1>
     <Link href="/users">
      Users
     </Link>
     &nbsp;|&nbsp;
     <Link href="/posts">
      Posts
     </Link>
    </>
   
  )
}

export default Home
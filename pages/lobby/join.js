import Link from 'next/link'

//colors : #111d5e(dark blue) #c70039(pink) #f37121(orange) #c0e218 (yellow) -> palette 226115
export default function JoinLobby() {
  return (
    <>
      <h1>JOIN A LOBBY BABY</h1>
      <h2>
        <Link href="/">
          <a>Good job trying to join a lobby mate</a>
        </Link>
      </h2>
    </>
  )
}
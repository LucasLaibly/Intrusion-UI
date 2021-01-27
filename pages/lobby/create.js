import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

//colors : #6f9eaf(blueish) #a9294f(pink) #c7753d(orange) -> palette 226138
export default function CreateALobby() {
    return (
      <>
      <div className="container"> 
          <Head>
            <title>Create a Lobby</title>
          </Head>
          <a className="direction">
            <main>
                <code>MAKE A FUCKING LOBBY</code>
            </main>
          </a>
          <grid>
            <form>
              <label for="uname">Userame</label>
              <input type="text" id="uname" name="username" placeholder="Desired username.."/>

              <label for="lname">Lobby Name</label>
              <input type="text" id="lname" name="lobbyname" placeholder="Desired Lobby Name.."/> 
            </form>
          </grid>
        </div>

        <style jsx>{`
          .container {
            background: #c7753d;
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          direction {
            vertical-align: top;
          }
        `}</style>
      </>
    )
  }
  
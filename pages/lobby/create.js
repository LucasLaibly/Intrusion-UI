import Link from 'next/link'
import Head from 'next/head'
import Lobby from '../../components/lobby'

//colors : #6f9eaf(blueish) #a9294f(pink) #c7753d(orange) -> palette 226138
export default function CreateALobby() {
  return (
    <Lobby>
      <div className="container color-code"> 
        <form>
          <div className="form-group">
            <label for="uname">Userame</label>
            <input type="text" id="username" name="username" placeholder="Desired username.."/>
          </div>
          <div className="form-group">
            <label for="lname">Lobby Name</label>
            <input type="text" id="lobbyname" name="lobbyname" placeholder="Desired Lobby Name.."/>
          </div>

          <input type="submit" value="Create Lobby"/>
        </form>
      </div>

      <style jsx>{`
        .color-code{
          background: #6f9eaf;
          min-height: 100vh;
        }
      `}</style>
    </Lobby>
  )
}

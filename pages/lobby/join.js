import Link from 'next/link'
import Head from 'next/head'
import Lobby from '../../components/lobby'

//colors : #111d5e(dark blue) #c70039(pink) #f37121(orange) #c0e218 (yellow) -> palette 226115
export default function JoinLobby() {
  return (
    <Lobby>
      <div className="container color-code"> 
        <form>
          <div className="form-group">
            <label for="uname">Userame</label>
            <input type="text" id="username" name="username" placeholder="Desired username.."/>
          </div>
          <div className="form-group">
            <label for="lname">Lobby Number</label>
            <input type="number" id="lobbynumber" name="lobbynumber" placeholder="Lobby Number"/>
          </div>

          <input type="submit" value="Create Lobby"/>
        </form>
      </div>

      <style jsx>{`
        .color-code{
          background: #c70039;
          min-height: 100vh;
        }
      `}</style>
    </Lobby>
  )
}
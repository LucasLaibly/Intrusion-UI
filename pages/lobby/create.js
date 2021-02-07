import Link from 'next/link';
import Head from 'next/head';
import * as Mui from '@material-ui/core';
import Lobby from '../../components/lobby';

function getRandomLobbyNumber() {
  lobbyNumber = Math.floor(100000 + Math.random() * 900000).toString;
  return lobbyNumber;
}

// colors : #6f9eaf(blueish) #a9294f(pink) #c7753d(orange) -> palette 226138
const CreateLobby = () => {
  const randomNumber = getRandomLobbyNumber;

  return (
    <Lobby>
      <div className="container color-code">
        <form>

          <div className="form-group">
            <Mui.TextField 
              required
              id="filled-required" 
              label="Username Required"
              defaultValue=""
              variant="outlined" 
            />
          </div>

          <div className="form-group-secondary">
            <Mui.TextField 
              required
              id="filled-required" 
              label="Lobby Name Required"
              defaultValue=""
              variant="outlined"
            />
          </div>

          <div className="form-group-secondary">
            <Mui.TextField 
              disabled
              id="lobbynumber" 
              defaultValue={randomNumber}
              variant="outlined"
            />
          </div>

          <div className="form-group-secondary">
            <Mui.Button variant="contained">Create Lobby</Mui.Button>
          </div>
        </form>

      </div>

      <style jsx>
        {`
        .color-code{
          background: #c7753d;
          min-height: 100vh;
        }
        .container {
          flex-direction: column;
        }
        .form-group {
          flex-direction: column;
        }

        .form-group-secondary {
          margin-top: 20px;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }
      `}
      </style>
    </Lobby>
  );

}

export default CreateLobby;

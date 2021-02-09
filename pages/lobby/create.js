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
        <code>
          Create a new lobby xD
        </code>

        <form>

          <div className="grid">
            <a className="card">
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
            </a>

          </div>

          <div className="form-group-secondary">
            <Mui.Button variant="contained">
              Create Lobby
            </Mui.Button>
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
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .form-group {
          flex-direction: column;
          margin-top: 18px;
        }

        .form-group-secondary {
          margin-top: 20px;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card {
          margin: 3rem;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background: #FFFFFF;
          width: 300px;
          height: 300px;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .code {
          background: #fafafa;
          margin-top: 20px;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

      `}
      </style>
    </Lobby>
  );
};

export default CreateLobby;

import Link from 'next/link';
import Head from 'next/head';
import * as Mui from '@material-ui/core';
import Lobby from '../../components/lobby';

// colors : #111d5e(dark blue) #c70039(pink) #f37121(orange) #c0e218 (yellow) -> palette 226115
const JoinLobby = () => (
  <Lobby>
    <div className="container color-code">
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
                required
                id="filled-required"
                label="Lobby Number Required"
                defaultValue=""
                variant="outlined"
              />
            </div>
          </a>
        </div>

        <div className="form-group-secondary">
          <Mui.Button variant="contained">
            Join Lobby
          </Mui.Button>
        </div>

      </form>

    </div>

    <style jsx>
      {`
        .color-code{
          background: #c70039;
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

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background: #FFFFFF;
          width: 300px;
          height: 300px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #FFFFFF;
          border-color: #0070f3;
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
      `}
    </style>
  </Lobby>
);

export default JoinLobby;

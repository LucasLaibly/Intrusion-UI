import Head from 'next/head'
import Link from 'next/link'

//colors : #CCCC99(tan-shade) #FFFFFF(white) #006699(blue)
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Intrusion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <a>INTRUSION</a>
        </h1>

        <p className="description">
          <code>all it takes is all of your data.</code>
        </p>

        <div className="grid">
          <Link href='/lobby/create'>
            <a className="card">
              <h3>make a lobby</h3>
              <p>set the name, set the stakes.</p>
            </a>
          </Link>

          <Link href='/lobby/join'>
            <a className="card">
              <h3>join a lobby</h3>
              <p>get in on the game</p>
            </a>
          </Link>
        </div>
      </main>

      <footer>
        Powered by{' '}
        <img src="/intrusion.svg" alt="Intrusion Logo" className="logo" />
        _One
      </footer>

      <style jsx>{`
        .container {
          background: #006699;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        h1 {
          color: #FFFFFF;
        }

        .title a {
          color: #FFFFFF;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
          background: #CCCC99;
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

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

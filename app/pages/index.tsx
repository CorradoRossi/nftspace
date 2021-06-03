import { Head, Link } from "blitz"

const Home = () => (
  <div className="container">
    <Head>
      <title>NFTspace</title>
      <link rel="icon" href="/logo.png" />
    </Head>

    <main>
      <div className="logo">
        <h1>NFTSPACE</h1>
        <img src="/logo.png" alt="nftspace" />
      </div>
    </main>
    <footer>
      <a href="https://metastash.xyz" target="_blank" rel="noopener noreferrer">
        metastash
      </a>
    </footer>

    <style jsx>{`
      .container {
        background-color: #120f16;
        color: #e0e0e0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        background-color: #120f16;
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main p {
        font-weight: 600;
        font-size: 1.2rem;
      }

      footer {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #3b2d66;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer a {
        font-weight: 600;
        font-size: 0.8rem;
        color: #e0e0e0;
        text-decoration: none;
      }

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
      }

      .logo h1 {
        margin-left: 15px;
        font-weight: 700;
      }

      .logo img {
        height: 55px;
        width: 55px;
      }

      .buttons {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 0.5rem;
        margin-top: 6rem;
      }

      a.button {
        background-color: #cd284c;
        padding: 1rem 2rem;
        color: #e0e0e0;
        text-align: center;
      }

      a.button:hover {
        background-color: #cd284c;
      }

      a.button-outline {
        border: 2px solid #6700eb;
        padding: 1rem 2rem;
        color: #6700eb;
        text-align: center;
      }

      a.button-outline:hover {
        border-color: #45009d;
        color: #45009d;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      @import url("https://rsms.me/inter/inter.css");

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
          Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home

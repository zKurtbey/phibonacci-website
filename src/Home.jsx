import wbrfar from "./assets/WBR-far.png";
import wbrzoom from "./assets/WBR-zoom.png";
import wbrarea from "./assets/WBR-area.png";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <main
        style={{
          width: "calc(100% - 3.236em)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexDirection: "column",
          padding: "1.618em",
          paddingTop: "0.618em",
        }}
      >
        <h2
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          What Is Phibonacci?
        </h2>

        <div className="desc">
          <p>Phibonacci is a Fibonacci based Productivity app.</p>
        </div>
        <h2
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          What's The Mission Of This App?
        </h2>
        <div className="desc">
          <p>
            This app gives users work hours based on Fibonacci retracements.
            Trained ML recommends the best work hours based on user feedback of
            the previous work's productivity.
          </p>
        </div>
        <h2
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          Why Would You Take Fibonacci As A Path To Learn, Practice Or Do
          Whatever You Want?
        </h2>

        <div className="desc">
          <p>
            Fibonacci is a sequence of nature. The Golden Ratio, 1.618 comes
            from Fibonacci. You can see the Golden Spiral in flowers' petals,
            pinecones, shell spirals and galaxies.
          </p>

          <p>
            1.618 is a number of universality. Some randomization functions in
            computers use this number. Flowers' petals are arranged with this
            number to make the flower be the as productive as possible for
            photosynthesis.
          </p>
        </div>

        <h3
          style={{
            marginBottom: 0,
          }}
        >
          Fibonacci retracements
        </h3>

        <div className="desc">
          <p>Fibonacci retracements are:</p>

          <ul
            style={{
              marginTop: 0,
            }}
          >
            <li>0.236</li>
            <li>0.382</li>
            <li>0.5</li>
            <li>0.618</li>
            <li>0.786</li>
          </ul>
          <p>
            The most used field for Fibonacci retracements is technical analysis
            of financial markets. Or we can say graphs, because Fibonacci
            appears in patterns that seem random — or even those seem a cause of
            something.
          </p>

          <p>Let's take a look at World Birth Rate (2005-2023):</p>

          <img
            src={wbrfar}
            style={{
              margin: "0.618em",
              marginBottom: "1.618em",
              maxWidth: "100%",
              maxHeight: "440px",
              mixBlendMode: "multiply",
            }}
          />

          <p>Let's put the Fibonacci retracements:</p>

          <img
            src={wbrzoom}
            style={{
              margin: "0.618em",
              marginBottom: "1.618em",
              maxWidth: "100%",
              maxHeight: "440px",
              mixBlendMode: "multiply",
            }}
          />

          <p>It's kind of obvious but take a look at it in 2D Area graph:</p>

          <img
            src={wbrarea}
            style={{
              margin: "0.618em",
              marginBottom: "1.618em",
              maxWidth: "100%",
              maxHeight: "440px",
              mixBlendMode: "multiply",
            }}
          />

          <p>
            As you can see, the changes in the population in years fits on
            Fibonacci retracements almost perfectly.
          </p>
          <p>
            As it seems, Fibonacci shows up in a data that varies by the current
            situation like World Birth Rate.
          </p>

          <p>
            This is why you can take Fibonacci as a path. It appears in
            everywhere in every situation and fits almost perfect.
          </p>
        </div>
      </main>
    </>
  );
}

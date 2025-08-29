import Header from "./Header";

export default function Support() {
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
        <h1
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          Support
        </h1>

        <div className="desc">
          <h2>Contact Informations</h2>
          <div className="desc">
            <p>You can contact us from:</p>
            <ul>
              <li>Mail: kurtbey@phibonacci.app</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

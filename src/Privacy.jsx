import Header from "./Header";

export default function Privacy() {
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
          Privacy Policy - Phibonacci
        </h1>

        <div className="desc">
          <h2>Information We Collect</h2>
          <div className="desc">
            <p>
              When you first download <strong>Phibonacci</strong>, we ask for
              your name and how much free time you have each day. This
              information is collected{" "}
              <strong>
                only to personalize your experience within the app.
              </strong>
            </p>
          </div>
          <h2>How We Use Your Information</h2>
          <div className="desc">
            <ul>
              <li>
                Your <strong>name</strong> is used to address you personally.
              </li>
              <li>
                Your <strong>free time data</strong> is used to provide
                personalized suggestions and improve the app experience.
              </li>
            </ul>
            <p
              style={{
                margin: 0,
                padding: 0,
              }}
            >
              We <strong>do not share, sell, or disclose</strong> your
              information to any third parties.
            </p>
          </div>
          <h2>Security</h2>
          <div className="desc">
            <p
              style={{
                margin: 0,
                padding: 0,
              }}
            >
              We take reasonable measures to keep your information safe within
              the app.
            </p>
          </div>
          <h2>Contact</h2>
          <div className="desc">
            <p>
              If you have any questions about your privacy, contact us at:
              kurtbey@phibonacci.app
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

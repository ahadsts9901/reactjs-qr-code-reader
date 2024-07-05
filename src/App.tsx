import "./App.css"
import { useState } from "react";
import { QrReader } from "react-qr-reader";

const App = () => {


  const [data, setData] = useState("No result");

  return (
    <div className="main">
      <QrReader
        ViewFinder={Finder}
        scanDelay={600}
        constraints={{}}
        onResult={(result: any, error: any) => {
          if (result) {
            setData(result?.text);
          }
          if (error) {
            // console.error(error)
          }
        }}
      />
      <p>{data}</p>
    </div>
  );
};

const Finder = () => <h1>QR-Code Scanner</h1>;
export default App;
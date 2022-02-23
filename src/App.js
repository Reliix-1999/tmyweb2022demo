import "./App.css";

function App() {

  return (
    <div className="Container">
      <div className="box1">
        <div className="icon1">
          <img 
          
            src={require("./image/home/Group 3227.png")}
            style={{ maxWidth: "100%", width: 50, alignSelf: "flex-end" }}
          />

          <img
            src={require("./image/home/Group 369.png")}
            style={{ maxWidth: "100%", width: 60, alignSelf: "flex-end" }}
          />
        </div>

        <img
          src={require("./image/home/shape-top.png")}
          style={{ maxWidth: "100%", width: 1000, marginTop: -20 }}
        />

        <p
          style={{
            marginTop: -200,
            fontSize: 25,
            color: "#151B47",
            fontWeight: "bold",
            
          }}
        >
          JOURNEY YOUR TRIP,DESIGH YOUR EXPERIENCE
        </p>

        <img
          src={require("./image/home/logo_Sail.png")}
          style={{
            maxWidth: 200,
            width: "100%",
            height: "100%",
            marginTop: -20,
          }}
        />

      <div className="welcome1">
        <p style={{ fontSize: 150, marginTop: -50, color: "white" }}>
          
          Welcome
        </p>
        <p style={{ fontSize: 100, marginTop: -180, color: "white",alignSelf:'center' }}>To </p>
        <p style={{ fontSize: 100, marginTop: -120, color: "white" }}>
          
          Tack My Yacht
        </p>

        <div className="input1">
          <form>
            <img
              src={require("./image/home/EN_FLAG.png")}
              alt="EN"
              style={{ width: 50, height: "auto" }}
            />
            <div>
              
              <input
                type="search"
                placeholder="enter your destination here."
                style={{width:250}}></input>
            </div>
            <input type="search" placeholder="Date" style={{width:100}}></input>
            <input type="number" placeholder="Passenger"></input>
            <input type="submit" value="Let's go"></input>
          </form>
        </div>
      </div> 
      </div>

      <div className="box2">
        <div className="thailand">
          <h1>Exploring the interesting routes in Thailand</h1>
          <img
              src={require("./image/home/Group 220.png")}
              style={{ width: 60, height: "auto" }}
            />
          <p style={{ fontSize: 30, color: '#151B47',alignSelf:'center', marginTop: -5 }}>Top destiations</p>
          <section className="content-top">
            <div className="top">
            <p>cccccccc</p>
            </div>
          </section>     
        </div>
      </div>

    
      
      <div className="box3">
      <img
              src={require("./image/home/Group 220.png")}
              style={{ width: 60, height: "auto", marginTop: 100}}
      />
      <div className="bx1">
      <img
              src={require("./image/home/Group 494.png")}
              style={{ width: 40, height: "auto", marginTop: -15 }}
            />
      <p style={{ fontSize: 30, color: '#151B47',alignSelf:'center', marginTop: -2.5 }}>Hot deals of the day</p>
      <img
              src={require("./image/home/Group 494.png")}
              style={{ width: 40, height: "auto", marginTop: -15 }}
            />
      </div>
      <div className="bx2">
      <img
              src={require("./image/home/Group 475.png")}
              style={{ width: 40, height: "auto", marginTop: -15 }}
            />
            <p style={{ fontSize: 20, color: '#151B47',alignSelf:'center', marginTop: -2.5 }}> Phuket Pattaya Krabi Bangkok </p>
            {/* <p style={{ fontSize: 20, color: '#151B47',alignSelf:'center', marginTop: -2.5 }}>Pattaya </p>
            <p style={{ fontSize: 20, color: '#151B47',alignSelf:'center', marginTop: -2.5 }}>Krabi </p>
            <p style={{ fontSize: 20, color: '#151B47',alignSelf:'center', marginTop: -2.5 }}>Bangkok </p> */}
      <img
              src={require("./image/home/Group 475.png")}
              style={{ width: 40, height: "auto", marginTop: -15 }}
            />
          <div className="hot-deals">
          </div>
      </div>
      </div> 


      <div className="box4">
      <img
              src={require("./image/home/Group 220.png")}
              style={{ width: 60, height: "auto", marginTop: 100}}
      />
      <div className="bx1">
      <img
              src={require("./image/home/Group 494.png")}
              style={{ width: 40, height: "auto", marginTop: -15 }}
            />
      <p style={{ fontSize: 30, color: '#151B47',alignSelf:'center', marginTop: -2.5 }}>Best Seller</p>
      <img
              src={require("./image/home/Group 494.png")}
              style={{ width: 40, height: "auto", marginTop: -15 }}
            />
      </div>
      <div className="bx2">
      <img
              src={require("./image/home/Group 475.png")}
              style={{ width: 40, height: "auto", marginTop: -15 }}
            />
      <p style={{ fontSize: 20, color: '#151B47',alignSelf:'center', marginTop: -2.5 }}> Phuket Pattaya Krabi Bangkok </p>
      {/* <p style={{ fontSize: 20, color: '#151B47',alignSelf:'center', marginTop: -2.5 }}>Phuket </p>
      <p style={{ fontSize: 20, color: '#151B47',alignSelf:'center', marginTop: -2.5 }}>Pattaya </p>
      <p style={{ fontSize: 20, color: '#151B47',alignSelf:'center', marginTop: -2.5 }}>Krabi </p>
      <p style={{ fontSize: 20, color: '#151B47',alignSelf:'center', marginTop: -2.5 }}>Bangkok </p> */}
      <img
              src={require("./image/home/Group 475.png")}
              style={{ width: 40, height: "auto", marginTop: -15 }}
            />
          <div className="best-seller">
          </div>
      </div>
      </div>

    </div>
  );
}

export default App;

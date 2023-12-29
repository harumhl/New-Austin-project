import "./images.css";

function Images() {
  return (
    <>
      <div
        style={{
          textAlign: "justify",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        Average sizes based on Google
      </div>
      <ul>
        <li>HEB: 70,000 sq ft</li>
        <li>Target 135,000 sq ft = 3.1 acre</li>
        <li>Planet fitness 20,000 sq ft</li>
        <li>Walnut creek metropolitan park in Austin 293 acre</li>
        <li>
          Hospitals (around 100 beds) 200,000 sq ft
          <ul>
            <li>2.5 people per household</li>
          </ul>
        </li>

        <li>
          2.5-3 beds per 1000 residents Parking garage 30,000 sq ft per 100 cars
        </li>
      </ul>
      <img
        src="https://raw.githubusercontent.com/harumhl/New-Austin-project/main/src/assets/inner_city.png"
        alt="inner_city.png"
        className="full-width-on-mobile"
      ></img>
      <br />
      <img
        src="https://raw.githubusercontent.com/harumhl/New-Austin-project/main/src/assets/shared_among_cities.png"
        alt="shared_among_cities.png"
        className="full-width-on-mobile"
      ></img>
      <br />
      <img
        src="https://raw.githubusercontent.com/harumhl/New-Austin-project/main/src/assets/city_to_city.png"
        alt="city_to_city.png"
        className="full-width-on-mobile"
      ></img>
    </>
  );
}

export default Images;

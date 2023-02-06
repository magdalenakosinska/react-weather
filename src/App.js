import "./App.css";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <WeatherForecast />
      <footer>
        {" "}
        <a
          href="https://github.com/magdalenakosinska/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Magdalena Kosinska
      </footer>
    </div>
  );
}

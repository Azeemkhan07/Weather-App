# WeatherApp

This is a simple weather application built with React. It uses the OpenWeatherMap API to fetch weather data based on the city name entered by the user.

## Live Demo

You can access the live application here.
https://weather-app-gules-three.vercel.app/

## Features

- Search for a city to get its current weather.
- Displays weather icon, temperature, and weather description.
- Error handling for failed API requests.

## Installation

1. Clone this repository.
2. Install the dependencies using `npm install`.
3. Create a `.env` file in the root directory and add your OpenWeatherMap API key like this: `REACT_APP_API_KEY=your_api_key`.
4. Run the app using `npm start`.

## Dependencies

- React
- Axios for promise based HTTP requests.
- react-icons for using svg icons.

## Usage

Enter the name of the city in the search bar and click on the search icon. The app will display the current weather of the city including the temperature and weather description.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT

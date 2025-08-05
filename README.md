# Star-Wars-Explorer

## Description

Hey, guys! This is a React application about the Star Wars universe. Here you will find full
descriptions and information about your favourite characters, as well as the ships they use and the
planets where all the events of your favourite movie take place.

The application uses the Star Wars API (SWAPI) to fetch data and provides a modern, responsive
interface for exploring the Star Wars universe.

**Live Demo:** https://fahrenheit911.github.io/StarWarsExplorer

May the Force be with you!

## Features

- **People**: Browse and view detailed information about Star Wars characters
- **Planets**: Explore planets from the Star Wars universe with detailed descriptions
- **Starships**: Discover various starships and their specifications
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modal Windows**: Detailed information displayed in elegant modal windows
- **Pagination**: Load more data with "Load More" functionality

## Tech Stack

- **Frontend**: React 18, Redux Toolkit, React Router
- **Styling**: CSS3 with custom fonts (Comic Neue)
- **API**: Star Wars API (SWAPI)
- **Deployment**: GitHub Pages

## Contributing

We welcome any and all contributions! Here are some ways you can get started:

1. **Report bugs**: If you encounter any bugs, please let us know. Open up an issue and let us know
   the problem.
2. **Contribute code**: If you are a developer and want to contribute, follow the instructions below
   to get started!
3. **Suggestions**: If you don't want to code but have some awesome ideas, open up an issue
   explaining some updates or improvements you would like to see!
4. **Documentation**: If you see the need for some additional documentation, feel free to add some!

## Instructions

1. Fork this repository
2. Clone the forked repository
3. Add your contributions (code or documentation)
4. Commit and push
5. Wait for pull request to be merged

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/star-wars-explorer.git
cd star-wars-explorer
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it
in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode
and optimizes the build for the best performance.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.
This command will remove the single build dependency from your project.

## Deployment

This project is deployed using GitHub Pages. The live version is available at:
https://fahrenheit911.github.io/star-wars-explorer

### Deploy to GitHub Pages

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Add homepage to package.json:

```json
"homepage": "https://yourusername.github.io/repository-name"
```

3. Add deploy scripts to package.json:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy:

```bash
npm run deploy
```

## Project Structure

```
src/
├── components/          # React components
│   ├── App/           # Main app component
│   ├── Button/        # Reusable button component
│   ├── Header/        # Navigation header
│   ├── Loader/        # Loading spinner
│   ├── ModalWindow/   # Modal window component
│   ├── Person/        # Person display component
│   ├── Planet/        # Planet display component
│   ├── Starship/      # Starship display component
│   ├── StatsBlock/    # Statistics display
│   └── WindowContent/ # Modal content components
├── pages/             # Page components
├── redux/             # Redux store and slices
├── routes/            # React Router configuration
├── styles/            # Global styles
└── Utils/             # Utility functions
```

## API Integration

The application integrates with the Star Wars API (SWAPI) to fetch:

- Character information
- Planet details
- Starship specifications
- Related data (films, vehicles, etc.)

## License

This project is licensed under the MIT License.

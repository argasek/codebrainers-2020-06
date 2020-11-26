# Codebrainers Plantastic

This project was created as educational material for [Codebrainers Fullstack Bootcamp](https://codebrainers.pl/).

## Setup

In order to customize the application use [.env files provided by CRA](https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used).
You can customize following environmental variables: 
* `PORT` – frontend application HTTP port

So, example `.env.local` file might look like this:
```dotenv
PORT=1337
```
    
## Running

Install dependencies first:
```shell script
yarn
```
  
Then run the application:
```shell script
yarn start
```

## Homework and notes

All homework tasks will [reside here](HOMEWORK.md).

### First React application

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

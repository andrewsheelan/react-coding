To add watch and code coverage to test, include in package.json:

```
    "test": "react-scripts test --watchAll --coverage",
```


To ignore code coverage on certain pages:

```
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx}",
      "!src/index.js"
    ]
  }

```

To test Saga files - add the following global:

```
global.recordSaga = async function(saga, state, sagaArguments) {
  const dispatched = [];

  const runSagaOptions = {
    getState: () => state,
    dispatch: action => dispatched.push(action)
  };

  await runSaga(runSagaOptions, saga, sagaArguments).toPromise();

  return dispatched;
};
```

Eg.
```

  const payload = fetchGalleryData();
  const dispatched = await global.recordSaga(
      workers.loadGalleryDataWorker, initialState, {
    payload,
  });
```


To add connect API Mock Server using connect-api-mocker:

https://blog.harveydelaney.com/setting-up-a-mock-api-for-your-front-end-react-project/



To mock redux store: redux-mock-store
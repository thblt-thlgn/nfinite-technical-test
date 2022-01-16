# About this technical test

- Using [react-router-dom](https://reactrouter.com/docs/en/v6) was a nice improvement for this exercice, but I wasn't aware of the breaking changes between the version 5 and 6, which made me waste a significant amount of time figuring out how the new API worked.
- I'm sure some librairies like [@apollo/client](https://www.apollographql.com/docs/react/) for REST APIs exist, and it would have been interesting to use them here. But since I haven't work with REST APIs in a while, I preferred to implement a [custom hook](./client/src/hooks/useAPI.js) to make these HTTP calls on the backend server.
- I first thought that having a stream-based implementation for the `/upload` endpoint was a better solution (especially for memory consumption in case of a massive CSV file), but it was over-complexifying the code implementation for a need which wasn't clearly specified.
  Also, since we have to build the API response in memory, this problem wouldn't have been entirely solved.
  However, I feel that building batch requests over a just using a `Promise.all` (like I did) to fetch the images would be more efficient in case of massive CSV file as input.
- After considering those options, I've made the choice not using any component library like [material-ui](https://mui.com) or [antd](https://ant.design): the mockups were were light enough.
- I haven't implemented any E2E or unit tests because I already was over the two hours limits, but it could have been an interesting addition.
- Even though translating the app wasn't required, using a library like [i18next](https://react.i18next.com) would have centralized of the text content and be a great improvement.
- I usually work with linters (like eslint or sass-lint) but I didn't find time to add a configuration for this exercice.
- I also thought about using typescript for this exercice, but it would have taken too much time to set up.
- Setting up path aliases would have been great (for both js and sass files), but required to override some of the create-react-app configuration.

Thank for reading me and have a nice review.

[Thibault THÉOLOGIEN](https://www.linkedin.com/in/thibault-theologien/)

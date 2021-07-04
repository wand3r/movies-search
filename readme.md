## How to run

1. Install all dependencies with Yarn

```sh
yarn install
```

2. Create `.env.local` file in root folder and add your OMDb API key there. We can create one [here](https://www.omdbapi.com/apikey.aspx)

```
VITE_API_KEY=<api-key>
```

3. Run application with

```
yarn dev
```

4. Application will be served under

```
http://localhost:3000/
```

## Challenges

### API

http://www.omdbapi.com/ API isn't the easiest API to work with. I've encountered few challenges with it:

- Search API returns maximum 10 movies in a single request. To show all results we would have to make a decision between:

  - Adding paging to `MoviesList` (we could use https://react-query.tanstack.com/guides/paginated-queries)
  - Adding infinity scroll and load next pages dynamically (we could use https://react-query.tanstack.com/guides/infinite-queries). Looks like the best option for the user but also the most complex one to implement.
  - Making multiple request in one go to fetch all pages before showing results

- OMDb doesn't allow searching by people ([Github Issue](https://github.com/omdbapi/OMDb-API/issues/37)) and people are not included in response from Search API. The only way I see with this API is to first search by title and then query for each movie to get details including people.

- OMDb API doesn't follow REST standards. Instead of returning proper `status` we can receive `200` with error payload which isn't documented.

In the end I would recommend to use different API that is more suitable for our requirements and with better design.

### UI

Thinks I would consider to add:

- As mentioned in API section. Infinity scrolling to load more results as they are needed would be a great feature from usability and performance side.

- Currently we display basic information (title, year and poster) returned by Search API. We could show details view on hover/click/tap using "By ID or Title" endpoint.

- Of course searching by people needs to by included. We could experiment with fusy search where we only have one input and user can type title or people name but it depends on API capabilities.

- Search could work without explicitly clicking "Search" button. While typing with proper debounce strategy we could fetch movies almost immediately when user stops typing. Canceling mechanism would also be required.

- In general UI could look much nicer :) I've add only basic styling to movies list. Loading and error views should have separate designs instead of raw messages.

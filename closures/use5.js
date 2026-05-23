/**
- Memoization (Performance Optimization)
- (Closure help cache expensive calculations )

what is Memoization?
 - Memoization is am optimization technique where we store the result of an expensive function call and return the cached result when the same input occurs again
 
Benefits:
 - Reduces API calls
 - Improves performance
 - saves bandwidth
 - Faster UI rendering

 - This pattern is heavily used in :
 
 - React Hooks (useMemo, useCallback)
 - Redux selectors
 - Data fetching libraries
 - GraphQL caching

Where Memoization is used in real projects
 - useMemo
 */

const db = [
  {
    id: 101,
    userName: "Raghu k",
    theme: "light",
  },
  {
    id: 102,
    userName: "Akshay Saini",
    theme: "dark",
  },
  {
    id: 103,
    userName: "code Evolution",
    theme: "light",
  },
];

function fetchDetails() {
  const cache = {};

  return function (id) {
    if (cache[id]) {
      console.log("fetching data from cache ...");
      return cache[id];
    }
    // New REST API .....
    console.log("New REST API call to server...");

    const user = db.find((item) => item.id === id);

    cache[id] = user;
    return user;
  };
}

const getUser = fetchDetails();

console.log(getUser(101));
console.log(getUser(101));
console.log(getUser(101));
console.log(getUser(101));
console.log(getUser(101));

# React Router Middleware `catch` issue

To demonstrate the issue:

1. Start this app:
    ```sh
    npm install
    npm run dev
    ```

2. Make a request to http://localhost:5173

Per [the docs](https://reactrouter.com/how-to/middleware#error-handling), you should see a message:

```
Route error: error
```

in the terminal where you ran `npm run dev`. However, that message is not present, leading to the conclusion that the `catch` block in the middleware function is never executed.

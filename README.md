
# ig.news

A blog containing news from the world of ReactJS. This application was built during Ignite training by [Rocketseat](https://rocketseat.com.br/) - ReactJS trail.


## Technologies used
- NextJS
- Typescript
- Styled-Components
- Stripe
- FaunaDB
- PrismicIO

## Run the project
```
# clone this repo
git clone https://github.com/fgouvea10/ignews.git

cd ignews

# install the dependencies
yarn

# run the app
yarn dev
```

Also, you must have the environment variables. You can find them [here](https://github.com/fgouvea10/ignews/blob/main/.env.example).
Then, install Stripe CLI and run the following code:
```
stripe listen --forward-to localhost:3000/api/webhooks
```

Now you are able to run this application!


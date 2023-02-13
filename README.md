# Angular Amplify Template
Template is an angular project set up to build a simple chat with Amplify.
## AWS Amplify Configuration

Initialize Amplify for the app to begin configuration:

```zsh
amplify init
```

We need to change dist dir so can’t use default, answer no to that

```zsh
Project information
| Name: games
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: angular
| Source Directory Path: src
| Distribution Directory Path: dist
| Build Command: npm run-script build
| Start Command: ng serve

? Initialize the project with the above configuration? (Y/n) n
```
Answer all default except dist…change that to dis1/pico8 (name of project)

```zsh
...
? Distribution Directory Path: dist/games
...
```
Choose AWS Profile (default is fine)

Rename aws-exports.js to aws-exports.ts

Add Amplify Authentication module

```zsh
amplify add auth
```

22. Choose Default configuration
23. Choose Username
24. No I am done
25. Add Amplify API

```zsh
amplify add api
```

26. Choose GraphQL
27. Choose Continue
28. Choose Single object with fields (e.g., “Todo” with ID, name, des
    cription)
29. Enter Y
30. Replace the model in the file just opened with:

```ts
type Chat @model {
id: ID!
name: String!
message: String!
}
```

Amplify push
32. ? Are you sure you want to continue? (Y/n) Y
33. ? Do you want to generate code for your newly created GraphQ
    L API (Y/n) Y
34. ? Choose the code generation language target (Use arrow keys)❯ angular
35. Choose Default
36. Enter Y
37. Choose Default
38. Choose Default



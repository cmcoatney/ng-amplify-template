# Angular Amplify Template
Template is an angular project set up to build a simple chat with Amplify.
## AWS Amplify Configuration

----

### AWS
This section is not necessary for every project. It will require an AWS account, 
which will require a credit card even for free-tier.

We will also need to configure AWS account and IAM Profile if this hasn't already been done. 

Since a profile can be reused, this only needs to be done when a new profile is necessary.

This process will require some back and forth between AWS management console website and the terminal. 

```zsh
amplify configure
```
----


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
Answer all default except dist…change that to dist/(name of project)

```zsh
...
? Distribution Directory Path: dist/templatechat
...
```
Choose AWS Profile (default is fine)

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
 ? Are you sure you want to continue? (Y/n) Y
 ? Do you want to generate code for your newly created GraphQL API (Y/n) Y
 ? Choose the code generation language target (Use arrow keys)❯ angular
 Choose Default
 Enter Y
 Choose Default
 Choose Default


Rename aws-exports.js to aws-exports.ts

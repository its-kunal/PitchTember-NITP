# edX

The Open Source E-learning platform, education free for all.

## Technical Details

- Next.js
- Weaviate
- Palm 2 API
- Node.js
- Rollup
- Jest

## Apps

### edX-web app

- A Next.js Application to serve the front-end content.
- CRUD Learning Repos, Activities, Topics considering security rules.

## Serivces

### Service 1

Upload Files into the bucket.
Get list of the files from the bucket location.
And Download files from the bucket.

### Service 2 (Important)

Process the new added data into the bucket.
Classify the type of document and reterive data from it.
Then convert that data into vector embeddings using palm 2 model.
store vector embeddings into weaviate database.

### Service 3

Give search results from the weaviate database.

### Service 4

Authenticate User
Use JWT authentication to manage sessions for the user.

### Service 5

CRUD Learning Repo, Topics, Activites, Profile. Considering security rules.

### Service 6

Pub Sub services for changes in the repo, topics.

### Service 7

send notifications, mails and cron jobs.

## Packages

### Data Types (edX-data)


Contains class for all the data types to be used in the project.

## Database

- ### Weaviate

- ### MongoDB

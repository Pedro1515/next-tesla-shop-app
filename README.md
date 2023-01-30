# Tesla Shop

## [Live Demo](https://teslashop.up.railway.app/)

## Getting Started

### Running Mongo Database

```bash
docker-compose up
# or
docker-compose up -d
```

-   MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

### Setting Environment Variables

You can go to the **.env.example** file, copy the environment variables and set them in a new **.env** file.

-   MONGODB_URL

```
MONGODB_URL=mongodb://localhost:27017/entriesdb
```

-   JWT_SECRET

    It could be like this one:

```
JWT_SECRET=MyS3cr3tK3YOfJWT23RTe0sL4sH0p
```

### Configure Environments

Rename **.env.example** to **.env** and set the environment variables.

### Running App

-   Intalling Node Modules:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

##### Or

-   Building And Running Image With Docker:

```bash
docker build -t teslashop-image .
docker run --name=openjira-container -p 3000:3000 teslashop-image
```

### Populate Database With Test Information By Running:

```
http://localhost:3000/api/seed
```

# Docker + Django + React App - Trivago Magazine Challenge
![i_ay64Bn_400x400](https://user-images.githubusercontent.com/17013371/61430897-039d7880-a945-11e9-92ee-69d716c76549.png)


## Run Docker Service
```
docker-compose up --build
```

## Stop Docker Service
```
docker-compose stop
```


## Getting an Image to Docker Hub
```
docker tag 70af1d670db2 asadmanzoor93/magazine:magazine
docker push asadmanzoor93/magazine


docker tag bbfb84ecb70c asadmanzoor93/backend:backend
docker push asadmanzoor93/backend
```


## Dockerized React APP

#### Build React APP
```
docker build -t magazine:latest magazine
```

#### Run React APP 
```
docker run -v $PWD/magazine:/app -p 3000:3000 magazine:latest npm start
```

## Dockerized Django APP

#### Build Django APP
```
docker build -t backend:latest backend
```

#### Run Django APP
```
docker run -v $PWD/backend:/app/backend -p 8000:8000 backend:latest
```

###### VISAReady Consultancy Backend File ######

# push docker image 
docker push visaready/visareadybackend:latest

# pull docker image 
docker push visaready/visareadybackend:tagname

# Running docker Images/container
docker ps -a 
# remove container
docker rm containerId

# show images
docker images
# delete image
docker rmi imageId

## docker login into server
> docker login -u visaready.comp@gmail.com -p visaready@5698

## To build docker image of User Management Service Dev
> docker build -t visaready/visareadybackend:latest .

## To run the build image
> docker run -d --name visareadybackend -p 8000:8000 visaready/visareadybackend:latest

## To push the docker image into private docker repo
> docker push visaready/visareadybackend:latest

## To pull the docker image from private docker repo
> docker pull visaready/visareadybackend:latest
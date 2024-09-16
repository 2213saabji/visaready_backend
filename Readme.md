###### VISAReady Consultancy Backend File ######

# push docker image 
docker push visaready/visareadybackend:latest

# pull docker image 
docker pull visaready/visareadybackend:latest

# Running docker Images/container
sudo docker ps -a 
# remove container
sudo docker rm containerId
## check logs of image
> sudo docker logs conainerID

# show images
sudo docker images
# delete image
sudo docker rmi imageId

## docker login into server
> docker login -u visaready.comp@gmail.com

## To build docker image of User Management Service Dev
> docker build -t visaready/visareadybackend:latest .

## To push the docker image into private docker repo
> docker push visaready/visareadybackend:latest

## To pull the docker image from private docker repo
> sudo docker pull visaready/visareadybackend:latest

## To run the build image
> sudo docker run -d --name visareadybackend -p 8000:8000 visaready/visareadybackend:latest

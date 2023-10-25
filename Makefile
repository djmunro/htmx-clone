# Build the Docker image
build:
	docker-compose build

# Run the Docker container
run:
	docker-compose up

# Stop the Docker container
stop:
	docker-compose down

# Remove the Docker image
clean:
	docker rmi -f flask_web

# Default target, to run the container
all: build run

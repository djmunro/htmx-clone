build:
	docker-compose build

start:
	docker-compose up

stop:
	docker-compose down

clean:
	docker rmi -f flask_web

# Default target, to start the container
dev: build start

excludes = \*~ \*.pyc .cache/\* test_\* __pycache__/\*

e?=dev
PROJECT=overdrive-prod

export ${PROJECT}
export ${e}

.PHONY: clean
clean:
	find . -type f -name '*.pyc' -delete

.PHONY: flake
flake:
	docker-compose -f docker-compose-${e}.yml run users flake8 project

.PHONY: test
test:
	docker-compose -f docker-compose-${e}.yml run users python manage.py test

.PHONY: seed-db
seed-db:
	docker-compose -f docker-compose-${e}.yml run users python manage.py seed-db

.PHONY: recreate-db
recreate-db:
	docker-compose -f docker-compose-${e}.yml run users python manage.py recreate-db

.PHONY: cov
cov:
	docker-compose -f docker-compose-${e}.yml run users python manage.py cov

.PHONY: build
build-dev:
	docker-compose -f docker-compose-${e}.yml up -d --build

.PHONY: down
stop-dev:
	docker-compose -f docker-compose-${e}.yml down


excludes = \*~ \*.pyc .cache/\* test_\* __pycache__/\*

e?=dev
PROJECT=overdrive-prod

export ${PROJECT}
export ${e}

.PHONY: clean
clean:
	find . -type f -name '*.pyc' -delete

.PHONY: bandit
bandit:
# Bandit checks for known security flaws, vulnerabilies, general bad
# habits and returns non-zero if threshold is met.  -ll means were looking
# for a severity of medium and confidence of low.
# ['undefined', 'low', 'medium', 'high']
	docker-compose -f docker-compose-${e}.yml run users bandit -ll -i -r ./

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

.PHONY: react-scripts
react-scripts:
	docker-compose -f docker-compose-${e}.yml run client react-scripts test --coverage

.PHONY: react
react:
	docker-compose -f docker-compose-${e}.yml run client react-scripts test --coverage

.PHONY: python
python:
	docker-compose -f docker-compose-${e}.yml run users flake8 project
	docker-compose -f docker-compose-${e}.yml run users bandit -ll -i -r ./
	docker-compose -f docker-compose-${e}.yml run users python manage.py test
	docker-compose -f docker-compose-${e}.yml run users python manage.py cov

.PHONY: build
build:
	docker-compose -f docker-compose-${e}.yml up -d --build

.PHONY: down
down:
	docker-compose -f docker-compose-${e}.yml down

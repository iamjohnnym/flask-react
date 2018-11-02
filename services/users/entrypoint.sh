#!/bin/sh

echo "Waiting for postgres..."

while ! nc -z users-db 5432; do
  sleep 0.1
done

echo "PostgreSQL started"

if [[ "${FLASK_ENV}" == 'production' ]] ; then
  gunicorn -b 0.0.0.0:5000 manage:app
else
  python manage.py run -h 0.0.0.0
fi

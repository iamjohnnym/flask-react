import unittest
from project import db
from project.api.models import User
from project.tests.base import BaseTestCase
from sqlalchemy.exc import IntegrityError

from test_users import add_user


class TestUserModel(BaseTestCase):
    def test_add_user(self):
        user = add_user(
            username='test.user',
            email='test.user@test_example.com'
        )
        self.assertTrue(user.id)
        self.assertEqual(user.username, 'test.user')
        self.assertEqual(user.email, 'test.user@test_example.com')
        self.assertTrue(user.active)

    def test_add_user_duplicate_username(self):
        user = add_user(
            username='test.user',
            email='test.user@test_example.com'
        )
        duplicate_user = User(
            username='test.user',
            email='user90210@example.com'
        )
        db.session.add(duplicate_user)
        self.assertRaises(IntegrityError, db.session.commit)

    def test_add_user_duplicate_email(self):
        user = add_user(
            username='test.user',
            email='test.user@test_example.com'
        )
        duplicate_user = User(
            username='new_user',
            email='test.user@test_example.com'
        )
        db.session.add(duplicate_user)
        self.assertRaises(IntegrityError, db.session.commit)

    def test_model_to_json(self):
        user = add_user(
            username='test.user',
            email='test.user@test_example.com'
        )
        self.assertTrue(isinstance(user.to_json(), dict))


if __name__ == '__main__':
    unittest.main()

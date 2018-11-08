import unittest
from project import db
from project.api.models import User
from project.tests.base import BaseTestCase
from project.tests.utils import add_user
from sqlalchemy.exc import IntegrityError, DataError


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
        add_user(
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
        add_user(
            username='test.user',
            email='test.user@test_example.com'
        )
        duplicate_user = User(
            username='new_user',
            email='test.user@test_example.com'
        )
        db.session.add(duplicate_user)
        self.assertRaises(IntegrityError, db.session.commit)

    def test_add_user_max_length_username(self):
        user = User(
            username='this_is_my_super_duper_long_username',
            email='test.user@test_example.com'
        )
        db.session.add(user)
        self.assertRaises(DataError, db.session.commit)

    def test_add_user_max_length_email(self):
        user = User(
            username='test.user',
            # this is the dumbest standard ever, 254 characters as a max
            # possible length? Come on man.
            email='this_is_my_super_incredibly_obnoxiously_long_email_' + \
                  'prefix_that_goes_on_and_on_my_friends_bang_pow_wow_bow' + \
                  'how_bou_nah_bah_super_calafragalisticespialadocious' + \
                  '@how.much.more.do.i.have.to.type.to.reach.this' + \
                  '.rediculous.length.to.fail.this.two.hundred.and.fifty' + \
                  'four.character.length.com'
        )
        db.session.add(user)
        self.assertRaises(DataError, db.session.commit)

    def test_model_to_json(self):
        user = add_user(
            username='test.user',
            email='test.user@test_example.com'
        )
        self.assertTrue(isinstance(user.to_json(), dict))


if __name__ == '__main__':
    unittest.main()

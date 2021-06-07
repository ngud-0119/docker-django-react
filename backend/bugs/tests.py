from django.test import TestCase
from django.contrib.auth.models import User

from .models import Bug


class BlogTests(TestCase):

    @classmethod
    def setUpTestData(cls):
        # Create a user
        testuser1 = User.objects.create_user(
            username='testuser1', password='def123')
        testuser1.save()

        # Create a bug
        test_bug = Bug.objects.create(
            user=testuser1, title='Bug title', description='Description content...', resolved=True)
        test_bug.save()

    def test_blog_content(self):
        bug = Bug.objects.last()
        expected_user = f'{bug.user}'
        expected_title = f'{bug.title}'
        expected_description = f'{bug.description}'
        expected_resolved = True
        self.assertEqual(expected_user, 'testuser1')
        self.assertEqual(expected_title, 'Bug title')
        self.assertEqual(expected_description, 'Description content...')
        self.assertTrue(expected_resolved)

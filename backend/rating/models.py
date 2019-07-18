from django.db import models

# Create your models here.
class Rating(models.Model):
    title = models.CharField(max_length=200, default='')
    rating = models.IntegerField(default=0)

    def __str__(self):
        """A string representation of the model."""
        return self.title
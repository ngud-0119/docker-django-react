from rest_framework import serializers
from .models import Rating


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'rating'
        )
        model = Rating
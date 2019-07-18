from rest_framework import generics

from .models import Rating
from .serializers import RatingSerializer

class ListRating(generics.ListCreateAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer


class DetailRating(generics.RetrieveUpdateDestroyAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

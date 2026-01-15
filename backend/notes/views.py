from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from .serializers import NoteSerializer
from rest_framework import viewsets,permissions
from rest_framework.response import Response
from .models import Notes


class NoteViewSet(viewsets.ViewSet):

    queryset = Notes.objects.all()
    permissions=[permissions.AllowAny]
    serializer = NoteSerializer(queryset, many=True)

    def list(self, request):
        queryset = User.objects.all()
        serializer = self.serializer(queryset, many=True)
        return Response(serializer.data)
  

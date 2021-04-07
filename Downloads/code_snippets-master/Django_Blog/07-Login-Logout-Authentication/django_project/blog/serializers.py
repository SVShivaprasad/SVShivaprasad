from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import AddUser



class AdduserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddUser
        fields = '__all__'
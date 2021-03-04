from rest_framework import serializers
from crud.models import *


class EmployeePropertiesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Employee
		fields = ['full_name','slug','profile_image','email','phone_number','salary','role','detail','created_at','updated_at']
		read_only_fields = ['profile_image','slug','created_at','updated_at']

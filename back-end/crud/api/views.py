from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.generics import ListAPIView, RetrieveAPIView

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from crud.models import *
from .serializers import *


class EmployeeListView(ListAPIView):
    queryset = Employee.objects.order_by('-created_at')
    serializer_class = EmployeePropertiesSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class EmployeeDetailView(RetrieveAPIView):
    queryset = Employee.objects.order_by('-created_at')
    serializer_class = EmployeePropertiesSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )


@api_view(['POST'])
@permission_classes((AllowAny,))
def create_employee(request):
    data = {}
    serializer = EmployeePropertiesSerializer(data=request.data)
    if serializer.is_valid():
        employee = serializer.save()
        
        data['pk'] = employee.pk
        data['full_name'] = employee.full_name
        data['slug'] = employee.slug
        image_url = str(employee.profile_image.url)
        data['profile_image'] = image_url
        data['email'] = employee.email
        data['phone_number'] = employee.phone_number
        data['salary'] = employee.salary
        data['role'] = employee.role
        data['detail'] = employee.detail
        data['created_at'] = employee.created_at
        data['message'] = 'SUCCESS'
        return Response(data=data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes((AllowAny,))
def update_employee(request, slug):

    try:
        employee = Employee.objects.get(slug=slug)
    except Employee.DoesNotExist:
        return Response(data='NOT_FOUND')

    data = {}
    serializer = EmployeePropertiesSerializer(employee,data=request.data,partial=True)
    if serializer.is_valid():
        employee = serializer.save()
        
        data['pk'] = employee.pk
        data['full_name'] = employee.full_name
        data['slug'] = employee.slug
        image_url = str(employee.profile_image.url)
        data['profile_image'] = image_url
        data['email'] = employee.email
        data['phone_number'] = employee.phone_number
        data['salary'] = employee.salary
        data['role'] = employee.role
        data['detail'] = employee.detail
        data['created_at'] = employee.created_at
        data['updated_at'] = employee.updated_at
        data['message'] = 'UPDATE'
        return Response(data=data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE',])
@permission_classes((AllowAny, ))
def delete_employee(request, slug):
    
    try:
        employee = Employee.objects.get(slug=slug)
    except Employee.DoesNotExist:
        return Response(data='NOT_FOUND')

    operation = employee.delete()
    data = {}
    if operation:
        data['message'] = 'DELETE'
        return Response(data=data)
    else:
        return Response(data='ERROR', status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
@permission_classes((AllowAny,))
def post_form(request):
    data = {}
    serializer = PostFormSerializer(data=request.data)
    if serializer.is_valid():
        form = serializer.save()
        
        data['pk'] = form.pk
        data['label'] = form.label
        image_url = str(form.uploadFile.url)
        data['uploadFile'] = image_url
        data['message'] = 'SUCCESS'
        return Response(data=data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


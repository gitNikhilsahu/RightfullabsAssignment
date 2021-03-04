from django.urls import path
from .views import *

app_name = 'crud'

urlpatterns = [
    path('list', EmployeeListView.as_view()),
    path('<slug>/', EmployeeDetailView.as_view()),
    
	path('create', create_employee, name="create-employee"),
	path('<slug>/update', update_employee, name="employee-update"),
	path('<slug>/delete', delete_employee, name="employee-delete"),
]
from django.db import models
from datetime import datetime

from django.utils.text import slugify
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from django.core.validators import MaxValueValidator
# from django.core.validators import RegexValidator


EMPLOYEE_TYPES = (
    ('STANDARD', 'base employee'),
    ('MANAGER', 'manager'),
    ('SR_MANAGER', 'senior manager'),
)

def upload_location(instance, filename):
    slug = instance.slug
    count = Employee.objects.filter(slug=instance.slug).count()
    if count:
        slug = '{}-{}'.format(slug, count)
    file_extension = filename.split(".")[-1]
    n_f = "%s.%s" %(slug, file_extension)
    return "employees/%s" %(n_f)

class Employee(models.Model):
    full_name = models.CharField(max_length=200)
    slug = models.SlugField(blank=True,unique=True,editable=False,default='',max_length=350)
    profile_image = models.ImageField(upload_to=upload_location,blank=True,null=True)
    email = models.EmailField(verbose_name="Email",max_length=64,blank=True,null=True)
    phone_number = models.CharField(verbose_name="Phone Number",max_length=15,blank=True,null=True)

    salary = models.PositiveIntegerField(blank=True,null=True)
    role = models.CharField(max_length=25, choices=EMPLOYEE_TYPES,blank=True,null=True)
    detail = models.TextField(max_length=10000,null=True,blank=True)
   
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return self.full_name

    class Meta:
        ordering=['-created_at']
        verbose_name_plural = "Employees"

#auto generate the unique slug
def pre_save_employee_slug_receiever(sender, instance, *args, **kwargs):
    if not instance.slug:
        slug = slugify(instance.full_name, instance.pk)
        count = Employee.objects.filter(full_name=instance.full_name).count()
        if count:
            slug = '{}-{}'.format(slug, count)
        instance.slug = slug
pre_save.connect(pre_save_employee_slug_receiever, sender=Employee)

#auto delete profile_image than delete employee
@receiver(post_delete, sender=Employee)
def submission_delete(sender, instance, **kwargs):
	instance.profile_image.delete(False)


class PostForm(models.Model):
    label = models.CharField(max_length=200)
    uploadFile = models.FileField()

    def __str__(self):
        return self.label
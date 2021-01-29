from django.db import models
import re

class User_Manager(models.Manager):
    def basic_validator(self, post_data):
        errors = {}
    #todo include validations stuff
        print("hello from validator")
        if len(post_data['name']) <= 2:
            errors['name'] = "required; at least 2 characters; letters only"
        if len(post_data['email']) <= 2:
            errors['email'] = "required; valid format"
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(post_data['email']):               
            errors['email'] = 'Invalid email'
        try:
            User.objects.get(email=post_data['email'])
            errors['email'] = "Email already used!"
        except:
            pass
        if len(post_data['password']) <= 8:
            errors['password'] = "required; at least 8 characters; letters only"
        if post_data['password'] != post_data['confirm']:
            errors['password'] = "Passwords must match!"
        return errors

class User(models.Model):
    name = models.CharField(max_length=45)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=100)
    #tasks is a list of appointments for a given user
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = User_Manager()

class Appointment_Manager(models.Manager):
    def appointment_validator(self, post_data):
        errors = {}
    #todo include validations stuff
        print("hello from validator")
        if len(post_data['task']) <= 2:
            errors['task'] = "required; at least 2 characters; letters only"
        if len(post_data['date']) <= 2:
            errors['date'] = "Date must be current date or a future date"
        if len(post_data['status']) <= 1:
            errors['status'] = "Status must be selected"
        return errors

class Appointment(models.Model):
    task = models.CharField(max_length=45)
    date = models.DateTimeField()
    status = models.CharField(max_length=45)
    appointments = models.ForeignKey(User, related_name="tasks", on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = Appointment_Manager()
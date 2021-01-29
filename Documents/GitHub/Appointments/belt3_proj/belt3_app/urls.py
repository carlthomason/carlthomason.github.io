from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('appointments', views.appointments),
    path('appointments/add', views.addAppointments),
    path('appointments/create', views.addAppointmentsFunc),
    path('appointments/<int:id>', views.editAppointments),
    path('appointments/<int:id>/update', views.updateAppointmentsFunc),
    path('appointments/<int:id>/delete', views.deleteAppointments),
    path('logout', views.logout),
]
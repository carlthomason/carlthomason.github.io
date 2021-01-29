from django.shortcuts import render, redirect
from .models import User, Appointment
import bcrypt
from django.contrib import messages

def index(request):
    if 'user_id' in request.session:
        del request.session['user_id']
    return render(request, "login.html")

def register(request):
    errors = User.objects.basic_validator(request.POST)
    if errors:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')

    password = request.POST['password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()    
    print(pw_hash)       
    this_user = User.objects.create(name = request.POST['name'], email=request.POST['email'], password=pw_hash) 
    request.session['user_id'] = this_user.id
    return redirect('/appointments')

def login(request):
    print(request.POST)
    user = User.objects.filter(email=request.POST['email'])
    if user: 
        logged_user = user[0]
        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            request.session['user_id'] = logged_user.id
            return redirect('/appointments')
    messages.error(request, "Invalid login info")
    return redirect ('/')

def appointments(request):
    if 'user_id' not in request.session:
        return redirect('/')
    
    logged_user = User.objects.get(id=request.session['user_id'])

    context={
        'logged_user':  User.objects.get(id=request.session['user_id']),
        'my_appointments': logged_user.tasks.all()
    }
    return render(request, "appointments.html", context)

def addAppointments(request):
    if 'user_id' not in request.session:
        return redirect('/')
    return render(request, 'addappt.html')

def addAppointmentsFunc(request):
    errors = Appointment.objects.appointment_validator(request.POST)
    if errors:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/appointments/add')

    this_user = User.objects.get(id = request.session['user_id'])
    Appointment.objects.create(task=request.POST['task'], date=request.POST['date'], status=request.POST['status'], appointments=this_user)
    return redirect('/appointments')

def editAppointments(request, id):
    context = {
        'this_appointment': Appointment.objects.get(id=id),
        'this_user': User.objects.get(id=request.session['user_id'])
    }
    return render(request, 'editappt.html', context)

def updateAppointmentsFunc(request, id):
    if 'user_id' not in request.session:
        return redirect('/')

    errors = Appointment.objects.appointment_validator(request.POST)
    if errors:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f'/appointments/{id}')
    else:
        appointment = Appointment.objects.get(id=id)
        appointment.task = request.POST['task']
        appointment.date = request.POST['date']
        appointment.status = request.POST['status']
        appointment.save()
    return redirect('/appointments')

def deleteAppointments(request, id):
    if 'user_id' not in request.session:
        return redirect('/')
    this_appointment = Appointment.objects.get(id=id)
    this_appointment.delete()
    return redirect('/appointments')

def logout(request):
    del request.session['user_id']
    return redirect('/')



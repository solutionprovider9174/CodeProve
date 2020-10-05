from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
import requests
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
# Create your views here.
def home(request):
    return render(
        request,
        'app/index.html',
        {
            'title': 'Home Page',
        }
    )
@login_required(login_url='/login/')
def newcompile(request):
    if request.method == 'POST':
        print("hi")
        run_url = "https://api.jdoodle.com/v1/execute/"
        source = request.POST['source']
        lang = request.POST['lang']
        data = {
            'client_secret': '***',
            'async': 0,
            'source': source,
            'lang': lang,
            'time_limit': 5,
            'memory_limit': 262144,
        }
        if 'input' in request.POST:
            data['input'] = request.POST['input']
        r = requests.post(run_url, data=data)
        return JsonResponse(r.json(), safe=False)
    else:
        run_url = "https://api.jdoodle.com/v1/execute/"
        data = {
            "clientID" : "4b767acfc099dee0e0063a0d9c69a17e",
            "clientSecret" : "40c3dc0150e9e70db38fb06bed3d449a6132b0baaf568f9aa6d93e74bb2465f9",
            "language" : "php",
            "script" : "<?php echo \"hello\" ?>",
            "versionIndex" : "0",
        }
        r = requests.post(run_url, data=data)
        print(r.json())
        return render(
            request,
            'app/compile.html',
            {
                'title': 'Home Page',
            }
        )

def register(request):
    form = UserCreationForm(request.POST)
    if form.is_valid():
        form.save()
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password1')
        user = authenticate(username=username, password=password)
        login(request, user)
        return redirect('home')
    return render(request, 'app/register.html', {'form': form})

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
        run_url = "https://api.jdoodle.com/v1/execute/"
        source = request.POST.get('source')
        lang = request.POST.get('lang')
        data = {"clientId": "6e7161fa5b217bad33b5ab5f786f93d8",
                "clientSecret":"48dcca2374d1c896564394af7856fdf8711e6aa5e9526a47484fc1169a81d5eb",
                "script":source,
                "language":lang,
                "versionIndex":"0"}
        if 'input' in request.POST:
            data['input'] = request.POST['input']
        r = requests.post(run_url, json=data)
        print(r.content)
        return JsonResponse(r.json(), safe=False)
    else:
        return render(
            request,
            'app/compile.html',
            {
                'title': 'Home Page',
                'context': {'java':('vJDK 1.8.0_66':'0','JDK 9.0.1':'1','JDK 10.0.1':'2','JDK 11.0.4':'3'),
                'python2':('2.7.11':'0','2.7.15':'1','2.7.16':'2'),
                'cpp':('GCC 5.3.0':'0','Zapcc 5.0.0':'1','GCC 7.2.0':'2','GCC 8.1.0':'3','GCC 9.1.0':'4')
                }
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

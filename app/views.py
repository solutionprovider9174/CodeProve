from django.shortcuts import render, redirect
from .forms import UserSignupForm
from django.contrib.auth import login, authenticate
import requests
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import *
from django.core import serializers

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
    problems = Problem.objects.get(pk=1)
    examples = Example.objects.filter(problem=problems)
    hints = Hint.objects.filter(problem=problems)
    solutions = Solution.objects.filter(problem=problems)
    track = SubmitTrack.objects.filter(created_by=request.user).order_by('-created_on')

    if request.method == 'POST':
        run_url = "https://api.jdoodle.com/v1/execute/"
        # print(request.POST)
        source = request.POST.get('source')
        lang_index = request.POST.get('lang').split(',')
        lang = lang_index[0]
        versionIndex = lang_index[1]
        data = {"clientId": "6e7161fa5b217bad33b5ab5f786f93d8",
                "clientSecret":"48dcca2374d1c896564394af7856fdf8711e6aa5e9526a47484fc1169a81d5eb",
                "script":source,
                "language":lang,
                "versionIndex": versionIndex 
                }
        if 'input' in request.POST:
            data['input'] = request.POST['input']
        r = requests.post(run_url, json=data)
        data = r.json()
        status = data['statusCode']
        memory = data['memory']
        runtime = data['cpuTime']


        submit_track = SubmitTrack.objects.create(status=status,memory=memory,runtime=runtime,language=lang,created_by = request.user, problem=problems)
        track = SubmitTrack.objects.filter(created_by=request.user).values("created_on","language","runtime","memory","status").order_by('-created_on')[:10]
        data['track']=list(track)
        # print(data)
        return JsonResponse(data, safe=False)
    else:
        initial = {
                'context': {'java':[('JDK 1.8.0_66','0'),('JDK 9.0.1','1'),('JDK 10.0.1','2'),('JDK 11.0.4','3')],
                'python2':[('2.7.11','0'),('2.7.15','1'),('2.7.16','2')],
                'python3': [('3.5.1','0'),('3.6.3','1'),('3.6.5','2'),('3.7.4','3')],
                'cpp':[('GCC 5.3.0','0'),('Zapcc 5.0.0','1'),('GCC 7.2.0','2'),('GCC 8.1.0','3'),('GCC 9.1.0','4')] }
                }

        description = {'problems':problems,
                        'examples':examples,
                        'hints':hints,
                        'solutions':solutions,
                        'track':track

        }


        context = { 'title': 'Compile',
                    'initial':initial,
                    'description':description,
                  }
            
        return render(
            request,
            'app/compile.html',
            context
        )


def register(request):
    form = UserSignupForm(request.POST)
    if form.is_valid():
        form.save()
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password1')
        user = authenticate(username=username, password=password)
        login(request, user)
        return redirect('home')
    return render(request, 'app/register.html', {'form': form})

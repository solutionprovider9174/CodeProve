"""CodeProve URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from datetime import datetime
from django.contrib.auth.views import LoginView, LogoutView
from app import views as user_views
from app import forms
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views 

urlpatterns = [

    path('admin/', admin.site.urls),
    path('', user_views.home, name='home'),
    path('register/', user_views.register, name="register"),
    path('newcompile/', user_views.newcompile, name="newcompile"),
    path('login/',LoginView.as_view
         (
             template_name='app/login.html',
             authentication_form=forms.BootstrapAuthenticationForm,
             extra_context=
             {
                 'title': 'Login',
                 'year' : datetime.now().year,
             }
         ),
         name='login'),

    path('logout/', LogoutView.as_view(
             template_name = 'app/logout.html',
             extra_context=
            {
                'title':'Logout',
                'message':'You have been logged out. See you soon again.',
                'year':datetime.now().year,
            }
         ),
         name='logout'),
    path('password-reset/', views.PasswordResetView.as_view(template_name='app/password_reset_form.html'), name='password_reset'),
    path('password-reset/done/', views.PasswordResetDoneView.as_view(template_name='app/password_reset_done.html'), name='password_reset_done'),
    path('passwor-reset-confirm/<uidb64>/<token>/',
        views.PasswordResetConfirmView.as_view(template_name='app/password_reset_confirm.html'), name='password_reset_confirm'),
    path('password-reset-complete/', views.PasswordResetCompleteView.as_view(template_name='app/password_reset_complete.html'), name='password_reset_complete'),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


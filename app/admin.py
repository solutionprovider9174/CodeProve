from django.contrib import admin
from .models import *

admin.site.register(Problem)
admin.site.register(Hint)
admin.site.register(Example)
admin.site.register(Solution)
from django.db import models
from django.contrib.auth.models import User

class Problem(models.Model):
	title = models.CharField(max_length=200,blank=True,null=True)
	description = models.TextField(blank=True,null=True)
	created_on = models.DateTimeField(auto_now_add = True)
	updated_on = models.DateTimeField(auto_now = True)

	def __str__(self):
		return self.title

class Example(models.Model):
	title = models.CharField(max_length=200,blank=True,null=True)
	problem = models.ForeignKey(Problem,on_delete=models.CASCADE)
	example_input = models.TextField(blank=True,null=True)
	output = models.TextField(blank=True,null=True)
	created_on = models.DateTimeField(auto_now_add = True)
	updated_on = models.DateTimeField(auto_now = True)

	def __str__(self):
		return self.title

class Hint(models.Model):
	title = models.CharField(max_length=200,blank=True,null=True)
	description = models.TextField(blank=True,null=True)
	problem = models.ForeignKey(Problem,on_delete=models.CASCADE)
	created_on = models.DateTimeField(auto_now_add = True)
	updated_on = models.DateTimeField(auto_now = True)

	def __str__(self):
		return self.title

class Solution(models.Model):
	title = models.CharField(max_length=200,blank=True,null=True)
	description = models.TextField(blank=True,null=True)
	problem = models.ForeignKey(Problem,on_delete=models.CASCADE)
	code = models.TextField(blank=True,null=True)
	complexity_analysis = models.TextField(blank=True,null=True)
	created_on = models.DateTimeField(auto_now_add = True)
	updated_on = models.DateTimeField(auto_now = True)

	def __str__(self):
		return self.title

class SubmitTrack(models.Model):
	status = models.CharField(max_length=200,blank=True,null=True)
	runtime = models.CharField(max_length=200,blank=True,null=True)
	memory = models.CharField(max_length=200,blank=True,null=True)
	language = models.CharField(max_length=200,blank=True,null=True)
	problem = models.ForeignKey(Problem,on_delete=models.CASCADE)
	created_by = models.ForeignKey(User,on_delete=models.CASCADE)
	created_on = models.DateTimeField(auto_now_add = True)
	updated_on = models.DateTimeField(auto_now = True)



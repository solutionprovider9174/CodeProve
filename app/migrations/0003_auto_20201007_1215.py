# Generated by Django 3.1.2 on 2020-10-07 12:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_submittrack'),
    ]

    operations = [
        migrations.AlterField(
            model_name='example',
            name='updated_on',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='hint',
            name='updated_on',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='problem',
            name='updated_on',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='solution',
            name='updated_on',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.DeleteModel(
            name='SubmitTrack',
        ),
    ]

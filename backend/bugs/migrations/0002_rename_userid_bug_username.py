# Generated by Django 3.2.4 on 2021-06-07 01:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bugs', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bug',
            old_name='userId',
            new_name='username',
        ),
    ]

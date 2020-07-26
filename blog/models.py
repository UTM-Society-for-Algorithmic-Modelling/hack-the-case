from django.db import models
import datetime
from django.utils import timezone

# Create your models here.

class blogPost(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    pub_date = models.DateTimeField('date published')


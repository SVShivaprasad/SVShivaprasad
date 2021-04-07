from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class RaiseTicket(models.Model):
    Type = models.CharField(max_length=200,null=True)
    Sub_Type = models.CharField(max_length=100,null=True)
    Description_of_your_issue = models.TextField(max_length=200,null=True)
    Priority = models.CharField(max_length=200,null=True)
    Attach_File = models.ImageField(upload_to ="media",null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Type
    class Meta:
        verbose_name = "Raise_Ticket"
        verbose_name_plural = "Raise_Tickets"

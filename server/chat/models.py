from django.db import models

class Chats(models.Model):
    id = models.CharField()
    chat_name = models.CharField()
    number_of_members = models.PositiveBigIntegerField()
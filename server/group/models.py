from django.db import models


class Groups(models.Model):
    group_id = models.CharField()
    group_name = models.CharField()
    
from django.contrib import admin
from django.urls import path,include,re_path

from . import api

urlpatterns=[
    re_path("newpost/",api.newpost,name="newpost"),
    re_path("getpostlist/",api.getpostlist,name="getpostlist"),
    re_path("getpost/<str:id>",api.getpost,name="getpost"),
]
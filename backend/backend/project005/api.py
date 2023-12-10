# import
import bcrypt
import hashlib
import json
import random
import re
import google.oauth2.id_token
from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from django.views.decorators.http import require_http_methods
from rest_framework import status
from rest_framework.decorators import api_view,renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from google.oauth2 import id_token
from google.auth.transport import requests

# 自創
from function.sql import query,createdb
from function.thing import *

# main START
db="project005"

@api_view(["POST"])
def newpost(request):
    try:
        title=request.POST["title"]
        content=request.POST["content"]
        tag=request.POST["tag"]

        covername=""

        for i in range(30):
            covername=covername+str("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[random.randint(0,61)])

        covername=covername+os.path.splitext(request.FILES["cover"].name)[1]
        uploadfile("./upload/project005",request.FILES["cover"],covername)

        query(db,"INSERT INTO `post`(`coverurl`,`title`,`content`,`tag`,`createtime`,`updatetime`)VALUES(%s,%s,%s,%s,%s,%s)",["project005/"+covername,title,content,tag,time(),time()])

        return Response({
            "success": True,
            "data": ""
        },status.HTTP_200_OK)
    except Exception as error:
        printcolorhaveline("fail","[ERROR] "+str(error),"")
        return Response({
            "success": False,
            "data": "[ERROR] unknow error pls tell the admin error:\n"+str(error)
        },status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["GET"])
def getpostlist(request):
    try:
        row=query(db,"SELECT*FROM `post`")

        return Response({
            "success": True,
            "data": row
        },status.HTTP_200_OK)
    except Exception as error:
        printcolorhaveline("fail","[ERROR] "+str(error),"")
        return Response({
            "success": False,
            "data": "[ERROR] unknow error pls tell the admin error:\n"+str(error)
        },status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["GET"])
def getpost(request,id):
    try:
        row=query(db,"SELECT*FROM `post` WHERE `id`=%s",[id])

        if row:
            return Response({
                "success": True,
                "data": row[0]
            },status.HTTP_200_OK)
        else:
            return Response({
                "success": False,
                "data": "post not found"
            },status.HTTP_404_NOT_FOUND)
    except Exception as error:
        printcolorhaveline("fail","[ERROR] "+str(error),"")
        return Response({
            "success": False,
            "data": "[ERROR] unknow error pls tell the admin error:\n"+str(error)
        },status.HTTP_500_INTERNAL_SERVER_ERROR)
from django.urls import path

from . import views

app_name = "auth_api"

urlpatterns = [
    path("login/", views.login, name="login"),
    path("logout/", views.logout, name="logout"),
    path("refresh/", views.refresh_token, name="refresh"),
]


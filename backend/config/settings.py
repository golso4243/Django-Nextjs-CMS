"""
Django settings for config project.

This project is set up as a CMS/API backend:
- Django REST Framework serves the API.
- django-cors-headers allows the Next.js frontend (e.g. localhost:3000) to call the API.
- The "cms" app holds content models and API endpoints under /api/.
"""

import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

from dotenv import load_dotenv

# Load environment variables from a local .env file for development.
# In production, your hosting platform should provide these env vars directly.
load_dotenv()

# --- Core security settings driven by environment variables ---
# SECRET_KEY:
# - MUST be a long, random, secret value in production.
# - For local development you can use the default or a simple value from .env.
SECRET_KEY = os.environ.get("SECRET_KEY", "django-insecure-dev-key-change-in-production")

# DEBUG:
# - True enables verbose error pages; never use this in production.
# - Set DEBUG=False in any public/staging environment via env var.
DEBUG = os.environ.get("DEBUG", "True").lower() in ("true", "1", "yes")

# ALLOWED_HOSTS:
# - Comma-separated list of hostnames this backend is allowed to serve.
# - Example: "mydomain.com,www.mydomain.com"
# - For local dev, localhost and 127.0.0.1 are usually enough.
ALLOWED_HOSTS = os.environ.get("ALLOWED_HOSTS", "localhost,127.0.0.1").split(",")

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # Third-party: API and CORS
    "rest_framework",
    "corsheaders",
    # Our CMS app (content models + API views)
    "cms",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "corsheaders.middleware.CorsMiddleware",  # CORS before other middleware that handle responses
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"
WSGI_APPLICATION = "config.wsgi.application"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

STATIC_URL = "static/"

# Media files (e.g. blog featured images)
# - Stored on the local filesystem under BASE_DIR / "media" for development.
# - Served at /media/ when DEBUG=True via config.urls.
MEDIA_ROOT = BASE_DIR / "media"
MEDIA_URL = "/media/"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# --- Django REST Framework (API) ---
# Allow unauthenticated read access to the API; tighten in production (e.g. IsAuthenticated).
# When authentication is added, you will most likely:
# - Set DEFAULT_PERMISSION_CLASSES to IsAuthenticatedOrReadOnly or a custom permission.
# - Keep explicitly public viewsets (like the public blog/page APIs) using AllowAny.
# - Configure DEFAULT_AUTHENTICATION_CLASSES for session- or JWT-based auth.
REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": ["rest_framework.permissions.AllowAny"],
    # "DEFAULT_AUTHENTICATION_CLASSES": [
    #     # Enable one or both of these when you add auth:
    #     # "rest_framework.authentication.SessionAuthentication",
    #     # "rest_framework_simplejwt.authentication.JWTAuthentication",
    # ],
}

# --- CORS (Cross-Origin Resource Sharing) ---
# Allows the Next.js frontend to call this API from the browser.
# CORS_ORIGINS:
# - Comma-separated list of allowed frontend origins.
# - Local dev example: "http://localhost:3000"
# - In production, set this to your deployed frontend URL(s).
CORS_ALLOWED_ORIGINS = os.environ.get("CORS_ORIGINS", "http://localhost:3000").split(",")
CORS_ALLOW_CREDENTIALS = True

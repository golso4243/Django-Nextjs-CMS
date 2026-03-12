"""
URL configuration for config project.

- /admin/     — Django admin (CMS content editing).
- /api/       — Public CMS REST API (mounted from the cms app).
- /api/auth/  — Authentication-related API endpoints (login/logout/refresh stubs).
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/auth/", include("auth.urls")),
    path("api/", include("cms.urls")),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

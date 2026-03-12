"""CMS API routes: /api/pages/, /api/blog-posts/ (list, retrieve by slug; published only)."""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r"pages", views.PageViewSet, basename="page")
# blog-posts: list (newest first) and retrieve-by-slug; only published posts.
router.register(r"blog-posts", views.BlogPostViewSet, basename="blogpost")

urlpatterns = [
    path("", include(router.urls)),
]

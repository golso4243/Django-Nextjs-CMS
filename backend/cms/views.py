from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import Page, BlogPost
from .serializers import PageSerializer, BlogPostSerializer


class PageViewSet(viewsets.ReadOnlyModelViewSet):
    # Public, read-only API for published pages. This should remain accessible
    # without authentication even if global API permissions become stricter.
    permission_classes = [AllowAny]
    serializer_class = PageSerializer

    def get_queryset(self):
        return Page.objects.filter(published=True)

    @action(detail=False, url_path="by-slug/(?P<slug>[^/.]+)")
    def by_slug(self, request, slug=None):
        page = Page.objects.filter(published=True, slug=slug).first()
        if not page:
            from rest_framework.exceptions import NotFound
            raise NotFound()
        serializer = self.get_serializer(page)
        return Response(serializer.data)


class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Read-only API for published blog posts: list and retrieve by slug.
    Returns a JSON array of published posts (newest first by created_at) for list;
    single object for retrieve. Unpublished posts are never returned.
    """
    # Public, read-only API for published blog posts. This should stay public
    # (no authentication required) to serve the public blog frontend.
    permission_classes = [AllowAny]
    serializer_class = BlogPostSerializer
    lookup_field = "slug"
    lookup_url_kwarg = "slug"

    def get_queryset(self):
        # Single gate for both list and retrieve: only published posts, newest first.
        return BlogPost.objects.filter(is_published=True).order_by("-created_at")

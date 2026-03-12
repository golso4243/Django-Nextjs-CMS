"""
Serializers for the public CMS API. Used by list and detail endpoints;
only fields safe for public consumption are exposed (e.g. no is_published).
"""
from rest_framework import serializers
from .models import Page, BlogPost


class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ["id", "title", "slug", "body", "published", "created_at", "updated_at"]


class BlogPostSerializer(serializers.ModelSerializer):
    """
    Public list/detail representation of a published blog post.
    Only includes fields intended for the frontend; is_published is omitted.
    """
    # Absolute URL for the image, or null if none; clear name for Next.js.
    featured_image_url = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = [
            "id",
            "title",
            "slug",
            "excerpt",
            "content",
            "featured_image_url",
            "created_at",
            "updated_at",
        ]

    def get_featured_image_url(self, obj):
        # Build absolute URL when request is available so Next.js can use it directly.
        if not obj.featured_image:
            return None
        request = self.context.get("request")
        if request:
            return request.build_absolute_uri(obj.featured_image.url)
        return obj.featured_image.url

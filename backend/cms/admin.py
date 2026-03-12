from django.contrib import admin
from .models import Page, BlogPost


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "published", "updated_at")
    list_filter = ("published",)
    search_fields = ("title", "slug")
    prepopulated_fields = {"slug": ("title",)}


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "is_published", "created_at", "updated_at")
    list_filter = ("is_published",)
    search_fields = ("title", "slug", "excerpt")
    prepopulated_fields = {"slug": ("title",)}
    date_hierarchy = "created_at"
    list_editable = ("is_published",)
    readonly_fields = ("created_at", "updated_at")

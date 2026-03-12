# Generated migration for BlogPost

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("cms", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="BlogPost",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=255)),
                ("slug", models.SlugField(max_length=255, unique=True)),
                ("excerpt", models.CharField(blank=True, max_length=500)),
                ("content", models.TextField(blank=True)),
                ("featured_image", models.URLField(blank=True, max_length=500)),
                ("is_published", models.BooleanField(default=False)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "ordering": ["-updated_at"],
                "verbose_name": "Blog post",
                "verbose_name_plural": "Blog posts",
            },
        ),
    ]

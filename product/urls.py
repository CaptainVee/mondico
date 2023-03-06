from django.urls import path

from .views import home, about, contact, product_item


urlpatterns = [

    path("about/", about, name="about"),
    path("contact/", contact, name="contact"),
    path("products/", product_item, name="product_item"),
]

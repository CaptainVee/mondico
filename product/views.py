from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, "product/home.html")

def about(request):
    return render(request, "product/about.html")

def product_item(request):
    return render(request, "product/product_item.html")
    
def contact(request):
    return render(request, "product/contact.html")
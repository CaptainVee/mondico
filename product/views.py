from django.shortcuts import render

# Create your views here.

def home(request):
<<<<<<< HEAD
    return render(request, "home/index.html")
=======
    return render(request, "product/index.html", {"title": "Home"})

def about(request):
    return render(request, "product/home.html")

def about(request):
    return render(request, "product/about.html")

def product_item(request):
    return render(request, "product/product_item.html")
    
def contact(request):
    return render(request, "product/contact.html")
>>>>>>> 58fc89bc6292a3056351c900994c5b46ccd56c04

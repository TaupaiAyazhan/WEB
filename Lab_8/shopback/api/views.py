from django.shortcuts import render
from django.http.response import JsonResponse
from . models import Product, Category

def category_list(request):
    categories = Category.objects.all()
    categories_json = [Category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status = 400)
    
    return JsonResponse(Category.to_json())


def product_list(request):
    products = Product.objects.all()
    products_json = [Product.to_json() for product in products]
    return JsonResponse(product_list, safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status = 400)
    
    return JsonResponse(Product.to_json())

def category_products(request, id):
    category = Category.objects.get(id=id)
    products = Category.objects.filter(category=category)
    products_json = [Product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)
# Create your views here.

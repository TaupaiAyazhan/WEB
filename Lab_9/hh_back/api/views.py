from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Company, Vacancy


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(vacancy.to_json())


def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(company.to_json())


def company_vacancy(request, id):
    vacancys = Vacancy.objects.get(id=id)
    companys = Company.objects.filter(vacancy=vacancys.id)
    companies_json = [company.to_json() for company in companys]
    return JsonResponse(companies_json, safe=False)


def top10_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
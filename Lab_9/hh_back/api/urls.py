from django.urls import path
from .views import *

urlpatterns =[
    path('companies/', company_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancy),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten/', top10_vacancies)
]
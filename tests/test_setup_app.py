from typing import Generator

import pytest

from django.apps import apps

from tests.django_app_for_tests.django_app.django_initializer import initialise_django


initialise_django()
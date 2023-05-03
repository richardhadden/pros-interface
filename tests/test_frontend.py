import pytest

from playwright.sync_api import Page, expect

from .conftest import route

# from tests.django_app_for_tests.django_app.django_initializer import initialise_django


def test_homepage(page: Page):
    page.goto(route("/"))
    expect(page).to_have_title("Solid App")


def test_top_bar(page: Page):
    page.goto(route("/"))
    expect(page.locator("#TopBarItemType")).to_have_text("Role Assignment")

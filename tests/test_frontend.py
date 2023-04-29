from pathlib import Path


import pytest
from playwright.sync_api import Page, expect

from tests.django_app_for_tests.django_app.django_initializer import initialise_django


from pynpm import NPMPackage

interface_path = Path(__file__.split("/tests/")[0], "pros_interface", "interface")
npm_package = NPMPackage(interface_path)



@pytest.fixture(scope="session", autouse=True)
def run_npm_dev():
    # Autostarts the npm dev server
    import subprocess
    resp = subprocess.Popen(["npm", "run", "dev"], cwd=interface_path)
    print(resp)
    
    yield


def test_homepage(page: Page):
    page.goto("http://localhost:3001")
    expect(page).to_have_title("Solid App")



def test_top_bar(page: Page):
    page.goto("http://localhost:3001")
    expect(page.locator("#TopBarItemType")).to_have_text("Role Assignment")


def test_null():
    assert True == False
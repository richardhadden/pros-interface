from pathlib import Path

from django.core.management.base import BaseCommand, CommandError
from pynpm import NPMPackage


class Command(BaseCommand):
    help = "Runs the Interface development server"

    def handle(self, *args, **options):
        path_to_package = Path(
            __file__.split("/management/")[0], "interface", "package.json"
        )
        pkg = NPMPackage(path_to_package)
        pkg.install()

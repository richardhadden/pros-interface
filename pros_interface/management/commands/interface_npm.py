from pathlib import Path

from django.core.management.base import BaseCommand, CommandError
from pynpm import NPMPackage


class Command(BaseCommand):
    help = "Runs the Interface development server"
    
    def add_arguments(self, parser):
        # Positional arguments
        parser.add_argument("npm_command", nargs="+", type=str, choices=["start", "dev", "build", "serve"])

    def handle(self, *args, **options):
        if not options:
            raise CommandError("Run one of the following npm commands: start, dev, build, serve")
        path_to_package = Path(__file__.split("/management/")[0], "interface", "package.json")
        pkg = NPMPackage(path_to_package)
        pkg.run_script(options["npm_command"][0])
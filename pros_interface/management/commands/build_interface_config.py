from django.core.management.base import BaseCommand, CommandError

from pros_interface.management.utils.build_interface_config import (
    build_interface_config,
)


class InterfaceConfigError(CommandError):
    pass


class Command(BaseCommand):
    help = "Runs the Interface development server"

    def handle(self, *args, **options):
        try:
            from pros_core.setup_app import ModelManager
        except ImportError:
            raise InterfaceConfigError("Module 'pros_core' not found. Is it installed?")

        print(ModelManager.pros_models_by_app_name_model_name)
        print(ModelManager.get_model("TestApp.OtherThing"))
        # build_interface_config(ModelManager)

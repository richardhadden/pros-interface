from typing import Type

from pros_core.setup_app import ModelManager

def build_interface_config(ModelManager: Type[ModelManager]):
    
    interface_config = {}
    
    for app_model in ModelManager.models():
        print(app_model)
        interface_config[app_model.model_name] = {}
        
    print(interface_config)
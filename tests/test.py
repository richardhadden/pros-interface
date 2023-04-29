from pathlib import Path

from pynpm import NPMPackage

interface_path = Path(__file__.split("/tests/")[0], "pros_interface", "interface")
npm_package = NPMPackage(interface_path)



import os
import signal

import subprocess
sp = subprocess.Popen(["npm", "run", "dev", "--port", "4000"], cwd=interface_path, preexec_fn=os.setsid)
    
os.killpg(os.getpgid(sp.pid), signal.SIGTERM)  # Send the signal to all the process groups
import os
from pathlib import Path
import signal
import subprocess

import pytest
from pynpm import NPMPackage

interface_path = Path(__file__.split("/tests/")[0], "pros_interface", "interface")
npm_package = NPMPackage(interface_path)


def route(url):
    return "http://localhost:3010" + url


@pytest.fixture(scope="module", autouse=True)
def run_npm_dev():
    # Autostarts the npm dev server
    sp = subprocess.Popen(
        ["npm", "run", "playwright"], cwd=interface_path, preexec_fn=os.setsid
    )
    yield
    # Kill the process
    os.killpg(
        os.getpgid(sp.pid), signal.SIGTERM
    )  # Send the signal to all the process groups

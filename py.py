import random
import time
from pynput.keyboard import Controller, Key

keyboard = Controller()

keys = list("6789")
time.sleep(5)

for _ in range(150):
    key_to_press = random.choice(keys)
    keyboard.press(key_to_press)
    keyboard.release(key_to_press)
    time.sleep(0.1)
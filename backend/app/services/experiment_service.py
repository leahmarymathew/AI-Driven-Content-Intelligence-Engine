import random


def select_prompt(prompt_a, prompt_b):

    if random.random() > 0.5:
        return "A"
    else:
        return "B"
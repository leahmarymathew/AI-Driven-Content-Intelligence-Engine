import datetime


def log_webhook_event(event, payload):

    log = f"{datetime.datetime.now()} | EVENT: {event} | DATA: {payload}"

    with open("webhook_logs.txt", "a") as file:
        file.write(log + "\n")
import requests


def trigger_webhook(url, payload):

    try:

        response = requests.post(
            url,
            json=payload,
            timeout=5
        )

        return response.status_code

    except Exception as e:

        return str(e)
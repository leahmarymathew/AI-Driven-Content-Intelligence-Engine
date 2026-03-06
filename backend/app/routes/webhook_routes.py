from fastapi import APIRouter

router = APIRouter()


@router.post("/webhook-receiver")
def receive_webhook(data: dict):

    print("Webhook received:", data)

    return {"status": "received"}
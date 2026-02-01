from fastapi import APIRouter, Request, Header, HTTPException
import hmac
import hashlib
import logging
from app.core.config import settings

router = APIRouter()

@router.post("/github")
async def github_webhook(
	request: Request,
	x_hub_signature_256: str = Header(None, alias="X-Hub-Signature-256"),
	x_github_event: str = Header(None, alias="X-GitHub-Event")
):
	# Read raw body
	body = await request.body()
	# Verify signature
	secret = settings.github_webhook_secret.encode()
	signature = 'sha256=' + hmac.new(secret, body, hashlib.sha256).hexdigest()
	if not hmac.compare_digest(signature, x_hub_signature_256 or ""):
		raise HTTPException(status_code=401, detail="Invalid signature")

	# Parse JSON payload
	payload = await request.json()
	# Log event type and payload (customize as needed)
	logging.info(f"Received GitHub event: {x_github_event}")
	# TODO: Add your event handling logic here
	return {"status": "ok", "event": x_github_event}

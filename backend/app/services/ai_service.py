from app.core.settings import settings
import httpx # type: ignore
from typing import Optional

class AIService:
    def __init__(self):
        self.api_key = settings.OPENAI_API_KEY
        self.api_url = "https://api.openai.com/v1/chat/completions"

    async def generate_project_description(self, project_name: str, description: str = None, language: str = None) -> Optional[str]:
        if not self.api_key:
            return None
        prompt = f"Write a concise, engaging description for a GitHub project named '{project_name}'."
        if description:
            prompt += f"\nCurrent description: {description}"
        if language:
            prompt += f"\nMain language: {language}"
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        data = {
            "model": "gpt-4.1-mini",
            "messages": [
                {"role": "system", "content": "You are an expert software portfolio assistant."},
                {"role": "user", "content": prompt}
            ],
            "max_tokens": 128
        }
        async with httpx.AsyncClient() as client:
            response = await client.post(self.api_url, headers=headers, json=data)
            response.raise_for_status()
            summary = response.json()["choices"][0]["message"]["content"]
            return summary
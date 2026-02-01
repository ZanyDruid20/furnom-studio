from pydantic_settings import BaseSettings # type: ignore
from typing import Optional

class Settings(BaseSettings):
    APP_NAME: str = "Furnom Studio API"
    DEBUG: bool = True
    SUPABASE_URL: str
    SUPABASE_KEY: str
    GITHUB_USERNAME: str = "ZanyDruid20"
    OPENAI_API_KEY: Optional[str] = None

    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
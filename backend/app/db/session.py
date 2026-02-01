from supabase import create_client, Client # type: ignore
from app.core.settings import settings

supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

def get_supabase() -> Client:
    """
    Get Supabase client instance
    """
    return supabase

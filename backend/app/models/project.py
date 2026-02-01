from typing import Optional, List

class Project:
    """Project model for Supabase"""
    __tablename__ = "projects"
    id: str
    github_id: int
    name: str
    description: Optional[str]
    github_url: str
    language: Optional[str]
    created_at: str
    updated_at: str

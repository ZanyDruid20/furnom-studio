# Defining the Pydantic models for my project API what it sends and recieves
from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class ProjectBase(BaseModel):
    name: str
    description: Optional[str] = None
    github_url: str
    language: Optional[str] = None
class ProjectCreate(ProjectBase):
    pass
class ProjectUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    github_url: Optional[str] = None
    language: Optional[str] = None

class Project(ProjectBase):
    id: str
    github_id: int
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True
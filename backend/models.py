from pydantic import BaseModel

# Modelo para criar um usuário
class UserCreate(BaseModel):
    name: str
    email: str
    password: str

# Modelo para login de usuário
class UserLogin(BaseModel):
    email: str
    password: str

# Modelo para adicionar uma faixa
class TrackCreate(BaseModel):
    title: str
    artist: str
    album: str

# Modelo para adicionar uma avaliação
class ReviewCreate(BaseModel):
    track_id: str
    rating: int
    comment: str

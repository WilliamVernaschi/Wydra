from fastapi import FastAPI, HTTPException, Depends
from database import users_collection, tracks_collection, reviews_collection
from models import UserCreate, UserLogin, TrackCreate, ReviewCreate
from auth import hash_password, verify_password, create_access_token, get_current_user
from datetime import timedelta
from bson import ObjectId
import requests

app = FastAPI()

# Configuração da API do Last.fm
API_KEY = "71716488103d7e2f61939b6627431939"  # Substitua pela sua chave de API válida
BASE_URL = "https://ws.audioscrobbler.com/2.0/"

# Função auxiliar para consumir a API do Last.fm
def fetch_from_lastfm(method: str, params: dict):
    params.update({
        'api_key': API_KEY,
        'format': 'json',
        'method': method
    })

    response = requests.get(BASE_URL, params=params)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Erro ao acessar a API do Last.fm")

    data = response.json()

    if 'error' in data:
        raise HTTPException(status_code=400, detail=data.get('message', 'Erro desconhecido na API do Last.fm'))

    return data

# --- Endpoints de artistas ---

@app.get("/artist/{artist_name}")
def get_artist_info(artist_name: str):
    data = fetch_from_lastfm("artist.getinfo", {'artist': artist_name})
    return data

@app.get("/artist/{artist_name}/top-tracks")
def get_artist_top_tracks(artist_name: str):
    data = fetch_from_lastfm("artist.gettoptracks", {'artist': artist_name})
    return data

@app.get("/artist/{artist_name}/all-tracks")
def get_all_artist_tracks(artist_name: str):
    tracks = []
    page = 1

    while True:
        try:
            params = {
                'artist': artist_name,
                'limit': 50,
                'page': page
            }
            data = fetch_from_lastfm("artist.gettoptracks", params)

            track_list = data.get("toptracks", {}).get("track", [])
            if not track_list:
                break

            tracks.extend(track_list)

            total_pages = int(data["toptracks"]["@attr"]["totalPages"])
            if page >= total_pages:
                break

            page += 1

        except HTTPException as e:
            raise e

    return {"total_tracks": len(tracks), "tracks": tracks}

# --- Endpoints de usuários ---

@app.post("/register")
def register_user(user: UserCreate):
    if users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="E-mail já cadastrado")
    
    hashed_password = hash_password(user.password)
    new_user = {"name": user.name, "email": user.email, "password": hashed_password}
    users_collection.insert_one(new_user)
    return {"message": "Usuário cadastrado com sucesso"}

@app.post("/login")
def login_user(user: UserLogin):
    db_user = users_collection.find_one({"email": user.email})
    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=400, detail="Credenciais inválidas")
    
    access_token = create_access_token(data={"sub": str(db_user["_id"])}, expires_delta=timedelta(minutes=30))
    return {"access_token": access_token, "token_type": "bearer"}

# --- Endpoints de faixas ---

@app.post("/tracks")
def add_track(track: TrackCreate):
    new_track = track.dict()
    track_id = tracks_collection.insert_one(new_track).inserted_id
    return {"track_id": str(track_id), "message": "Música adicionada com sucesso"}

@app.get("/tracks")
def get_tracks():
    tracks = list(tracks_collection.find())
    for track in tracks:
        track["_id"] = str(track["_id"])
    return tracks

# --- Endpoints de avaliações ---

@app.post("/reviews")
def add_review(review: ReviewCreate, current_user: dict = Depends(get_current_user)):
    if not tracks_collection.find_one({"_id": ObjectId(review.track_id)}):
        raise HTTPException(status_code=404, detail="Música não encontrada")
    
    new_review = {
        "track_id": review.track_id,
        "rating": review.rating,
        "comment": review.comment,
        "user_id": current_user["user_id"]
    }
    reviews_collection.insert_one(new_review)
    return {"message": "Avaliação adicionada com sucesso"}

@app.get("/reviews/{track_id}")
def get_reviews(track_id: str):
    reviews = list(reviews_collection.find({"track_id": track_id}))
    for review in reviews:
        review["_id"] = str(review["_id"])
    return reviews

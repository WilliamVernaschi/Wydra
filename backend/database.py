from pymongo import MongoClient

# Conexão com o MongoDB
client = MongoClient("mongodb://localhost:27017")
db = client["music_app"]

# Coleções
users_collection = db["users"]
tracks_collection = db["tracks"]
reviews_collection = db["reviews"]

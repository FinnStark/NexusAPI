import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export async function connectDB() {

    if (!MONGO_URI) {
        console.error("❌ ERREUR : MONGO_URI n'est pas défini dans .env !");
        process.exit(1); // Stoppe l'exécution
    }
    
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);

        console.log("✅ Connecté à MongoDB !");
    } catch (error) {
        console.error("❌ Erreur de connexion à MongoDB :", error);
        process.exit(1);
    }
}
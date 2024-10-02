import app from "./config"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const db = getFirestore(app)

export default async function get(id: string) {
    try {
        const snapshot = await getDocs(collection(db, id))
        const documents = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))

        return documents
    } catch (error) {
        console.error("error fetching documents: ", error)
        return []
    }
}
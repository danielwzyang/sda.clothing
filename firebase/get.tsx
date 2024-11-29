import app from "./config"
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore"

const db = getFirestore(app)

export default async function get() {
    try {
        const snapshot = await getDocs(collection(db, "clothes"))
        const documents = snapshot.docs.reduce((obj: Record<string, any>, doc) => {
            obj[doc.id] = doc.data()
            return obj
        }, {})

        return documents
    } catch (error) {
        console.error("error fetching documents: ", error)
        return []
    }
}
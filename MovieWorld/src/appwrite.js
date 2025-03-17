import { Client, Query, Databases, ID } from 'appwrite'


const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;



const client = new Client()
.setEndpoint('http://cloud.appwrite.io/v1')
.setProject(PROJECT_ID)

const database = new Databases(client)


export const updateSearchCount = async (searchTerm, movie) => {
    console.log('updated search count', searchTerm, movie)
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal('searchTerm', searchTerm),
    ])
    if(result.document.length > 0){
        const doc = result.document[0]
        await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
            count: doc.count + 1
        })
    } else {
        await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
            searchTerm,
            count: 1,
            movie_id: movie.id,
        })
    }
  } catch (error) {
    console.error(error)
  }} 

import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';
import { Account, Avatars, Client, Databases, OAuthProvider, Query } from 'react-native-appwrite';

export const config = {
    platform: 'com.sun.restate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1',
    projectID: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    galleriesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
    reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIWS_COLLECTION_ID,
    agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
    propertiesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
}

export const client = new Client()

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectID!)
    .setPlatform(config.platform)

export const avatar = new Avatars(client)
export const account = new Account(client)
export const databases = new Databases(client)


export async function login() {
    try {
        const redirectURI = Linking.createURL('/');

        const response = await account.createOAuth2Token(OAuthProvider.Google, redirectURI);

        if (!response) {
            console.error('Login failed: No response from Appwrite');

        }
        const browserResult = await openAuthSessionAsync(
            response.toString(),
            redirectURI
        )
        if (browserResult.type !== "success") throw new Error('Login failed: Browser session was not successful');

        const url = new URL(browserResult.url);

        const secret = url.searchParams.get('secret')?.toString();
        const userId = url.searchParams.get('userId')?.toString();

        if (!secret || !userId) {
            console.error('Login failed: Missing secret or userId in response');
        }

        const session = await account.createSession(userId, secret);

        if (!session) {
            console.error('Login failed: No session created');
        }
        return true;

    } catch (error) {
        console.error('Login failed:', error);
        return false;
    }
}

export async function logout() {
    try {
        await account.deleteSession('current');
    } catch (error) {
        console.error('Logout failed:', error);
        return false;
    }
}

export async function getCurrentUser() {
    try {
        const response = await account.get();

        if (response.$id) {
            const userAvatar = await avatar.getInitials(response.name)
            return {
                ...response,
                avatar: userAvatar.toString(),
            }
        }
    } catch (error) {
        console.error('Failed to get current user:', error);
        return null;
    }
}


export async function getLatestProperties() {
    try {
        const result = await databases.listDocuments(
            config.databaseId!,
            config.propertiesCollectionId!,
            [Query.orderAsc('$createdAt'), Query.limit(5)]

        )
        return result.documents
    } catch (error) {
        console.error(error, "cant get latest properties")
    }
}

export async function getProperties({ filter, query, limit }: {
    filter: string
    query: string;
    limit?: number
}) {
    try {
        const buildQuery = [Query.orderDesc('$createdAt')]
        if (filter && filter !== 'All') buildQuery.push(Query.equal('type', filter))

        if (query) {
            buildQuery.push(
                Query.or([
                    Query.search('name', query),
                    Query.search('address', query),
                    Query.search('type', query)
                ])
            )
        }

        if (limit) buildQuery.push(Query.limit(limit))

        const result = await databases.listDocuments(
            config.databaseId!,
            config.propertiesCollectionId!,
            buildQuery,
        )
        return result.documents
    } catch (error) {
        console.error(error, "get properties not working")
        return []
    }

}
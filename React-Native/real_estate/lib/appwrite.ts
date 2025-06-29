import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';
import { Account, Avatars, Client, OAuthProvider } from 'react-native-appwrite';

export const config = {
    platform: 'com.sun.restate',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1',
    projectID: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client()

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectID!)
    .setPlatform(config.platform)

    export const avatar = new Avatars(client)
    export const account = new Account(client)


    export async function login () {
        try {
           const redirectURI = Linking.createURL('/');
           
           const response = await account.createOAuth2Token(OAuthProvider.Google, redirectURI);

           if(!response) {
               console.error('Login failed: No response from Appwrite');
               
           }
           const browserResult = await openAuthSessionAsync(
            response.toString(),
            redirectURI
           )
           if(browserResult.type !== "success") throw new Error('Login failed: Browser session was not successful');

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

            if(response.$id) {
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
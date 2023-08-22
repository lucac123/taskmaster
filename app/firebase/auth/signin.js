import { signInWithPopup } from 'firebase/auth'
import { auth } from '../config'
import { google_provider } from './provider'



export default async function signIn() {

    let result = null, error = null

    try {
        result = await signInWithPopup(auth, google_provider)
    } catch (e) {
        error = e
    }

    return { result, error }
}
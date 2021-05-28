import { auth, provider } from '../firebase'


const signInWithGoogle = async () => {
    let user;
    await auth.signInWithPopup(provider).then((res) => {
        // console.log(res.user)
        user = res.user;
    }).catch((err) => { console.log(err.message) })

    return user;
}

const signOut = async () => {
    let status;
    await auth.signOut().then(() => status = true).catch((err) => console.log(err))
    return status
}

export { signInWithGoogle, signOut };
import { auth, provider } from '../firebase'


const signInWithGoogle = async () => {
    let user;
    await auth.signInWithPopup(provider).then((res) => {
        console.log(res.user)
        user = res.user;
    }).catch((err) => { console.log(err.message) })

    return user;
}

const signOut = async () => {
    await auth.signOut().then(() => console.log('success')).catch((err) => console.log(err))
}

export {signInWithGoogle,signOut};
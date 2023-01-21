import { Button } from "./style"
import {FaGithub} from 'react-icons/fa'
import { FiX} from 'react-icons/fi'

import { signIn, signOut,  useSession } from 'next-auth/react'


export const SigninButton = () => {
    const {data: session} = useSession()
    console.log(session)

    return session ? (
        <Button onClick={() => signOut()}>
            <>
                <div>
                    <img src={session.user?.image} alt=""/>
                </div>
                {session?.user?.name}
                <FiX className="closeIcon" onClick={() => signOut()}/>
            </>
        </Button> 
    ) : (
        <Button onClick={() => signIn('github')}>
            <>
                <FaGithub color="#eba417"/>
                Sign in with Github
            </>
        </Button>
    )
}

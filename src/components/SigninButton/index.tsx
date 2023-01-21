import { Button } from "./style"
import {FaGithub} from 'react-icons/fa'
import { FiX} from 'react-icons/fi'

import { signIn, useSession } from 'next-auth/react'


export const SigninButton = () => {
    const {data: session} = useSession()
    console.log(session)

    if (session) {

    }

    return (
        <Button onClick={() => signIn('github')}>
            {session &&
                <>
                    <FaGithub color="#04d361"/>
                    {session?.user?.name}
                    <FiX className="closeIcon"/>
                </>
            }

            {!session &&
                <>
                    <FaGithub color="#eba417"/>
                    Sign in with Github
                </>
            }

        </Button>        
    ) 
}
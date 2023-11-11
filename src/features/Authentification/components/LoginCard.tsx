import {bowserImg} from "./utils"
export const LoginCard = ({authUserAction}:{authUserAction:()=>void}) => {

    return (

    <div className="text-center h-screen mx-auto flex flex-col items-center justify-center">
        <div className="bg-gray-600 p-8 flex rounded-xl flex-col space-y-4">
            <img className="block mx-auto" src={bowserImg} alt="bowser" width="200" />
            <p className="text-white">Hey pas si vite ! Vous n'êtes pas connecté !</p>
            <button onClick={authUserAction} className="hover:font-bold hover:bg-gray-200 transition ease-in-out bg-white rounded-xl py-2 px-8 text-center">Se connecter</button>
        </div>
        
    </div>
    )
}
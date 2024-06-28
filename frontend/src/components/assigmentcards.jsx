import { useAuth0 } from "@auth0/auth0-react";

function Assigenmentscards(){

    return <div className="bg-red-200 space-y-8">
        <div className="flex justify-center">text and button to assigment page</div>
        <div className="flex justify-center space-x-16">
            <div className="h-80 w-72 bg-green-500">assignments</div>
            <div className="h-80 w-72 bg-green-500">practical file</div>
            <div className="h-80 w-72 bg-green-500">eg sheets</div>
        </div>
    </div>
}

export {Assigenmentscards}
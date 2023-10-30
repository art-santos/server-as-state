"use client"
import { emitEvent } from '@/app/Storage/Actions.cookie'
import { useStore } from '@/store/bearStore';
import { toggleMachine } from '@/store/toggle';
import { useMachine } from '@xstate/react';
var Buffer = require('buffer').Buffer;



export const SetCookieButton = () => {
    const { toogle, toogleState } = useStore();
    const [state] = useMachine(toggleMachine);

    const handleClickBrowser = () => {
        toogle()
    }


        const handleClickServer = async () => {
            const binary = await emitEvent();

        
            console.timeEnd("handleClickServer");
            const base64String = binary.slice(8);
            const binaryData = Buffer.from(base64String, 'base64');
            const jsonString = binaryData.toString('utf8');
            const jsonObject = JSON.parse(jsonString);
            
            toogle()
        };
    return (
        <>
        <button onClick={handleClickServer}>Add cookie Server</button>
        <div>{toogleState}</div>
        <button onClick={handleClickBrowser}>Add cookie Browser</button>
        </>
    )
}
export type counterAction = { 
    type: "INCREASE" | "DECREASE"; 
    payload: any 
};


export const increaseCounter = (): counterAction => ({
    type: "INCREASE",
    payload: true
})

export const decreaseCounter = (): counterAction => ({
    type: "DECREASE",
    payload: true
})
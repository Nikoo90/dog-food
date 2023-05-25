export const userSignIn = async (body)=>{
    const res = await fetch('https://api.react-learning.ru/signin',
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        
    return res
} 

export const userSingUp = async (body,token)=>{
    const res = await fetch('https://api.react-learning.ru/v2/group-11/users/me/',
    {
        method: 'PATCH',
        headers: {
            'Authorization':`Bearer ${token}`,

        },
        body
    })
    const response = await res.json()
    return response
}

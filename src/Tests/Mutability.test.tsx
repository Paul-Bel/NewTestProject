

export type userType = {
    name: string
    age: number
}

function editAge(users: userType){
    users.age++;
}

test('big test', () => {

    let user:userType = {
        name: 'Anatoly',
        age: 29,
    }
editAge(user)


    expect(user.age).toBe(30)

})
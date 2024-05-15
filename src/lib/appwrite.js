import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66431c92001ff7db57c7")

const databases = new Databases(client);

export const createUser = async () => {

    let promise = await databases.createDocument(
        '66431d5a00229c5bbd1f',
        '66431dad000f2a73cc5d',
        ID.unique(),
        {
            user_id: 100000022,
            password: "1000000022",
            name: "t1",
            roll_no: 5001,
            course: "bba",
            year: 3,
        }
    );

    alert("Done");
}

export const listUsers = async () => {
    const result = await databases.listDocuments(
        '66431d5a00229c5bbd1f',
        '66431dad000f2a73cc5d',
        []
    );
    alert("Done");
    console.log(result);
}

export const deleteUser = async () => {
    const result = await databases.deleteDocument(
        '66431d5a00229c5bbd1f',
        '66431dad000f2a73cc5d',
        '66437de8002518942e21'
    );
    alert("Done");
    console.log(result);
}

export const updateUser = async () => {
    const result = await databases.updateDocument(
        '66431d5a00229c5bbd1f',
        '66431dad000f2a73cc5d',
        '66437e29000b91061e32',
        {
            user_id: 100000799,
            password: "1000000067",
            name: "zz1",
            roll_no: 5555,
            course: "bba",
            year: 1,
        }
    );
    alert("Done");
    console.log(result);
}

export const getUser = async () => {
    const result = await databases.getDocument(
        '66431d5a00229c5bbd1f',
        '66431dad000f2a73cc5d',
        '66437e29000b91061e32',
    );
    alert("Done");
    console.log(result);
}
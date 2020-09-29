const functions = require('firebase-functions').region('europe-west2');

const admin = require('firebase-admin');
admin.initializeApp();

exports.addItem = functions.https.onCall(async (inputData, res) => {
    let docRef = await admin.firestore().collection('items').add({
        name: inputData.name,
        checked: false
    })
    let newObject = await docRef.get()
    return {
        id: docRef.id,
        name: newObject.data().name,
        checked: newObject.data().checked
    }
})

exports.updateItem = functions.https.onCall(async (inputData, res) => {
    let updateResult = await admin.firestore().collection('items').doc(inputData.id).set({
        name: inputData.name,
        checked: inputData.checked
    })
    return updateResult
})

exports.deleteItem = functions.https.onCall(async (data) => {
    const writeResult = await admin.firestore().collection('items').doc(data.id).delete()
    return writeResult
})

exports.checkItem = functions.https.onCall(async (data) => {
    const writeResult = admin.firestore().collection('items').doc(data.id).update({ checked: data.checked })
    return writeResult
})

exports.getItems = functions.https.onCall(async () => {
    const snapshot = await admin.firestore().collection('items').get( )
    return snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        checked: doc.data().checked
    }))
})
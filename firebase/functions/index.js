const functions = require('firebase-functions').region('europe-west2');

const admin = require('firebase-admin');
admin.initializeApp();

exports.addItem = functions.https.onCall((data, res) => {
    const writeResult = admin.firestore().collection('items').add({name: data.name});
    return writeResult
})

const increment = admin.firestore.FieldValue.increment(1);
exports.increaseQuantity = functions.https.onCall((req, res) => {
    const writeResult = admin.firestore().collection('items').doc(data.id).update({ qty: increment })
    return writeResult

})

const decrement = admin.firestore.FieldValue.increment(-1);
exports.decreaseQuantity = functions.https.onCall((req, res) => {
    const writeResult = admin.firestore().collection('items').doc(data.id).update({ qty: decrement })
    return writeResult

})

exports.checkItem = functions.https.onCall(async (data) => {
    const writeResult = admin.firestore().collection('items').doc(data.id).update({ checked: (data.checked === 'true') })
    return writeResult

})

exports.getCheckedItems = functions.https.onCall(async () => {
    const snapshot = admin.firestore().collection('items').where('checked', '==', true).get()
    return snapshot.docs.map(doc => doc.data())
})

exports.getUncheckedItems = functions.https.onCall(async () => {
    const snapshot = await admin.firestore().collection('items').where('checked', '==', false).get()
    return snapshot.docs.map(doc => doc.data())
})
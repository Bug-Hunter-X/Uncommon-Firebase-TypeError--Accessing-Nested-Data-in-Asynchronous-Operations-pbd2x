The solution involves using optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access nested properties:

```javascript
const db = firebase.firestore();

async function getUserData(userId) {
  const userDoc = await db.collection('users').doc(userId).get();
  if (!userDoc.exists) {
    return null; 
  }

  const userData = userDoc.data();
  // Solution: Use optional chaining and nullish coalescing
  const address = userData?.address?.street ?? 'N/A'; 
  return address; 
}
```

This revised code safely handles cases where `userData`, `userData.address`, or `userData.address.street` are null or undefined.  The optional chaining prevents errors, and the nullish coalescing operator provides a default value ('N/A' in this case) if the property is missing. This makes the code more resilient and less prone to unexpected errors.
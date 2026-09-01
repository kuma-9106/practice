import initializeFirebaseServer from "../../initFirebase";

export const createAuthUser = async (
  email: string,
  name: string,
  password: string
) => {
  const { auth } = initializeFirebaseServer();
  const user = await auth.createUser({
    disabled: false,
    email: email,
    emailVerified: false,
    displayName: name,
    password: password,
  });
  return user;
};

export const createUserDB = async (
  createdUid: string,
  email: string,
  name: string
) => {
  const { db } = initializeFirebaseServer();
  const user = await db.collection("users").doc(createdUid).set({
    email: email,
    name: name,
    role: "user",
    createdAt: new Date(),
  });
  return user;
};

export const deleteAuthUser = async (uid: string) => {
  const { auth } = initializeFirebaseServer();

  if (!auth.getUser(uid)) {
    return;
  }
  await auth.deleteUser(uid).catch((error) => {
    console.error(error);
  });
};

export const deleteUserDB = async (uid: string) => {
  const { db } = initializeFirebaseServer();

  if (!db.collection("users").doc(uid).get()) {
    return;
  }
  await db
    .collection("users")
    .doc(uid)
    .delete()
    .catch((error) => {
      console.error(error);
    });
};


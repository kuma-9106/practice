import * as admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { Firestore, getFirestore } from "firebase-admin/firestore";
import { Auth, getAuth } from "firebase-admin/auth";

// Create Server-Side Instance of Firebase
export default function initializeFirebaseServer(): {
  db: Firestore;
  auth: Auth;
  } {
  if (admin.apps.length === 0) {
    initializeApp();
  }

  const auth = getAuth();
  const db = getFirestore();

  return {
    auth,
    db,
  };
}


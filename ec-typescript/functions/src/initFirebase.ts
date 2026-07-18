import * as admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { Firestore, getFirestore } from "firebase-admin/firestore";

// Create Server-Side Instance of Firebase
export default function initializeFirebaseServer(): {
  db: Firestore;
} {
  if (admin.apps.length === 0) {
    initializeApp();
  }

  const db = getFirestore();

  return {
    db,
  };
}


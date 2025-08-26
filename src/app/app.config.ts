import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { provideHttpClient } from "@angular/common/http";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy3gB6DA02-ilvLAXtVW9YqzzkoOcqxwk",
  authDomain: "nellai-freshmilk.firebaseapp.com",
  projectId: "nellai-freshmilk",
  storageBucket: "nellai-freshmilk.firebasestorage.app",
  messagingSenderId: "4970155922",
  appId: "1:4970155922:web:ad9775b3b35eaf605cbb4b",
  measurementId: "G-Y6KNHL4J1D"
};

export const appConfig = [
  provideRouter(routes),
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideFirestore(() => getFirestore()),
  provideHttpClient(),
  provideAuth(() => getAuth()),
];
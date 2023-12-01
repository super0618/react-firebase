import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyATLT2Hh1mBgmVGtT_PWeSFy4-H8wUSZfU",
	authDomain: "fbdemo-5eb06.firebaseapp.com",
	projectId: "fbdemo-5eb06",
	storageBucket: "fbdemo-5eb06.appspot.com",
	messagingSenderId: "171865130728",
	appId: "1:171865130728:web:63510720a4e5df8d30ab5d",
	measurementId: "G-Y3KCPNL2QN",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

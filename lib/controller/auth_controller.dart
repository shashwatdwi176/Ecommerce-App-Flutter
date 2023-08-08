import 'package:get/get.dart';
import 'package:ecommerce_app/consts/consts.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class AuthController extends GetxController{

  //textcontroller
  var emailController= TextEditingController();
  var passwordController= TextEditingController();

  //login method

  Future<bool?> loginMethod(context) async{
    UserCredential? userCredential;

    try{
      await auth.signInWithEmailAndPassword(email: emailController.text, password: passwordController.text);
      return true;
    }
    on FirebaseAuthException catch(e){
      VxToast.show(context, msg: e.toString());
      return false;
    }

    //return userCredential;
  }

  //signup method

  
  Future<UserCredential?> signupMethod(email, password, context) async{
    UserCredential? userCredential;

    try{
      await auth.createUserWithEmailAndPassword(email: email, password: password);
    }
    on FirebaseAuthException catch(e){
      VxToast.show(context, msg: e.toString());
    }

    return userCredential;
  }

  //storing data method

  storeUserData({name,password,email}) async{

    DocumentReference store = await firestore.collection(userCollection).doc(currentUser!.uid);
    store.set({
      "name": name,
      "password": password,
      "email":email,
      "imageUrl":""
    },);
  }

  //signout method
  signoutMethod(context) async{
    try{
      await auth.signOut();
    }
    catch(e){
      VxToast.show(context, msg: e.toString());
    }
  }

}
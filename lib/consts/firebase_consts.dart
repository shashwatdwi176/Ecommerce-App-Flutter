import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_storage_platform_interface/firebase_storage_platform_interface.dart';
import 'package:cloud_firestore/cloud_firestore.dart';


FirebaseAuth auth = FirebaseAuth.instance;
FirebaseFirestore firestore= FirebaseFirestore.instance;
User ? currentUser = auth.currentUser;

//collections

const userCollection = "user";

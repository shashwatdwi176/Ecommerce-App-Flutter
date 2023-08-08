import 'package:ecommerce_app/consts/consts.dart';
import 'package:flutter/material.dart';

Widget applogoWidget(){
  //using velocity X here
  return Image.asset(icAppLogo).box.transparent.size(1007,270).padding(const EdgeInsets.all(0)).rounded.make();
  
}
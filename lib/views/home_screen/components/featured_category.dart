import 'package:ecommerce_app/consts/consts.dart';
import 'package:flutter/material.dart';
Widget featuredButton({String? title, icon}){
  return Row(
    children: [
      Image.asset(icon,height: 45, width:60,fit: BoxFit.fill ),
      10.widthBox,
      title!
      .text
      .fontFamily(semibold)
      .color(darkFontGrey)
      .make(),
    ],
  ).box
  .width(250)
  .margin(EdgeInsets.symmetric(horizontal: 4 ),)
  .white
  .padding(const EdgeInsets.all(4))
  .roundedSM
  .outerShadowSm
  .make();
}